<template>
	<div class="second_head">
		<ul>
			<li><span>等待取票</span></li>
			<li><span>成功取票</span></li>
			<li><span>订单历史</span></li>
		</ul>
	</div>
</template>
	
<script>
	export default{
		name:'secondHead',
		data:{
			items:{
				{
					name:'金彩资讯',
					url:'../assets/images/title1.jpg'
				},
				{
					name:'金彩游戏',
					url:'../assets/images/title2.jpg'
				},
				{
					name:'金彩商城',
					url:'../assets/images/title3.jpg'
				},
				{
					name:'金彩智能',
					url:'../assets/images/title4.jpg'
				}
			}
		}
		methods:{
			
		}
	}
</script>

<style>
	.second_head{
		position: fixed;
		top: 0.88rem;
		height: 0.7rem;
		background: #000;
	}
</style>