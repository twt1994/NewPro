export default {
    /**
     * 用户Token
     * @param state
     * @returns {*}
     */
    token: (state) => {
        if (state.token === null) {
            // 尝试从LocalStorage读取
            let token = localStorage.getItem('token');
            if (token === undefined || token === null || token === '') {
                token = null;
            }
            state.token = token;
        }
        return state.token;
    },
};
