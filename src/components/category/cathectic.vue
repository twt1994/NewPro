<template>
    <div class="ticket">
        <div class="ticket-title">
            <span>第18102期 截止日期 &nbsp;&nbsp;</span>
            <span>2018-09-01 （周六）</span>
        </div>
        <div class="ticket-select">
            <div class="select-left">
                <span class="iconfont icon-chazi"></span>
                <span>境加手动投注</span>
            </div>
            <div class="select-right">
                <span class="iconfont icon-chazi"></span>
                <span>境加手动投注</span>
            </div>
        </div>
        <div class="ticket-number">
            <div class="iconfont icon-shanchu1 score"></div>
            <div class="number-line">
                <div class="number-top">
                    <span>03 14 15 23 29</span>&nbsp;&nbsp;
                    <span>04 05</span>
                </div>
                <div class="number-footer">
                    <span>单式投注&nbsp;&nbsp;</span>
                    <span>1注 2注 乐透点</span>
                </div>
            </div>
            <div class="iconfont icon-jiantou pick"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped="scoped">
.ticket{
    .ticket-title{
        height: 0.74rem;
        line-height: 0.74rem;
 border-bottom: 1px solid #EEEEEE;
        text-align: center;
        span:nth-child(1){
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #000011;
            letter-spacing: 0;
        }
        span:nth-child(2){
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color:#F5A623;
            letter-spacing: 0;
        }
    }
    .ticket-select{
        display: flex;
        justify-content: space-around;
        padding: 0.28rem 0;
        border-bottom: 1px solid #EEEEEE;
        .select-left{
            border: 1px solid #53C252;
            border-radius: 5px;
            padding: 0.24rem 0.28rem;
            span{
                font-family: MicrosoftYaHei;
                font-size: 16px;
                color: #53C252;
                letter-spacing: 0;
                text-align: center;
            }
        }
        .select-right{
            border: 1px solid #F5A623;
            border-radius: 5px;
            padding: 0.24rem 0.28rem;
            span{
                font-family: MicrosoftYaHei;
                font-size: 16px;
                color: #F5A623;
                letter-spacing: 0;
                text-align: center;
            }
        }
    }
    .ticket-number{
            display: flex;
            justify-content: space-around;
            height: 1.2rem;
            align-items: center;
            border-bottom: 1px solid #EEEEEE;
            .score{
                font-size: 0.5rem;
                color:#BCBCBC;
            }
            .number-line{
                margin-right: 1.5rem;
                .number-top{
                    padding: 0.1rem 0;
                    span:nth-child(1){
                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        color: #F5A623;
                        letter-spacing: 0;
                        line-height: 17px;
                    }
                    span:nth-child(2){
                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        color: #53C252;
                        letter-spacing: 0;
                        line-height: 17px;
                    }
                }
                .number-footer{
                    padding: 0.05rem 0;
                    span{
                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        color: #666666;
                        letter-spacing: 0;
                    }
                }
            }
            .pick{
                font-size: 0.5rem;
                color:#BCBCBC;
            }
    }
}
</style>
