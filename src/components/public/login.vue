<template>
	<div class="succ">
    	<!--头部-->
        <head-tit v-bind:title="head.title" :back="head.back"></head-tit>
        <div class="main-container">
        	<div class="inner">
        		<div class="headpic">
        			<img src="../../assets/images/user/headpic.png" alt="" />
        		</div>
        		<p>用户名</p>
        		<div class="inputd">
        			<div>
        				<input type="text" placeholder="请刮开保安区，输入里面的数字兑换码"/>
        			</div>
        		</div>
        		<div class="btnd">
        			<button>确认兑奖</button>
        		</div>
        		<div class="help"><a href="#">兑奖帮助</a></div>
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
        name: 'login',
    	data() {
	        return {
	        	head:{
	        		title:'金彩世界',
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
	.main-container{
		padding: 0.88rem 0 1.2rem 0rem;
		.inner{
			padding-top: 0.87rem;
			.headpic{
				width: 1.4rem;
				height: 1.4rem;
				margin: 0 auto;
				border-radius: 50%;
				overflow: hidden;
				img{
					width: 100%;
					height: 100%;
				}
			}
			p{
				font-size: 0.36rem;
				text-align: center;
				line-height: 1.58rem;
			}
			.inputd{
				padding: 0.15rem 0.3rem 0rem 0.3rem;
				margin-bottom: 0.4rem;
				div{
					padding-left:0.2rem;
					padding-bottom: 0.3rem;
					border-bottom: 1px solid #dedede;
					input{
						font-size: 0.26rem;
						line-height: 0.34rem;
						background-color: transparent;
						width: 100%;
						color: #999999;
					}
				}
			}
			.btnd{
				padding: 0 0.3rem;
				margin-bottom: 0.7rem;
				button{
					width: 100%;
					height: 0.7rem;
					text-align: center;
					color: #fff;
					font-size: 0.28rem;
					background: #fed703;
					border-radius: 8px;
					border:0;
				}
			}
			.help{
				text-align: center;
				a{
					font-size: 0.28rem;
					color: #333333;
					text-align: center;
					border-bottom: 1px solid #333333;
				}
			}
		}
	}
</style>