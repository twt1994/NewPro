import axios from 'axios';
import md5 from 'md5';
import store from '@/vuex/store';

axios.interceptors.request.use((config) => {
    let token = store.getters.token;
    if (token !== null) {
        config.headers['token'] = token;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default {
    /**
     * 生成签名
     * @param query_str
     */
    makeSign(query_str) {
        let query_params = query_str.split('&');
        query_params.sort();
        let temp_str = '';
        for (let i = 0, j = query_params.length; i < j; i++) {
            let p = query_params[i];
            try {
                let v = p.substr(p.indexOf('=') + 1);
                if (v !== '') {
                    temp_str = temp_str + decodeURIComponent(v);
                }
            } catch (e) {
            }
        }
        return md5(temp_str);
    },
    /**
     * 生成接口调用URL
     * @param url
     * @returns {string|*}
     */
    makeUrl(url) {
        if (url.indexOf('?') === -1) {
            url = url + '?';
        }
//      url += '&version=' + store.state.api_version;
//      let timestamp = parseInt((new Date()).getTime() / 1000);
//      url = url + '&timestamp=' + timestamp;
//      let nonce = parseInt(Math.random() * 99999999);
//      url = url + '&nonce=' + nonce;
//      let sign = this.makeSign(url.substr(url.indexOf('?') + 1));
//      url = url + '&sign=' + sign;
//      url = url.replace('?&', '?');
        return url;
    },
    /**
     * 发送Api Get请求
     * @param url
     * @param params
     */
    get(url, params,headers) {
        if (url.indexOf('?') === -1) {
            url = url + '?';
        }
        if (params !== undefined) {
            for (let key in params) {
                url = url + '&' + key + '=' + encodeURIComponent(params[key]);
            }
        }
        url = url.replace('?&', '?');
        url = this.makeUrl(url);
        return new Promise((resolve, reject) => {
            axios.get(store.state.api_host + url,{headers:headers})
            .then((response) => {
            	console.log(response)
                if(response.status == '200'){
                	resolve(response);
                }else{
                	reject(response);
                }
            }).catch((error) => {
                reject({error_code: 9999, error});
                this.reportError(error);
            });
        });
    },
    /**
     * 发送Api Post请求
     * @param url
     * @param json
     */
    post(url, json, headers) {
//      url = this.makeUrl(url);
        return new Promise((resolve, reject) => {
            axios.post(store.state.api_host + url, json, {headers: headers})
            .then((response) => {
                console.log(response)
                if(response.status == '200'){
                	resolve(response);
                }else{
                	reject(response);
                }
            }).catch((error) => {
                reject({error_code: 9999, error});
                this.reportError(error);
            });
        });
    },
    /**
     * 上传文件
     * @param url
     * @param file
     */
    file(url, file) {
        let formData = new FormData();
        formData.append('file', file);
        return new Promise((resolve, reject) => {
            axios.post(store.state.api_host + this.makeUrl(url), formData, {headers: {"Content-Type": "multipart/form-data"}})
            .then((response) => {
                let json = response.data;
                if (json['error_code'] !== undefined && json['error_code'] === 0) {
                    resolve(json);
                } else {
                    reject(json);
                    this.alertError(json);
                }
            }).catch((error) => {
                reject({error_code: 9999, error});
                this.reportError(error);
            });
        });
    },
    files(url, files) {
        let formData = new FormData();
        for(var key in files){
        	formData.append(key, files[key]);
        }
        return new Promise((resolve, reject) => {
            axios.post(store.state.api_host + this.makeUrl(url), formData, {headers: {"Content-Type": "application/json"}})
	            .then((response) => {
	            	console.log(response)
	                if (response.status == '200') {
	                    resolve(response);
	                } else {
	                    reject(response);
	                    this.alertError(response);
	                }
	            })
	            .catch((error) => {
	                reject({error_code: 9999, error});
	                this.reportError(error);
	            });
        });
    },
    /**
     * 报告错误
     * @param json
     */
    reportError(json) {
        // axios.post(store.state.api_host + this.makeUrl('/api/default/report-error'), json, {headers: {"Content-Type": "application/json"}});
    },
    /**
     * 显示错误信息
     * @param json
     */
    alertError(json) {
        console.error(json);
    }
};
