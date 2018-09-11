<template>
    <div class="my_top">
		<!--用户头像部分-->
		<div class="top_head">
			<!--头像图片显示-->
			<div class="head_tx"><img src="../../assets/images/user/tx.png"></div>
			<!--用户名-->
			<p class="head_name">{{name}}</p>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'userhead',
        data() {
            return {};
        },
        props:['name']
    }
</script>

<style lang="less" scoped>
	.my_top {
	  width: 100%;
	  height: 3rem;
	  background: #f7bf06;
	  overflow: hidden;
	}
	.my_top .top_head {
	  width: 100%;
	  height: 2.28rem;
	  margin-top: 0.57rem;
	}
	.top_head .head_tx {
	  width: 1.3rem;
	  height: 1.3rem;
	  border: 0.03rem solid #ffffff;
	  margin: 0 auto;
	  -moz-border-radius: 50%;
	  /* Firefox */
	  -webkit-border-radius: 50%;
	  /* Safari 、Chrome */
	  border-radius: 50%;
	  /* Opera 10.5+, IE6+ 使用 IE-CSS3*/
	}
	.head_tx img {
	  width: 1.3rem;
	  height: 1.3rem;
	  -moz-border-radius: 50%;
	  /* Firefox */
	  -webkit-border-radius: 50%;
	  /* Safari 、Chrome */
	  border-radius: 50%;
	  /* Opera 10.5+, IE6+ 使用 IE-CSS3*/
	}
	.top_head .head_name {
	  width: 100%;
	  height: 0.92rem;
	  text-align: center;
	  font-size: 0.3rem;
	  line-height: 0.92rem;
	}
</style>
