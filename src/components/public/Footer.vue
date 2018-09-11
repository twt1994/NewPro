<template>
    <!--脚部-->
    <div class="bottom_nav_box">
        <div class="bottom_nav">
            <dl>
                <dt>
                    <router-link to="/">
                        <img v-if="currentTab!=='index'" src="../../assets/images/public/index.png">
                        <img v-if="currentTab==='index'" src="../../assets/images/public/index_a.png">
                    </router-link>
                </dt>
                <dd :class="{current:currentTab==='index'}">
                    <router-link to="/">首页</router-link>
                </dd>
            </dl>
            <dl>
                <dt>
                    <router-link to="/category">
                        <img v-if="currentTab!=='category'" src="../../assets/images/public/car.png">
                        <img v-if="currentTab==='category'" src="../../assets/images/public/car_a.png">
                    </router-link>
                </dt>
                <dd :class="{current:currentTab==='category'}">
                    <router-link to="/category">购彩</router-link>
                </dd>
            </dl>
            <dl>
                <dt>
                    <router-link to="/cashprize">
                        <img v-if="currentTab!=='cashprize'" src="../../assets/images/public/box.png">
                        <img v-if="currentTab==='cashprize'" src="../../assets/images/public/box_a.png">
                    </router-link>
                </dt>
                <dd :class="{current:currentTab==='cashprize'}">
                    <router-link to="/cashprize">兑奖</router-link>
                </dd>
            </dl>
            <dl>
                <dt>
                    <router-link to="/user">
                        <img v-if="currentTab!=='user'" src="../../assets/images/public/person.png">
                        <img v-if="currentTab==='user'" src="../../assets/images/public/person_a.png">
                    </router-link>
                </dt>
                <dd :class="{current:currentTab==='user'}">
                    <router-link to="/user">我的金彩</router-link>
                </dd>
            </dl>
        </div>
    </div><!--box-->
</template>

<script>
    export default {
        name: 'Footer',
        props: {
            currentTab: String, // 当前需要选中的项：index category shopping-cart user
        },
    }
</script>

<style lang="less">
    .bottom_nav_box {
        max-width: 750px;
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 2;
        overflow: hidden;
        height: 1rem;
        border-top: 1px solid #FAFAFA;
        background: #000;
        .bottom_nav {
            overflow: hidden;
            width: 90%;
            margin: 0 auto;
            dl {
                width: 25%;
                text-align: center;
                float: left;
                dt {
                    width: 0.43rem;
                    height: 0.41rem;
                    margin: 0.1rem auto 0;
                    img {
                        width: 0.44rem;
                        height: 0.44rem;
                    }
                }
                dd {
                    font-size: 0.22rem;
                    margin-top: 0.05rem;
                    a {
                        color: #8F8F8F;
                    }
                }
                .current a {
                    color: #FFBB02;
                }
            }
        }
    }

</style>
