<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'',isand?'android-wrapper':'',isHuaWei?'huawei-wrapper':'']">

        <div class="bar-item" @click="tabTo('home')">
            <text class="bar-ic iconfont icon-home bar-active" v-if="this.isActive('home')">&#xe702;</text>
            <text class="bar-ic iconfont icon-home" v-else>&#xe703;</text>
            <!-- <text class="bar-ic iconfont icon-home" :class="[this.isActive('home')]"></text> -->
            <text class="bar-txt" :class="[this.isActive('home')]">首页</text>
        </div>
        <div class="bar-item" @click="tabTo('activity')">
            <text class="bar-ic iconfont icon-activity bar-active" v-if="this.pIndexKey == 'activity'">&#xe6df;</text>
            <text class="bar-ic iconfont icon-activity" v-else>&#xe6de;</text>
            <text class="bar-txt" :class="[this.pIndexKey == 'activity'?'bar-active':'']">活动</text>
            <!-- <text class="notice-dot"></text> -->
        </div>
        <div class="bar-item" @click="tabTo('personal')">
            <text class="bar-ic iconfont icon-person bar-active" v-if="this.pIndexKey == 'personal'">&#xe715;</text>
            <text class="bar-ic iconfont icon-person" v-else>&#xe716;</text>
            <text class="bar-txt" :class="[this.isActive('personal')]">我的</text>
            <!-- <text class="i-notice">2</text> -->
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        position: fixed;
        bottom: 0px;
        /*top: 1105px;*/
        left: 0;
        right: 0;
        height: 100px;
        width: 750px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #f0f0f0;
    }
    
    .android-wrapper{
        /*bottom: 45px;*/
    }
    .huawei-wrapper{
        bottom: 0px;
    }
    .w-ipx{
        height: 150px;
    }
    .bar-item{
        flex: 1;
    }
    .bar-txt,.bar-ic{
        color:#8d8d8d;
        text-align: center;
    }
    
    .bar-active{
        color:#009FF0;
    }
    .bar-ic{
        padding-top: 14px;
        font-size: 56px;
        line-height: 42px;
    }
    /*.icon-home{
        font-size: 60px;
    }
    .icon-activity{
        font-size: 48px;
    }
    .icon-person{
        font-size: 40px;
    }*/
    .bar-txt{
        font-size: 28px;
        padding-top: 3px;
        line-height: 30px;
    }
    .i-notice{
        position: absolute;
        top:10px;
        right: 55px;
        height: 30px;
        width: 30px;
        border-radius: 100%;
        font-size: 26px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-color: #f00;
    }
    .notice-dot{
        position: absolute;
        top:15px;
        right: 73px;
        height: 15px;
        width: 15px;
        border-radius: 100%;
        background-color: #f00;
    }
</style>
<script>
    import { Utils } from 'weex-ui';
    var modal = weex.requireModule('modal');
    export default {
        props:['router'],
        computed:{
        },
        data () {
            return {
                pIndexKey:this.router,
                isand:false,
                isHuaWei:false
            }
        },
        created(){
            this.isand = Utils.env.isAndroid();
            var _self = this;
            weex.requireModule('close').getPhoneAppBar(function(map){
                
              _self.isHuaWei = map.bar;

            });
        },
        methods: {
            isActive:function (_c) {
                return this.pIndexKey === _c ?'bar-active':''
            },
            tabTo(_key){
                this.pIndexKey = _key;
                this.$router.push('/'+_key);
            }
        }
    }
</script>