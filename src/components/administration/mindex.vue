<template>
	<div class="mindex">
    	<!--头部-->
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="mindex-container">
        	<div class="account">当前账号：13601324123</div>
        	<div class="toppic"></div>
        	<ul class="clearfix">
        		<li class="merchant">
        			<div class="icon"></div>
        			<p>商户管理</p>
        		</li>
        		<li class="store">
        			<div class="icon"></div>
        			<p>门店管理</p>
        		</li>
        		<li class="equipment">
        			<div class="icon"></div>
        			<p>设备管理</p>
        		</li>
        		<li class="lottery">
        			<div class="icon"></div>
        			<p>彩票管理</p>
        		</li>
        		<li class="salesSituation">
        			<div class="icon"></div>
        			<p>销售情况</p>
        		</li>
        		<li class="loadingTicket">
        			<div class="icon"></div>
        			<p>快速装票</p>
        		</li>
        	</ul>
        	<div class="footer">
        		<div class="toindex">我的首页</div>
        		<div class="toTool">管理箱工具</div>
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
	*{
		box-sizing: border-box;
	}
	.mindex{
		height: 100%;
		background:#f3f3f3;
	}
	.mindex-container{
		.account{
			height:0.7rem;
			background:#e3bf8e;
			color: #ffffff;
	        font-family: PingFangSC;
			font-size: 0.3rem;
			font-weight:500;
			text-align: center;
			line-height: 0.7rem;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
		}
		.toppic{
			margin-top: 0.7rem;
			height: 3rem;
			background: url(images/indextop.png)no-repeat;
			background-size: cover;
		}
		ul{
			overflow: hidden;
			li{
				border-radius:0.08rem;
				width:3.3rem;
				height:2rem;
				margin: 0.3rem 0 0 0.3rem;
				float: left;
				padding-top: 0.4rem;
				.icon{
					width: 0.85rem;
					height: 0.85rem;
					margin: 0 auto;
				}
				p{
					font-family:PingFangSC-Medium;
					font-size:0.3rem;
					color:#ffffff;
					text-align: center;
					line-height: 0.62rem;
				}
			}
			.merchant{
				background-image:linear-gradient(-180deg, #d6dbf3 0%, #acb4e3 100%);
				.icon{
					background: url(images/merchant.png)no-repeat;
					background-size: contain;
				}
			}
			.store{
				background-image:linear-gradient(-180deg, #dcecbd 0%, #b6d488 100%);
				.icon{
					background: url(images/store.png)no-repeat;
					background-size: contain;	
				}
			}
			.equipment{
				background-image:linear-gradient(-180deg, #fad5e4 0%, #f2aac4 100%);
				.icon{
					background: url(images/equipment.png)no-repeat;
					background-size: contain;
				}
			}
			.lottery{
				background-image:linear-gradient(-180deg, #fdf0b5 0%, #f9dd7f 100%);
				.icon{
					background: url(images/lottery.png)no-repeat;
					background-size: contain;
				}
			}
			.salesSituation{
				background-image:linear-gradient(-180deg, #c1e8ab 0%, #8ecb73 100%);
				.icon{
					background: url(images/salesSituation.png)no-repeat;
					background-size: contain;
				}
			}
			.loadingTicket{
				background-image:linear-gradient(-180deg, #b2e2e8 0%, #7bc1cd 100%);
				.icon{
					background: url(images/loadingTicket.png)no-repeat;
					background-size: contain;
				}
			}
		}
		.footer{
			height: 0.98rem;
			font-family:PingFangSC-Medium;
			font-size:0.3rem;
			color:#ffffff;
			text-align:center;
			line-height: 0.98rem;
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			width: 100%;
			div{
				flex: 1;
			}
			.toindex{
				background:#c1c1c1;
			}
			.toTool{
				background:#fed703;
			}
		}
	}
</style>