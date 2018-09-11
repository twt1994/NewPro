<template>
	<div class="user">
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="main-container">
        	<div class="gamest"></div>
        	<div class=""></div>
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
	        		back:false
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
		background: #ea5243;
	}
	.main-container{
		/*padding: 0.88rem 0 1.2rem 0rem;*/
		.gamest{
			width: 100%;
			height: 4.4rem;
			background: url(../../assets/images/index/gamet.png)no-repeat;
			background-size: contain;
		}

	}

</style>