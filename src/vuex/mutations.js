export default {
    /**
     * 设置用户Token
     * @param state
     * @param token
     */
    setUserToken(state, token) {
        state.token = token;
        // 将值存储到LocalStorage中，防止刷新丢失
        localStorage.setItem('token', token);
    },
    /**
     * 设置用户信息
     * @param state
     * @param user
     */
    setUser(state, user) {
        state.user = user;
    },
    /**
     * 清除用户Token
     * @param state
     */
    clearUserToken(state) {
        localStorage.removeItem('token');
        state.token = null;
        state.user = null;
    },
};
