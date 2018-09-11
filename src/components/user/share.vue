<template>
	<div class="user">
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="main-container">
        	<!----我的--top-->
			<user-head></user-head>
			<div class="my_cont">
				<div class="cont_box">
					<div class="orderwrap">
						<div class="orderb">彩票类别</div>
						<span></span>
						<select name="order" id="">
							<option value=""></option>
						</select>
					</div>
					<div class="winningamount">
						<div class="winningamountb">中奖金额</div>
						<span></span>
					</div>
					<div class="cameraw">
						<div class="camera">
							<div class="camerapic"></div>
							<img src="" alt="" id="file_img"/>
							<input type="file" @click="readImg"/>
						</div>
					</div>
					<div class="btn" @click="weixinToken">发布</div>
				</div>
				
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
	        	openId:1,
	        	productNo:1,
	        	winMoney:1,
	        	imgUrl:'',
	        }
	    },
        components: {
        	HeadTit,
            UserHead
        },
        methods: {
			createWin:function(){
				var _this = this;
            	var url = 'http://47.75.157.75:8084/createWin'
            	var data = new FormData();
            	data.append('openId',this.openId)
            	data.append('productNo',this.productNo)
            	data.append('winMoney',this.winMoney)
            	
            	_this.$http.post(url,data)
					.then(function(data){
						console.log(data)
						if(data.data.code == '200'){
//							alert('成功')
						}
					})
					.catch(function (response) {
					    console.log(response);
					}) 
			},
			getParams () {  
		        this.openId = this.$route.query.openId  
		    },
		    readImg (){
		    	var oInput = document.getElementsByTagName('input')[0]
		    	var _this = this
		    	oInput.onchange = function(){
		    		var file = this.files[0]
		    		if(!/image\/\w+/.test(file.type)){ 
				        alert("文件必须为图片！"); 
				        return false; 
				    }
		    		console.log(file)
		    		if(!!file){
				        var reader = new FileReader();
				        // 图片文件转换为base64
				        reader.readAsDataURL(file);
				        reader.onload = function(){
				          // 显示图片
				          document.getElementById("file_img").src = this.result;
				          _this.imgUrl = this.result
				        }
					}
		    	}
		    	
		    },
		    weixinToken(){
		    	
		    },
		    weixinShare () {
		    	var friendTitle = '金彩世界'
		    	var title = '顶呱刮'
		    	var desc = '中大奖，等着你'
		    	var link = 'localhost:8088'
		    	var imgUrl = this.imgUrl;
		    	if(imgUrl == ''){
		    		return;
		    	}
			    wx.ready(function(){
			        wx.onMenuShareTimeline({
			            title: title,
			            link: link,
			            imgUrl: imgUrl,
			            success: function () {
			                // 用户确认分享后执行的回调函数
			                alert('分享到朋友圈成功');
			            },
			            cancel: function () {
			                // 用户取消分享后执行的回调函数
			                //alert('你没有分享到朋友圈');
			            }
			        });
			        wx.onMenuShareAppMessage({
			            title: title,
			            desc: desc,
			            link: link,
			            imgUrl: imgUrl,
			            trigger: function (res) {
			                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			            },
			            success: function (res) {
			                alert('分享给朋友成功');
			            },
			            cancel: function (res) {
			                //alert('你没有分享给朋友');
			            },
			            fail: function (res) {
			                alert(JSON.stringify(res));
			            }
			        });

			    });
			    wx.error(function(res){
			        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
			        alert(JSON.stringify(res));
			    });
			}
        },
        created(){
//      	this.getParams();
        },
        mounted() {
			this.createWin();
        }
    }
</script>

<style lang="less" scoped="scoped">
	body{
		background: #f3f3f3;
	}
	.main-container{
		/*padding: 0.88rem 0 1.2rem 0rem;*/
		.my_cont{
			padding: 0.2rem 0.3rem 0rem 0.3rem;
			.cont_box{
				border-radius: 5px;
				background: #FFFFFF;
				padding: 0.15rem 0.35rem 1rem 0.35rem;
				.orderwrap{
					padding-left: 0.2rem;
					position:relative;
					.orderb{
						border-bottom: 1px solid #dedede;
						height: 0.64rem;
						line-height: 0.64rem;
						font-size: 0.26rem;
						color: #999999;
						padding-left: 1.1rem;
					}
					span{
						position: absolute;
						width: 0.35rem;
						height: 0.4rem;
						background: url(../../assets/images/user/order.png)no-repeat;
						background-size: contain;
						left: 0.23rem;
						top: 0.12rem;
					}
					select{
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
						opacity: 0;
					}
				}
				.winningamount{
					padding-left: 0.2rem;
					position: relative;
					.winningamountb{
						border-bottom: 1px solid #dedede;
						font-size: 0.26rem;
						color: #999999;
						padding-left: 1.1rem;
						height: 0.85rem;
						line-height: 0.85rem;
					}
					span{
						position: absolute;
						width: 0.35rem;
						height: 0.4rem;
						background: url(../../assets/images/user/winningamount.png)no-repeat;
						background-size: contain;
						left: 0.23rem;
						top: 0.22rem;
					}
				}
				.cameraw{
					padding-top: 0.5rem;
					padding-bottom: 0.3rem;
					.camera{
						height: 3.1rem;
						background-color: #e6e5e5;
						display:flex;
						align-items: center;
						justify-content: center;
						position:relative;
						.camerapic{
							width: 1.7rem;
							height: 1.4rem;
							background: url(../../assets/images/user/camera.png)no-repeat;
							background-size: contain;
						}
						img,input{
							position: absolute;
							width:100%;
							height: 100%;
						}
						input{
							opacity: 0;
						}
					}
				}
				.btn{
					width: 5rem;
					height: 0.7rem;
					background: #fed703;
					border-radius: 5px;
					font-size: 0.32rem;
					line-height: 0.7rem;
					color: #000000;
					text-align: center;
					margin: 0 auto;
				}
			}
		}
	}

</style>