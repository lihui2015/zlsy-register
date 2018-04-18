<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2  title="活动"></header2>
        <scroller class="main-list" :class="[isand?'android-main-list':'']" offset-accuracy="300px" @loadmore="onloading" loadmoreoffset="200">
            <!-- <refresher></refresher> -->
            <div v-for="ar in articles" class="cell-button">
                <block-3 :article="ar" url=""></block-3>
            </div>
            <!-- <loading @loading="onloading" :class="['loading',loadinging ? 'show' : 'hide']">
               <loading-indicator class="indicator"></loading-indicator>
             </loading> -->
        </scroller>
        <tab-bar @tabTo="onTabTo" router='activity'></tab-bar>
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #f4f4f4;
    }
    .w-ipx{
        margin-top: 40px;
        margin-bottom: 50px;
    }
    .main-list{
        margin-top: 86px;
        margin-bottom: 100px;
        /*margin-bottom: 290px;*/
        background-color: #f4f4f4;
    }
    .android-main-list{
        /*margin-bottom: 150px;*/
    }
    .cell-button{
        background-color: #f4f4f4;
        padding-bottom: 18px;
    }
    .show{
        opacity: 1;
    }
    .hide{
        opacity: 0;
    }
</style>

<script>
    import Header2 from '../components/Header2.vue';
    import refresher from '../components/refresh.vue';
    import Block3 from '../components/Block3.vue';
    import tabBar from '../components/tabBar.vue';
    import { Utils } from 'weex-ui';
    var navigator = weex.requireModule('navigator')
    var storage = weex.requireModule('storage')
    var modal = weex.requireModule('modal')
    export default {
        data () {
            return {
                articles:[],
                token: '',
                listID: 1,
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
            'block-3': Block3,
        },
        created () {
            this.isand = Utils.env.isAndroid();
            storage.getItem('token',event => {
                this.token = event.data;
                this.getList()
            })
        },
        methods: {
            getList(){
                var _self = this;
                this.GET('activities/list?page='+this.current_page, this.token, data => {
                    this.loadinging = false;
                    if(data.code == 200){
                        let result = data.result;
                        for(let i = 0; i<result.data.length; i++){
                          this.articles.push(result.data[i])
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
                })
            },
            onloading () {
                var _self = this;
                if(_self.hasNomare){
                  modal.toast({ message: '没有更多活动', duration: 1 })
                  return false;
                }
                modal.toast({ message: 'Loading', duration: 1 })
                this.loadinging = true;
                this.getList();
            },
            onTabTo(_result){
                  let _key = _result.data.key || '';
                  this.$router && this.$router.push('/'+_key)
              }
        }
    }
</script>