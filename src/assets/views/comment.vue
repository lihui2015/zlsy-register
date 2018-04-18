<template>
  
  <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
    <header2 title="写评论" :leftBtn='leftBtn' :rightBtn='rightBtn'></header2>
    <div class="commentBox">
        <text class="starText">评分</text>
        <div class="starBox">
            <text class="star" v-for="(i,item) in currentStar" @click="vote(item)">{{i}}</text>
        </div>
    </div>
    <div class="textBox">
      <textarea class="textarea" @input='oninput' placeholder="写下你的评论吧~" disabled='false' autofocus='true' @click="focus" ref="textarea"></textarea>
    </div>
</div>
</template>

<script>
import util from '../util';
import Header2 from '../components/Header2.vue';
var modal = weex.requireModule('modal');
var storage = weex.requireModule('storage');
export default {
  name: 'comment',
  components: {
    'header2': Header2
  },
  data(){
      var _self = this;
    return {
      leftBtn: {
          name:"&#xe69a;"
      },
      score: null,
      comment: '',
      bookID: '',
      token: '',
      rightBtn: {
          name: '发表',
          fun: function(){
                if(!_self.score){
                    modal.alert({
                        message: '请评分',
                        okTitle: '知道了'
                    })
                    return false;
                }
                if(!_self.comment.length){
                    modal.alert({
                        message: '请填写评论内容',
                        okTitle: '知道了'
                    })
                    return false;
                }
                var data = JSON.stringify({"score":_self.score,"content":_self.comment});
                _self.POST('books/comment/'+_self.bookID, _self.token, data, data => {
                  if (data.code == 200){
                    modal.toast({
                        message: data.message+",请等待审核",
                        duration: 1
                    })
                    _self.$router.go(-1)
                  }else{
                    modal.toast({
                        message: data.message,
                        duration: 3
                    })
                  }
                });
          }
      },
      currentStar: ['☆','☆','☆','☆','☆'],
      stars: [
          ['★','☆','☆','☆','☆'],
          ['★','★','☆','☆','☆'],
          ['★','★','★','☆','☆'],
          ['★','★','★','★','☆'],
          ['★','★','★','★','★']
      ]
    }
  },
  mounted(){
    this.bookID = this.$route.params.index;
    storage.getItem('token',event => {
      this.token = event.data;
    })
  },
  methods: {
    vote(index) {
      this.currentStar = this.stars[index];
      this.score = Number(index + 1);
    },
    oninput(event){
      this.comment = event.value;
    },
    focus(){
        this.$refs.textarea.focus();
    }
  }
  }
</script>

<style scoped>
    .commentBox{
        margin-top: 86px;
        border-bottom-width: 1px;
        border-bottom-color: #009FF0;
        flex-direction: row;
        align-items: center;
        padding-top:20px;
        padding-bottom:20px;
        padding-left:20px;
        padding-right:20px;
    }
    .starText{
        margin-right: 40px;
        font-size: 32px;
        color: #333333;
    }
    .starBox{
        flex-direction: row;
        align-items: center;
    }
    .star{
        font-size: 60px;
        color: orange;
        margin-right: 30px;
        line-height: 60px;
    }
    .textarea{
        placeholder-color: #d8d8d8;
        font-size: 34px;
        width: 700px;
        margin-left: 20px;
        margin-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #666666;
        height: 430px;
    }
    
</style>
