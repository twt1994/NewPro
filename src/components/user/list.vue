<template>
	<div class="user">
        <head-tit v-bind:title="head.title" :back="head.back"></head-tit>
        <div class="main-container">
        	<div class="tophead">
        		<div class="active">
        			<span>我创建的榜单</span>
        		</div>
        		<div>
        			<span>我收藏的榜单</span>
        		</div>
        	</div>
        	<div class="listcont">
        		<div class="contt">
        			<div class="listtotal">
        				<span>总奖金额</span>
        				<i>100,000</i>
        			</div>
        			<div class="liname">
        				<span>排名</span>
        				<span>获奖者</span>
        				<span>获奖金额</span>
        			</div>
        		</div>
        		<ul>
        			<li>
        				<span><i></i></span>
        				<span>贝斯</span>
        				<span>￥100</span>        				
        			</li>
        			<li>
        				<span><i></i></span>
        				<span>贝斯</span>
        				<span>￥100</span>        				
        			</li>
        			<li>
        				<span><i></i></span>
        				<span>贝斯</span>
        				<span>￥100</span>        				
        			</li>
        			<li>
        				<span><i>4</i></span>
        				<span>贝斯</span>
        				<span>￥100</span>        				
        			</li>
        			<li>
        				<span><i>5</i></span>
        				<span>贝斯</span>
        				<span>￥100</span>        				
        			</li>
        			<li>
        				<span><i>6</i></span>
        				<span>贝斯</span>
        				<span>￥100</span>        				
        			</li>
        			<li>
        				<span><i>7</i></span>
        				<span>贝斯</span>
        				<span>￥100</span>        				
        			</li>
        		</ul>
        	</div>
        	<div class="creatnew">
        		<button>我也要创建榜单</button>
        	</div>
        </div>
        <!--<footer-tab current-tab="user"/>-->
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header'
	import FooterTab from '../../components/public/Footer';
	import '@/style/main.less';
    import {mapActions} from 'vuex'
    export default {
        name: 'list',
    	data() {
	        return {
	        	head:{
	        		title:'我的榜单',
	        		back:true
	        	}
	        }
	    },
        components: {
        	HeadTit,
            FooterTab
        },
        methods: {
            ...mapActions(['loadKeyMap']),
        },
        mounted() {
            this.loadKeyMap();
        }
    }
</script>

<style lang="less" scoped="scoped">
	body{
		background: #FFFFFF;
	}
	.main-container{
		padding: 0.88rem 0 2rem 0rem;
		.tophead{
			height: 0.88rem;
			line-height: 0.84rem;
			font-size: 0.3rem;
			color: #80807d;
			display: flex;
			text-align: center;
			border-bottom:1px solid #b2b2b2;
			.active{
				span{
					border-bottom: 0.04rem solid #333333;
					height: 0.84rem;
					display: inline-block;
					color: #333333;
				}
			}
			div{
				flex: 1;

			}
		}
		.listcont{
			.contt{
				.listtotal{
					height: 2.5rem;
					background: #fed703;

					vertical-align: bottom;
					line-height: 2.5rem;
					font-size: 0.4rem;
					text-align: center;
					display: flex;
					justify-content: center;
					span{
						vertical-align: bottom;
						line-height: 2.65rem;
					}
					i{
						font-size: 0.8rem;
						font-weight: 800;
					}
				}
				.liname{
					display: flex;
					font-size: 0.3rem;
					height: 0.88rem;
					padding-left: 0.5rem;
					line-height: 0.88rem;
					border-bottom: 1px solid #b2b2b2;
					text-align: center;
					span:first-child{
						width: 1.28rem;
					}
					span:nth-child(2){
						flex: 1;
					}
					span:last-child{
						flex: 1;
					}
				}
			}
			ul{
				padding-left: 0.5rem;
				li{
					border-bottom: 1px solid #e5e5e5;
					height: 1.18rem;
					line-height: 1.18rem;
					display: flex;
					text-align: center;
					span:first-child{
						width: 1.28rem;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 0.28rem;
						color: #ff0000;
						i{
							display: block;
							width: 0.37rem;
							height: 0.49rem;
							font-style: normal;
							line-height: 0.49rem;
						}
					}
					span:nth-child(2){
						flex: 1;
						font-size: 0.38rem;
						color: #ff0000;
					}
					span:last-child{
						flex: 1;
						font-size: 0.48rem;
					}
				}
				li:nth-child(1) i{
					background: url(../../assets/images/user/one.png) no-repeat;
					background-size: contain;
				}
				li:nth-child(2) i{
					background: url(../../assets/images/user/two.png) no-repeat;
					background-size: contain;
				}
				li:nth-child(3) i{
					background: url(../../assets/images/user/three.png) no-repeat;
					background-size: contain;
				}
			}
		}
		.creatnew{
			position: fixed;
			background: #FFFFFF;
			width: 100%;
			height: 1rem;
			left: 0;
			bottom: 1rem;
			/*border-top: 1px solid #EEEAE8;*/
			button{
				display: block;
				background: #fed703;
				width: 80%;
				height: 0.7rem;
				border-radius: 5px;
				border: 0;
				margin: 0 auto;
				font-size: 0.32rem;
				color: #fff;
				line-height: 0.7rem;
			}
		}
	}
</style>