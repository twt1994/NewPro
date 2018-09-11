<template>
	<div class="mlogin">
    	<!--头部-->
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="mlogin-container">
        	<div class="logow">
        		<div class="logo"></div>
        	</div>
        	<div class="contw">
        		<div class="tel"><input type="tel" placeholder="输入手机号"/></div>
        		<div class="sixcode">
        			<input type="number" placeholder="输入验证码"/>
        			<button :class="{active:getCode}">获取验证码</button>
        		</div>
        		<button class="loginbtn" :class="{active:islogin}">登陆</button>
        	</div>
 		</div>
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header'
	import '@/style/main.less';

    export default {
        name: 'mlogin',
    	data() {
	        return {
	        	head:{
	        		title:'金彩世界',
	        		back:false
	        	},
	        	getCode:true,
	        	islogin:false
	        }
	    },
        components: {
        	HeadTit,
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style lang="less" scoped="scoped">
	.mlogin{
		height: 100%;
		background: #FFFFFF;
	}
	.mlogin-container{
		.logow{
			padding:0.85rem 0 0.7rem 0;
			.logo{
				width: 2.4rem;
				height: 2.4rem;
				background: url(images/logo.png)no-repeat;
				background-size: cover;
				margin: 0 auto;
			}
		}
		.contw{
			padding: 0 1.08rem;
			.tel{
				border-bottom:1px solid #979797;
				input{
					font-family:PingFangSC-Medium;
					font-size:0.3rem;
					color:#b4b4b4;
					letter-spacing:0;
					background-color: transparent;
					text-indent: 0.5em;
					line-height: 0.96rem;
				}
			}
			.sixcode{
				padding-top: 0.1rem;
				border-bottom:1px solid #979797;
				position: relative;
				margin-bottom: 0.5rem;
				input{
					font-family:PingFangSC-Medium;
					font-size:0.3rem;
					color:#b4b4b4;
					letter-spacing:0;
					background-color: transparent;
					text-indent: 0.5em;
					line-height: 0.96rem;
				}
				button{
					position: absolute;
					padding: 0 0.1rem;
					background:#D8D8D8;
					border-radius:0.08rem;
					height:0.5rem;
					line-height: 0.5rem;
					font-family:PingFangSC-Medium;
					font-size:0.3rem;
					color:#ffffff;
					letter-spacing:0;
					right: 0.25rem;
					bottom: 0.16rem;
					border: none;
				}
				button.active{
					background:#0fcd86;
				}
			}
			.loginbtn{
				background:#d8d8d8;
				border-radius:0.08rem;
				width:5.35rem;
				height:0.70rem;
				font-family:PingFangSC-Medium;
				font-size:0.3rem;
				color:#ffffff;
				letter-spacing:0;
				line-height: 0.7rem;
				text-align: center;
				margin: 0 auto;
				border: none;
			}
			.loginbtn.active{
				background: #FED702;
			}
		}
	}
</style>