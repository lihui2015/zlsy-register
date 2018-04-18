<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2 title="鸟巢开柜" :leftBtn='leftButton'></header2>
        <scroller class="main-list" :class="[isand?'android-main-list':'']">
            <refresher></refresher>
            <div class="img-box">
                <div class="img-item" v-for="(img,index) in imgList" @click="open(index)" :class="[index % 2 == 0 ? 'item-even':'item-odd']">
                    <image class="img" :src="img" resize="contain"></image>
                </div>
            </div>
        </scroller>
        <!--<tab-bar @tabTo="onTabTo" router='list'></tab-bar>-->
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
        margin-bottom: 100px;
        /*margin-bottom: 290px;*/
        background-color: #fff;
        width: 750px;
    }
    .android-main-list{
        margin-bottom: 150px;
    }
    .img-box{
        margin-top: 30px;
        margin-left: 20px;
        margin-right: 20px;
        flex-direction: row;
        width: 750px;
        flex-wrap: wrap;
    }
    .img-item{
        width:355px;
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 20px;
        border-width:1px;
        border-color:#ffffff;
        padding-top:20px;
        padding-bottom:20px;
    }
    .item-even{
        border-right-width: 1px;
    }
    .item-odd{
        border-left-width: 0px;
    }
    .img{
        width:335px;
        height: 426px;
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
    var modal = weex.requireModule('modal')
    let stream = weex.requireModule('stream');
    export default {
        components: {
            'tab-bar': tabBar,
            'refresher': refresher,
            'header2': Header2
        },
        data () {
            return {
                leftButton: {
                    name:"<"
                },
                isand:false,
                imgList:[
                    'http://zl.senseitgroup.com/images/book1.jpg',
                    'http://zl.senseitgroup.com/images/book2.jpg',
                    'http://zl.senseitgroup.com/images/book3.jpg',
                    'http://zl.senseitgroup.com/images/book4.jpg',
                ]
            }
        },
        created () {
            this.isand = Utils.env.isAndroid();
        },
        methods: {
            open(index){
                var data = {
                    "MachID": "2010079",
                    "DoorID": index+1,
                    "ReaderID":"1",
                    "OptTime": 10000,
                    "CheckStr": "demo"
                };

                new Promise((resolve, reject) => {
                    stream.fetch({
                        method: 'POST',
                        type: 'json',
                        headers:{
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data),
                        url: 'http://hardware.senseitgroup.com/OpenDoorDemo/' 
                    }, (res) => {
                        if (res.status == 200) {
                            resolve(res.data)
                        }else {
                            reject(res)
                        }
                      
                    }, () => {})

                }).then(function(data) {
                    var msg = data.msg;
                    if(msg == '开门成功'){
                        var num = data.params.DoorID;
                        modal.toast({
                            message: num + '号柜门已打开，请取走您的书籍',
                            duration: 1
                        })
                    }
                }).catch(function(){
                    modal.toast({
                        message: '请求数据出错，检查网络后请重试',
                        duration: 1
                    })
                })

                // stream.fetch({
                //     method: 'POST',
                //     type: 'json',
                //     headers:{
                //         "Content-Type": "application/json"
                //     },
                //     body: JSON.stringify(data),
                //     url: 'http://hardware.senseitgroup.com/OpenDoorDemo/' 
                // }, res => {
                //     //console.log(res.data);
                //     var msg = res.data.msg;
                //     if(msg == '开门成功'){
                //         var num = res.data.params.DoorID;
                //         modal.toast({
                //             message: num + '号柜门已打开，请取走您的书籍',
                //             duration: 1
                //         })
                //     }

                // })
            }
        }
    }
</script>