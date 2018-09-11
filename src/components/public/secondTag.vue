<template>
	<div class="second-tag">
		<ul>
			<li v-for="item in items">
		        <img src="{{item.url}}" alt="">
		        <p>{{item.name}}</p>
		    </li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'secondTag',
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
			getSecondTag(){

			}
		}
	}
</script>

<style>
	.second-tag{
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
</style>
