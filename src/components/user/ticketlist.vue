<template>
	<div class="ticketlist">
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="ticketlist_container">
        	<div class="container">
        		<ul class="tags">
					<li @click="curId=0" :class="{'active':curId===0}">
						<span><b>5元兑奖券</b><i>({{listnum.num1}})</i></span>
					</li>
					<li @click="curId=1" :class="{'active':curId===1}">
						<span><b>10元兑奖券</b><i>({{listnum.num2}})</i></span>
					</li>
					<li @click="curId=2" :class="{'active':curId===2}">
						<span><b>20元兑奖券</b><i>({{listnum.num3}})</i></span>
					</li>
				</ul>
				<div class="contwrap">
					<ul :class="{'active':curId===0}">
						<li>
							<div class="lit">
								<div class="litl">
									<img src="../../assets/images/user/dd_img.png" alt="" />
								</div>
								<div class="litc">
									<p>文峰</p>
									<p>有效期2018-05-12</p>
								</div>
								<div class="litr">
									<div class="gouse">去使用</div>
								</div>
							</div>
							<div class="lib">
								<b>地址：</b>
								<i>静安区海防路410弄2号1401室</i>
								<span></span>
								<span></span>
							</div>
						</li>
					</ul>
					<ul :class="{'active':curId===1}">
						<li>
							<div class="lit">
								<div class="litl">
									<img src="../../assets/images/user/dd_img.png" alt="" />
								</div>
								<div class="litc">
									<p>千家惠</p>
									<p>有效期2018-05-12</p>
								</div>
								<div class="litr">
									<div class="gouse">去使用</div>
								</div>
							</div>
							<div class="lib">
								<b>地址：</b>
								<i>静安区海防路410弄2号1401室</i>
								<span></span>
								<span></span>
							</div>
						</li>
					</ul>
					<ul :class="{'active':curId===2}">
						<li>
							<div class="lit">
								<div class="litl">
									<img src="../../assets/images/user/dd_img.png" alt="" />
								</div>
								<div class="litc">
									<p>全家</p>
									<p>有效期2018-05-12</p>
								</div>
								<div class="litr">
									<div class="gouse">去使用</div>
								</div>
							</div>
							<div class="lib">
								<b>地址：</b>
								<i>静安区海防路410弄2号1401室</i>
								<span></span>
								<span></span>
							</div>
						</li>
					</ul>
				</div>
        	</div>
        </div>
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header';
	import '@/style/main.less';
    import {mapActions} from 'vuex'
    export default {
        name: 'orderlist',
    	data() {
	        return {
	        	head:{
	        		title:'我的兑奖券',
	        		back:true
	        	},
	        	curId:0,
	        	listnum:{
	        		num1:0,
	        		num2:0,
	        		num3:0
	        	}
	        }
	    },
        components: {
        	HeadTit,
        },
        computed:{
        
        },
        methods: {
            getlistnum:function(){
        		var wrap = document.getElementsByClassName('contwrap')[0]
        		var uls = wrap.children
        		this.listnum.num1 = uls[0].children.length;
        		this.listnum.num2 = uls[1].children.length;
        		this.listnum.num3 = uls[2].children.length;
        	},
        	queryWinList(){
				var _this = this
				var url = 'http://47.75.157.75:8084/queryWinList?page=1&rows=10'
				_this.$http.get(url)
					.then(function(data){
						console.log(data)
						if(data.data.code == '200'){
							console.log(data.data)
							_this.lists = data.data.data.dataList
						}
					})
					.catch(function (response) {
					    console.log(response);
					}) 
			},
        },
        mounted() {
            this.getlistnum();
		},
    }
</script>

<style lang="less" scoped="scoped">
	body{
		position: relative;
	}
	.ticketlist_container{
		/*padding: 0.88rem 0 1.2rem 0rem;*/
		.container{
			padding-top: 0.7rem;
			.tags{
				display: flex;
				height: 0.7rem;
				background: #000000;
				padding: 0 0.3rem;
				position: fixed;
				top: 0rem;
				left: 0;
				width: 100%;
				box-sizing: border-box;
				li{
					color: #FFFFFF;
					font-size: 0.3rem;
					color: #FFFFFF;
					span{
						padding-bottom: 0.1rem;
						line-height: 0.6rem;
						b{
							font-weight: normal;
						}
						i{
							color: #fed703;
							font-style: normal;
						}
					}
				}
				li:nth-child(1){
					text-align: left;
				}
				li:nth-child(2){
					text-align: center;
					flex: 1;
				}
				.active{
					span{
						border-bottom: 1px solid #FFFFFF;
					}
				}
			}
			.contwrap{
				padding: 0.3rem 0.3rem 0 0.3rem;
				.active{
					display: block;
				}
				ul{
					display: none;
					li{
						height: 2.2rem;
						border-radius: 5px;
						overflow: hidden;
						background: #FFFFFF;
						.lit{
							height: 1.65rem;
							display:flex;
							.litl{
								padding-left: 0.2rem;
								padding-right: 0.2rem;
								display: flex;
								align-items: center;s
								img{
									width: 2.22rem;
									height: 1.11rem;
								}
							}
							.litc{
								padding-top: 0.3rem;
								flex: 1;
								p:first-child{
									font-size: 0.3rem;
									color: #000000;
									line-height: 0.3rem;
								}
								p:last-child{
									font-size: 0.26rem;
									color: #999999;
									line-height: 0.44rem;
								}
							}
							.litr{
								padding-right: 0.2rem;
								display: flex;
								align-items: center;
								.gouse{
									width: 1.37rem;
									height: 0.49rem;
									border-radius: 5px;
									overflow: hidden;
									background-color: #f7bf06;
									color: #666666;
									font-size: 0.26rem;
									line-height: 0.49rem;
									text-align: center;
								}
							}
						}
						.lib{
							position: relative;
							border-top: 1px dashed #a0a0a0;
							padding-left: 0.2rem;
							line-height: 0.48rem;
							b{
								color: #999999;
								font-size: 0.26rem;
							}
							i{
								font-style: normal;
								color: #999999;
							}
							span{
								position: absolute;
								width: 0.14rem;
								height: 0.14rem;
								border-radius: 50%;
								background: #F6F6F6;
								top:-0.07rem;
							}
							span:first-child{
								left: -0.07rem;
							}
							span:last-child{
								right: -0.07rem;
							}
						}
					}
				}
			}
		}
	}

</style>