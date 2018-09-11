// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex'
import store from './vuex/store';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Share from 'vue-social-share'//一键分享
import VueWechatTitle from 'vue-wechat-title'
import '@/assets/iconfont/iconfont.css'
Vue.use(VueWechatTitle)
require('./js/filter.js');  //加载过滤器
require('./js/directive.js');//加载自定义指令
// 轮播图-start
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'


var jquery = require('jquery')
var jqQrcode = require('jquery-qrcode')
//import VueResource from 'vue-resource'
//Vue.use(VueResource)

import axios from 'axios'
Vue.prototype.$http = axios
Vue.prototype.HOST = '/api'
axios.defaults.withCredentials = true;

Vue.use(wcSwiper);
// 轮播图-end

Vue.use(Share);
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
var vm = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});

