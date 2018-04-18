<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2 title="关于软件" :leftBtn="leftBtn"></header2>
        <scroller ref="contentScroller" :class="['scroller',isIpx&&isIpx()?'ml-ipx':'',isand?'android-main-list':'']"  show-scrollbar="false">
            <div class="text-box">
                <text class="name text">书香浙理APP</text>
                <!-- <div class="version">
                    <text class="version-text">当前版本</text>
                    <text class="version-code">{{currentVersion}}</text>
                </div>
                <div class="version">
                    <text class="version-text">最新版本</text>
                    <text class="version-code">{{newVersion}}</text>
                </div> -->
                
            </div>
            
            <div class="qrcode-box">
                <div class="android qrcode">
                    <image class="qr-img" :src="androidImg"></image>
                    <!-- <text class="qr-text" @click="jumpWeb()">更新下载</text> -->
                </div>
            </div>

            <div class="copy-right">
                <text class="copy-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本APP及其具有的图书资料等信息，均用于浙江理工大学师生员工的阅读推广活动。任何组织和个人不得用于其他用途，否则自行承担法律责任，与浙江理工大学无涉。</text>
                <text class="copy-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本APP用户均为实名制认证用户，用户发布信息必须遵守国家相关的法律法规，APP管理员有权禁止用户发布不良信息，对造成严重后果的，将保留配合司法机关追究其法律责任的权力。</text>
            </div>
        </scroller>
    </div>
</template>

<script>
    import { Utils } from 'weex-ui';
    import Header2 from '../components/Header2.vue';
    const storage = weex.requireModule('storage');
    export default {
        name:'about',
        data () {
            return {
                leftBtn:{
                    name:'<'
                },
                androidImg:'http://zl.senseitgroup.com/images/Android-qrcode.png',
                currentVersion:'',
                newVersion:''
            }
        },
        components: {
            'header2': Header2
        },
        created(){
            this.isand = Utils.env.isAndroid();
            // this.currentVersion = this.$route.params.current;
            // this.newVersion = this.$route.params.new;
        },
        methods: {
            jumpWeb(){
                this.$router.push('/web');
            }
        }
    }
</script>

<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #f0f0f0;
    }
    
    .scroller{
        margin-top: 86px;
        /*margin-bottom: 100px;*/
        /*margin-bottom: 290px;*/
    }
    .android-main-list{
        /*margin-bottom: 150px;*/
    }
    .ml-ipx{
        margin-bottom: 140px;
    }
    .cell-button{
        background-color: #f4f4f4;
    }
    .text-box{
        background-color: #ffffff;
    }
    .text{
        font-size: 32px;
        color: #666666;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        border-bottom-width: 1px;
        border-color: #f0f0f0;
    }
    .version{
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        border-bottom-width: 1px;
        border-color: #f0f0f0;
        flex-direction: row;
        justify-content: space-between; 
    }
    .version-text{
        color: #8d8d8d;
        font-size: 32px;
    }
    .version-code{
        color: #8d8d8d;
        font-size: 30px;
    }
    .qrcode-box{
        width: 650px;
        margin-left: 50px;
        margin-top: 30px;
        border-width:1px;
        border-color:#f0f0f0;
        background-color: #ffffff;
        
    }   
    .qrcode{
        align-items: center;
        padding-bottom: 40px;
    }
    .qr-img{
        width: 480px;
        height: 480px;
        margin-top: 40px;
        /*margin-left: 50px;*/
    }
    .qr-text{
        width: 630px;
        font-size: 32px;
        color: #009ffc;
        margin-top: 40px;
        border-top-width: 1px;
        border-color: #f0f0f0;
        padding-top: 30px;
        padding-bottom: 30px;
        text-align: center;
    }
    .copy-right{
        background-color:#ffffff;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: 30px;
    }
    .copy-text{
        color:#8d8d8d;
        font-size: 30px;
        text-indent: 60px;
    }
</style>