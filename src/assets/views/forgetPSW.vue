<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
    <div class="wrapper-login">
        <text class="text">忘记密码</text>
        <div class="input-box">
        <input type="tel" autofocus="true" placeholder="手机号" class="input-style" v-model="phone" ref="tel" @click="focus">
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
        <input type="password" placeholder="确认密码" class="input-style bt" v-model="password_confirmation">
    </div>
        <text class="login-btn" @click="signIn()">重置密码</text>
        <div class="box">
            <text class="btn" @click="jumpTo('/login')">返回登陆</text>
        </div>
    </div>
    </div>
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
    .wrapper-login{
        margin-top: 50px;
        margin-left: 30px;
        width: 690px;
        align-items: center;
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
        width: 170px;
        height: 60px;
        border-left-width: 1px;
        border-color: #f0f0f0;
        padding-left: 20px;
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
        color: #666666;
        font-size: 30px;
    }
    .btn{
        color: #009FF0;
        font-size: 30px;
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
                phone: '',
                code: '',
                password: '',
                password_confirmation: '',
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
                var ph = this.phone,
                    cd = this.code,
                    cpw = this.password_confirmation,
                    pw = this.password;
                if(!ph.length){
                    modal.toast({
                        message: "请输入手机号码",
                        duration: 1
                    });
                    return false;
                }
                if(!cd.length){
                    modal.toast({
                        message: "请输入验证码",
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
                if(!cpw.length){
                    modal.toast({
                        message: "请输入确认密码",
                        duration: 1
                    })
                    return false;
                }
                if(cpw != pw){
                    modal.toast({
                        message: "密码不一致",
                        duration: 1
                    })
                    return false;
                }

                // var data = JSON.stringify({"phone":ph,"code":cd,"password":pw,'password_confirmation':cpw});
                
                // this.POST('forgetPassword', '', data, data => {
                //     if(res.data.code == 200){
                //         //注册成功
                //         let result = res.data.result;
                //         modal.toast({
                //             message: res.data.message+"，请登陆",
                //             duration: 1
                //         })
                //         _self.$router.push('/login');
                //     }else{
                //         modal.toast({
                //             message: res.data.message,
                //             duration: 3
                //         })
                //     }
                // })

                stream.fetch({
                    method: 'POST',
                    type: 'json',
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({"phone":ph,"code":cd,"password":pw,'password_confirmation':cpw}),
                    url: 'http://zl.senseitgroup.com/app/forgetPassword'
                }, function(res){
                    if(res.data.code == 200){
                        //注册成功
                        let result = res.data.result;
                        modal.toast({
                            message: res.data.message+"，请登陆",
                            duration: 1
                        })
                        _self.$router.push('/login');
                    }else{
                        modal.toast({
                            message: res.data.message,
                            duration: 3
                        })
                    }
                })
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
            }
        }
    }
</script>