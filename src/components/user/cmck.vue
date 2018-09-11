<template>
    <div>
        <div class="label-wrap">
            <div class="label" @click="expand">
                {{labelTxt}}
                <span class="label-icon" :style="showChildren?{transform: 'rotate(-90deg)'}:{}">&gt;</span>
            </div>
            <div class="children" v-if="showChildren">
                <div class="children-item" v-for="(v,k) in listData" :key="k" :style="k%2==0?{backgroundColor:'#eee'}:{backgroundColor:'#fff'}">
                    <p>{{v}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// copied from offital Vue examples
export default {
    name: 'com',
    props: {},
    data() {
        return {
            labelTxt: 'aaaaa',
            showChildren: false,
            listData: ['bbbb', 'bbbb', 'bbbb', 'bbbb']
        }
    },
    created() {},
    computed: {},
    mounted() {},
    methods: {
        expand() {
            this.showChildren = !this.showChildren
        }
    },
    components: {}
}
</script>

<style scoped>
.label-wrap {
    width: 300px;
    border: 1px solid #eeeeee;
}
.label {
    width: 100%;
    line-height: 40px;
    position: relative;
}
.label-icon {
    position: absolute;
    right: 0;
    top: 0;
    transition: transform 0.2s ease-in-out;
    font-size: 16px;
}
* {
    color: #000;
}
</style>
