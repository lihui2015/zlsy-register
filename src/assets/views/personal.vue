<template>
    <div class="wrapper">
        <header5></header5>
        <scroller ref="contentScroller" :class="['scroller',isIpx&&isIpx()?'ml-ipx':'',isand?'android-main-list':'']"  show-scrollbar="false">
        <div :class="['header', isIpx&&isIpx()?'h-ipx':'']">
            <!-- <image class="i-photo" resize="cover" :src="profile.full_avatar"></image> -->
            <text class="i-name">{{profile.name}}</text>
            <!-- <div class="b-tlt">
                <text class="i-tag tag-v8 iconfont">&#xe660;</text>
                <text class="txt-tag"></text>
            </div> -->
            <div class="aboutBox" @click="jump('/about')">
                <text class="about-icon iconfont">&#xe62d;</text>
                <text class="about-text">关于</text>
                <text class="notice-dot" v-if="isNew"></text>
            </div>
            <!-- <text class="b-qrcode iconfont">&#xe62d;</text> -->
        </div>
        <div class="fbs">
            <div class="s-box cell-button">
                <div class="box-wrap">
                    <div class="box-tlt border-bottom" @click="jump('/bookshelf')">
                        <div class="icon-box">
                            <text class="item-icon iconfont">&#xe62b;</text>
                            <text class="box-txt">我的书架</text>
                            
                        </div>
                        <text class="i-box-in iconfont">&#xe6a7;</text>
                    </div>
                    <div class="box-cont box-books">
                        <div class="box-cont-item box-book-item" v-for="(book,i) in books" @click="jump('/bookDetail/'+book.id+'/'+book.book_name)">
                            <image class="box-cont-img box-book-img" :src="book.book_cover" resize="cover"></image>
                            <text class="box-cont-text box-book-text">{{book.book_name}}</text>
                        </div>
                    </div>
                </div>
                
            </div>
            <!-- <div class="s-box cell-button">
                <div class="box-wrap">
                    <div class="box-tlt border-bottom"><text class="box-txt">我的活动</text><text class="i-box-in iconfont">&#xe6a7;</text></div>
                    <div class="box-cont box-activity">
                        <div class="box-cont-item box-activity-item">
                            <image class="box-cont-img box-activity-img" src="http://yanxuan.nosdn.127.net/885e3901d0a3501362530435d76bebb3.jpg" resize="cover"></image>
                            <text class="box-cont-text box-activity-text">西游记</text>
                        </div>
                    </div>
                </div>
                
            </div> -->
            <div class="s-box cell-button">
                <div class="box-wrap mt0">
                    <div class="box-tlt border-bottom" @click="jump('/mypost')">
                        <div class="icon-box">
                            <text class="item-icon iconfont">&#xe6a2;</text>
                            <text class="box-txt">我的帖子</text>
                        </div>
                        <text class="i-box-in iconfont">&#xe6a7;</text>
                    </div>
                    <div class="box-cont box-post">
                        <div class="box-cont-item box-post-item" v-for="post in posts" @click="jump('/themeDetail/'+post.id)">
                            <text class="box-cont-text box-post-text">{{post.title}}</text>
                            <text class="box-post-time">{{post.created_at}}</text>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </scroller>
        <tab-bar router='personal'></tab-bar>
    </div>
</template>

<script>
    import { Utils } from 'weex-ui';
    import Header4 from '../components/Header4.vue';
    import tabBar from '../components/tabBar.vue';
    const storage = weex.requireModule('storage');
    export default {
        data () {
            return {
                token:'',
                books:[],
                activity:[],
                posts:[],
                bookLimit:3,
                actLimit:3,
                postLimit: 10,
                profile:{},
                isand:false,
                currentVersion: '1.2.0',
                newVersion:'',
                isNew:false
            }
        },
        components: {
            'header5': Header4,
            'tab-bar': tabBar
        },
        created(){
            this.isand = Utils.env.isAndroid();
            storage.getItem('token',event => {
                this.token = event.data;
                this.getProfile()
                this.getBookList()
                //this.getActivityList()
                this.getPostList()
                //this.getVersion()
            })
        },
        methods: {
            getProfile(){
                var _self = this;
                this.GET('profile/reader/', this.token, data => {
                    if(data.code == 200){
                        let result = data.result;
                        _self.profile = result;
                        //console.log(_self.profile);
                    }else{
                        modal.toast({
                            message: data.code,
                            duration: 3
                        })
                    }
                })
            },
            getBookList(){
                var _self = this;
                this.GET('profile/book/'+_self.bookLimit+'?page=1', this.token, data => {
                    if(data.code == 200){
                        let result = data.result;
                        _self.books = result;
                        
                        //console.log(_self.books);
                    }else{
                        modal.toast({
                            message: data.code,
                            duration: 3
                        })
                    }
                })
            },
            getActivityList(){
                var _self = this;
                this.GET('profile/activity/'+_self.actLimit+'?page=1', this.token, data => {
                    if(data.code == 200){
                        let result = data.result;
                        _self.activity = result;
                    }else{
                        modal.toast({
                            message: data.code,
                            duration: 3
                        })
                    }
                })
            },
            getPostList(){
                var _self = this;
                this.GET('profile/post/'+_self.postLimit+'?page=1', this.token, data => {
                    if(data.code == 200){
                        let result = data.result;
                        _self.posts = result;
                        for(var i=0; i<result.length; i++){
                            _self.posts[i].created_at = result[i].created_at.split(' ')[0];
                        }
                    }else{
                        modal.toast({
                            message: data.code,
                            duration: 3
                        })
                    }
                })
            },
            getVersion(){
                var _self = this;
                this.GET('version', '', data => {
                    if(data.code == 200){
                        let result = data.result;
                        this.newVersion = result.version;
                        this.compareV();
                    }else{
                        modal.toast({
                            message: data.code,
                            duration: 3
                        })
                    }
                })
            },
            compareV(){
                var cu = this.currentVersion,
                    ne = this.newVersion;
                if(ne > cu){
                    this.isNew = true;
                }else{
                    this.isNew = false;
                }
                //console.log(this.isNew)
            }
        }
    }
</script>

<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #ffffff;
    }
    .fbs{
        background-color: #ffffff;
        /*padding-bottom: 1000px;
        margin-bottom: -1000px;*/
    }
    .scroller{
        margin-bottom: 100px;
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

    .box-wrap{
        background-color: #ffffff;
        margin-bottom: 20px;
    }
    .mt0{
        margin-bottom: 0
    }
    .header{
        height: 246px;
        background-color: #009ffc;
    }
    .h-ipx{
        height: 420px;
    }
    .bg2{
        top:500px;
    }
    .bg3{
        top:1000px;
    }
    /*.i-photo{
        position: absolute;
        bottom:60px;
        left: 30px;
        height: 130px;
        width: 130px;
        border-radius: 130px;
    }*/
    .i-name{
        position: absolute;
        bottom:70px;
        left: 30px;
        height: 50px;
        width: 300px;
        font-size: 38px;
        color:#fff;
    }
    .b-tlt{
        position: absolute;
        bottom: 70px;
        left: 190px;
        height: 40px;
        width: 350px;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
    }
    .tag-v8{
        font-size: 34px;
        color:#b29e75;
        text-align: center;
    }
    .txt-tag{
        color:#b29e75;
        flex: 1;
        height: 40px;
        font-size: 28px;
        overflow: hidden;
        lines:1;
        text-overflow: ellipsis;
    }
    .aboutBox{
        position: absolute;
        top: 20px;
        right: 20px;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        width:200px;
        
    }
    .about-text{
        font-size: 30px;
        color: #ffffff;
        padding-left: 6px;
    }
    .about-icon{
        font-size: 40px;
        color: #ffffff;
    }
    .notice-dot{
        margin-top: -20px;
        margin-left: 10px;
        height: 15px;
        width: 15px;
        border-radius: 100%;
        background-color: #f00;
    }
    .b-qrcode{
        position: absolute;
        bottom:80px;
        right: 40px;
        height: 80px;
        width: 80px;
        border-radius: 70px;
        text-align: center;
        font-size: 40px;
        padding-top: 18px;
        color:#fff;
        background-color: rgba(255,255,255,.3);
    }
    .s-box{
        background-color: #fff;
    }
    .box-tlt{
        height: 94px;
    }
    .box-txt{
        font-size: 32px;
        /*padding-top: 34px;*/
        color:#333;
        /*padding-left: 20px;*/
    }
    .icon-box{
        flex-direction: row;
        align-items: center;
        padding-top: 28px;
        padding-left: 20px;
    }
    .item-icon{
        font-size: 40px;
        color: #333;
        margin-right: 10px;
    }
    .box-cont{
        
        
    }
    .box-books{
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .box-book-item{
        width: 236px;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left:10px;
        padding-right: 10px;
    }
    .box-book-img{
        height: 291px;
        width: 223px;
    }
    .box-book-text{
        font-size: 30px;
        margin-top: 20px;
        color: #6d6d6d;
        lines:1;
    }
    .box-post{
        padding-left: 20px;
        padding-right: 20px;
    }
    .box-post-item{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom-width: 1px;
        border-color: #e0e0e0;
    }
    .box-post-text{
        font-size: 30px;
        lines: 1;
        padding-right: 20px;
        color:#6d6d6d;
    }
    .box-post-time{
        font-size: 28px;
        color:#808080;

    }
    .i-box-in{
        position: absolute;
        top:34px;
        right: 30px;
        color:#009ffc;
        font-size: 40px;
    }
    .border-bottom{
        border-bottom-width: 1px;
        border-bottom-color: rgba(0,0,0,.15) ;
    }
    .i-c-orange{
        color:#ff744d;
    }
    .i-c-yellow{
        color:#f6a121;
    }
    .i-c-blue{
        color:#689de5;
    }
</style>