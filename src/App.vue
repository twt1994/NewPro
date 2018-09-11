<template>
    <router-view v-wechat-title='$route.meta.title' class="max_box" style="max-width:750px; width:100%;"></router-view>
</template>

<script>
    import '@/style/main.less';

    export default {
        name: 'home',
        data() {
            return {}
        },
        methods: {

        },
        components: {},
        mounted() {

        }
    }
</script>
