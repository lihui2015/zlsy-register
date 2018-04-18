<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <scroller class="main-list">
            <refresher></refresher>
            <div class="wrapper-login">
        <text class="text">注册账户</text>
            <div class="input-box">
            <input type="tel" autofocus="true" placeholder="学号(工号)" class="input-style" v-model="number" ref="number">
            <input type="text" placeholder="姓名" class="input-style bt" v-model="name" ref="name">
            <input type="tel" placeholder="手机号" class="input-style bt" v-model="phone" ref="tel">
            <div class="validate bt">
                <input type="text" placeholder="验证码" class="input-style validate-input" v-model="code">
                <div class="validate-btn">
                    <text class="v-btn" @click="validate()" v-if="before">获取验证码</text>
                    <wxc-countdown
                        :interval="1000"
                        tpl="{s}秒"
                        :timeBoxStyle="{backgroundColor: '#ffffff', height: '60px'}"
                        :timeTextStyle="{fontSize: '28px', color: '#8d8d8d'}"
                        :dotTextStyle="{color: '#8d8d8d', fontSize: '28px',justifyContent: 'center'}"
                        :dotBoxStyle="{width: '48px',height: '60px'}"
                        :style="{marginTop: '0px', justifyContent: 'center'}"
                        :time="TIME"
                        @wxcOnComplete="onCompleted" v-else>
                    </wxc-countdown>
                </div>
            </div>
            <input type="password" placeholder="密码" class="input-style bt" v-model="password">
            </div>
            <text class="login-btn" @click="signIn()">注册</text>
            <div class="box">
                <text class="text">已有账号，</text>
                <text class="btn" @click="jumpTo('/login')">返回登陆</text>
            </div>
            <div class="info-box">
                <text class="info-text">注册说明：请输入您的学号（工号）及姓名以验证您为浙江理工大学图书馆的用户。同时，依据国家相关法律网络实名制的要求需要验证您的手机号。
                </text>
            </div>
    </div>
        </scroller>
    
    </div>
</template>
<style scoped>
    .wrapper{
        width: 750px;
        height: 1345px;
        position: absolute;
        top:0;
        left:0;
        background-color:#f8f8f8;
    }
    .main-list{
        height: 1245px;
    }
    .wrapper-login{
        margin-top: 50px;
        margin-left: 30px;
        width: 690px;
        align-items: center;
        padding-bottom: 100px;
    }
    .text{
        font-size: 36px;
        color: #333333;
    }
    .input-box{
        width: 690px;
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 40px;
        background-color: #ffffff;
        border-color:#f0f0f0;
        border-width: 1px;
    }
    .input-style{
        width: 630px;
        /*height: 60px;*/
        font-size: 34px;
        color: #666666;
        /*line-height: 60px;*/
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .bt{
        border-top-width: 1px;
        border-bottom-width: 0px;
        border-right-width: 0px;
        border-left-width: 0px;
        border-color: #f0f0f0;
    }
    .validate{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

    }
    .validate-input{
        width:460px;
    }
    .validate-btn{
        border-left-width: 1px;
        border-color: #f0f0f0;
        padding-left: 20px;
        width: 170px;
        height: 60px;
    }
    .v-btn{
        font-size: 28px;
        color: #009ffc;
        line-height: 60px;
        text-align: center;
    }
    .login-btn{
        width: 690px;
        text-align: center;
        font-size: 34px;
        color: #ffffff;
        background-color: #009ffc;
        height: 80px;
        line-height: 80px;
        margin-top:80px;
        border-radius: 2px;
    }
    .box{
        width: 500px;
        flex-direction: row;
        align-items: center;
        justify-content:center;
        margin-top: 40px;
    }
    .text{
        color: #8d8d8d;
        font-size: 30px;
    }
    .btn{
        color: #009FF0;
        font-size: 30px;
    }
    .info-box{
        margin-top: 50px;
        margin-left: 20px;
        margin-right: 20px;
        background-color:#ffffff;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .info-text{
        font-size: 30px;
        color: #8d8d8d;
    }
</style>

<script>
    import util from '../util';
    import { WxcCountdown } from 'weex-ui'
    var modal = weex.requireModule('modal');
    var stream = weex.requireModule('stream');
    var storage = weex.requireModule('storage');
    export default {
        data () {
            return {
                number:'',
                name:'',
                phone: '',
                code: '',
                password: '',
                before:true,
                TIME:1000
            }
        },
        components: { WxcCountdown },
        watch: {
            // before:function(val,oldVal){
            //     console.log('new: %s, old: %s', val, oldVal)
            // }
        },
        methods: {
            signIn(){
                var _self = this;
                var nu = this.number,
                    na = this.name,
                    ph = this.phone,
                    cd = this.code,
                    pw = this.password;
                if(!nu.length){
                    modal.toast({
                        message: "请输入学号(工号)",
                        duration: 1
                    });
                    return false;
                }
                if(!na.length){
                    modal.toast({
                        message: "请输入姓名",
                        duration: 1
                    });
                    return false;
                }
                if(!ph.length || !this.checkPhone()){
                    modal.toast({
                        message: "请输入11位手机号码",
                        duration: 1
                    });
                    return false;
                }
                if(!cd.length || !/^\d{6}\b/.test(cd)){
                    modal.toast({
                        message: "请输入6位验证码",
                        duration: 1
                    })
                    return false;
                }
                if(!pw.length){
                    modal.toast({
                        message: "请输入密码",
                        duration: 1
                    })
                    return false;
                }

                var data = JSON.stringify({"phone":ph,"code":cd,"password":pw,"accid":nu,"name":na});
                this.POST('register', '', data, data => {
                  if(data.code == 200){
                        //注册成功
                        let result = data.result;
                        modal.toast({
                            message: data.message+"，请登陆",
                            duration: 1
                        })
                        _self.$router.push('/login');
                    }else if(data.code == 3001){
                        //已经注册过
                        modal.toast({
                            message: data.message,
                            duration: 1
                        })
                    }else{
                        modal.toast({
                            message: data.message,
                            duration: 1
                        })
                    }
                })

                // stream.fetch({
                //     method: 'POST',
                //     type: 'json',
                //     headers:{
                //         "Content-Type":"application/json"
                //     },
                //     body:JSON.stringify({"phone":ph,"code":cd,"password":pw,"accid":nu,"name":na}),
                //     url: 'http://zl.senseitgroup.com/app/register'
                // }, function(res){
                //     if(res.data.code == 200){
                //         //注册成功
                //         let result = res.data.result;
                //         modal.toast({
                //             message: res.data.message+"，请登陆",
                //             duration: 1
                //         })
                //         _self.$router.push('/login');
                //     }else if(res.data.code == 3001){
                //         //已经注册过
                //         modal.toast({
                //             message: res.data.message,
                //             duration: 3
                //         })
                //     }else{
                //         modal.toast({
                //             message: res.data.message,
                //             duration: 3
                //         })
                //     }
                // })
            },
            validate(){
                var ph = this.phone;
                var _self = this;
                if(!ph.length){
                    modal.toast({
                        message: "请输入手机号码",
                        duration: 1
                    });
                    return false;
                }
                
                this.POST('sendCode?phone='+ph, '', '', data => {
                  if(data.code == 200){
                        let result = data.result;
                        _self.before = false;
                        _self.TIME=new Date().getTime() + 60000
                        // modal.toast({
                        //     message: data.message,
                        //     duration: 1
                        // })
                    }else{
                        modal.toast({
                            message: data.message,
                            duration: 1
                        })
                    }
                })

                // stream.fetch({
                //     method: 'POST',
                //     type: 'json',
                //     url: 'http://zl.senseitgroup.com/app/sendCode?phone='+ph
                // }, function(res){
                //     if(res.data.code == 200){
                //         let result = res.data.result;
                //         _self.before = false;
                //         _self.TIME=new Date().getTime() + 60000
                //         modal.toast({
                //             message: res.data.message,
                //             duration: 3
                //         })
                //     }else{
                //         modal.toast({
                //             message: res.data.message,
                //             duration: 3
                //         })
                //     }
                    
                // })
            },
            onCompleted(){
                this.before=true;
            },
            focus(){
                this.$refs.tel.focus();
            },
            jumpTo(_url){
                this.$router.push(_url);
            },
            checkPhone(){ 
                var phone = this.phone;
                if(/^1[34578]\d{9}$/.test(phone)){ 
                    return true; 
                }else{
                    return false;
                }
            }
        }
    }
</script>