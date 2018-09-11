<template>
	<div class="succ">
    	<!--头部-->
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="main-container">
        	<img class="pict" src="../../assets/images/category/pict.png"></img>
        	<div class="lasttw">
        		<p>支付剩余时间</p>
        		<div class="timebox">
        			<span>{{leftTime.time1}}</span>
        			<span>{{leftTime.time2}}</span>
        			<i>:</i>
        			<span>{{leftTime.time3}}</span>
        			<span>{{leftTime.time4}}</span>
        		</div>
        		<div class="monbox">
        			<p class="num">￥{{transAmt}}</p>
        			<p class="detail">金彩世界－订单编号:{{orderNo}}</p>
        		</div>
        	</div>
        	<div class="paycard">
        		<div class="cardwrap">
        			<div class="cardnow">
        				<img class="img" src="../../assets/images/category/longcard.png"></img>
        				<div class="cname">龙支付</div>
        				<img v-if="choseCard === 'longcard'" class="chose" src="../../assets/images/public/dui.png"></img>
        				<img @click="getCardName('longcard')" v-if="choseCard !== 'longcard'" class="chose" src="../../assets/images/public/quan.png"></img>
        			</div>
        			<div class="cardchange">
        				<div class="cname">使用新卡支付</div>
        				<img class="chose" src="../../assets/images/public/next.png"></img>
        			</div>
        		</div>
        	</div>
        	<div class="payway">
        		<ul>
        			<li>
        				<div class="paywayt">
        					<img class="imgpic" src="../../assets/images/public/weixin.png"></img>
        					<div class="wayw">微信支付</div>
        					<img v-if="choseCard === 'weixin'" class="wayc" src="../../assets/images/public/dui.png"></img>
        					<img @click="getCardName('weixin')" v-if="choseCard !== 'weixin'" class="wayc" src="../../assets/images/public/quan.png"></img>
        				</div>
        				<div class="paywayb">推荐安装微信5.0及以上版本使用</div>
        			</li>
        		</ul>
        		<div class="more">
        			<span>更多支付方式</span>
        			<img src="../../assets/images/public/down.png"></img>
        		</div>
        	</div>
 			<div class="paymon" @click="simulationPayCalBack">
 				确认支付
 				<b>￥{{transAmt}}</b>
 			</div>
        </div>
<!--        <footer-tab current-tab="category"/>-->
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header'
	import FooterTab from '../../components/public/Footer';
	import '@/style/main.less';
	import Api from'@/lib/api';
	import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

    export default {
        name: 'payway',
    	data() {
	        return {
	        	head:{
	        		title:'支付订单',
	        		back:true
	        	},
	        	orderNo:'',
	        	transAmt:0,
	        	closeTime:'',
	        	card:[
	        		{
	        			name:'longcard',
	        			ischose:false
	        		},
	        		{
	        			name:'jiahang',
	        			ischose:false
	        		},
	        		{
	        			name:'zhaoshang',
	        			ischose:false
	        		}
	        	],
	        	choseCard:'weixin',
	        	leftTime:{
	        		time1:0,
	        		time2:0,
	        		time3:0,
	        		time4:0
	        	},
	        	timer:'',
	        	canpay:true,
	        	totalLeftTime:5,
	        }
	    },
        components: {
        	HeadTit,
            FooterTab
        },
        computed:{
        	
        },
        created(){  
	       this.getFromCategory()  
	    },
        methods: {
            getCardName(name){//选择支付方式
            	this.choseCard = name
            },
            getFromCategory () {//获取订单号
		        this.orderNo = this.$route.query.orderNo  
		    },
			goSucc (){//页面跳转
				this.$router.push({  
	                path:'category/succ',  
	                name:'succ',  
	                params:{  
	                    orderNo:this.orderNo 
	                },
	                query:{
	                	orderNo:this.orderNo  
	                }
	            })
			},
			queryOrderByNo(){//查询订单信息
				var params = {
					"orderNo":this.orderNo
				}
				var headers = {
					
				}
				var _this = this;
				Api.get('/order/queryOrderByNo',params)
					.then(function(data){
						if(data.data.code == '200'){
							var data = data.data.data;
							_this.orderNo = data.orderNo;
							_this.transAmt = data.transAmt;
							_this.closeTime = new Date(data.closeTime).getTime();
            				_this.leftTimer();	
						}
					})
					.catch(function(response){
						console.log(response)
					})
			},
			simulationPayCalBack(){//支付订单
				if(this.totalLeftTime <= 0){
					alert("支付超时")
					return;
				}
				if(this.choseCard != "weixin"){
					alert("建设中，目前只支持微信支付")
					return;
				}
				var params = {
					"out_trade_no":this.orderNo,
					"transaction_id":"123456",
					"openid":"123456"
				}
				var headers = {
					"content-type":"application/json;charset=UTF-8"
				}
				var _this = this
				Api.post('/wxpay/simulationPayCalBack',params,headers)
					.then(function(data){
						if(data.data == "success"){
							var data = data.data.data
							_this.goSucc();
						}
					})
					.catch(function(response){
						console.log(response)
					})
			},
		    leftTimer(){ //倒计时
		    	clearInterval(this.timer);
		    	var _this = this;
		    	var days = 0;
	    		var hours = 0;
	    		var minutes = 0;
	    		var seconds = 0;
	    		
		    	var timenow = new Date().getTime();
		    	var leftTime = _this.closeTime-timenow;
		    	
		    	this.timer = setInterval(function(){
			  		if(leftTime <= 0){
			  			_this.canpay = false
			  			clearInterval(_this.timer)
			  			days = '00';
			    		hours = '00';
			    		minutes = '00';
			    		seconds = '00';
			    		_this.leftTime.time1 = minutes.charAt(0);
					  	_this.leftTime.time2 = minutes.charAt(1);
					  	_this.leftTime.time3 = seconds.charAt(0);
					  	_this.leftTime.time4 = seconds.charAt(1);
					  	_this.totalLeftTime = leftTime;
			  		}else{
			  			days = _this.checkTime(parseInt(leftTime/1000/60/60/24,10)) + ''
					  	hours = _this.checkTime(parseInt(leftTime / 1000 / 60 / 60 % 24 ,10)) + ''
					  	minutes = _this.checkTime(parseInt(leftTime / 1000 / 60 % 60, 10)) + ''
					  	seconds = _this.checkTime(parseInt(leftTime / 1000 % 60, 10)) + ''
					  	_this.leftTime.time1 = minutes.charAt(0);
					  	_this.leftTime.time2 = minutes.charAt(1);
					  	_this.leftTime.time3 = seconds.charAt(0);
					  	_this.leftTime.time4 = seconds.charAt(1);
					  	_this.totalLeftTime = leftTime;
			  			_this.leftTimer();
			  		}
			  	},1000);
			},
			checkTime(i){ //数字保证两位
			  if(i<10){ 
			    i = "0" + i; 
			  } 
			  return i; 
			},
        },
        mounted() {
            this.queryOrderByNo();
        },
        watch:{
        	'$route': 'getFromCategory'  
        }
    }
</script>

<style lang="less" scoped="scoped">
	body{
		background: #f0f0f0;
	}
	.main-container{
		/*padding: 0.88rem 0 1.2rem 0rem;*/
		img{
			width: 100%;
			height: 1.48rem;
		}
		.lasttw{
			text-align: center;
			background: #f9f9f9;
			margin-bottom: 0.2rem;
			p{
				line-height: 0.65rem;
				font-size: 0.26rem;
			}
			.timebox{
				display: flex;
				justify-content: center;
				padding-bottom: 0.2rem;
				span{
					width: 0.3rem;
					height: 0.3rem;
					background: #434343;
					font-size: 0.22rem;
					color: #fff;
					line-height: 0.3rem;
				}
				span:first-child{
					margin-right: 0.07rem;
				}
				span:last-child{
					margin-left: 0.07rem;
				}
				i{
					width: 0.16rem;
					font-style: normal;
					line-height: 0.3rem;
				}
			}
			.monbox{
				height: 1.22rem;
				background: url(../../assets/images/category/iback.png)no-repeat;
				background-size: cover;
				padding-top: 0.1rem;
				background-color: #F0F0F0;
				.num{
					line-height: 0.55rem;
					font-size: 0.48rem;
					font-weight: 600;
				}
				.detail{
					line-height: 0.4rem;
					font-size: 0.22rem;
				}
			}
		}
		.paycard{
			background: #fff;
			margin-bottom: 0.2rem;
			.cardwrap{
				padding:0 0.5rem 0 1rem;
				div{
					height: 1rem;
					position: relative;
					font-size: 0.36rem;
					line-height: 1rem;
					display: flex;
					align-items: center;
					.img{
						position: absolute;
						width: 0.6rem;
						height: 0.6rem;
						left: -0.7rem;
					}
					.cname{
						flex: 1;
					}
				}
				.cardnow{
					border-bottom: 1px solid #d5d4cc;
					.chose{
						width: 0.34rem;
						height: 0.34rem;
					}
				}
				.cardchange{
					.chose{
						width: 0.14rem;
						height: 0.24rem;
					}
				}
			}
		}
		.payway{
			background: #fff;
			ul{
				padding:0 0.5rem 0 0rem;
				li{
					height: 1.1rem;
					border-bottom: 1px solid #d5d4cc;
					padding-top: 0.18rem;
					.paywayt{
						height: 0.37rem;
						line-height: 0.37rem;
						position: relative;
						display:flex;
						align-items: center;
						.imgpic{
							position: absolute;
							width: 0.41rem;
							height: 0.37rem;
							left: 0.4rem;
						}
						.wayw{
							padding-left: 1rem;
							font-size: 0.3rem;
							color: #000;
							font-weight: 600;
							flex: 1;
						}
						.wayc{
							width: 0.34rem;
							height: 0.34rem;
						}
					}
					.paywayb{
						padding-left: 1rem;
						line-height: 0.5rem;
						font-size: 0.22rem;
						color: #959595;
					}
				}
			}
			.more{
				height: 0.68rem;
				line-height: 0.68rem;
				display: flex;
				text-align: center;
				font-size: 0.3rem;
				align-items: center;
				justify-content: center;
				img{
					width:0.24rem;
					height: 0.14rem;
					margin-left: 0.23rem;
				}
			}
		}
		.paymon{
			position: fixed;
			bottom: 0rem;
			left: 0;
			width: 100%;
			height: 0.88rem;
			background: #fed703;
			z-index: 101;
			line-height: 0.88rem;
			font-size: 0.3rem;
			text-align: center;
			b{
				font-weight: 900;
				font-size: 0.48rem;
			}
		}
	}
</style>