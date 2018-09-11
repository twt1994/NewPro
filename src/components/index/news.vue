<template>
	<div class="news">
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="main-container">
        	<div class="topw">
        		<img src="../../assets/images/index/banner1.png" alt="" />
        	</div>
        	<div class="contw">
        		<div class="contt">
        			<span>中奖信息</span>
        			<div class="zxpic"><img src="../../assets/images/index/zx.jpg" alt="" /></div>
        		</div>
        		<ul>
        			<li @click="goNewDetail">
        				<div class="lil">
        					<p class="lilt">独家-金彩大乐透第18051期历史同期走势分析</p>
        					<p class="lilb two-txt-cut">眼看着春风又绿了江南岸行人们换上了薄衣衫顶呱刮十周年庆更是热浪迭出啊啊啊啊</p>
        				</div>
        				<div class="lir">
        					<img src="../../assets/images/index/li1.jpg" alt="" />
        				</div>
        			</li>
        			<li @click="goNewDetail">
        				<div class="lil">
        					<p class="lilt">独家-金彩大乐透第18051期历史同期走势分析</p>
        					<p class="lilb two-txt-cut">眼看着春风又绿了江南岸行人们换上了薄衣衫顶呱刮十周年庆更是热浪迭出啊啊啊啊</p>
        				</div>
        				<div class="lir">
        					<img src="../../assets/images/index/li1.jpg" alt="" />
        				</div>
        			</li>
        			<li @click="goNewDetail">
        				<div class="lil">
        					<p class="lilt">独家-金彩大乐透第18051期历史同期走势分析</p>
        					<p class="lilb two-txt-cut">眼看着春风又绿了江南岸行人们换上了薄衣衫顶呱刮十周年庆更是热浪迭出啊啊啊啊</p>
        				</div>
        				<div class="lir">
        					<img src="../../assets/images/index/li1.jpg" alt="" />
        				</div>
        			</li>
        			<li @click="goNewDetail">
        				<div class="lil">
        					<p class="lilt">独家-金彩大乐透第18051期历史同期走势分析</p>
        					<p class="lilb two-txt-cut">眼看着春风又绿了江南岸行人们换上了薄衣衫顶呱刮十周年庆更是热浪迭出啊啊啊啊</p>
        				</div>
        				<div class="lir">
        					<img src="../../assets/images/index/li1.jpg" alt="" />
        				</div>
        			</li>
        			<li @click="goNewDetail">
        				<div class="lil">
        					<p class="lilt">独家-金彩大乐透第18051期历史同期走势分析</p>
        					<p class="lilb two-txt-cut">眼看着春风又绿了江南岸行人们换上了薄衣衫顶呱刮十周年庆更是热浪迭出啊啊啊啊</p>
        				</div>
        				<div class="lir">
        					<img src="../../assets/images/index/li1.jpg" alt="" />
        				</div>
        			</li>
        		</ul>
        	</div>
		</div>	
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header'

	import '@/style/main.less';

    export default {
        name: 'news',
    	data() {
	        return {
	        	head:{
	        		title:'金彩资讯',
	        		back:true
	        	},
	        }
	    },
        components: {
        	HeadTit,

        },
        methods: {
			goNewDetail(){
				this.$router.push({  
	                path:'index/newdetail',  
	                name:'newdetail',  
	                params:{  
	                 
	                },
	                query:{
	                	
	                }
	            })
			}
        },
        mounted() {

        }
    }
</script>

<style lang="less" scoped>
	body{
		background: #F0F0F0;
	}
	.main-container{
		/*padding: 0.88rem 0 0.2rem 0rem;*/
		.topw{
			height: 3rem;
			margin-bottom: 0.2rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.contw{
			background-color: #FFFFFF;
			padding: 0 0.2rem 0 0.3rem;
			.contt{
				display: flex;
				border-bottom: 1px solid #EDEDED;
				height: 0.74rem;
				span{
					line-height: 0.73rem;
					font-size: 0.34rem;
				}
				.zxpic{
					flex: 1;
					position: relative;
					img{
						width: 0.27rem;
						height: 0.25rem;
						position: absolute;
						top:0.28rem;
						left: 0.2rem;
					}
				}
			}
			ul{
				li{
					border-bottom: 1px solid #EDEDED;
					display: flex;
					height: 2.1rem;
					.lil{
						padding-right: 0.66rem;
						flex:1;
						padding-top:0.18rem;
						.lilt{
							font-size: 0.28rem;
							line-height: 0.48rem;
							color: #333;
						}
						.lilb{
							font-size: 0.22rem;
							color: #999999;
							line-height: 0.26rem;
							margin-top: 0.06rem;
						}
					}
					.lir{
						padding-right: 0.1rem;
						display: flex;
						align-items: center;
						img{
							width: 2.3rem;
							height: 1.5rem;
						}
					}
				}
				li:last-child{
					border-bottom: none;
				}
			}
		}
	}
	.two-txt-cut{
		overflow: hidden;
		text-overflow: ellipsis;/* 显示省略符号来代表被修剪的文本。 */
		display: -webkit-box;
		-webkit-box-orient: vertical;/* 从上向下垂直排列子元素。 */
		-webkit-line-clamp: 2;
	}
</style>