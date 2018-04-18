<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <home-header title="阅读活动"></home-header>
        <scroller :class="['main-list',isand?'android-main-list':'']">
            <refresher></refresher>
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
                <block-2 :books="bookList"></block-2>
            </div>
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
        /*margin-top:86px;*/
        width: 750px;
        margin-bottom: 290px;
        /*margin-bottom: 100px;*/
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

    .cell-button{
    }

</style>

<script>
    var modal = weex.requireModule('modal')
    var navigator = weex.requireModule('navigator')
    var storage = weex.requireModule('storage');
    import { Utils } from 'weex-ui';
    import Header from '../components/header.vue';
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
                bookList: [],
                showLoading: 'hide',
                token: '',
                isand:false
            }
        },
        created () {
            //weex.requireModule('PDFModule').readPDF("book id", "token");
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
                        //     message: data.code + ":" + _self.token,
                        //     duration: 3
                        // })
                    }
                });

                //借阅记录
                // this.testGET('api/home/borrowRecords.json', res => {
                //     let result = data.result;
                //     this.borrowRecords = result['borrowRecords'];
                // });

                //图书精选
                this.GET('books/chosen/6', _self.token, data => {
                    if(data.code == 200){
                        let result = data.result;
                        this.bookList = result;
                        this.borrowRecords = result;
                    }else{
                        // modal.toast({
                        //     message: data.code + ":" + _self.token,
                        //     duration: 3
                        // })
                    }
                })
            })
        },
        methods: {
        onTabTo(_result){
              let _key = _result.data.key || '';
              this.$router && this.$router.push('/'+_key)
          }
        }
    }
</script>