<template>
<div class="lottery">
    <!-- <header>
        <a href="#" class="iconfont icon-chazi"></a>
        <h3>大乐透选号</h3>
        <a href="#" class="iconfont icon-arrow-right-copy"></a>
    </header>
    <! // 头部选项卡切换 -->
    <!-- <div class="tab-header">
        <ul>
            <li
            v-for="(item,index) in tabs" :key="item.id" @click="tabClick(index)" :class="{active:index===nowIndex}"><a href="javascript:;">{{item}}</a></li>
        </ul>
    </div> -->
    <div class="lottry-title">
        <span>第18102期 2018-09-01 周六</span>
        <span>截止投注 奖池金额：6378594854(元）</span>
    </div>
    <div class="lottery-message">
        <span>第18101期 开奖：</span>
        <span>03 14 15 23 29</span>
        <span>04 05</span>
        <span class="iconfont" @click="expand" :style="showChildren?{transform: 'rotate(-180deg)'}:{}">&#xe600;
        </span>
        <!-- 折叠面板显示最近彩票十期信息 -->
        <ul class="children" v-if="showChildren">
            <li class="children-item" v-for="(v,k) in listData" :key="k" :style="k%2==0?{backgroundColor:'#eee'}:{backgroundColor:'#fff'}">{{v}}</li>
        </ul>
    </div>
    <div class="select-box">
        <div class="slelect-title">
            <span>至少选择：</span>
            <span>5个前区号码，</span>
            <span>2个后区号码</span>
            <span  @click="random">机选</span>
        </div>
        <div class="select-circle">
             <div class="pick" v-for="(v,k) in arr1" :key="k" :style="{color:v.isChoose?'#ffffff':'',background:v.isChoose?'#F5A623':''}" @click="chooseTop(k)">{{v.value}}</div>
        </div>
    </div>
    <div class="select-content">
        <div class="content-title">
            <span>至少选择：</span>
            <span>5个前区号码，</span>
            <span>2个后区号码</span>
            <span @click="confirm" :disabled="disabled"></span>
        </div>
        <div class="content-cirlce">
             <div class="picks" v-for="(v,k) in arr2" :key="k" :style="{color:v.isChoose?'#ffffff':'',background:v.isChoose?'#53C252':''}" @click="chooseBottom(k)">{{v.value}}</div>
        </div>
    </div>
    <div class="bottom">
        <div class="left">
            <span class="iconfont icon-shanchu">&nbsp;&nbsp;删除</span>
        </div>
        <div class="right">
            <span>确定</span>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
             arr1: [],
             arr2:[],
            topNum: 5,
            bottomNum: 2,
            showChildren: false,
            listData:['bbbb','bbbb','nnnn','sldk','sldk','sldk','sldk','sldk','sldk','sldk']
        }
    },
    created() {
        for (let i = 1; i < 36; i++) {
            if (i<= 12) {
                this.arr1.push({ value: i, isChoose: false })
                this.arr2.push({ value: i, isChoose: false })
            } else {
                this.arr1.push({ value: i, isChoose: false })
            }
        }
        console.log(this.arr1, this.arr2)
    },
    computed: {
        disabled() {
            let num1 = 0
            let num2 = 0
            this.arr1.forEach(v => {
                if (v.isChoose) {
                    num1++
                }
            })
            this.arr2.forEach(v => {
                if (v.isChoose) {
                    num2++
                }
            })
            if (num1 == this.topNum && num2 == this.bottomNum) {
                return false
            }
            return true
        }
    },
    methods:{
       expand(){
           console.log(this.showChildren)
           this.showChildren = !this.showChildren
       },
        random() {
            console.log('jx')
            let topArr = this.getRandomNumber(
                0,
                this.arr1.length - 1,
                this.topNum
            )
            let bottomArr = this.getRandomNumber(
                0,
                this.arr2.length - 1,
                this.bottomNum
            )
            console.log(topArr, bottomArr)
            this.arr1.map(v => (v.isChoose = false))
            this.arr2.map(v => (v.isChoose = false))
            topArr.forEach(v => {
                this.arr1[v].isChoose = true
            })
            bottomArr.forEach(v => {
                this.arr2[v].isChoose = true
            })
        },
         confirm() {
            console.log('qr')
            // 取出arr1 arr2中选中的值
        },
         chooseTop(k) {
            console.log(k)
            let num = 0
            this.arr1.forEach(v => {
                if (v.isChoose) {
                    num++
                }
            })
            if (num > this.topNum - 1 && this.arr1[k].isChoose == false) {
                console.log('最多' + this.topNum + '个')
                return
            }
            this.arr1[k].isChoose = !this.arr1[k].isChoose
        },
        chooseBottom(k) {
            console.log(k)
            let num = 0
            this.arr2.forEach(v => {
                if (v.isChoose) {
                    num++
                }
            })
            console.log(num)
            if (num > this.bottomNum - 1 && this.arr2[k].isChoose == false) {
                console.log('最多' + this.bottomNum + '个')
                return
            }
            this.arr2[k].isChoose = !this.arr2[k].isChoose
        },
         getRandomNumber(start, end, n) {
            var arr = []
            for (var i = 0; i < n; i++) {
                var number = Math.floor(
                    Math.random() * (end - start + 1) + start
                )
                if (arr.indexOf(number) < 0) {
                    arr.push(number)
                } else {
                    i--
                }
            }
            return arr
        }
    }
    }

</script>
<style lang="less" scoped="scoped">
.lottry-title{
    height: 0.74rem;
    white-space: nowrap;
    line-height: 0.74rem;
    padding: 0 0.16rem;
    border-bottom: 1px solid #EEEEEE;
    span:nth-child(1){
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #666666;
        letter-spacing: 0;
    }
    span:nth-child(2){
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #F5A623;
        letter-spacing: 0;
    }
}
.lottery-message{
     height: 0.6rem;
    white-space: nowrap;
    line-height: 0.6rem;
    padding: 0 0.16rem;
    border-bottom: 1px solid #EEEEEE;
    position: relative;
    width: 100%;
     span:nth-child(1){
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #666666;
        letter-spacing: 0;
        display:inline-block
    }
     span:nth-child(2){
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color:  #F5A623;
        letter-spacing: 0;
        margin: 0 0.1rem;
        display:inline-block
    }
     span:nth-child(3){
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #53C252;
        letter-spacing: 0;
        margin: 0 0.1rem;
        display:inline-block
    }
     span:nth-child(4){
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #BCBCBC;
        margin-left: 1.6rem;
        display:inline-block;
        width: 0.3rem;
        height: 0.2rem;
        transition: transform 0.2s ease-in-out;
        line-height: 0.16rem;
    }
    .children{

    }
}
.select-box{
    padding: 0.2rem 0.13rem;
     border-bottom: 1px solid #EEEEEE;
     .slelect-title{
         margin-bottom: 0.25rem;
        span:nth-child(1){
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #666666;
            letter-spacing: 0;
        }
        span:nth-child(2){
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color:  #F5A623;
            letter-spacing: 0;
            margin: 0 0.1rem;
        }
        span:nth-child(3){
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #53C252;
            letter-spacing: 0;
            margin: 0 0.1rem;
        }
        span:nth-child(4){
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color:#F5A623;
            margin-left: 1.4rem;
            border:1px solid #F5A623;
            border-radius: 6px;
            padding: 0.06rem 0.21rem;
        }
    }
    .select-circle{
        display: flex;
        flex-wrap: wrap;
        .pick{
            width: 0.88rem;
            height:0.88rem;
            border-radius: 50%;
            border:1px solid #CCCCCC;
            line-height: 0.88rem;
            text-align: center;
            color: #F5A623;
            background: #ffffff;
            margin: 2.5px;
        }
    }
}
.select-content{
    padding: 0.2rem 0.13rem;
     border-bottom: 1px solid #EEEEEE;
    .content-title{
         margin-bottom: 0.25rem;
        span:nth-child(1){
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #666666;
            letter-spacing: 0;
        }
        span:nth-child(2){
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color:  #F5A623;
            letter-spacing: 0;
            margin: 0 0.1rem;
        }
        span:nth-child(3){
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #53C252;
            letter-spacing: 0;
            margin: 0 0.1rem;
        }
    }
    .content-cirlce{
        display: flex;
        flex-wrap: wrap;
        .picks{
            width: 0.88rem;
            height:0.88rem;
            border-radius: 50%;
            border:1px solid #CCCCCC;
            line-height: 0.88rem;
            text-align: center;
            color: #53C252;
            background: #ffffff;
            margin: 2.6px;
        }
    }
}
.bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    line-height: 1rem;
    .left{
        width: 70%;
        background: #F6F6F6;
        font-family: MicrosoftYaHei;
        font-size: 18px;
        color: #666666;
        text-align: left;
        text-indent: 0.4rem;
        height: 1rem;
    }
    .right{
        width: 30%;
        background: #F5A623;
        font-family: MicrosoftYaHei;
        font-size: 18px;
        color: #FFFFFF;
        text-align: center;
        height: 1rem;
    }
}
</style>
