import Vue from 'vue'
import Router from 'vue-router'
//按需加载
Vue.use(Router);
const routes = [
    // 访问地址                      名称                             组件地址
    {path: '/',name: 'Index',meta:{title:'首页'},component: (resolve) => {import('@/components/Index').then((module) => {resolve(module)})}},
//首页
	{path: '/gamelist',name: 'gamelist',meta:{title:'游戏'},component: (resolve) => {import('@/components/index/gamelist').then((module) => {resolve(module)})}},
	{path: '/games',name: 'games',meta:{title:'大转盘游戏'},component: (resolve) => {import('@/components/index/games').then((module) => {resolve(module)})}},
	{path: '/index/news',name: 'news',meta:{title:'金彩资讯'},component: (resolve) => {import('@/components/index/news').then((module) => {resolve(module)})}},
	{path: '/index/newdetail',name: 'newdetail',meta:{title:'金彩资讯'},component: (resolve) => {import('@/components/index/newdetail').then((module) => {resolve(module)})}},


//采购
	{path: '/category',name: 'category',meta:{title:'购物车'},component: (resolve) => {import('@/components/category/category').then((module) => {resolve(module)})}},
	{path: '/category/payway',name: 'payway',meta:{title:'支付'},component: (resolve) => {import('@/components/category/payway').then((module) => {resolve(module)})}},
	{path: '/category/succ',name: 'succ',meta:{title:'支付成功'},component: (resolve) => {import('@/components/category/succ').then((module) => {resolve(module)})}},
    {path: '/category/cashcode',name: 'cashcode',meta:{title:'取票'},component: (resolve) => {import('@/components/category/cashcode').then((module) => {resolve(module)})}},
    {path: '/category/lottery',name: 'lottery',meta:{title:'大乐透选号'},component: (resolve) => {import('@/components/category/lottery').then((module) => {resolve(module)})}},
    {path: '/category/cathectic',name: 'cathectic',meta:{title:'确认选号'},component: (resolve) => {import('@/components/category/cathectic').then((module) => {resolve(module)})}},


//兑奖
	{path: '/cashprize',name: 'cashprize',meta:{title:'兑奖'},component: (resolve) => {import('@/components/cashprize/cashprize').then((module) => {resolve(module)})}},
//个人中心
	{path: '/user',name: 'user',meta:{title:'个人中心'},component: (resolve) => {import('@/components/user/user').then((module) => {resolve(module)})}},
//	{path: '/user/list',name: 'list',component: (resolve) => {import('@/components/user/list').then((module) => {resolve(module)})}},
	{path: '/register',name: 'register',meta:{title:'注册'},component: (resolve) => {import('@/components/user/register').then((module) => {resolve(module)})}},
	{path: '/user/share',name: 'share',meta:{title:'晒彩'},component: (resolve) => {import('@/components/user/share').then((module) => {resolve(module)})}},
	{path: '/user/monthhero',name: 'monthhero',meta:{title:'榜单'},component: (resolve) => {import('@/components/user/monthhero').then((module) => {resolve(module)})}},
	{path: '/user/orderlist',name: 'orderlist',meta:{title:'订单'},component: (resolve) => {import('@/components/user/orderlist').then((module) => {resolve(module)})}},
	{path: '/user/ticketlist',name: 'ticketlist',meta:{title:'兑换券'},component: (resolve) => {import('@/components/user/ticketlist').then((module) => {resolve(module)})}},



//公共页面
//	{path: '/login',name: 'login',meta:{title:'登陆'},component: (resolve) => {import('@/components/public/login').then((module) => {resolve(module)})}},
	{path: '/building',name: 'building',meta:{title:'正在建设'},component: (resolve) => {import('@/components/public/building').then((module) => {resolve(module)})}},
//其它页面
	{path: '/freeticket',name: 'freeticket',meta:{title:'免费获取'},component: (resolve) => {import('@/components/other/freeticket').then((module) => {resolve(module)})}},
	{path: '/getedfree',name: 'getedfree',meta:{title:'天天拆红包，送彩票'},component: (resolve) => {import('@/components/other/getedfree').then((module) => {resolve(module)})}},
//微信公众平台
	{path: '/mlogin',name: 'mlogin',meta:{title:'登陆'},component: (resolve) => {import('@/components/administration/mlogin').then((module) => {resolve(module)})}},
    {path: '/mindex',name: 'mindex',meta:{title:'首页'},component: (resolve) => {import('@/components/administration/mindex').then((module) => {resolve(module)})}},
    {path: '/com',name: 'com',component: (resolve) => {import('@/components/user/com').then((module) => {resolve(module)})}},
    {path: '/cmck',name: 'cmck',component: (resolve) => {import('@/components/user/cmck').then((module) => {resolve(module)})}},

];
const router = new Router({
    mode: 'history',
    routes,
});
export default router
