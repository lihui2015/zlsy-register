<template>
  <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2 :title="postDetail.title" :leftBtn='leftBtn'></header2>
        <scroller class="main" :class="[isand?'android-main':'']" offset-accuracy="300px" @loadmore="onloading" loadmoreoffset="200">
            <refresher></refresher>
        <div class="contentBox">
          <div class="auther-box">
              <image class="auther-img" resize="cover" :src="readersImg"></image>
              <div class="auther-detail">
                  <text class="auther-name">{{readersName}}</text>
                  <text class="auther-time">{{readersTime}}</text>
              </div>
          </div>
          <div class="tlt-box">
              <text class="tlt">{{postDetail.title}}</text>
          </div>
          <div class="description-box">
              <text class="description">{{postDetail.html_content}}</text>
          </div>
          <div class="image-box">
            <image v-for="(img,i) in postDetail.html_image" :src="img" resize="cover" class="main-img"></image>
          </div>
          
        </div>
        <div class="like-box" v-if="ups.length != 0">
          <div class="like-wrap" v-for="(up,i) in postDetail.ups">
            <text class="like-name">{{up.name}}</text>
            <text class="like-name" v-if="i != postDetail.ups.length-1">、</text>
          </div>
          <text class="like-text">点赞</text>
        </div>
        <div class="comment-box">
          <div class="comment-item" v-for="item in comments">
            <image class="comment-author-img" :src="item.reader.full_avatar"></image>
            <div class="comment-detail">
              <div class="comment-author">
                <text class="comment-author-name">{{item.reader.name}}</text>
                <text class="comment-author-time">{{item.created_at}}</text>
              </div>
              <div class="comment-content">
                <text class="comment-text">{{item.content}}</text>
              </div>
            </div>
          </div>
        </div>
        <!-- <loading @loading="onloading" :class="['loading',loadinging ? 'show' : 'hide']">
          <text class="indicator-text">{{placeholder}}</text>
          <loading-indicator class="indicator"></loading-indicator>
        </loading>  -->
      </scroller>
      <div class="comment-form" :class="[isand?'android-comment-form':'']">
        <!-- <text class="more iconfont">&#xe744;</text> -->
        <input type="text" placeholder="" class="input" value="" @input='oninput' disabled='false' autofocus='false' @click="focus" ref="input"/>
        <text class="btn" @click="post()">提交</text>
      </div>
  </div>
</template>

<script>
import Header2 from '../components/Header2.vue';
import { Utils } from 'weex-ui';
var storage = weex.requireModule('storage')
var modal = weex.requireModule('modal')
export default {
  name: 'themeDetail',
  components: {
            'header2': Header2
        },
    data () {
      return {
        postDetail:{},
        postID:'',
        token: '',
        leftBtn:{
          name: '<'
        },
        readersImg: '',
        readersName: '',
        readersTime: '',
        current_page: 1,
        comments: [],
        total: 1,
        loadinging: false,
        hasNomare: false,
        placeholder: '',
        ups: [],
        commentContent: '',
        isand: false
      }
    },
    created(){
        this.isand = Utils.env.isAndroid();
        this.postID = this.$route.params.index;
        storage.getItem('token',event => {
          this.token = event.data;
          //获取帖子详情
          this.GET('posts/detail/'+this.postID, this.token, data => {
            if(data.code == 200){
              let result = data.result;
              this.postDetail = result;
              this.readersImg = result.readers.full_avatar;
              this.readersName = result.readers.name;
              this.readersTime = result.created_at;
              this.ups = result.ups;
            }else{
              modal.toast({
                message: data.code,
                duration: 3
              })
            }  
          });
          //增加阅读次数
          this.POST('posts/view/'+this.postID, this.token, '', data => {
            if(data.code == 200){
            }else{
            }  
          });
          //获取评论详情
          this.getComment();
        })
        
    },
    methods:{
      getComment(){
        var _self = this;
        this.GET('posts/comments/'+this.postID+'?page='+this.current_page, this.token, data => {
            this.loadinging = false;
            if(data.code == 200){
                let result = data.result;
                if(result.data.length == 0){
                  //_self.placeholder = "暂无评论"
                }
                for(let i = 0; i<result.data.length; i++){
                  this.comments.push(result.data[i])
                }
                this.total = this.last_page;
                if(result.last_page == result.current_page){
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
      oninput(event){
        this.commentContent = event.value;
      },
      focus(){
        this.$refs['input'].focus();
      },
      post(){
        var _self = this;
        if(_self.commentContent.length == 0){
            return false;
        }
        var data = JSON.stringify({"content":_self.commentContent});
        _self.POST('posts/comment/'+_self.postID, _self.token, data, data => {
          if (data.code == 200){
            modal.toast({
                message: "评论发表成功，请等待审核",
                duration: 3
            })
            _self.$router.push('/_empty');
          }else{
            modal.toast({
                message: data.message,
                duration: 3
            })
          }
        });
      }
    }
  }
</script>

<style scoped>
  .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #fefefe;
    }
    .w-ipx{
        margin-top: 40px;
        margin-bottom: 50px;
    }
    .main{
      margin-bottom: 100px;
      /*margin-bottom: 290px;*/
      width: 750px;
    }
    .android-main{
      /*margin-bottom: 150px;*/
    }
    .comment-form{
      position: fixed;
      left: 0;
      right:0;
      /*top: 1115px;*/
      bottom: 0px;
      width: 750px;
      height: 90px;
      background-color: #f0f0f0;
      flex-direction: row;
      align-items: center;
    }
    .android-comment-form{
      /*bottom:45px;*/
    }
    .more{
      font-size: 50px;
      color: #888888;
      padding-left: 20px;
    }
    .input{
      flex: 1;
      height: 60px;
      /*width: 400px;*/
      padding-left:10px;
      padding-right:10px;
      padding-top:10px;
      padding-bottom:10px;
      font-size: 32px;
      background-color: #ffffff;
      margin-left: 20px;
    }
    .btn{
      font-size: 34px;
      color: #888888;
      padding-left: 20px;
      padding-right: 20px;
      text-align: center;
    }
    .contentBox{
      margin-top:86px;
      background-color: #ffffff;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 20px;
      padding-right: 20px;
      border-bottom-width: 1px;
      border-color: #f0f0f0;
    }
    .auther-box{
        flex-direction: row;
        align-items: center;
        
    }
    .auther-img{
        border-radius: 10px;
        width: 60px;
        height: 60px;
        margin-right: 20px;
    }
    .auther-detail{
        width: 400px;
    }
    .auther-name{
        font-size: 34px;
        line-height: 34px;
        color: #666666;
    }
    .auther-time{
        font-size: 28px;
        line-height: 32px;
        margin-top: 10px;
        color: #888888;
    }
    .tlt-box{
        margin-top:20px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .tlt{
        font-size: 36px;
        color: #666666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 600px;
    }
    .description-box{
        margin-top: 20px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .description{
        color: #888888;
        font-size: 32px;
        line-height: 48px;
    }
    .img-box{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .main-img{
        flex: 1;
        height: 380px;
        margin-top: 20px;
    }
    .like-box{
      margin-left: 20px;
      margin-right: 20px;
      border-bottom-width: 1px;
      border-color: #f0f0f0;
      flex-direction: row;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: 32px;
    }
    .like-wrap{
      flex-direction: row;
      align-items: center;
    }
    .like-name{
      color: #888888;
      font-size: 32px;
    }
    .like-text{
      color:#009FF0;
      margin-left: 20px;
      font-size:32px;
    }
    .comment-box{
      padding-left: 20px;
      padding-right: 20px;
    }
    .comment-item{
      flex-direction: row;
      border-bottom-width: 1px;
      border-color: #f0f0f0;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .comment-author-img{
      width: 70px;
      height: 70px;
      border-radius: 10px;
      margin-right: 30px;
    }
    .comment-detail{
      width: 610px;

    }
    .comment-author{}
    .comment-author-name{
      font-size: 34px;
      color: #888888;
    }
    .comment-author-time{
      font-size: 28px;
      color: #acacac;
      margin-top: 10px;
    }
    .comment-content{
      margin-top: 20px;
    }
    .comment-text{
      font-size: 34px;
      color: #888888;
    }
    .loading {
      width: 750px;
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
