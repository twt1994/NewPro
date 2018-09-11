<template>
	<div class="succ">
    	<!--头部-->
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="main-container">
        	<div class="tip">取票码两分钟内有效，可点击二维码刷新</div>
        	<div class="cont">
        		<div class="inner">
        			<div class="address">
        				<div class="toatalnum">
        					<div class="tickname">顶呱刮</div>
        					<div class="tickpay">￥{{orderListDetail.transAmt}}</div>
        				</div>
        				<p class="ticksn"><b v-if="orderListDetail.accountNum1">10元*{{orderListDetail.accountNum1}}张&nbsp;&nbsp;&nbsp;</b>
        					<b v-if="orderListDetail.accountNum2">5元*{{orderListDetail.accountNum2}}张&nbsp;&nbsp;&nbsp;</b>
        					<b v-if="orderListDetail.accountNum3">2元*{{orderListDetail.accountNum3}}张</b></p>
        				<p class="addressd">订单号：{{orderListDetail.orderNo}}</p>
        			</div>
        			<div class="divide">
        				<div class="line"></div>
        				<div class="word">请到金彩自助机取票</div>
        				<div class="line"></div>
        				<span class="spotl"></span>
        				<span class="spotr"></span>
        			</div>
        			<div class="pickticket">
        				<p class="getw">取彩票</p>
        				<div class="getcode" @click="getOutTickCode('click')">
        					<i v-if="hasRedeem"></i>
        					<div id="qrcodeDiv"></div>
        				</div>
        				<p class="getnum"><b>取票号：</b><i :class="{nono:hasRedeem}">{{qrNumber}}</i></p>
        				<!--<div class="happy">
        					<div class="save">分享给好友</div>
        					<i></i>
        					<div class="share">退单</div>
        				</div>-->
        			</div>
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
	import Api from'@/lib/api';
	import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
    export default {
        name: 'cashprize',
    	data() {
	        return {
	        	head:{
	        		title:'金彩世界',
	        		back:true
	        	},
	        	hasRedeem:false,
	        	orderNo:'',
	        	imgcode64:'',
	        	orderListDetail:'',
	        	qrCode:'',
	        	qrNumber:'',
	        	cashcodeTimer1:'',
	        	cashcodeTimer2:''
	        }
	    },
        components: {
        	HeadTit,
            FooterTab
        },
        created(){
        	this.setTimers();
        },
        computed:{
        },
        methods: {
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
							_this.orderListDetail = data
						}
					})
					.catch(function(response){
						console.log(response)
					})
			},
        	getOutTickCode(isCli){//取票码
        		if(isCli == 'click'){
        			this.setTimers()
        		}
				var params = {
					"orderNo":this.orderNo,
					"openId":"123456"
				}
				var headers = {
					"content-type":"application/x-www-form-urlencoded;charset=UTF-8"
				}
				var _this = this;
				Api.files('/order/getOutTickCode',params)
					.then(function(data){
						if(data.data.code == '200'){
							var data = data.data.data;
							_this.qrCode = data.qrCode;
							_this.qrNumber = data.tickCode
							_this.setCode();
						}
					})
					.catch(function(response){
						console.log(response)
					})
			},
			queryOrderStatusByNo(){//获取取票提示
				var params = {
					"orderNo":this.orderNo
				}
				var headers = {

				}
				var _this = this;
				Api.get('/order/queryOrderStatusByNo',params)
					.then(function(data){
						if(data.data.code == '200'){
							var data = data.data.data;
							if(data == '2'){
								clearInterval(_this.timer1);
								clearInterval(_this.timer2);
								_this.hasRedeem = true;
							}
						}
					})
					.catch(function(response){
						console.log(response)
					})
			},
			getFromSucc(){//获取orderNo
				this.orderNo = this.$route.query.orderNo  
			},
			setCode(){//设置二维码
				var _this = this;
				var text = this.hasRedeem == true?'':_this.getQueryStr("code")
				var bgd = this.hasRedeem == true?'#f3f3f3':'#fff'
				var fgd = this.hasRedeem == true?'#ddd':'#000'
				jquery('#qrcodeDiv').html('')
				jquery('#qrcodeDiv').qrcode({
					render: "canvas",
			        text: text,
			        width: "150", //二维码的宽度
			        height: "150", //二维码的高度
			        background: bgd, //二维码的后景色
			        foreground: fgd, //二维码的前景色
			        //src: 'img/logo.png' //二维码中间的图片
				})
			},
			getQueryStr(obj){
				var params ={
					"qrCode":this.qrCode,
					"currentTime":new Date().getTime()
				}
				var str = ''
				for(let key in params){
					str += key + '=' + params[key] + '&'
				}
				str = str.lastIndexOf('&')?str.slice(0,-1):str
				return str;
			},
			setTimers(){//设置定时器
				clearInterval(this.cashcodeTimer1);
        		clearInterval(this.cashcodeTimer2);
				if(this.$route.path == '/category/cashcode'){
					var _this = this;
					this.cashcodeTimer1 = setInterval(() => {
						_this.getOutTickCode();
					},120000)
					this.cashcodeTimer2 = setInterval(() => {
						_this.queryOrderStatusByNo();
					},300)
				}else{
					this.cashcodeTimer1 = ''
					this.cashcodeTimer2 = ''
				}
			}
        },
        beforeMount(){
        	this.getFromSucc();
        },
        mounted() {
			this.getOutTickCode();
			this.queryOrderByNo();
        },
        beforeRouteLeave (to, from, next){
        	clearInterval(this.cashcodeTimer1)
        	clearInterval(this.cashcodeTimer2)
        	next()
        }
    }
</script>

<style lang="less" scoped="scoped">
	.main-container{
		/*padding: 0.88rem 0 1.2rem 0rem;*/
		.tip{
			height: 0.53rem;
			line-height: 0.53rem;
			background: #fef3d9;
			font-size: 0.24rem;
			color: #ffab2b;
			text-align: center;
		}
		.cont{
			padding: 0 0.3rem;
			.inner{
				background: #fff;
				padding-bottom: 0.56rem;
				.address{
					padding: 0.1rem 0.4rem 0.36rem 0.4rem;
					.toatalnum{
						font-weight: 600;
						font-size: 0.48rem;
						line-height:0.62rem;
						display:flex;
						.tickname{
							flex: 1;
						}
					}
					.ticksn b{
						line-height: 0.5rem;
						font-size: 0.3rem;
						font-weight: normal;
					}
					.addressd{
						font-size: 0.22rem;
						line-height: 0.38rem;
						color: #808080;
					}
				}
				.divide{
					height: 0.34rem;
					display: flex;
					position: relative;
					padding: 0 0.43rem;
					align-items: center;
					line-height: 0.34rem;
					.line{
						width: 1.7rem;
						border-top: 1px dashed #eeeeee;	
					}
					.word{
						flex: 1;
						text-align: center;
						font-size: 0.22rem;
						color: #ffd28e;
					}
					span{
						position: absolute;
						width: 0.34rem;
						height: 0.34rem;
						top: 0;
						background: #F0F0F0;
						border-radius: 50%;;
					}
					.spotl{
						left: -0.17rem;
					}
					.spotr{
						right: -0.17rem;
					}
				}
				.pickticket{
					.getw{
						font-size: 0.3rem;
						line-height: 1.16rem;
						padding-left: 0.4rem;
						margin-bottom: 0.3rem;
					}
					.getcode{
						width: 3rem;
						height: 3rem;
						background: #d0d0d0;
						margin: 0 auto;
						position: relative;
						i{
							position: absolute;
							width: 1.8rem;
							height: 1.6rem;
							background: url(../../assets/images/category/wanchen.png) no-repeat;
							background-size: contain;
							top:-0.5rem;
							right: -0.5rem;
						}
						div{
							width: 100%;
							height: 100%;
							display: flex;
							justify-content: center;
							align-items: center;
							img{
								
							}
						}
					}
					.getnum{
						line-height: 2.13rem;
						text-align: center;
						margin-bottom: 0.47rem;
						b{
							font-size: 0.22rem;
							color: #808080;
						}
						i{
							font-size: 0.48rem;
							color: #c2bfbf;
							font-style: normal;
							font-weight: 400;
						}
						i.nono{
							text-decoration: line-through;
						}
					}
					.happy{
						height: 0.34rem;
						font-size: 0.3rem;
						display: flex;
						align-items: center;
						padding: 0 1rem;
						div{
							flex: 1;
							position: relative;
						}
						i{
							width: 1px;
							height: 0.3rem;
							background: #666;
							display: block;
						}
						.save{
							padding-right: 0.4rem;
							text-align: right;
						}
						.save:before{
							content: '';
							position: absolute;
							width: 0.4rem;
							height: 0.4rem;
							background:url(../../assets/images/category/share.jpg)no-repeat;
							background-size: contain;
							left: 0;
						}
						.share{
							padding-left: 0.4rem;
							text-align: right;
						}
						.share:before{
							content: '';
							position: absolute;
							width: 0.4rem;
							height: 0.4rem;
							background: url(../../assets/images/category/save.jpg)no-repeat;
							background-size: contain;
							left: 0.4rem;
						}
					}
				}
			}
		}
	}
</style>