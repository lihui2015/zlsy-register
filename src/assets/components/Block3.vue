<template>
    <div class="wrapper"  @click="jump('/online/'+article.id+'/' + article.title)">
        <!-- <div class="auther-box">
            <image class="auther-img" resize="cover" :src="article.auther.full_avatar"></image>
            <text class="auther-name">{{article.auther.name}}</text>
        </div> -->
        <div class="tlt-box">
            <text class="tlt">{{article.title}}</text>
        </div>
        <div class="img-box">
            <image class="main-img" resize="cover" :src="article.full_thumb"></image>
        </div>
        
        <text class="info">{{article.activity_start_time}}开始</text>
        <text class="info">{{article.address}}</text>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #ffffff;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .auther-box{
        height: 75px;
        padding-top: 10px;
        padding-left: 25px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    .auther-img{
        height: 58px;
        width: 58px;
        border-radius: 58px;
    }
    .auther-name{
        flex:1;
        font-size: 30px;
        height: 58px;
        padding-left: 20px;
        padding-top: 10px;
    }
    .img-box{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .main-img{
        flex: 1;
        height: 380px;
    }
    .tlt-box{
        height: 80px;
        padding: 20px 20px 0px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    .tlt{
        font-size: 34px;
        flex: 1;
        overflow: hidden;
        lines:1;
        text-overflow: ellipsis;
    }
    .info{
        font-size: 28px;
        padding-left: 20px;
        padding-right: 20px;
        margin-top:20px;
        overflow: hidden;
        lines:1;
        text-overflow: ellipsis;
        color:#666;
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    
    import util from '../util';
    export default {
        props:["article","url"],
        data () {
            return {
            }
        },
        methods: {
            jumpWeb (_url) {
                if(!_url) _url = 'http://m.you.163.com/topic/v1/pub/XLymbwEO0J.html';
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "true"
                });
            }
        }
    }
</script>