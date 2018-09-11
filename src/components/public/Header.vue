<template>
	<div class="head"><span v-if="back" onclick="window.history.back(-1)"></span>{{title}}</div>
</template>

<script>
    export default {
        name: 'Head',
        data() {
            return {};
        },
        props:['title','back']
    }
</script>

<style lang="less" scoped="scoped">
	.head {
        background: #000;
        text-align: center;
        font-size: 0.32rem;
        line-height: 0.88rem;
        height: 0.88rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width:100%;
        color:#fff;
        span{
        	position:absolute;
        	width:0.18rem;
        	height: 0.32rem;
        	background: url(../../assets/images/public/back.png) no-repeat;
        	background-size: contain;
        	left: 0.3rem;
        	top: 0.28rem;
        }
    }
</style>
