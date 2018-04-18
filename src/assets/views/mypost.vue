<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2  title="我的帖子" :leftBtn='leftBtn'></header2>
        <scroller class="main-list" :class="[isand?'android-main-list':'']" offset-accuracy="300px" @loadmore="onloading" loadmoreoffset="200">
            <refresher></refresher>
            <div class="box-cont box-post">
                <div class="box-cont-item box-post-item" v-for="post in posts" @click="jump('/themeDetail/'+post.id)">
                    <text class="box-cont-text box-post-text">{{post.title}}</text>
                    <text class="box-post-time">{{post.created_at}}</text>
                </div>
            </div>
            <!-- <loading @loading="onloading" :class="['loading',loadinging ? 'show' : 'hide']">
               <loading-indicator class="indicator"></loading-indicator>
             </loading> -->
        </scroller>
        <tab-bar router='list'></tab-bar>
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
        background-color: #ffffff;
        margin-bottom: 100px;
        /*margin-bottom: 290px;*/
    }
    .android-main-list{
        /*margin-bottom: 150px;*/
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
        font-size: 32px;
        lines: 1;
        padding-right: 20px;
        color: #6d6d6d;
    }
    .box-post-time{
        font-size: 30px;
        color: #6d6d6d;
        
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
    import Header2 from '../components/Header2.vue';
    import refresher from '../components/refresh.vue';
    import Block5 from '../components/Block5.vue';
    import tabBar from '../components/tabBar.vue';
    var storage = weex.requireModule('storage')
    var modal = weex.requireModule('modal')
    export default {
        data () {
          var _self = this;
            return {
                name:'',
                leftBtn:{
                  name: '<'
                },
                posts:[],
                token: '',
                postList:10,
                current_page: 1,
                total: 1,
                loadinging: false,
                hasNomare: false,
                isand:false
            }
        },
        components: {
            'tab-bar': tabBar,
            'header2': Header2,
            'refresher': refresher,
            'block-5': Block5
        },
        created () {
            this.isand = Utils.env.isAndroid();
            storage.getItem('token',event => {
                this.token = event.data;
                this.getCommenList()
            })
        },
        methods: {
            getCommenList(){
                var _self = this;
                this.GET('profile/post/'+_self.postList+'?page='+this.current_page, this.token, data => {
                    this.loadinging = false;
                    if(data.code == 200){
                        let result = data.result;
                        for(let i = 0; i<result.length; i++){
                          this.posts.push(result[i])
                          _self.posts[i].created_at = result[i].created_at.split(' ')[0];
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
                })
            },
            onloading () {
                var _self = this;
                if(_self.hasNomare){
                  modal.toast({ message: '没有更多帖子', duration: 1 })
                  return false;
                }
                modal.toast({ message: 'Loading', duration: 1 })
                this.loadinging = true;
                this.getCommenList();
            },
        }
    }
</script>