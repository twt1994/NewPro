<template>
	<div class="user">
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="orderlist-container">
        	<div class="indent_box">
				<!--等待取票--成功取票--订单历史--选项-->
				<ul class="indent_option">
					<li @click="queryOrderByWX(0,objs[0].flag)" :class="{'active':i===0}">等待取票</li>
					<li @click="queryOrderByWX(1,objs[1].flag)" :class="{'active':i===1}">成功取票</li>
					<li @click="queryOrderByWX(2,objs[2].flag)" :class="{'active':i===2}">订单历史</li>
				</ul>
				<!--选项对应页面-->
				<div class="indent_list">
					<!--等待取票-->
					<div class="indent_listbox" :class="{'cur':i===0}">
						<div class="indent_history" v-for="item in objs[0].orderlist" :orderNo="item.orderNo">
							<ul>
								<li v-if="item.detail.accountNum1 != 0">
									<img src="../../assets/images/user/dd_img.png"/>
									<p><span>5元顶呱刮</span> * <span>{{item.detail.accountNum1}}</span>张</p>
								</li>
								<li v-if="item.detail.accountNum2 != 0">
									<img src="../../assets/images/user/dd_img.png"/>
									<p><span>10元顶呱刮</span> * <span>{{item.detail.accountNum2}}</span>张</p>
								</li>
								<li v-if="item.detail.accountNum3 != 0">
									<img src="../../assets/images/user/dd_img.png"/>
									<p><span>20元顶呱刮</span> * <span>{{item.detail.accountNum3}}</span>张</p>
								</li>
							</ul>
							<!--时间--取票--取消-->
							<div class="indent_state">
								<div class="indent_time">
									<p class="buy_time" v-if="item.codePdStatus == 1">
										<span>购买时间</span>
										<span>{{formatDateTime(item.createTime)}}</span>
									</p>
									<p class="get_time" v-if="item.codePdStatus == 2">
										<span>取票时间</span>
										<span>{{formatDateTime(item.updateTime)}}</span>
									</p>
									<!--<a href="#" class="indent_cencel">取消</a>-->
									<a :href="'/category/cashcode?orderNo=' + item.orderNo" class="indent_get" style="display: block;">取票</a>
								</div>
							</div>
							<!--取票状态-->
							<div class="indent_book">未取票</div>
						</div>
					</div>
					<!--成功取票-->
					<div class="indent_listbox" :class="{'cur':i===1}">
						<div class="indent_history" v-for="item in objs[1].orderlist" :orderNo="item.orderNo">
							<ul>
								<li v-if="item.detail.accountNum1 != 0">
									<img src="../../assets/images/user/dd_img.png"/>
									<p><span>5元顶呱刮</span> * <span>{{item.detail.accountNum1}}</span>张</p>
								</li>
								<li v-if="item.detail.accountNum2 != 0">
									<img src="../../assets/images/user/dd_img.png"/>
									<p><span>10元顶呱刮</span> * <span>{{item.detail.accountNum2}}</span>张</p>
								</li>
								<li v-if="item.detail.accountNum3 != 0">
									<img src="../../assets/images/user/dd_img.png"/>
									<p><span>20元顶呱刮</span> * <span>{{item.detail.accountNum3}}</span>张</p>
								</li>
							</ul>
							<!--时间--取票--取消-->
							<div class="indent_state">
								<div class="indent_time">
									<p class="buy_time" v-if="item.codePdStatus == 1">
										<span>购买时间</span>
										<span>{{formatDateTime(item.createTime)}}</span>
									</p>
									<p class="get_time" v-if="item.codePdStatus == 2">
										<span>取票时间</span>
										<span>{{formatDateTime(item.updateTime)}}</span>
									</p>
									<!--<a href="#" class="indent_cencel" style="display: none;">取消</a>-->
									<a href="/user/share" class="indent_get" style="display: block;">晒彩</a>
								</div>
							</div>
							<!--取票状态-->
							<div class="indent_book" style="background: #7ad396;">已取票</div>
						</div>
					</div>
					<!--订单历史-->
					<div class="indent_listbox" :class="{'cur':i===2}">
						<!--一-->
						<div class="indent_history" v-for="item in objs[2].orderlist" :orderNo="item.orderNo">
							<ul>
								<li v-if="item.detail.accountNum1 != 0">
									<img src="../../assets/images/user/dd_img.png"/>
									<p><span>5元顶呱刮</span> * <span>{{item.detail.accountNum1}}</span>张</p>
								</li>
								<li v-if="item.detail.accountNum2 != 0">
									<img src="../../assets/images/user/dd_img.png"/>
									<p><span>10元顶呱刮</span> * <span>{{item.detail.accountNum2}}</span>张</p>
								</li>
								<li v-if="item.detail.accountNum3 != 0">
									<img src="../../assets/images/user/dd_img.png"/>
									<p><span>20元顶呱刮</span> * <span>{{item.detail.accountNum3}}</span>张</p>
								</li>
							</ul>
							<!--时间--取票--取消-->
							<div class="indent_state">
								<div class="indent_time">
									<p class="buy_time" v-if="item.codePdStatus == 1">
										<span>购买时间</span>
										<span>{{formatDateTime(item.createTime)}}</span>
									</p>
									<p class="get_time" v-if="item.codePdStatus == 2">
										<span>取票时间</span>
										<span>{{formatDateTime(item.updateTime)}}</span>
									</p>
									<!--<a href="#" v-if="item.codePdStatus == 1" class="indent_cencel">取消</a>-->
									<a :href="'/category/cashcode?orderNo=' + item.orderNo" v-if="item.codePdStatus == 1" class="indent_get" style="display: block;">取票</a>
									<a href="/user/share"  v-if="item.codePdStatus == 2 " class="indent_get" style="display: block;">晒彩</a>
									
								</div>
							</div>
							<!--取票状态-->
							<div class="indent_book" v-if="item.codePdStatus == 1">未取票</div>
							<div class="indent_book" v-if="item.codePdStatus == 2" style="background: #7ad396;">已取票</div>
							<div class="indent_book" v-if="item.codePdStatus == 3" style="background: #959595;">未取票</div>	
						</div>
					</div>
				</div>
	
			</div>
        </div>
        <!--<footer-tab current-tab="user"/>-->
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header';
	import FooterTab from '../../components/public/Footer';

	import '@/style/main.less';
	import Api from'@/lib/api';
	
    export default {
        name: 'orderlist',
    	data() {
	        return {
	        	head:{
	        		title:'我的订单',
	        		back:true
	        	},
	        	openId:'',
	        	Rows:10,
	        	i:0,
	        	objs:[
	        		{
	        			orderStatus:2,
	        			codePdStatus:1,
	        			orderlist:[],
	        			flag:true,
	        			page:0,
	        			n:0
	        		},
	        		{
	        			orderStatus:2,
	        			codePdStatus:2,
	        			orderlist:[],
	        			flag:true,
	        			page:0,
	        			n:0
	        		},
	        		{
	        			orderStatus:2,
	        			codePdStatus:null,
	        			orderlist:[],
	        			flag:true,
	        			page:0,
	        			n:0
	        		}
	        	]
	        }
	    },
        components: {
        	HeadTit,
            FooterTab,

        },
        methods: {
			queryOrderByWX:function(i,flag){
				this.i = i;
				if(flag == false){
					return;
				}
				var _this = this;
				if(this.i == 2){
					var params = {
	        			orderStatus:this.objs[i].orderStatus,
						Page:this.objs[i].page,
						Rows:this.Rows,
						openId:this.openId
	        		}
				}else{
					var params = {
	        			orderStatus:this.objs[i].orderStatus,
						codePdStatus:this.objs[i].codePdStatus,
						Page:this.objs[i].page,
						Rows:this.Rows,
						openId:this.openId
	        		}
				}
				if(this.objs[i].page <= this.objs[i].n){
					this.objs[i].page ++;
				}else{
					return;
				}
        		Api.get("/order/queryOrderByWX",params)
					.then(function(data){
						if(data.data.code == '200'){
							var data = data.data.data;							
							_this.objs[i].orderlist = _this.objs[i].orderlist.concat(data.tranLists) 
							_this.objs[i].flag = false;
							_this.objs[i].n = Math.ceil(data.total/_this.Rows);
						}
					})
					.catch(function (response) {
					    console.log(response);
					});
			},
			getOrderList (){
		    	this.openId = this.$route.query.openId   
			},
			scroll:function(){
				return {
					top:window.pageYOffset || document.documentElement.scrollTop,
					left:window.pageXOffset || document.documentElement.scrollLeft
				}
			},
			formatDateTime(timeStamp=0) { 
			    var date = new Date();
			    date.setTime(timeStamp);
			    var y = date.getFullYear();    
			    var m = date.getMonth() + 1;    
			    m = m < 10 ? ('0' + m) : m;    
			    var d = date.getDate();    
			    d = d < 10 ? ('0' + d) : d;    
			    var h = date.getHours();  
			    h = h < 10 ? ('0' + h) : h;  
			    var minute = date.getMinutes();  
			    var second = date.getSeconds();  
			    minute = minute < 10 ? ('0' + minute) : minute;    
			    second = second < 10 ? ('0' + second) : second;
			    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
//			    return y + '-' + m + '-' + d 
			},
        },
        created(){
        	this.getOrderList();
        },
        mounted() {
        	var _this = this;
			this.queryOrderByWX(0,this.objs[0].flag);
			window.addEventListener('scroll',function(){
				var h = document.getElementsByClassName('orderlist-container')[0].offsetHeight;
				var bh = document.getElementsByTagName('body')[0].offsetHeight;
				if(_this.scroll().top >= h-bh + 15){	
					_this.queryOrderByWX(_this.i,true)
				}
			})
        },
        watch:{
        	'$route': 'getOrderList'
        	
        }
    }
</script>

<style lang="less" scoped="scoped">
	body{
		position: relative;
	}
	.orderlist-container{
		/*padding: 0.88rem 0 1.2rem 0rem;*/
		padding-top: 0.7rem;
		/*padding-bottom: 1.2rem;*/
	}
	.indent_box {
	  width: 100%;
	  /*padding-top: 0.7rem;*/
	}
	.indent_box .indent_option {
	  width: 100%;
	  height: 0.7rem;
	  background: #000;
	  position: fixed;
	  top: 0rem;
	  left: 0;
	  z-index: 100;
	}
	.indent_option li {
	  height: 0.48rem;
	  float: left;
	  font-size: 0.28rem;
	  color: #fff;
	  margin-left: 5%;
	  margin-right: 17%;
	  margin-top: 0.06rem;
	  text-align: center;
	  line-height: 0.48rem;
	}
	.indent_option li:nth-of-type(3) {
	  margin-right: 0.3rem;
	}
	.active {
	  border-bottom: 0.02rem solid #ffffff;
	}
	.action {
	  display: block;
	}
	.indent_listbox {
	  display: none;
	}
	.cur{
		display: block;
	}
	.indent_history {
	  width: 6.9rem;
	  background: #fff;
	  -moz-border-radius: 0.04rem;
	  /* Firefox */
	  -webkit-border-radius: 0.04rem;
	  /* Safari 、Chrome */
	  border-radius: 0.04rem;
	  /* Opera 10.5+, IE6+ 使用 IE-CSS3*/
	  margin: 0 auto;
	  margin-top: 0.3rem;
	  position: relative;
	}
	.indent_history:last-child{
		margin-bottom: 15px;
	}
	.indent_history ul {
	  width: 6.24rem;
	  margin: 0 auto;
	  overflow: hidden;
	}
	.indent_history ul li {
	  width: 100%;
	  height: 0.9rem;
	  border-bottom: 0.01rem solid #dedede;
	}
	.indent_history ul li img {
	  width: 1.1rem;
	  height: 0.54rem;
	  float: left;
	  margin-top: 0.15rem;
	}
	.indent_history ul li p {
	  width: 4.64rem;
	  height: 0.9rem;
	  font-size: 0.28rem;
	  color: #000;
	  line-height: 0.9rem;
	  float: left;
	  margin-left: 0.28rem;
	}
	.indent_history ul li p span {
	  line-height: 0.9rem;
	}
	.indent_history ul li:last-child {
	  border-bottom: 0;
	}
	.indent_history ul li:first-child {
	  margin-top: 0.1rem;
	}
	.indent_state {
	  width: 100%;
	  height: 0.89rem;
	  position: relative;
	}
	.indent_state img {
	  width: 6.9rem;
	  height: 0.12rem;
	  position: absolute;
	  top: -0.06rem;
	}
	.indent_state .indent_time {
	  width: 6.4rem;
	  height: 0.89rem;
	  line-height: 0.89rem;
	  font-size: 0.26rem;
	  color: #999999;
	  margin-left: 0.34rem;
	  display: flex;
	}
	.indent_state .indent_time p {
	    height: 0.89rem;
	    line-height: 0.89rem;
		flex: 1;
		display: flex;
	}
	.indent_state .indent_time p span:last-child{
		flex: 1;
	}
	.indent_state .indent_time a {
	  display: block;
	  width: 1.38rem;
	  height: 0.5rem;
	  background: #fbcc32;
	  -moz-border-radius: 0.08rem;
	  /* Firefox */
	  -webkit-border-radius: 0.08rem;
	  /* Safari 、Chrome */
	  border-radius: 0.08rem;
	  /* Opera 10.5+, IE6+ 使用 IE-CSS3*/
	  text-align: center;
	  line-height: 0.5rem;
	  font-size: 0.26rem;
	  color: #fff;
	  margin-top: 0.2rem;
	}
	.indent_time .indent_cencel {
	  background: #e6e5e5!important;
	  color: #666666!important;
	  margin-right: 0.2rem !important;
	}
	.indent_history .indent_book {
	  width: 1.2rem;
	  height: 0.44rem;
	  line-height: 0.44rem;
	  text-align: center;
	  background: #fb5a5a;
	  color: #fff;
	  font-size: 0.28rem;
	  border-top-right-radius: 0.06rem;
	  border-bottom-left-radius: 0.06rem;
	  position: absolute;
	  top: 0;
	  right: 0;
	}


</style>