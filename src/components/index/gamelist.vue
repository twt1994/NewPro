<template>
	<div class="user">
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="main-container">
        	<div class="play_box">
				<ul class="play_top">
					<li @click="curId=0" :class="{'play_active':curId===0}">大转盘游戏</li>
					<li @click="curId=1" :class="{'play_active':curId===1}">益智类游戏</li>
					<li @click="curId=2" :class="{'play_active':curId===2}">策略类游戏</li>
				</ul>
				<!--选项对应页面-->
				<div class="play_cont">
					<!--大转盘游戏-->
					<div class="play_list" :class="{'cur':curId===0}">
						<div class="play_main">
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
						</div>
					</div>
					<!--益智类游戏-->
					<div class="play_list" :class="{'cur':curId===1}">
						<div class="play_main">
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
						</div>
					</div>
					<!--策略类游戏-->
					<div class="play_list" :class="{'cur':curId===2}">
						<div class="play_main">
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
							<div class="play_YX">
								<a href="#">
									<div class="play_ZJ"><img src="../../assets/images/index/yx_bj.png"/></div>
									<p>游戏名称</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header'
	import '@/style/main.less';

    export default {
        name: 'share',
    	data() {
	        return {
	        	head:{
	        		title:'金彩世界',
	        		back:true
	        	},
	        	curId:0,
	        }
	    },
        components: {
        	HeadTit,

        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style lang="less" scoped="scoped">
	body{
		/*background: #ea5243;*/
	}
	.main-container{
		/*padding: 0.88rem 0 0.4rem 0rem;*/
		.play_box {
		  width: 100%;
		  padding-top: 0.7rem;
		}
		.play_box .play_top {
		  width: 100%;
		  height: 0.7rem;
		  background: #000;
		  position: fixed;
		  top:0rem;
		  left: 0;
		}
		.play_top li {
		  width: 1.5rem;
		  height: 0.48rem;
		  float: left;
		  font-size: 0.28rem;
		  color: #fff;
		  margin-left: 5%;
		  margin-right: 10%;
		  margin-top: 0.06rem;
		  text-align: center;
		  line-height: 0.48rem;
		}
		.play_top li:nth-of-type(3) {
		  margin-right: 0.3rem;
		}
		.play_active {
		  border-bottom: 0.02rem solid #ffffff;
		}
		.play_action {
		  display: block;
		}
		.play_list {
			display: none;
		  margin-top: 0.36rem;
		}
		.cur{
			display: block;
		}
		.play_list .play_main {
		  width: 100%;
		  overflow: hidden;
		}
		.play_main .play_YX {
		  width: 33%;
		  height: 2.32rem;
		  float: left;
		  margin-top: 0.24rem;
		}
		.play_YX a {
		  display: block;
		  width: 100%;
		  height: 2.32rem;
		}
		.play_YX a .play_ZJ {
		  width: 1.44rem;
		  height: 1.44rem;
		  border: 0.03rem solid #e6e5e5;
		  margin: 0 auto;
		  -moz-border-radius: 50%;
		  /* Firefox */
		  -webkit-border-radius: 50%;
		  /* Safari 、Chrome */
		  border-radius: 50%;
		  /* Opera 10.5+, IE6+ 使用 IE-CSS3*/
		}
		.play_YX a .play_ZJ img {
		  width: 1.44rem;
		  height: 1.44rem;
		  -moz-border-radius: 50%;
		  /* Firefox */
		  -webkit-border-radius: 50%;
		  /* Safari 、Chrome */
		  border-radius: 50%;
		  /* Opera 10.5+, IE6+ 使用 IE-CSS3*/
		}
		.play_YX a p {
		  width: 100%;
		  height: 0.88rem;
		  line-height: 0.88rem;
		  font-size: 0.28rem;
		  color: #000;
		  text-align: center;
		}

		
	}

</style>