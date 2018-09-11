<template>
	<div class="cart">
        <header>
           <a href="#" class="iconfont icon-chazi"></a>
            <h3>购物车</h3>
            <a href="#" class="iconfont icon-arrow-right-copy"></a>
        </header>
        <!-- // 头部选项卡切换 -->
        <div class="tab-header">
            <ul>
                <li
                v-for="(item,index) in tabs" :key="item.id" @click="tabClick(index)" :class="{active:index===nowIndex}"><a href="javascript:;">{{item}}</a></li>
            </ul>
        </div>
        <div class="cart-container" v-show="nowIndex===0">
        	<ul>
        		<li v-for="item in productLists" v-bind:key="item.id">
        			<div class="lit">
        				<div class="imgw"><img class="lottery" src="../../assets/images/other/zhgh.png"></img></div>
        				<!-- <div class="imgw"><img class="lottery" :src="item.productPicUrl"></img></div> -->
        			</div>
        			<div class="lib">
        				<div class="lottery_num">{{item.ticketPrice}}元{{item.productName}}</div>
        				<div class="lottery_nums">
        					{{item.accountNum}}
        					<span @click="item.accountNum>0?item.accountNum--:''"></span>
        					<span @click="item.accountNum<item.totalStock&&item.accountNum<9?item.accountNum++:''"></span>
        				</div>
        			</div>
        		</li>
        	</ul>
        	<div class="total">
        		<div class="totalt">
        			<div class="totaltl">活动抵用券</div>
        			<div class="totaltr">
        				无可用
        				<span>></span>
        			</div>
        		</div>
        		<div class="totalb">
        			<div class="totalbl">
        				<div>
        					<span><i>{{getTotal.totalNum || 0}}</i></span>
        				</div>
        				<span>￥</span>
        				<span>{{getTotal.totalPrice || 0}}</span>
        			</div>
        			<div class="totalbr" @click="createOrder">去结算</div>
        		</div>
        	</div>
            <footer-tab current-tab="category"/>
        </div>
        <div class="cart-content" v-show="nowIndex===1">
            <div class="cart-box">
                <div class="detail-bouns">
                    <div class="bouns-detail">
                        <span>超级大乐透</span>
                        <span>第10096期</span>
                        <span>开奖：</span>
                        <span>08-17 周五</span>
                    </div>
                    <div class="circle">
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span class="circle-end">13</span>
                        <span class="circle-end">13</span>
                        <i class="iconfont icon-jiantou" @click="toLottery"></i>
                    </div>
                </div>
            </div>
            <div class="cart-box">
                <div class="detail-bouns">
                    <div class="bouns-detail">
                        <span>七星彩</span>
                        <span>第10096期</span>
                        <span>开奖：</span>
                        <span>08-17 周五</span>
                    </div>
                    <div class="circle">
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <i class="iconfont icon-jiantou"></i>
                    </div>
                </div>
            </div>
            <div class="cart-box">
                <div class="detail-bouns">
                    <div class="bouns-detail">
                        <span>排列3</span>
                        <span>第10096期</span>
                        <span>开奖：</span>
                        <span>08-17 周五</span>
                    </div>
                    <div class="circle">
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <i class="iconfont icon-jiantou"></i>
                    </div>
                </div>
            </div>
            <div class="cart-box">
                <div class="detail-bouns">
                    <div class="bouns-detail">
                        <span>排列5</span>
                        <span>第10096期</span>
                        <span>开奖：</span>
                        <span>08-17 周五</span>
                    </div>
                    <div class="circle">
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <i class="iconfont icon-jiantou"></i>
                    </div>
                </div>
            </div>
            <div class="cart-boxs">
                <div class="detail-bouns">
                    <div class="bouns-detail">
                        <span>胜负彩</span>
                        <span>第10096期</span>
                        <span>开奖：</span>
                        <span>08-17 周五</span>
                    </div>
                    <div class="circle">
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <i class="iconfont icon-jiantou"></i>
                    </div>
                    <div class="circle">
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <!-- <i class="iconfont icon-jiantou"></i> -->
                    </div>
                </div>
            </div>
            <div class="cart-box">
                <div class="detail-bouns">
                    <div class="bouns-detail">
                        <span>22选5</span>
                        <span>第10096期</span>
                        <span>开奖：</span>
                        <span>08-17 周五</span>
                    </div>
                    <div class="circle">
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <i class="iconfont icon-jiantou"></i>
                    </div>
                </div>
            </div>
            <div class="cart-box">
                <div class="detail-bouns">
                    <div class="bouns-detail">
                        <span>22选5</span>
                        <span>第10096期</span>
                        <span>开奖：</span>
                        <span>08-17 周五</span>
                    </div>
                    <div class="circle">
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <i class="iconfont icon-jiantou"></i>
                    </div>
                </div>
            </div>
            <div class="cart-box">
                <div class="detail-bouns">
                    <div class="bouns-detail">
                        <span>22选5</span>
                        <span>第10096期</span>
                        <span>开奖：</span>
                        <span>08-17 周五</span>
                    </div>
                    <div class="circle">
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span>13</span>
                        <span class="circle-end">13</span>
                        <i class="iconfont icon-jiantou"></i>
                    </div>
                </div>
            </div>
        </div>
        <!-- <footer-tab current-tab="category"/> -->
	</div>
</template>

<script>
	// import HeadTit from '../../components/public/Header'
	import FooterTab from '../../components/public/Footer';
	import '@/style/main.less';
	import Api from'@/lib/api';
	import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
    export default {
        name: 'category',
    	data() {
	        return {
                tabs: ['顶呱刮','体育彩票' ],
                nowIndex:0,
	        	total_num:0,
	        	total_price:0,
	        	productLists:'',
	        	openid:'',
	        	buyproducts:{},
	        	orderNo:'',
	        	authorization:'',
	        }
	    },
	    components: {
        	// HeadTit,
            FooterTab
        },
	    computed:{
            getTotal:function(){//获取总价和产品总件数
                var totalPrice=0;
                var totalNum = 0;
                for(var i=0,len=this.productLists.length;i<len;i++){
                    //总价累加
                    totalPrice+=this.productLists[i].accountNum*this.productLists[i].ticketPrice;
                    totalNum+=this.productLists[i].accountNum
                }
                this.total_num = totalNum
                this.total_price = totalPrice;
                return {totalNum,totalPrice}
            },
	    },
        methods: {
            //选项卡切换
            tabClick(index) {
                this.nowIndex = index;

        },
        toLottery(){
            this.$router.push('/category/lottery')
        },
        	getAuthenication(){//限权限制
		    	var params = {
		    		"username":"admin",
		    		"password":"admin",
		    		"channel":"MOB"
		    	}
		    	var _this = this
		    	Api.files('/getAuthenication',params)
			    	.then(function(data){
				    	_this.authorization = data.headers['authorization'];
				    	_this.getproducts();
				    })
			    	.catch(function(error){
			    		console.log(error)
			    	})
		    },
			getproducts:function(){//获取商品列表
				var headers = {
					"Authorization":this.authorization,
					"Content-Type":"application/json"
				}
				var _this = this
				Api.get('/queryPrdAll','',headers)
					.then(function(data){
						var data = data.data.data
						for(var i = 0;i<data.length;i++){
							data[i].accountNum = 0;
						}
						_this.productLists = data;
					})
					.catch(function(error){
			    		console.log(error)
			    	})
			},
			goCategory:function(){//页面跳转
				this.$router.push({
	                path:'category/payway',
	                name:'payway',
	                params:{
	                 orderNo:this.orderNo
	                },
	                query:{
	                	orderNo:this.orderNo
	                }
	            })
			},
			getbuyproducts:function(){//获取购买的商品详情
	    		for(var i = 0;i<this.productLists.length;i++){
					this.buyproducts["accountNum"+(i+1)] = this.productLists[i].accountNum || 0
					this.buyproducts["productNo"+(i+1)] = this.productLists[i].productNo || ''
				}
				this.buyproducts["transAmt"] = this.total_price || 0;
				this.buyproducts["openId"] = "123456";
	    	},
            createOrder:function(){//创建订单
            	if(this.total_price <= 0){
            		alert('请选择商品')
            		return;
            	}
            	var headers = {
            		"Content-Type": "application/json",
					"Authorization":this.authorization
            	}
            	var _this = this;
            	_this.getbuyproducts();
            	Api.post('/order/createOrder',this.buyproducts,headers)
					.then(function(data){
						console.log(data)
						if(data.data.code == '200'){
							_this.orderNo = data.data.data.orderNo;
							_this.goCategory()
						}
					})
					.catch(function(error){
			    		console.log(error)
			    	})
			},
			numchange:function(num,total,flag){//加减提示语
				if(flag == 1){
					if(num<total){
						num++;
					}else{
						alert('没有更多了！')
					}
				}
				if(flag == 0){
					if(num > 0){
						num--;
					}else{
						alert('不能再少了！')
					}
				}

			},
        },
        mounted() {
//      	this.getAuthenication();
        	this.getproducts();
        }
    }
</script>
<style lang="less" scoped="scoped">
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(248,248,248,0.82);
    line-height: 0.88rem;
    display: flex;
    justify-content: space-around;
    a{
        font-size:0.4rem;
        color: #000;
    }
}
.tab-header{
    padding-top: 0.88rem;
    ul{
        display: flex;
        justify-content: space-around;
        li{
            padding: 0.1rem 0;
            a{
            font-family: MicrosoftYaHei;
            font-size: 16px;
            color: #999999;
            }
        }
        .active{
                border-bottom: 2px solid #F5A623;
                padding-bottom: 0.15rem;
                a{
                    color: #F5A623;
                    font-family: MicrosoftYaHei;
                    font-size: 16px;
                }
            }
    }
}
	.cart-container{
		padding: 0.12rem 0.2rem;
		ul{
			li{
				height: 2.7rem;
				margin-bottom: 0.3rem;
				border-radius: 5px;
				overflow: hidden;
				background: url(../../assets/images/category/cart.png) no-repeat;
				background-size: cover;
				.lit{
					height: 2rem;
					display:flex;
					align-items:center;
					padding-left:0.3rem;
					.imgw{
						width: 2.46rem;
						height: 1.53rem;
						background: #fed703;
						padding: 0.05rem;
						.lottery{
							width: 100%;
							height: 100%;
							background: #616161;
						}
					}
				}
				.lib{
					padding-left:0.3rem;
					padding-right: 0.5rem;
					display: flex;
					.lottery_num{
						line-height: 0.7rem;
						color: #000;
						font-weight: 900;
						font-size: 0.3rem;
						flex: 1;
					}
					.lottery_nums{
						width: 1.6rem;
						height: 0.7rem;
						position: relative;
						line-height: 0.7rem;
						text-align: center;
						font-size: 0.3rem;
						span{
							position: absolute;
							width: 0.38rem;
							height: 0.38rem;
							top: 0.16rem;
						}
						span:first-child{
							left: 0;
							background: url(../../assets/images/category/jian.png)no-repeat;
							background-size: contain;
						}
						span:last-child{
							right: 0rem;
							background: url(../../assets/images/category/jia.png)no-repeat;
							background-size: contain;
						}
					}
				}
			}
		}
		.total{
			height: 1.5rem;
			.totalt{
				height: 0.7rem;
				background-color: #9e9666;
				font-size: 0.3rem;
				line-height: 0.7rem;
				padding: 0 0.3rem;
				color: #000;
				display:flex;
				.totaltl{
					flex: 1;
				}
				.totaltr{
					padding-right: 0.3rem;
					position: relative;
					span{
						position: absolute;
						width: 0.14rem;
						height: 0.16rem;
						right: 0;
						top:0.27rem;
						line-height: 0.16rem;
					}
				}
			}
			.totalb{
				display: flex;
				line-height: 0.8rem;
				.totalbl{
					flex: 1;
					display:flex;
					background:#89867e;
					padding-left:0.3rem;
					font-size: 0.34rem;
					div{
						width: 0.8rem;
						position: relative;
						span{
							width: 0.51rem;
							height: 0.46rem;
							background: url(../../assets/images/category/category.png) no-repeat;
							background-size: cover;
							position: absolute;
							top: 0.17rem;
							i{
								position: absolute;
								width: 0.3rem;
								height: 0.3rem;
								top:-0.07rem;
								left: 0.4rem;
								background: url(../../assets/images/category/yuan.png)no-repeat;
								background-size: cover;
								text-align: center;
								line-height: 0.3rem;
								font-size: 0.2rem;
								color: #fff;
								font-style: normal;
							}
						}
					}

				}
				.totalbr{
					width: 2rem;
					background: #fed703;
					text-align: center;
					font-size: 0.36rem;
					font-weight: 600;
				}
			}
		}
    }
    .cart-content{
   height: auto;
    }
    .cart-box{
        padding: 0.12rem;
        border-bottom: 1px solid #EEEEEE;
        .detail-bouns{
            .bouns-detail{
                // padding: 0.1rem;
                span{
                    font-family: PingFangSC-Regular;
                    font-size: 16px;
                    color: #4A90E2;
                    letter-spacing: 0;
                }
                span:nth-child(2){
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: rgb(29, 23, 23);
                    margin-left: 0.1rem;
                }
                span:nth-child(3){
                        font-size: 14px;
                        color: #999999;
                        margin-left: 0.15rem;
                    }
                span:nth-child(4){
                    font-size: 14px;
                    color: rgb(29, 23, 23);
                }
            }

        }
        .circle{
                padding: 0.12rem;
            span{
                width: 0.6rem;
                height: 0.6rem;
                padding:0px 4px;
                border-radius: 50%;
                border: 1px solid #F5A623;
                font-size: 14px;
                color: #F5A623;
                text-align: center;
                margin-right: 0.2rem;
            }
            .circle-end{
                 color: #53C252;
                 border: 1px solid #53C252;
            }
        }
        i{
            float: right;
            font-style: inherit;
            font-size: 0.4rem;
                color:  #BCBCBC;
            }
    }
    .cart-boxs{
       padding: 0.15rem;
        border-bottom: 1px solid #EEEEEE;
        .detail-bouns{
            // height:1.6rem;
            .bouns-detail{

                span{
                    font-family: PingFangSC-Regular;
                    font-size: 16px;
                    color: #4A90E2;
                    letter-spacing: 0;
                }
                span:nth-child(2){
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: rgb(29, 23, 23);
                    margin-left: 0.1rem;
                }
                span:nth-child(3){
                        font-size: 14px;
                        color: #999999;
                        margin-left: 0.15rem;
                    }
                span:nth-child(4){
                    font-size: 14px;
                    color: rgb(29, 23, 23);
                }
            }
         }
        .circle{
                padding: 0.12rem;
            span{
                    width: 0.6rem;
                    height: 0.6rem;
                    padding: 0px 4px;
                    border-radius: 50%;
                    border: 1px solid #F5A623;
                    font-size: 14px;
                    color: #F5A623;
                    text-align: center;
                    margin-right: 0.2rem;
            }
            .circle-end{
                color: #53C252;
                 border: 1px solid #53C252;
            }
        }
        i{
            float: right;
            font-style: inherit;
            font-size: 0.4rem;
                color:  #BCBCBC;
                margin-top: 0.2rem;
            }

    }
</style>
