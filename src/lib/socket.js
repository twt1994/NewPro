export default {
    api_version: '0.0.0',
    url: '', // WebSocket地址
    token: '', // 用户token
    ws: null, // WebSocket实例
    lockReconnect: false, // 避免重复连接
    onConnect: (event) => {}, // 连接成功事件
    onClose: (event) => {}, // 连接失败事件
    onError: (event) => {}, // 出现错误事件
    onMessage: (event) => {}, // 接收到消息
    /**
     * 初始化
     * @param config 配置信息
     * @return this
     */
    init(config) {
        if (config['api_version'] !== undefined) {
            this.api_version = config['api_version'];
        }
        if (config['url'] !== undefined) {
            this.url = config['url'];
        }
        if (config['token'] !== undefined) {
            this.token = config['token'];
        }
        if (config['onConnect'] !== undefined) {
            this.onConnect = config['onConnect'];
        }
        if (config['onClose'] !== undefined) {
            this.onClose = config['onClose'];
        }
        if (config['onError'] !== undefined) {
            this.onError = config['onError'];
        }
        if (config['onMessage'] !== undefined) {
            this.onMessage = config['onMessage'];
        }
        this.createWebSocket(this.url);
        return this;
    },
    /**
     * 连接WebSocket
     * @param url string socket地址 wss://omo.ysjjmall.com/
     */
    createWebSocket(url) {
        url = url + '?version=' + this.api_version;
        url = url + '&token=' + encodeURIComponent(this.token);
        try {
            this.ws = new WebSocket(url);
            this.ws.onopen = () => {
                this.heartCheck.reset();
                this.onConnect(url);
            };
            this.ws.onclose = (event) => {
                this.reconnect(url);
                this.onClose(event);
            };
            this.ws.onerror = (event) => {
                this.reconnect(url);
                this.onError(event);
            };
            this.ws.onmessage = (event) => {
                this.heartCheck.reset();
                this.onMessage(event);
            };
        } catch (e) {
            this.reconnect(url);
        }
    },
    reconnect(url) {
        if (this.lockReconnect) {
            return;
        }
        this.lockReconnect = true;
        // 没连接上会一直重连，设置延迟避免请求过多
        window.setTimeout(() => {
            this.createWebSocket(url);
            this.lockReconnect = false;
        }, 2000);
    },
    heartCheck: {
        timeout: 49876, // 毫秒
        timeoutObj: null,
        serverTimeoutObj: null,
        reset() {
            window.clearTimeout(this.timeoutObj);
            window.clearTimeout(this.serverTimeoutObj);
            this.timeoutObj = window.setTimeout(() => {
                this.ws.send(JSON.stringify({type:'heart_beat'}));
                this.serverTimeoutObj = setTimeout(() => {
                    this.ws.close();
                }, this.timeout);
            }, this.timeout);
        },
    },
};
