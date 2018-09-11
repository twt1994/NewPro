<template>
	<div class="succ">
    	<!--头部-->
        <head-tit v-bind:title="head.title" :back="head.back"></head-tit>
        <div class="main-container">
        	<div class="picouter">
        		<img class="pic" src="../../assets/images/cashprice/cashprize.png"></img>
        	</div>
        	<div class="getcode">立即扫码</div>
        	<div class="prizeh"><a href="#" class="prizeh">兑奖记录</a></div>
 		</div>
        <footer-tab current-tab="cashprize"/>
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header'
	import FooterTab from '../../components/public/Footer';
	import '@/style/main.less';

    export default {
        name: 'cashprize',
    	data() {
	        return {
	        	head:{
	        		title:'自助兑奖',
	        		back:false
	        	},
	        	hasRedeem:false
	        }
	    },
        components: {
        	HeadTit,
            FooterTab
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style lang="less">
	.main-container{
		padding: 0.88rem 0 1.2rem 0rem;
		.picouter{
			padding-top: 0.5rem;
			padding-bottom:0.4rem;
			.pic{
				width: 6.9rem;
				height: 8.5rem;
				background: url(../../assets/images/cashprice/cashprize.png)no-repeat;
				background-size: contain;
				margin: 0 auto;
				display: block;
			}
		}
		.getcode{
			width: 80%;
			height: 0.7rem;
			background: #fed703;
			font-size: 0.28rem;
			line-height: 0.7rem;
			border-radius: 5px;
			color: #fff;
			text-align: center;
			margin: 0 auto;
		}
		.prizeh{
			padding-top: 0.3rem;
			text-align: center;
			a{
				font-size: 0.28rem;
				color: #000;
				border-bottom: 1px solid #000000;
			}
		}
	}
</style>