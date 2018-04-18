<template>
    <slider class="slider" auto-play="true" interval="5000" @change="onchange" infinite="false">
        <div class="frame" v-for="(img,index) in imageList" @click="jumpTo(index)">
            <image class="image" resize="cover" :src="img.src"></image>
            <div class="text-box">
                <text class="image-title">{{img.title}}</text>
            </div>
            
        </div>
        <indicator class="indicator"></indicator>
    </slider>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .image {
        width: 750px;
        height: 430px;
    }
    .slider {
        width: 750px;
        height: 430px;
    }
    .frame {
        width: 750px;
        height: 430px;
        position: relative;
    }
    .indicator {
        width: 750px;
        height: 40px;
        item-color: white;
        item-selected-color: #b4282d;
        item-size: 12px;
        position: absolute;
        bottom: 10px;
        right: 0px;
    }
    .text-box{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.3);
    }
    .image-title{
        position: absolute;
        width: 750px;
        padding-right:20px;
        padding-left:20px;
        text-align: center;
        top: 200px;
        left: 0;
        color: #ffffff;
        font-weight: 600;
        font-size: 38px;
        font-weight: bold;
    }
</style>
<script>
    export default {
        props:["imageList"],
        data () {
            return {
            }
        },
        methods: {
            onchange (event) {
            },
            jumpTo(index){
                var banner = this.imageList[index];
                if(banner.activity){
                    var id = banner.activity_id,
                        title = banner.activity.title;
                    this.$router.push('/online/'+id+'/'+title);
                }else{
                    return false;
                }
            }
        }
    }
</script>