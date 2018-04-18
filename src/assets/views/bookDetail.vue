<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2 :title="name" :leftBtn='leftButton'></header2>
        <scroller class="main" :class="[isand?'android-main':'']" offset-accuracy="300px" @loadmore="onloading" loadmoreoffset="200">
            <refresher></refresher>
            <div class="section-box">
              <div class="box-wrap bt40">
                <div class="book-detail">
                  <image class="i-img" resize="cover" :src="detail.full_cover"></image>
                  <div class="detail">
                    <text class="i-name">{{detail.book_name}}</text>
                    <div class="star-box">
                      <image :src="starbar" class="star-bar"></image>
                      <div  :class="['star','star'+detail.score]">
                        <image :src="star" class="starImg"></image>
                      </div>
                    </div>
                    <text class="i-author">作者：{{detail.author}}</text>
                    <text class="i-count">{{read_counts}}人阅读</text>
                    <div class="shareBox" @click="collect(collectTag)">
                      <text ref='collect' :class="['i-collect','iconfont', 'collected']" v-if="collectTag == 1">&#xe64b;</text>
                      <text ref='collect' :class="['i-collect','iconfont']" v-else>&#xe64c;</text>
                      <text :class="['i-collect-text',collectTag == 1 ? 'collected' : '']">收藏</text>
                      <!-- <text class="i-share">&#xe744; 分享</text> -->
                    </div>
                    
                  </div>
                </div>
                <div class="book-btn">
                  <text class="i-read" @click="readBook()">立即阅读</text>
                </div>
              </div>
              
            </div>
            
            <div class="relative-activity section-box" v-if="activities.length > 0">
              <div class="box-wrap">
              <div class="tagWrap">
                <text class="activity-tag iconfont icon-text">&#xe62a;</text>
                <text class="activity-text tag-text">相关活动</text>
              </div>
              <scroller class="activity-box" scroll-direction="horizontal" show-scrollbar=false>
                <div class="activity-item" v-for="act in detail.activity" @click="jump('/online/'+act.id+'/' + act.title)">
                  <image class="act-img" :src="act.full_thumb" resize="cover"></image>
                  <div class="act-titleBox">
                    <text class="act-title">{{act.title}}</text>
                  </div>
                </div>
              </scroller>
              </div>
            </div>
            <div class="book-desc section-box">
              <div class="box-wrap">
              <div class="tagWrap">
                <text class="desc-tag iconfont icon-text">&#xe62b;</text>
                <text class="desc-text tag-text">书籍简介</text>
              </div>
              <text class="desc-content">{{detail.description}}</text>
              </div>
            </div>
            <div class="book-comment section-box">
              <div class="box-wrap mb0">
              <div class="comment-header section">
                <div class="tagWrap">
                  <text class="comment-tag iconfont icon-text">&#xe608;</text>
                  <text class="comment-text tag-text">读书评论</text>
                </div>
                <text class="comment-btn" @click="jump('/comment/'+bookID)">我要评论</text>
              </div>
              <div class="comment-item" v-for="item in comments">
                <text class="comment-content">{{item.content}}</text>
                <div class="comment-detail">
                  <div class="comment-author">
                    <image class="comment-author-img" :src="item.reader.full_avatar"></image>
                    <text class="comment-author-name">{{item.reader.name}}</text>
                  </div>
                  <div class="star-box">
                    <image :src="starbar" class="star-bar"></image>
                    <div :class="['star','star'+item.score]">
                      <image :src="star" class="starImg"></image>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <!-- <loading @loading="onloading" :class="['loading',loadinging ? 'show' : 'hide']">
              <text class="indicator-text">{{placeholder}}</text>
              <loading-indicator class="indicator"></loading-indicator>
            </loading>  -->
            <!--<loading class="loading" display="hide">-->
                <!--<text class="indicator">Loading ...</text>-->
            <!--</loading>-->
        </scroller>
        <tab-bar @tabTo="onTabTo" router='bookDetail'></tab-bar>
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
    .main{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-top: 86px;
        margin-bottom: 100px;
        /*margin-bottom: 290px;*/
        background-color: #ffffff;
        width: 750px;
    } 
    .android-main{
      /*margin-bottom: 150px;*/
    }
    .book-detail{
      flex-direction: row;
      flex-wrap: nowrap;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 20px;
    }
    .i-img{
      width: 234px;
      height: 310px;
      margin-right: 30px;
    }
    .detail{
      flex-direction: column;
    }
    .i-name{
      color: #101010;
      font-size: 34px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 10px;
    }
    .i-author{
      color: #787878;
      font-size: 32px;
      margin-top: 10px;
    }
    .i-count{
      color: #787878;
      font-size: 32px;
      margin-top: 10px;
    }
    .shareBox{
      flex-direction: row;
      color: #101010;
      font-size: 34px;
      margin-top: 15px;
      align-items: center;
    }
    .i-collect{
      margin-right: 10px;
      font-size: 38px;
      color:#606060;
    }
    .i-collect-text{
      color:#606060;
      font-size: 34px;
    }
    .collected{
      color: #009FF0;
    }
    .i-share{
      font-size: 34px;
    }
    .book-btn{
      align-items: center;
      margin-top:20px;
    }
    .i-read{
      background-color: #009FF0;
      font-size: 34px;
      color: #ffffff;
      width: 700px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      border-radius: 10px;
    }

    .section-box{
      /*padding-bottom: 10px; */
      background-color: #f4f4f4;
      /*margin-bottom: 20px; */    
    }
    .box-wrap{
      background-color: #ffffff;
      margin-bottom: 20px;
    }
    .bt40{
      padding-bottom: 40px;
    }
    .tagWrap{
      flex-direction: row;
      align-items: center;
      background-color: #ffffff;
      height: 94px;
      padding-left: 20px;
      padding-right: 20px;
      border-bottom-width: 1px;
      border-color: #ededed;
    }
    .icon-text{
      font-size: 40px;
      color: #333333;
      margin-right: 10px;
    }
    .tag-text{
      color: #333333;
      font-size: 34px;
    }
    .section{
      background-color: #ffffff;
      padding-right:20px;
    }
    .relative-activity{
      
    }
    .activity-tag{
      
    }
    .activity-box{
      width: 750px;
      height: 210px;
      flex-direction: row;
      padding-top: 20px;
      padding-bottom: 0px;
      padding-left: 15px;
      padding-right: 15px;
    }
    .activity-item{
      position: relative;
      width: 345px;
      height: 180px;
      margin-right: 30px;
    }
    .act-img{
      width: 345px;
      height: 180px;
    }
    .act-titleBox{
      width: 345px;
      height: 180px;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.3);
      justify-content: center;
      align-items: center;
    }
    .act-title{ 
      width: 345px;
      padding-left: 20px;
      padding-right: 20px;      
      text-align: center;
      color:#ffffff;
      font-size: 32px;
      lines: 1;
    }

    .book-desc{
    }
    .desc-tag{
    }
    .desc-content{
      padding-top: 30px;
      padding-bottom: 40px;
      padding-left: 20px;
      padding-right: 20px;      
      font-size: 32px;
      color: #6c6c6c;
      line-height: 40px;
    }

    .book-comment{
    }
    .comment-header{
      width: 750px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom-width: 1px;
      border-color: #ededed;
      background-color: #ffffff;
    }
    .comment-tag{
      color: #333333;
      font-size: 34px;
    }
    .comment-btn{
      border-radius: 10px;
      border-width: 1px;
      border-color: #009ffc;
      color: #009ffc;
      height: 54px;
      text-align: center;
      line-height: 54px;
      font-size: 34px;
      padding-left:15px;
      padding-right:15px;
    }
    .mb0{
      margin-bottom: 0
    }
    .comment-item{
      border-bottom-width: 1px;
      border-bottom-color: #f0f0f0;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 20px;
      padding-right: 20px;      
    }
    .comment-content{
      color: #606060;
      font-size: 32px;
      line-height: 40px;
    }
    .comment-detail{
      padding-top: 20px;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
    }
    .comment-author{
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
    }
    .comment-author-img{
      width: 43px;
      height: 43px;
      border-radius: 43px;
      margin-right: 10px;
    }
    .comment-author-name{
      color: #8d8d8d;
      font-size: 30px;
    }
    .icon-text{
      font-size: 40px;
    }

    .detail .star-box{
      margin-top: 10px;
      position: relative;
    }
    .star-bar {
      width: 160px;
      height: 32px;
      font-size: 0;
      line-height: 0;
    }

    .star {
      position: absolute;
      top:0;
      left:0;
      height: 32px;
      width: 160px;
      overflow: hidden;
    }   
    .starImg{
      height: 32px;
      width: 160px;
    }
    .star0{
      width: 0px;
    }
    .star1{
      width: 32px;
    }
    .star2{
      width: 64px;
    }
    .star3{
      width: 96px;
    }
    .star4{
      width: 128px;
    }
    .star5{
      width: 160px;
    }
    .star[data-star$='0']{
      width: 0px;
    }.star[data-star$='0.5']{
      width: 16px;
    }
    .star[data-star^='1']{
      width: 32px;
    }
    .star[data-star^='1.5']{
      width: 48px;
    }
    .star[data-star^='2']{
      width: 64px;
    }
    .star[data-star^='2.5']{
      width: 80px;
    }
    .star[data-star^='3']{
      width: 96px;
    }
    .star[data-star^='3.5']{
      width: 112px;
    }
    .star[data-star^='4']{
      width: 128px;
    }
    .star[data-star^='4.5']{
      width: 144px;
    }
    .star[data-star^='5']{
      width: 160px;
    }
    .loading {
      width: 750;
      display: -ms-flex;
      display: -webkit-flex;
      display: flex;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      align-items: center;
    }
    .indicator-text {
      color: #888888;
      font-size: 42px;
      text-align: center;
    }
    .indicator {
      margin-top: 16px;
      height: 40px;
      width: 40px;
      color: blue;
    }
    .show{
        opacity: 1;
    }
    .hide{
        opacity: 0;
    }
</style>

<script>
    import { Utils } from 'weex-ui';
    import refresher from '../components/refresh.vue';
    import Header2 from '../components/Header2.vue';
    import tabBar from '../components/tabBar.vue';
    var navigator = weex.requireModule('navigator')
    var storage = weex.requireModule('storage')
    var modal = weex.requireModule('modal')
    export default {
        components: {
            'tab-bar': tabBar,
            'refresher': refresher,
            'header2': Header2
        },
        data () {
            return {
                detail: {},
                activities:[],
                leftButton: {
                    name:"&#xe697;"
                },
                token: '',
                bookID: '',
                collectTag: 0,
                current_page: 1,
                comments: [],
                total: 1,
                loadinging: false,
                hasNomare: false,
                placeholder: 'Loading...',
                name:'',
                //pdfUrl:'/json/storage/pdf/xiyou.pdf',
                workerSrc: 'https://cdn.bootcss.com/pdf.js/1.9.456/pdf.worker.min.js',
                starbar: 'http://www.imbawin.com/images/iconpic-star-S-default.png',
                star: 'http://www.imbawin.com/images/iconpic-star-S.png',
                isand:false,
                read_counts: ''
            }
        },
        created () {
            this.bookID = this.$route.params.index;
            this.name = this.$route.params.name;
            this.isand = Utils.env.isAndroid();
            var _self = this;
            storage.getItem('token',event => {
              this.token = event.data;
              // this.token = '8755a2c81a83b12e45691e87b2ac8540';
              this.GET('books/detail/'+this.bookID, this.token, data => {
                if(data.code == 200){
                    let result = data.result;
                    this.detail = result;
                    this.collectTag = result.is_collect;
                    this.activities = result.activity;
                    this.read_counts = result.read_count;
                }else{
                    modal.toast({
                        message: data.code,
                        duration: 3
                    })
                }
              });
              _self.getComment();
            })
            
        },
        methods: {
          handleClick(){
            PDFPreview.open(this.pdfUrl);
          },
          collect(isCollected){
            if(isCollected == 1){
              return false;
            }
            var _self = this;
            var data = '';
            this.POST('books/collect/'+this.bookID, this.token, data, data => {
              if (data.code == 200){
                _self.collectTag = 1;
                modal.toast({
                    message: data.message,
                    duration: 1
                })
              }else{
                modal.toast({
                    message: data.message,
                    duration: 3
                })
              }
            })
          },
          // onloadmore(){
          //   this.getComment();
          // },
          getComment(){
            var _self = this;

            this.GET('books/comment/'+this.bookID+'?page='+this.current_page, this.token, data => {
                this.loadinging = false;
                if(data.code == 200){
                    let result = data.result;
                    if(result.data.length == 0){
                      _self.placeholder = "暂无评论"
                    }
                    for(let i = 0; i<result.data.length; i++){
                      this.comments.push(result.data[i])
                    }
                    this.total = this.last_page;
                    if(result.last_page = result.current_page){
                      //最后一页
                      _self.hasNomare = true;
                    }else if(result.last_page > result.current_page){
                      //非最后一页
                      this.current_page = result.current_page + 1;
                    }
                    
                }else{
                    modal.toast({
                        message: data.code,
                        duration: 3
                    })
                }
              });
          },
          onloading (event) {
            var _self = this;
            if(_self.hasNomare){
              modal.toast({ message: '没有更多评论', duration: 1 })
              return false;
            }
            modal.toast({ message: 'Loading', duration: 1 })
            this.loadinging = true;
            this.getComment();
          },
          onTabTo(_result){
                  let _key = _result.data.key || '';
                  this.$router && this.$router.push('/'+_key)
              },
          readBook(){
            var _self = this;
            //增加阅读次数
            this.POST('books/count/'+this.bookID, this.token, '', data => {
              if(data.code == 200){
                _self.read_counts = _self.read_counts + 1;
              }else{
              }  
            });
            //console.log(this.token,this.bookID);
            var id = this.bookID,
                tk = this.token;
            weex.requireModule('PDFModule').readPDF(id, tk);

          }
        }
    }
</script>