<template>
	<div class="newdetail">
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="main-container">
        	<div class="title">【中奖】10万、100万，都被谁领走了？</div>
			<div class="time">Sherwin莲 体彩顶呱刮 2018-04-13</div>
			<p>3月28日下午，一位中年男士张先生来到吉林省体育彩票兑奖大厅内，手中拿着一张5元面值的“麻辣6”中奖票，前来领取10万元奖金。</br></br>张先生介绍说，这张彩票是自己的妻子刮中的，前一天张先生的妻子张女士来到长春市欧亚春城内的超市购物，出来后来到超市电梯口的体彩销售点。</br></br>这家销售点已经营业5年了，张女士是这家销售点的常客，最钟情的就是顶呱刮的经典票种“麻辣6”，每次来刮票都必定选上几张。27日下午，张女士买了10张“麻辣6”，不紧不慢的刮了起来。刮了还没几张，张女士就惊喜地发现自己中奖了，而中奖号码的下方对应的奖金是头奖“100,000”元。当时张女士还有点不敢相信，从未想过自己能中头奖，在销售人员的确认下，张女士才放下心来。张先生也很支持妻子的这个小爱好，两口子对于买彩票这件事情上心态都很好，认为中奖了固然值得高兴，但即便没中奖，也不必太失落，权当是为社会公益事业贡献力量啦。</p>
			<img src="../../assets/images/index/zxcode.png" alt="" />
        </div>	
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header'

	import '@/style/main.less';

    export default {
        name: 'newdetail',
    	data() {
	        return {
	        	head:{
	        		title:'',
	        		back:true
	        	},
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
		background: #FFFFFF;
	}
	.newdetail{
		height: 100%;
		background: #FFFFFF;
	}
	.main-container{
		padding: 0rem 0.5rem 0.3rem 0.5rem;
		background-color: #FFFFFF;
		.title{
			height: 1.05rem;
			border-bottom: 1px solid #DEDEDE;
			padding-top: 0.3rem;
			font-size: 0.34rem;
			line-height: 0.74rem;
			box-sizing: border-box;
			text-align: center;
			color: #000000;
			font-family: "微软雅黑";
		}
		.time{
			font-size: 0.24rem;
			color: #CCCCCC;
			line-height: 0.6rem;
			font-family: '宋体';
		}
		p{
			font-size: 0.28rem;
			line-height: 0.34rem;
			color: #000000;
			font-family: '宋体';
		}
		img{
			width: 100%;
			height: 2.56rem;
			margin-top: 0.3rem;
		}
	}

</style>