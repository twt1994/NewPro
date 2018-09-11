<template>
	<div class="succ">
    	<!--头部-->
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="main-container">
        	<div class="vip_box">
				<div class="vip_top">
					<div class="vip_sj"><img src="../../assets/images/user/my_sj.png"/></div>
					<p>为了您的安全,请绑定你的手机号</p>
				</div>
				<ul class="vip_list">
					<li>
						<img src="../../assets/images/user/vip_name.png"/>
						<input type="text" placeholder="真实姓名"/>
					</li>
					<li>
						<img src="../../assets/images/user/vip_sj.png"/>
						<input type="text" placeholder="请输入手机号"/>
					</li>
					<li>
						<img src="../../assets/images/user/vip_yz.png"/>
						<input type="text" placeholder="请输入验证码"/>
						<a href="javascript:;">获取验证码</a>
					</li>
				</ul>
				<a class="vip_submit">注册</a>
			</div>
 		</div>
        <!--<footer-tab current-tab="user"/>-->
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header'
	import FooterTab from '../../components/public/Footer';
	import '@/style/main.less';

    export default {
        name: 'cashprize',
    	data() {
	        return {
	        	head:{
	        		title:'注册会员',
	        		back:true
	        	}
	        }
	    },
        components: {
        	HeadTit,
            FooterTab
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style lang="less" scoped="scoped">
	body{
		background-color: #fff;
	}
	.succ{
		background: #FFFFFF;
		height: 100%;
	}
	.main-container{
		/*padding: 0.88rem 0 1.2rem 0rem;*/
		.vip_box {
		  width: 100%;
		}
		.vip_top {
		  width: 100%;
		  height: 0.9rem;
		  line-height: 0.9rem;
		  margin-bottom: 0.12rem;
		}
		.vip_top .vip_sj {
		  width: 0.19rem;
		  height: 0.3rem;
		  float: left;
		  margin: 0.3rem 0.21rem 0.3rem 0.29rem;
		}
		.vip_sj img {
		  width: 0.19rem;
		  height: 0.3rem;
		  background: url(../../assets/images/user/my_sj.png) no-repeat;
		  background-size: 100%;
		  float: left;
		}
		.vip_top p {
		  font-size: 0.26rem;
		  color: #666;
		}
		.vip_list {
		  width: 6rem;
		  margin: 0 auto;
		  margin-bottom: 0.42rem;
		}
		.vip_list li {
		  width: 100%;
		  height: 0.84rem;
		  border-bottom: 0.01rem solid #dedede;
		}
		.vip_list li img {
		  width: 0.33rem;
		  height: 0.35rem;
		  float: left;
		  margin-top: 0.24rem;
		  margin-left: 0.04rem;
		}
		.vip_list li input {
		  float: left;
		  border: 0;
		  width: 2.68rem;
		  height: 0.8rem;
		  line-height: 0.8rem;
		  font-size: 0.26rem;
		  margin-left: 0.78rem;
		  outline: 0;
		  background-color: transparent;
		}
		.vip_list li input::-webkit-input-placeholder {
		  /*WebKit browsers*/
		  color: #999999;
		}
		.vip_list li input::-moz-input-placeholder {
		  /*Mozilla Firefox*/
		  color: #999999;
		}
		.vip_list li input::-ms-input-placeholder {
		  /*Internet Explorer*/
		  color: #999999;
		}
		.vip_list li a {
		  display: block;
		  width: 1.68rem;
		  height: 0.5rem;
		  background: #b2b2b2;
		  float: left;
		  font-size: 0.26rem;
		  color: #fff;
		  line-height: 0.5rem;
		  text-align: center;
		  margin-top: 0.17rem;
		  -moz-border-radius: 0.08rem;
		  /* Firefox */
		  -webkit-border-radius: 0.08rem;
		  /* Safari 、Chrome */
		  border-radius: 0.08rem;
		  /* Opera 10.5+, IE6+ 使用 IE-CSS3*/
		}
		.vip_submit {
		  display: block;
		  width: 6.86rem;
		  height: 0.7rem;
		  background: #fed703;
		  color: #fff;
		  font-size: 0.26rem;
		  margin: 0 auto;
		  line-height: 0.7rem;
		  text-align: center;
		  -moz-border-radius: 0.08rem;
		  /* Firefox */
		  -webkit-border-radius: 0.08rem;
		  /* Safari 、Chrome */
		  border-radius: 0.08rem;
		  /* Opera 10.5+, IE6+ 使用 IE-CSS3*/
		}
	}
</style>