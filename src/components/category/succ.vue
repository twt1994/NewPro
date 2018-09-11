<template>
	<div class="succ">
    	<!--头部-->
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="succ-container">
        	<div class="tip">取票码不会以短信形式发送，请在我的订单中查看</div>
        	<div class="cont">
        		<div class="succpicw">
	        		<div class="succpic"></div>
	        		<p class="wt">支付成功</p>
	        		<p class="wb">预计1-15分钟内出票，若遇到影院系统异常导致出票失败，系统将自动为您退款</p>
	        	</div>
	        	<div class="btnw">
	        		<button class="look">查看订单</button>
	        		<button class="reload" @click="goCashCode">立即取票</button>
	        	</div>
        	</div>
 		</div>
        <!--<footer-tab current-tab="category"/>-->
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header'
	import FooterTab from '../../components/public/Footer';
	import '@/style/main.less';

    export default {
        name: 'succ',
    	data() {
	        return {
	        	head:{
	        		title:'金彩世界',
	        		back:true
	        	},
	        	orderNo:'',//订单号
	        }
	    },
        components: {
        	HeadTit,
            FooterTab
        },
        computed:{
        	
        },
        methods: {
            goCashCode:function(){
			    this.$router.push({  
	                path:'/category/cashcode',  
	                name:'cashcode', 
	                params:{
	                	orderNo:this.orderNo
	                },
	                query:{
	                	orderNo:this.orderNo
	                }
	            }) 
			},
			getFromPayway(){
				this.orderNo = this.$route.query.orderNo  
			},
        },
        mounted() {
			this.getFromPayway();
        },
        watch:{
        	"$router":"getFromPayway"
        }
    }
</script>

<style lang="less" scoped="scoped">
	.succ-container{
		/*padding: 0.88rem 0 1.2rem 0rem;*/
		.tip{
			height: 0.53rem;
			line-height: 0.53rem;
			background: #fef3d9;
			font-size: 0.24rem;
			color: #ffab2b;
			text-align: center;
			margin-bottom: 0.3rem;
		}
		.cont{
			text-align: center;
			padding: 0 0.3rem;
			.succpicw{
				height: 4.07rem;
				background: #fff;
				border-radius: 5px;
				overflow: hidden;
				padding:0.5rem 0.9rem 0 0.9rem;
				box-shadow:1px 1px 10px #d3d2cc;
				margin-bottom:0.3rem;
				.succpic{
					width: 1.64rem;
					height: 1.64rem;
					margin: 0 auto;
					background: url(../../assets/images/outpic.png) no-repeat;
					background-size: contain;
				}
				.wt{
					font-size: 0.32rem;
					line-height: 0.88rem;
					font-weight: 600;
					color: #000;
				}
				.wb{
					font-size: 0.24rem;
					color: #666;
				}
			}
			.btnw{
				position: relative;
				button{
					width: 3rem;
					height: 0.7rem;
					position: absolute;
					top:0;
					border-radius: 8px;
					background: #fed703;
					border: 0;
					font-size: 0.28rem;
					color: #fff;
					letter-spacing: 1px;
				}
				.look{
					left: 0;
				}
				.reload{
					right: 0;
				}
			}
		}
	}
</style>