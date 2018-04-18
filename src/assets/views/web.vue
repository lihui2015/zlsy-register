<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <!-- <header2 title="下载更新" :leftBtn='leftButton'></header2> -->
        <!-- <web class="web-box" :src="webSrc"></web> -->
        <div class="wrapper">
    <web style="width: 750px; height: 1500px" src="https://www.pgyer.com/Xdo1"></web>
  </div>
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #ffffff;
    }
    .w-ipx{
        margin-top: 40px;
        margin-bottom: 50px;
    }
    .main-list{
        margin-top: 86px;
        /*margin-bottom: 100px;*/
        /*margin-bottom: 290px;*/
        background-color: #fff;
        width: 750px;
    }
    .android-main-list{
        /*margin-bottom: 150px;*/
    }
    
</style>

<script>
    import { Utils } from 'weex-ui';
    import Header2 from '../components/Header2.vue';
    var storage = weex.requireModule('storage')
    var modal = weex.requireModule('modal')
    export default {
        components: {
            'header2': Header2
        },
        data () {
            return {
                leftButton: {
                    name:"&#xe697;"
                },
                isand:false,
                webSrc:'https://www.senseitgroup.com/zlsxapp'
            }
        },
        created () {

        },
        methods: {
            
        }
    }
</script>