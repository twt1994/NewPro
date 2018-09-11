<template>
	<div class="user">
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="monthhero-container">
        	<div class="back_box">
			<!--晒彩top-->
			<div class="back_title">顶呱刮月度榜单</div>
				<!--展示列表-->
				<ul class="back_h">
					<li>微信昵称</li>
					<li>晒彩日期</li>
					<li>彩票面值</li>
					<li>中奖金额</li>
				</ul>
				<!--展示信息-->
				<ul>
					<li class="back_text" v-for="item in lists" :openId="item.openId">
						<div class="headw">
							<div class="headpicw"><img :src="item.headImgUrl" alt="" /></div>
							<div class="name">{{item.nickName}}</div>
						</div>
						<div class="time">{{item.showTicket}}</div>
						<div class="pay">{{item.ticketPrice}}</div>
						<div class="win">{{item.winMoney}}</div>
					</li>
				</ul>
				<!--中奖排名百分百-->
				<p>你中奖排名超过<span>85%</span>人</p>
				<!--我要晒彩-->
				<a href="/user/share">我要晒彩</a>
			</div>
		</div>	
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header'

	import '@/style/main.less';

    export default {
        name: 'monthhero',
    	data() {
	        return {
	        	head:{
	        		title:'金彩世界',
	        		back:true
	        	},
	        	lists:''
	        }
	    },
        components: {
        	HeadTit,

        },
        methods: {
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
			this.queryWinList()
        }
    }
</script>

<style lang="less" scoped="scoped">
	body{
		background: #FFFFFF;
	}
	*{
		box-sizing: border-box;
	}
	.monthhero-container{
		background: #FFFFFF;
		/*padding: 0.88rem 0 0.3rem 0rem;*/
		padding-bottom: 1.2rem;
		.back_box {
		  width: 100%;
		}
		.back_box .back_title {
		  width: 100%;
		  height: 2rem;
		  background: #fed703;
		  line-height: 2rem;
		  text-align: center;
		  font-size: 0.54rem;
		  color: #333332;
		}
		.back_h {
		  width: 100%;
		  height: 0.87rem;
		  border-bottom: 1px solid #b2b2b2;
		}
		.back_h li {
		  width: 25%;
		  height: 0.87rem;
		  line-height: 0.87rem;
		  font-size: 0.3rem;
		  color: #333333;
		  float: left;
		  text-align: center;
		}
		.back_text {
		  width: 100%;
		  height: 1.4rem;
		  display: flex;
		  border-bottom:1px solid #E5E5E5;
		}
		.back_text>div {
			flex: 1;
		  font-size: 0.28rem;
		  text-align: center;
		}
		.headw{
			.headpicw{
				height: 0.8rem;
				padding-top:0.2rem;
				img{
					width: 0.6rem;
					height: 0.6rem;
					margin: 0 auto;
					background: #959595;
					border-radius: 50%;
					display: block;
				}
			}
			.name{
				line-height: 0.5rem;
			}
		}
		.time{
		    line-height: 1.4rem;
		}
		.pay{
			line-height: 1.4rem;
		}
		.win{
			line-height: 1.4rem;
		}
		.back_text li:nth-child(1) {
		  color: red;
		}
		.back_text .back_border {
		  width: 6.9rem;
		  height: 1px;
		  position: absolute;
		  left: 50%;
		  margin-left: -3.45rem;
		  bottom: 0;
		  background: #b2b2b2;
		}
		.back_box p {
		  width: 100%;
		  height: 0.92rem;
		  line-height: 0.92rem;
		  text-align: center;
		  font-size: 0.3rem;
		  margin-top: 0.38rem;
		}
		.back_box a {
		  display: block;
		  width: 6.86rem;
		  height: 0.7rem;
		  color: #fff;
		  text-align: center;
		  font-size: 0.3rem;
		  line-height: 0.7rem;
		  background: #fed703;
		  margin: 0 auto;
		  -moz-border-radius: 0.08rem;
		  /* Firefox */
		  -webkit-border-radius: 0.08rem;
		  /* Safari 、Chrome */
		  border-radius: 0.08rem;
		  /* Opera 10.5+, IE6+ 使用 IE-CSS3*/
		}

		
	}

</style>