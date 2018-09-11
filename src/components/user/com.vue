<template>
    <div>
        <div>
            <span v-for="(v,k) in arr1" :key="k" :style="{color:v.isChoose?'red':'',margin:'0 5px'}" @click="chooseTop(k)">{{v.value}}</span>
        </div>
        <div>
            <span v-for="(v,k) in arr2" :key="k" :style="{color:v.isChoose?'red':'',margin:'0 5px'}" @click="chooseBottom(k)">{{v.value}}</span>
        </div>
        <button @click="random">点击随机</button>
        <button @click="confirm" :disabled="disabled">自己选</button>

    </div>
</template>

<script>
// copied from offital Vue examples
export default {
    name: 'com',
    props: {},
    data() {
        return {
            arr1: [],
            arr2: [],
            topNum: 5,
            bottomNum: 2
        }
    },
    created() {
        for (let i = 1; i < 36; i++) {
            if (i <= 12) {
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
    mounted() {},
    methods: {
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
    },
    components: {}
}
</script>

<style scoped>
</style>
