<template>
    <div class="index">
        <!--头部-->
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <!--轮播图-->
        <wc-swiper class="banner" >
            <wc-slide>
                <!--<router-link class="" to="/user/register">-->
                    <img src='../assets/images/index/banner1.png'/>
                <!--</router-link>-->
            </wc-slide>
            <wc-slide>
                <!--<router-link class="" to="/user/register">-->
                    <img src='../assets/images/index/banner2.png'/>
                <!--</router-link>-->
            </wc-slide>
            <wc-slide>
                <!--<router-link class="" to="/user/register">-->
                    <img src='../assets/images/index/banner3.jpg'/>
                <!--</router-link>-->
            </wc-slide>
        </wc-swiper><!--banner-->
        <!--内容区-->
        <div class="second-tags">
            <ul class="box">
            	<li>
            		<router-link to="/index/news">
            			<img src="../assets/images/index/title1.jpg" alt="" />
                    	<p>金彩资讯</p>
            		</router-link>
                </li>
                <li>
            		<a href="http://gamecenter.egret-labs.org/20826">
            		<!--<router-link to="/gamelist">-->
            		    <img src="../assets/images/index/title2.jpg" alt="" />
                    	<p>金彩游戏</p>
            		<!--</router-link>-->
            		</a>
                </li>
                <li>
                	<router-link to="/building">
                		<img src="../assets/images/index/title3.jpg" alt="" />
                    	<p>金彩商城</p>
                	</router-link>
                </li>
                <li>
                	<router-link to="/building">
	                    <img src="../assets/images/index/title4.jpg" alt="" />
	                    <p>金彩智能</p>
	                </router-link>
                </li>
            </ul>
        </div>
        <!--资讯快递-->
        <div class="zx_container">
            <div class="zx_title">
                <div class="zxtitle">彩讯头条&nbsp;&nbsp;<span></span></div>
                <div class="zxpic"><img src="../assets/images/index/zxpic.jpg" alt="" /></div>
            </div>
            <ul>
                <li class="clearfix">
                    <div class="lil">
                        <p>独家-金彩大乐透第18051期历史同期走势分析</p>
                        <div><span>新浪彩票</span>&nbsp;&nbsp;<b>619</b>&nbsp;&nbsp;<i></i></div>
                    </div>
                    <div class="lir">
                        <img src="../assets/images/index/li1.jpg">
                    </div>
                </li>
                <li class="clearfix">
                    <div class="lil">
                        <p>[新浪彩票]足彩18063期大势：拜仁客场单0可期</p>
                        <div><span>新浪彩票</span>&nbsp;&nbsp;<b>1</b>&nbsp;&nbsp;<i></i></div>
                    </div>
                    <div class="lir">
                        <img src="../assets/images/index/li2.jpg">
                    </div>
                </li>
                <li class="clearfix">
                    <div class="lil">
                        <p>[新浪彩票]足彩18063期任九：多特主场单3可信</p>
                        <div><span>新浪彩票</span>&nbsp;&nbsp;<b>3</b>&nbsp;&nbsp;<i></i></div>
                    </div>
                    <div class="lir">
                        <img src="../assets/images/index/li3.jpg">
                    </div>
                </li>
                <li class="clearfix">
                    <div class="lil">
                        <p>足彩伤停：拜仁多名主力伤缺莱斯特失门神</p>
                        <div><span>新浪彩票</span>&nbsp;&nbsp;<b>78</b>&nbsp;&nbsp;<i></i></div>
                    </div>
                    <div class="lir">
                        <img src="../assets/images/index/li4.jpg">
                    </div>
                </li>
                <li class="clearfix">
                    <div class="lil">
                        <p>[新浪彩票]足彩18063期盈亏指数：热刺客场或有冷</p>
                        <div><span>新浪彩票</span>&nbsp;&nbsp;<b>78</b>&nbsp;&nbsp;<i></i></div>
                    </div>
                    <div class="lir">
                        <img src="../assets/images/index/li5.jpg">
                    </div>
                </li>
            </ul>
        </div>
        <footer-tab current-tab="index"/>
    </div><!--index-->
</template>
<script src="https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect"></script>
<script>
	import HeadTit from '../components/public/Header'
    import FooterTab from '../components/public/Footer';
    import slider from 'vue-concise-slider'// import slider components
    //vue-awesome-swiper
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    require('swiper/dist/css/swiper.css')//

    export default {
        components: {
        	HeadTit,
            slider,
            FooterTab,
            swiper,
            swiperSlide
        },
        data() {
            return {
            	head:{
            		title:'金彩世界',
            		back:false
            	},
                //Sliding configuration [obj]
                sliderinit: {
                    currentPage: 0,
                    thresholdDistance: 100,
                    thresholdTime: 500,
                    autoplay: 10000,
                    loop: true,
                    direction: 'horizontal',//方向设置，垂直滚动
                    infinite: 1,
                    slidesToScroll: 1,
                    timingFunction: 'ease',
                    preventDocumentMove: true,
                    duration: 100
                },
                tab_first_pages: [],
                tab_first_sliderinit: {
                    currentPage: 0,
                    thresholdDistance: 100,
                    thresholdTime: 500,
                    direction: 'horizontal',//方向设置，垂直滚动
                    infinite: 1,
                    slidesToScroll: 1,
                    timingFunction: 'ease',
                    preventDocumentMove: true,
                    duration: 100
                },
                tab_second_sliderinit: {
                    currentPage: 0,
                    thresholdDistance: 100,
                    thresholdTime: 500,
                    direction: 'horizontal',//方向设置，垂直滚动
                    infinite: 1,
                    slidesToScroll: 1,
                    timingFunction: 'ease',
                    preventDocumentMove: true,
                    duration: 100
                },
                tab_second_pages: [],
                swiperOption: {//vue-awesome-swiper
                    autoplay: true,
                    direction: 'horizontal',
                    grabCursor: true,
                    setWrapperSize: true,
                    autoHeight: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    mousewheelControl: true,
                    observeParents: true,
                    centeredSlides:false,
                    slidesPerView : 2
                }
            }
        },
        created(){

        }
    }

</script>

<style lang="less" scoped="scoped">
    body {
        background: #F3F3F3;
    }
	.swiper-pagination-bullet {
	    background: #e5e5e5;
	    opacity: 0.8;
    }
    .swiper-pagination-bullet-active {
        opacity: 1;
        background: #007aff;
        }
    .index {
        max-width: 750px;
        width: 100%;
        margin: 0 auto;
        .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 150px;
            margin: 0;
        }
        .banner {
            /*margin-top:0.88rem;*/
            height: 3rem;
            img {
                width:100%;
                height:100%;
            }
        }
        .slider-item {
            height: 100%;
        }
        .slider-pagination {
            text-align: right;
            width: 95%;
        }
        .slider-pagination-bullet {
            border: 1px solid #fff;
            opacity: 1;
            background: none;
        }
        .slider-pagination-bullet-active {
            background: #FFBB02;
        }
        .tab .teseguan .wc-slide{
            width:2.85rem;
            height:2rem;
            position:relative;
            border-radius: 6px;
            margin-right:0.25rem;
            img{
                width:100%;
                height:100%;
                display:block;
            }
            .wc-pagination{
                display:none;
            }
        }
        .el-tabs__header {
            margin: 0;
        }
        .tab_first, .tab_second {
            margin: 0.3rem auto 0.55rem;
            width: 90%;
        }
        .tab .slider-item {
            width: 2.85rem;
            height: 2rem;
            position: relative;
            margin-right: 0.25rem;
            border-radius: 6px;
            background-size: 100%;
        }
        .tab .slider-item p {
            position: absolute;
            bottom: 0;
            left: 0;
            font-size: 0.25rem;
            width: 100%;
            height: 0.55rem;
            line-height: 0.55rem;
            background: rgba(0, 0, 0, 0.5);
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .tab .slider-item:last-child p {
            height: 2rem;
            line-height: 2rem;
            border-radius: 6px;
        }
        .tab .slider-pagination-bullets {
            display: none;
        }
        .el-carousel__button {
            width: 5px;
            height: 5px;
            border-radius: 100%;
            background: #FFC423;
        }
        .el-carousel__indicators {
            position: absolute;
            bottom: 0;
            left: 80%;
        }
        .red_envelope {
            width: 100%;
            padding: 0.2rem 0;
            position: relative;
            background: #fff;
        }
        .red_envelope img {
            display: block;
            width: 6.95rem;
            margin: 0 auto;
        }
        .red_envelope p {
            position: absolute;
            top: 0.3rem;
            right: 0.5rem;
            width: 2.15rem;
            height: 0.7rem;
        }
        .tab {
            margin-top: 0.2rem;
            background: #fff;
        }
        .el-tabs__nav-wrap {
            width: 100%;
        }
        .el-tabs__item {
            width: 3.75rem;
            text-align: center;
            height: 0.95rem;
            line-height: 0.95rem;
        }
        .el-tabs__active-bar {
            display: none;
        }
        .el-tabs__item.is-active {
            color: #FFBB02;
        }
        .illustrations, .illustrations img {
            width: 100%;
        }
        .box6 {
            background: #fff;
            padding: 0.35rem 0;
            overflow: hidden;
        }
        .box6 dl {
            overflow: hidden;
            width: 33%;
            text-align: center;
            float: left;
        }
        .box6 dl .dd1 {
            font-size: 0.3rem;
            font-weight: bold;
        }
        .box6 dl .dd1 a {
            color: #595959;
        }
        .box6 dl .dd2 {
            font-size: 0.3rem;
            margin-top: 0.1rem;
        }
        .box6 dl .dd2 a {
            color: #999;
        }
        .box6 dl dt {
            width: 1.2rem;
            height: 0.9rem;
            margin: 0.15rem auto 0;
        }
        .box6 dl dt img {
            width: 1.2rem;
            height: 0.9rem;
        }
        .box7 {
            overflow: hidden;
            margin-top: 0.2rem;
            background: #fff;
            padding-bottom: 1rem;
        }
        .box7 .title {
            font-size: 0.32rem;
            color: #FFBB02;
            text-align: center;
            height: 1rem;
            line-height: 1rem;
        }
        .box7 .div1 {
            width:45%;
            margin-left:3.3333%;
            float:left;
            .b_gusess{
                display:inline-block;
            }
        }
        .box7 .div1 dl {
            width: 3.35rem;
        }
        .box7 .div1 dl dt {
            width: 3.35rem;
            height: 3.35rem;
            line-height: 3.35rem;
            background: #F5F5F5;
        }
        .box7 .div1 dl dt img {
            width: 100%;
            max-height: 3.35rem;
        }
        .box7 .div1 dl .dd1 {
            font-size: 0.3rem;
            margin-top: 0.2rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .box7 .div1 dl .dd1  {
            color: #262626;
        }
        .box7 .div1 dl .dd2 {
            font-size: 0.3rem;
            margin: 0.15rem 0 0.45rem;
        }
        .box7 .div1 dl .dd2  {
            color: #FFBB02;
        }
        .box7 .div1 .left {
            float: left;
        }
        .box7 .div1 .right {
            float: right;
        }
        .el-tabs__content .wc-pagination{
            display:none;
        }
        .swiper  {
            width:2.85rem;
        }
        /****************内容区**********/
       .second-tags{
			padding:0.3rem;
	        background:#fff;
	        margin-bottom:0.2rem;
	        ul{
		        display:flex;
		        -webkit-display:flex;

		        li{
		            flex:1;
		            -webkit-flex:1;
		            img{
		                width:1.14rem;
		                height:1.14rem;
		                margin:0 auto;
		                display:block;
		            }
		            p{
		                text-align: center;
		                color: #000;
		                font-size: 0.28rem;
		                line-height: 0.3rem;
		                margin-top:0.2rem;
		            }
		        }

		    }
		    .box{
		        justify-content:space-around;
		        flex-wrap: wrap;
		    }
		}
        .zx_container{
            padding:0 0.18rem 0 0.3rem;
            background:#fff;
            /*margin-bottom:1.2rem;*/
            .zx_title{
                padding-bottom:0.3rem;
                padding-right:0.12rem;
                border-bottom:1px solid #cdd1c6;
                .zxtitle{
                    height:0.73rem;
                    line-height: 0.73rem;
                    font-size: 0.34rem;
                    color: #000;
                    position:relative;
                    span{
                        width:0.27rem;
                        height:0.25rem;
                        position:absolute;
                        top:0.28rem;
                        background:url('../assets/images/index/zx.jpg') no-repeat;
                        background-size:cover;
                    }
                }
                .zxpic{
                    height: 2rem;
                    border-radius:5px;
                    img{
                    	width: 100%;
                    	height: 100%;
                    }
                }
            }
            ul{
                li{
                    height:2.1rem;
                    padding-right:0.12rem;
                    border-bottom:1px solid #cdd1c6;
                    overflow:hidden;
                    display:flex;
                    .lil{
                        flex:1;
                        padding-right:0.65rem;
                        padding-top:0.2rem;
                        p{
                            font-size:0.28rem;
                            line-height:0.48rem;
                        }
                        div{
                            margin-top:0.3rem;
                            position:relative;
                            span{
                                color:#e5ae43;
                                font-size:0.26rem;
                                line-height:0.26rem;
                            }
                            b{
                                font-size:0.26rem;
                                color:#666666;
                            }
                            i{
                                width:0.24rem;
                                height:0.24rem;
                                position:absolute;
                                background:url(../assets/images/index/pl.jpg)no-repeat;
                                background-size:cover;
                                bottom:0.02rem;
                            }
                        }
                    }
                    .lir{
                        padding-top:0.3rem;
                        img{
                            width:2.3rem;
                            height:1.5rem;
                            background:yellow;
                        }
                    }
                }
                li:last-child{
                    border-bottom:none;
                }

            }

        }
    }
</style>
