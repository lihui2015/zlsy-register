<template>
  
  <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
    <header2 title="写话题" :leftBtn='leftBtn' :rightBtn='rightBtn'></header2>
    <div class="commentBox">
        <textarea placeholder="标题" class="input" @input='oninputTitle' disabled='false' autofocus='false' @click="focus" ref="input"></textarea>
    </div>
    <div class="textBox">
      <textarea class="textarea" @input='oninput' placeholder="这一刻的想法..." disabled='false' autofocus='false'></textarea>
    </div>
    <!-- <uploadImg></uploadImg> -->
</div>
</template>

<script>
import util from '../util';
import Header2 from '../components/Header2.vue';
import uploadImg from '../components/uploagdImg.vue';
var modal = weex.requireModule('modal');
var storage = weex.requireModule('storage');
export default {
  name: 'postCreate',
  components: {
    'uploadImg': uploadImg,    
    'header2': Header2
  },
  data(){
      var _self = this;
      return {
      leftBtn: {
          name:"<"
      },
      title: '',
      post: '',
      postID: '',
      token: '',
      rightBtn: {
          name: '完成',
          fun: function(){
                if(_self.title.length == 0){
                    modal.alert({
                        message: '请写帖子标题',
                        okTitle: '知道了'
                    })
                    return false;
                }
                if(_self.post.length == 0){
                    modal.alert({
                        message: '请填写帖子内容',
                        okTitle: '知道了'
                    })
                    return false;
                }
                var data = JSON.stringify({"title":_self.title,"content":_self.post});
                _self.POST('posts/create/'+_self.postID, _self.token, data, data => {
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
      }
    }
  },
  mounted(){
    this.postID = this.$route.params.index;
    storage.getItem('token',event => {
      this.token = event.data;
    })
  },
  methods: {
    focus(){
      this.$refs['input'].focus();
    },
    oninput(event){
      this.post = event.value;
    },
    oninputTitle(event){
      this.title = event.value;
    }
  }
  }
</script>

<style scoped>
    .commentBox{
        margin-top: 86px;
        border-bottom-width: 1px;
        border-bottom-color: #009FF0;
        
        margin-left:20px;
        margin-right:20px;
    }
    .input{
      placeholder-color: #d8d8d8;
      font-size: 36px;
      width: 710px;
      height: 80px;
      padding-top:20px;
      padding-bottom:20px;
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
