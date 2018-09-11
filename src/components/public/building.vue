<template>
	<div class="building">
    	<!--头部-->
        <!--<head-tit v-bind:title="head.title" :back="head.back"></head-tit>-->
        <div class="main-container">
        	<div class="buildwrap">
        		<div class="buildingpic"></div>
        	</div>
 		</div>
        <!--<footer-tab current-tab="index"/>-->
	</div>
</template>

<script>
	import HeadTit from '../../components/public/Header'
	import FooterTab from '../../components/public/Footer';
	import '@/style/main.less';

    export default {
        name: 'building',
    	data() {
	        return {
	        	head:{
	        		title:'金彩世界',
	        		back:true
	        	}
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

<style lang="less" scoped="scoped">
	html body{
		background-color: #fff;
	}
	.building{
		background: #FFFFFF;
		height: 100%;
	}
	.main-container{
		/*padding: 0.88rem 0 1.2rem 0rem;*/
		.buildwrap{
			padding-top: 2.3rem;
			.buildingpic{
				width: 6rem;
				height: 6.5rem;
				background: url(../../assets/images/public/building.png)no-repeat;
				background-size: contain;
				margin: 0 auto;
			}
		}
	}
</style>