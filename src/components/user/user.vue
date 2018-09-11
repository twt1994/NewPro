<template>
	<div class="user">
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="user-container">
        	<!----我的--top-->
			<user-head :name="name"></user-head>
			<!--主体部分-->
			<div class="user_cont">
				<!--手机号绑定-->
				<div class="cont_number">
					<div class="cont_sj"><img src="../../assets/images/user/my_sj.png"/></div>
					<div class="cont_wz">为了您的账户安全,请绑定你的手机号</div>
					<div class="cont_bound"><a href="/register">注册</a></div>
				</div>
				<!--我的分类-->
				<div class="my_sort">
					<!--我的订单-->
					<dl class="my_indent" @click="goOrderList">
						<dt><img src="../../assets/images/user/my_fl.png"/></dt>
						<dd>我的订单</dd>
					</dl>
					<!--我的兑换券-->
					<dl class="my_indent">
						<router-link to="/user/ticketlist">
							<dt><img src="../../assets/images/user/my_fr.png"/></dt>
							<dd>我的兑换券</dd>
						</router-link>
					</dl>
					<!--榜单-->
					<dl class="my_indent">
						<router-link to="/user/monthhero">
							<dt><img src="../../assets/images/user/my_bd.png"/></dt>
							<dd>榜单</dd>
						</router-link>
					</dl>
					<!--我的兑奖-->
					<dl class="my_indent">
						<router-link to="/user/share">
							<dt><img src="../../assets/images/user/my_dj.png"/></dt>
							<dd>晒彩</dd>
						</router-link>
					</dl>
				</div>
				<!--我的列表-->
				<div class="my_list">
					<ul class="list_right">
						<!--账号明细-->
						<li><a href="#">
							<img src="../../assets/images/user/my_back.png" />
							<p>退单/退款</p>
						</a></li>
						<!--推荐给好友-->
						<li><a href="#">
							<img src="../../assets/images/user/my_share.png" />
							<p>推荐给好友</p>
						</a></li>
						<!--联系客服-->
						<li><a href="#">
							<img src="../../assets/images/user/my_jf.png" />
							<p>我的积分</p>
						</a></li>
						<!--消息中心-->
						<li><a href="#">
							<img src="../../assets/images/user/my_hz.png" />
							<p>我要合作</p>
						</a></li>
						<li><a href="#">
							<img src="../../assets/images/user/my_xy.png" />
							<p>协议与声明</p>
						</a></li>
					</ul>
				</div>
			</div>
        </div>
        <footer-tab current-tab="user"/>
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header';
	import FooterTab from '../../components/public/Footer';
	import UserHead from '../../components/public/userhead';
	import '@/style/main.less';

    export default {
        name: 'login',
    	data() {
	        return {
	        	head:{
	        		title:'我的金彩',
	        		back:false
	        	},
	        	name:'',
	        	openId:''
	        }
	    },
        components: {
        	HeadTit,
            FooterTab,
            UserHead
        },
        methods: {
        	queryUserDetail:function(){//查询用户详情
        		var _this = this;
        		var url = 'http://47.75.157.75:8084/queryUserDetail?openid=123456';
        		this.$http.get(url)
					.then(function(data){
						console.log(data)
						if(data.data.code == '200'){
							var data = data.data;
							_this.name = data.name;
							_this.openId = '123456'
						}
					})
					.catch(function (response) {
					    console.log(response);
					});
        	},
        	goOrderList:function(){//页面跳转
				this.$router.push({  
	                path:'user/orderlist',  
	                name:'orderlist',  
	                params:{  
	                    openId:this.openId 
	                },
	                query:{
	                    openId:this.openId 	                	
	                }
	            })
			},
			goShare:function(){
				this.$router.push({  
	                path:'user/share',  
	                name:'share',  
	                params:{  
	                    openId:this.openId
	                },
	                query:{
	                    openId:this.openId 	                	
	                }
	            })
			}
        },
        mounted() {
			this.queryUserDetail();
        }
    }
</script>

<style lang="less" scoped>
	body{
		position: relative;
	}
	.user-container{
		/*padding: 0.88rem 0 1.2rem 0rem;*/
		padding-bottom: 1.2rem;
	}
	.user_cont {
		width: 100%;
	  	margin: 0 auto;
	  	position: absolute;
	  	top: 2.85rem;
	  	left: 0;
	}
	.user_cont .cont_number {
	  width: 6.9rem;
	  height: 0.88rem;
	  margin: 0 auto;
	  background: #fff;
	  -moz-border-radius: 0.06rem;
	  /* Firefox */
	  -webkit-border-radius: 0.06rem;
	  /* Safari 、Chrome */
	  border-radius: 0.06rem;
	  overflow: hidden;
	  box-shadow: -0.05rem 0.1rem 0.18rem #e8e8e8, 0.05rem 0.1rem 0.18rem #e8e8e8;
	  margin-bottom: 0.2rem;
	}
	.cont_number .cont_sj {
	  width: 0.19rem;
	  height: 0.3rem;
	  margin: 0.29rem 0.2rem 0.25rem;
	  float: left;
	}
	.cont_sj img {
	  width: 0.19rem;
	  height: 0.3rem;
	  float: left;
	}
	.cont_number .cont_wz {
	  width: 4.64rem;
	  height: 0.88rem;
	  font-size: 0.24rem;
	  float: left;
	  line-height: 0.88rem;
	  color: #666666;
	}
	.cont_number .cont_bound {
	  width: 1.38rem;
	  height: 0.5rem;
	  background: #fbcd35;
	  -moz-border-radius: 0.08rem;
	  /* Firefox */
	  -webkit-border-radius: 0.08rem;
	  /* Safari 、Chrome */
	  border-radius: 0.08rem;
	  float: left;
	  margin-top: 0.2rem;
	}
	.cont_bound a {
	  display: block;
	  width: 1.38rem;
	  height: 0.5rem;
	  font-size: 0.24rem;
	  line-height: 0.5rem;
	  text-align: center;
	  color: #666;
	}
	.user_cont .my_sort {
	  width: 6.9rem;
	  height:1.86rem;
	  margin: 0 auto;
	  background: #fff;
	  -moz-border-radius: 0.06rem;
	  /* Firefox */
	  -webkit-border-radius: 0.06rem;
	  /* Safari 、Chrome */
	  border-radius: 0.06rem;
	  overflow: hidden;
	  box-shadow: -0.05rem 0.1rem 0.2rem #e8e8e8, 0.05rem 0.1rem 0.2rem #e8e8e8;
	  margin-bottom: 0.2rem;
	}
	.my_sort .my_indent {
	  width: 1.72rem;
	  height: 1.86rem;
	  float: left;
	}
	/*.my_indent>div {
	  width: 1.72rem;
	  height: 1.86rem;
	  float: left;
	}*/
	.my_indent dt {
	  width: 0.98rem;
	  height: 0.98rem;
	  margin: 0 auto;
	  margin-top: 0.24rem;
	}
	.my_indent dt img {
	  width: 0.98rem;
	  height: 0.98rem;
	}
	.my_indent dd {
	  width: 100%;
	  height: 0.58rem;
	  line-height: 0.58rem;
	  font-size: 0.28rem;
	  color: #010101;
	  text-align: center;
	}
	.my_list {
	  width: 6.9rem;
	  margin: 0 auto;
	  background: #fff;
	  overflow: hidden;
	  -moz-border-radius: 0.06rem;
	  /* Firefox */
	  -webkit-border-radius: 0.06rem;
	  /* Safari 、Chrome */
	  border-radius: 0.06rem;
	  box-shadow: -0.05rem 0.1rem 0.2rem #e8e8e8, 0.05rem 0.1rem 0.2rem #e8e8e8;
	}
	.my_list .list_right {
	  width: 6.62rem;
	  float: right;
	}
	.list_right li {
	  width: 100%;
	  height: 0.68rem;
	  border-bottom: 0.01rem solid #ededed;
	  padding-left: 0.7rem;
	  position: relative;
	}
	.list_right li a {
	  display: block;
	  width: 100%;
	  height: 0.68rem;
	  line-height: 0.68rem;
	}
	.list_right li a img {
	  float: left;
	}
	.list_right li a img {
	  width: 0.35rem;
	  height: 0.40rem;
	  position: absolute;
	  left: 0.1rem;
	  top: 0.13rem;
	}
	.list_right li a p {
	  float: left;
	  font-size: 0.28rem;
	  color: #000;
	}

</style>