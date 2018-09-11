<template>
	<div class="freeticket">
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="freeticket_container">
        	<div class="toppic">
        		<p>顶呱刮彩票可领取</p>
        		<span></span>
        	</div>
        	<div class="titlew">
        		<div class="freetitle">
	        		<div class="linew"><span></span></div>
	        		<div class="word"><p>今天已有&nbsp;</p><i>223213</i><p>&nbsp;人领取彩票</p></div>
	        		<div class="linew linew2"><span></span></div>
	        	</div>
        	</div>
        	<div class="contw">
        		<ul>
        			<li>
        				<div class="imgw"><img src="../../assets/images/other/hea.png" alt="" /></div>
        				<div class="namew">
        					<p class="name">光之行者</p>
        					<p class="time">6分钟前</p>
        				</div>
        				<div class="result">领取彩票兑换券<i>X</i>张</div>
        			</li>
        			<li>
        				<div class="imgw"><img src="../../assets/images/other/hea.png" alt="" /></div>
        				<div class="namew">
        					<p class="name">光之行者</p>
        					<p class="time">6分钟前</p>
        				</div>
        				<div class="result">领取彩票兑换券<i>X</i>张</div>
        			</li>
        			<li>
        				<div class="imgw"><img src="../../assets/images/other/hea.png" alt="" /></div>
        				<div class="namew">
        					<p class="name">光之行者</p>
        					<p class="time">6分钟前</p>
        				</div>
        				<div class="result">领取彩票兑换券<i>X</i>张</div>
        			</li>
        		</ul>
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
	.freeticket_container{
		.toppic{
			height: 4.16rem;
			position:relative;
			display:flex;
			justify-content: center;
			background:url(../../assets/images/other/toppic.png)no-repeat;
			padding-top: 2.5rem;
			background-size:100%;
			box-sizing:border-box;
			p{
				font-size: 0.36rem;
				text-align: center;
				color: #282828;
				line-height: 0.4rems;
			}
			span{
				position: absolute;
				width: 1.28rem;
				height: 1.28rem;
				background: url(../../assets/images/other/kai.png)no-repeat;
				background-size: contain;
				bottom:-0.47rem;
			}
		}
		.titlew{
			padding: 0.6rem 0.3rem 0.24rem 0.3rem;
			.freetitle{
				background: #FFFFFF;
				height: 0.88rem;
				border-radius: 5px;
				display: flex;
				padding:0 0.15rem;
				.linew{
					flex:1;
					display: flex;
					align-items: center;
					span{
						display: block;
						height: 0.02rem;
						flex: 1;
						background-image: linear-gradient(to right ,#bababa ,#000000);
					}
				}
				.linew2{
					span{
						display: block;
						height: 0.02rem;
						flex: 1;
						background-image: linear-gradient(to right ,#000000 ,#bababa);
					}
				}
				.word{
					padding: 0 0.2rem;
					display: flex;
					p{
						font-size: 0.3rem;
						line-height: 0.9rem;
						font-family: "微软雅黑";
					}
					i{
						line-height: 0.88rem;
						font-size: 0.5rem;
						color: #f54d4d;
						font-style: normal;
						font-family: "times new roman";
					}
				}
			}
		}
		.contw{
			padding: 0 0.3rem;
			ul{
				background: #FFFFFF;
				padding: 0 0.13rem;
				border-radius: 5px;
				li{
					height: 1.22rem;
					display: flex;
					align-items: center;
					border-bottom: 1px solid #EDEDED;
					.imgw{
						padding:0 0.3rem 0 0.1rem;
						img{
							width: 0.68rem;
							height: 0.68rem;
						}
					}
					.namew{
						flex: 1;
						height: 0.68rem;
						.name{
							font-size: 0.3rem;
							font-family: "宋体";
							color: #000000;
							line-height: 1;
						}
						.time{
							font-size: 0.26rem;
							font-family: "宋体";
							color: #999999;
							line-height: 0.6rem;
						}
					}
					.result{
						padding-right: 0.12rem;
						font-size: 0.3rem;
						line-height: 1.22rem;
					}
				}
				li:last-child{
					border-bottom: none;
				}
			}
		}
	}

</style>