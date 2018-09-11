<template>
	<div class="getedfree">
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="getedfree_container">
        	<div class="top_pic"></div>
        	<div class="getedfree_cont">
        		<div class="ticket_w">
        			<div class="ticket_outer">
        				<div class="outer_top">
        					<div class="pic"><img src="../../assets/images/other/zhgh.png" alt="" /></div>
        					<div class="word">
        						<div class="wordd">
        							<span>最高奖金</span><i>100</i><b>万</b>
        						</div>
        						<div class="wordd">
        							<span>中奖机会</span><i>21</i><b>次</b>
        						</div>
        					</div>
        				</div>
        				<div class="outer-btm">
        					<div class="linw"><div class="line"></div></div>
        					<div class="word">恭喜您获得&nbsp;<i>20元</i>&nbsp;顶呱呱优惠券</div>
        					<div class="linw"><div class="line line2"></div></div>
        				</div>
        			</div>
        		</div>
        		<div class="local_w">
        			<div class="local_detail">
        				<div class="pic"></div>
        				<p>上上谦串串香火锅（徐汇旗舰店）</p>
        				<div class="tip">本兑换券提供商</div>
        			</div>
        			<div class="local_map">
        				<div class="map_top">
        					<div class="pic"></div>
        					<div class="word">
        						<p class="wtop">龙华西路585号</p>
        						<p class="wbtm">距您555米，步行约5分钟<i>（请尽快前往领取）</i></p>
        					</div>
        				</div>
        				<div class="map"></div>
        			</div>
        		</div>
        		
        	</div>
        	<div class="btnw">
    			<div class="btn1 btn">确定</div>
    			<div class="btn2 btn">分享再领一张</div>
    		</div>
		</div>	
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header'
	import UserHead from '../../components/public/userhead';
//	import Api from '@/lib/api';
	import '@/style/main.less';

    export default {
        name: 'share',
    	data() {
	        return {
	        	head:{
	        		title:'会员中心',
	        		back:true
	        	},
	        
	        }
	    },
        components: {
        	HeadTit,
            UserHead
        },
        methods: {
        },
        created(){

        },
        mounted() {

        }
    }
</script>

<style lang="less" scoped="scoped">
	*{
		box-sizing: border-box;
	}
	.getedfree{
		width: 100%;
		height: 100%;
		background-color: #d11816;
		.top_pic{
			height: 2.4rem;
			background: url(../../assets/images/other/toppic2.png)no-repeat;
			background-size: 100% 100%;
		}
		.getedfree_cont{
			padding: 0 0.3rem;
			.ticket_w{
				padding: 0.2rem;
				background-color: #FFFFFF;
				margin-bottom:0.35rem;
				border-radius:5px;
				.ticket_outer{
					width: 6.5rem;
					height: 2.7rem;
					background: url(../../assets/images/other/ticket.png)no-repeat;
					background-size: cover;
					.outer_top{
						display: flex;
						height:2.02rem;
						.pic{
							display: flex;
							align-items: center;
							padding-left: 0.42rem;
							width: 3.25rem;
							img{
								width: 2.36rem;
								height: 1.43rem;
								box-shadow: 0 0 0 5px #f6b331;
							}
						}
						.word{
							flex: 1;
							padding-top: 0.75rem;
							.wordd{
								color: #FFFFFF;
								font-size: 0.3rem;
								font-family: "宋体";
								line-height: 0.5rem;
								display: flex;
								padding-right: 0.8rem;
								vertical-align:baseline;
								span{
									flex: 1;
								}
								i{
									text-align: right;
									font-style: normal;
									color: #e01429;
								}
								b{
									font-weight: normal;
									color: #e01429;
									font-size: 0.2rem;
									line-height: 0.6rem;
								}
							}
							
						}
					}
					
					
				}
				.outer-btm{
					text-align: center;
					line-height: 0.68rem;
					font-size: 0.28rem;
					font-family: "微软雅黑";
					display: flex;
					padding: 0 0.15rem;
					.linw{
						flex: 1;
						display:flex;
						align-items: center;
						.line{
							height: 2px;
							width: 100%;
							background-image: linear-gradient(to right ,#fff,#000000);
							background-color: #000000;
						}
						.line2{
							background-image: linear-gradient(to left ,#fff,#000000);
						}
					}
					.word{
						padding: 0 0.05rem;
						i{
							font-style: normal;
							color: #ef6f6e;
						}
					}
				}
			}
			.local_w{
				background: #FFFFFF;
				border-radius: 5px;
				overflow: hidden;
				margin-bottom: 0.45rem;
				.local_detail{
					height: 0.78rem;
					border-bottom: 1px solid #ededed;
					line-height: 0.78rem;
					display:flex;
					align-items:center;
					padding-left:0.2rem;
					position:relative;
					.pic{
						width: 0.4rem;
						height: 0.4rem;
						background: url(../../assets/images/other/shop.png)no-repeat;
						background-size: cover;
					}
					p{
						padding-left: 0.2rem;
						font-size: 0.3rem;
						color: #000000;
						font-family: "微软雅黑";
					}
					.tip{
						padding: 0 0.1rem;
						height: 0.33rem;
						border-bottom-left-radius: 5px;
						background-color: #fcad43;
						position: absolute;
						line-height: 0.33rem;
						font-size: 0.2rem;
						color: #FFFFFF;
						top: 0;
						right: 0;
					}
				}
				.local_map{
					padding-left:0.2rem;
					padding-top: 0.2rem;
					padding-bottom: 0.22rem;
					.map_top{
						display: flex;
						padding-bottom:0.12rem;
						.pic{
							width: 0.4rem;
							height: 0.4rem;
							background: url(../../assets/images/other/map.png)no-repeat;
							background-size: cover;
						}
						.word{
							padding-left: 0.2rem;
							.wtop{
								font-size: 0.3rem;
								color: #000000;
								line-height: 0.36rem;
								font-family: "微软雅黑";
							}
							.wbtm{
								line-height: 0.36rem;
								font-size: 0.2rem;
								color: #666666;
								font-family: "微软雅黑";
								i{
									font-style: normal;
									color: #dc4747;
								}
							}
						}
					}
					.map{
						width: 5.96rem;
						height: 2.46rem;
						background: url(../../assets/images/other/map1.png)no-repeat;
						background-size: cover;
						margin: 0 auto;
						box-shadow: 0 0 0 2px #000000
					}
				}
			}
			
		}
		.btnw{
			height: 0.7rem;
			position: relative;
			margin: 0 0.32rem;
			.btn{
				width: 3rem;
				height: 0.7rem;
				text-align: center;
				line-height: 0.7rem;
				font-size: 0.36rem;
				color: #000000;
				background-color: #fdd531;
				border-radius: 5px;
				font-family: "宋体";
			}
			.btn2{
				position: absolute;
				top: 0;
				right: 0;
			}
		}
	}
</style>