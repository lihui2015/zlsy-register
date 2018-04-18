<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <home-header title="阅读活动"></home-header>
        <scroller :class="['main-list',isand?'android-main-list':'']" offset-accuracy="300px" @loadmore="onloading" loadmoreoffset="200">
            <!-- <refresher></refresher> -->
            <div class="cell-button">
                <yx-slider :imageList="YXBanners" ></yx-slider>
            </div>
            <!-- <div class="cell-button">
                <book-search></book-search>
            </div>
            <div class="cell-button">
                <block-1 :items="borrowRecords"></block-1>
            </div> -->
            <div class="cell-button">
                <div class="tlt-box cell-tag">
                    <text class="tlt" @click="jump('/list/0/图书精选')">图书精选</text>
                    <text @click="jump('/list/0/图书精选')" class="colorWhite iconfont">&#xe6a7;</text>
                </div>
                <div class="box">
                    <div class="i-book" v-for="i in books">
                        <image class="bk-img" resize="cover" :src="i.full_cover" @click="jump('/bookDetail/'+i.id+'/'+i.book_name)"></image>
                        <text class="bk-tlt" @click="jump('/bookDetail/'+i.id+'/'+i.book_name)">{{i.book_name}}</text>
                        <text class="bk-count">{{i.read_count}}人在阅读</text>
                    </div>
                </div>
            </div>
            <div class="cell-button">
                <text class="open-text" @click="jump('/openDoor')">鸟巢开柜</text>
            </div>
            <!-- <loading :class="['loading',loadinging ? 'show' : 'hide']" @loading="onloading">
              <loading-indicator class="indicator"></loading-indicator>
            </loading>  -->
        </scroller>
        <tab-bar @tabTo="onTabTo" router="home"></tab-bar>
    </div>
</template>

<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        /*position: absolute;
        top:0px;
        bottom:0px;
        left:0px;
        right:0px;*/
    }
    .main-list{
        margin-top:86px;
        width: 750px;
        /*margin-bottom: 290px;*/
        margin-bottom: 100px;
        background-color:#ffffff;
        /*margin-top: 167px;*/
        /*margin-bottom: 90px;*/
    }
    .android-main-list{
        /*margin-bottom: 150px;*/
    }
    .ml-ipx{
        margin-top: 208px;
        margin-bottom:170px;
    }
    .cell-tag{
        text-align: center;
        background-color:#009FF0;
        height: 70px;
        
        text-align: left;
        padding-left: 20px;
        padding-right: 20px;
    }
    .tlt{
        color:#ffffff;
        font-size: 34px;
    }
    .colorWhite{
        color:#ffffff;
        font-size: 48px;
        font-weight: 600;
    }
    .tlt-box{
        margin-top: 1px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .box{
        flex-direction: row;
        flex-wrap: wrap;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 20px;
        width: 750px;
    }
    .i-book{
        width: 223px;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-right: 10px;
        margin-left: 10px;
    }
    .bk-img{
        height: 291px;
        width: 223px;
        background-color: #f4f4f4;
    }
    .bk-tlt{
        font-size: 32px;
        color:#333;
        width: 223px;
        margin-top: 16px;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .bk-count{
        display: block;
        font-size: 30px;
        width: 215px;
        margin-top: 8px;
        color:#7f7f7f;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .cell-button{
    }

    .open-text{
        background-color:#009ffc;
        font-size: 32px;
        width: 500px;
        margin-left: 125px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        color:#ffffff;
        margin-top: 30px;
    }

</style>

<script>
    var modal = weex.requireModule('modal')
    var navigator = weex.requireModule('navigator')
    var storage = weex.requireModule('storage');
    import { Utils } from 'weex-ui';
    import Header from '../components/Header2.vue';
    import refresher from '../components/refresh.vue';
    import YXSlider from '../components/YXSlider.vue';
    import bookSearch from '../components/bookSearch.vue';
    import Block1 from '../components/Block1.vue';
    import Block2 from '../components/Block2.vue';
    import tabBar from '../components/tabBar.vue';
    export default {
        name:'home',
        components: {
            'tab-bar': tabBar,
            'home-header': Header,
            'refresher': refresher,
            'yx-slider': YXSlider,
            'book-search': bookSearch,
            'block-1': Block1,
            'block-2': Block2
        },
        data () {
            return {
                YXBanners: [],
                borrowRecords: [],
                books: [],
                showLoading: 'hide',
                token: '',
                isand:false,
                current_page: 1,
                total: 1,
                loadinging: false,
                hasNomare: false,
            }
        },
        created () {

            var _self = this;
            this.isand = Utils.env.isAndroid();
            storage.getItem('token',event => {
                _self.token = event.data;

                //banner ajax
                this.GET('banners/list', _self.token, data => {
                    if(data.code == 200){
                        let result = data.result;
                        this.YXBanners = result;
                    }else{
                        // modal.toast({
                        //     message: res.data.code + ":" + _self.token,
                        //     duration: 3
                        // })
                    }
                });

                //借阅记录
                // this.testGET('api/home/borrowRecords.json', res => {
                //     let result = res.data.result;
                //     this.borrowRecords = result['borrowRecords'];
                // });

                //图书精选
                _self.getList();
                // this.GET('books/chosen/0', _self.token, res => {
                //     if(res.data.code == 200){
                //         let result = res.data.result;
                //         this.bookList = result;
                //         //this.borrowRecords = result;
                //     }else{
                //         // modal.toast({
                //         //     message: res.data.code + ":" + _self.token,
                //         //     duration: 3
                //         // })
                //     }
                // })
            })
        },
        methods: {
            getList(){
                var _self = this;
                // new Promise((resolve, reject) => {
                //     stream.fetch({
                //       method: 'GET',
                //       url: `${baseURL}/${path}.json`,
                //       type: 'json'
                //     }, (response) => {
                //       if (response.status == 200) {
                //         resolve(response.data)
                //       }
                //       else {
                //         reject(response)
                //       }
                //     }, () => {})
                // }).then(function(data){
                    
                // }).catch(funciton(res){

                // })

                this.GET('books/chosen/0?page='+this.current_page, this.token, data => {
                    this.loadinging = false;
                    //console.log('data----->'+data);
                    if(data.code == 200){
                        let result = data.result;
                        //console.log(_self.books)
                        for(let i = 0; i<result.data.length; i++){
                            //console.log(result.data[i]);
                          _self.books.push(result.data[i])
                        }
                        _self.total = _self.last_page;
                        if(result.last_page == result.current_page){
                          //最后一页
                          _self.hasNomare = true;
                        }else if(result.last_page > result.current_page){
                          //非最后一页
                          _self.current_page = result.current_page + 1;
                        }
                        
                    }else{
                        modal.toast({
                            message: data.code,
                            duration: 3
                        })
                    }
                })
            },
            onloading (event) {
                var _self = this;
                if(_self.hasNomare){
                  modal.toast({ message: '没有更多书籍', duration: 1 })
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