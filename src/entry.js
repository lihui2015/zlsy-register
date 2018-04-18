/* global Vue */

/* weex initialized here, please do not move this line */
const router = require('./router')
const App = require('@/index.vue')

// import { sync } from 'vuex-router-sync'

// import * as filters from './filters'
// import mixins from './mixins'

// register global utility filters.
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// })

let stream = weex.requireModule('stream');
let modal = weex.requireModule('modal');

var mixins = {
    methods: {
        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        isIpx() {
            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
        },
        testGET (api, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                // url: 'http://172.18.22.119:8081/web/' + api
                url: 'http://192.168.31.197:8081//web/' + api
            }, callback)
        },
        GET (api, token, callback) {
            var headerObj = {};
            if(token){
                headerObj["access-token"] = token;
            }
            return new Promise((resolve, reject) => {
                    stream.fetch({
                        method: 'GET',
                        type: 'json',
                        headers:headerObj,
                        url: 'http://zl.senseitgroup.com/app/' + api
                    }, (response) => {
                        if (response.status == 200) {
                            resolve(response.data)
                        }else {
                            reject(response)
                        }
                    }, () => {})
                }).then(function(data){
                    callback(data)
                }).catch(function(res){
                    modal.toast({
                        message: '获取数据失败，请检查网络后从新尝试',
                        duration:1
                    })
                })
            // return stream.fetch({
            //     method: 'GET',
            //     type: 'json',
            //     headers:{
            //         "access-token": token
            //     },
            //     url: 'http://zl.senseitgroup.com/app/' + api
            // }, callback)
        },
        POST (api, token, data, callback) {
            var headerObj = {
                "Content-Type": "application/json"
            };
            if(token){
                headerObj["access-token"] = token;
            }
            return new Promise((resolve, reject) => {
                stream.fetch({
                    method: 'POST',
                    type: 'json',
                    headers:headerObj,
                    body: data,
                    url: 'http://zl.senseitgroup.com/app/' + api
                }, (response) => {
                    if (response.status == 200) {
                        resolve(response.data)
                    }else {
                        reject(response)
                    }
                }, () => {})
            }).then(function(data){
                    callback(data)
                }).catch(function(res){
                    modal.toast({
                        message: '获取数据失败，请检查网络后从新尝试',
                        duration:1
                    })
                })
        }

    }
}

let storage = weex.requireModule('storage');

function getToken(){
    return new Promise((resolve, reject) => {
        storage.getItem('token',event => {
            var localToken = event.data;
            if(localToken == 'undefined'){
              reject('noToken')
            }else if(localToken != 'undefined'){
                resolve(localToken);
            }
          }); 
    })
} 

function getBanner(localToken){
    return new Promise((resolve, reject) => {
        stream.fetch({
          method: 'GET',
          headers:{
            "access-token": localToken
          },
          url: 'http://zl.senseitgroup.com/app/checkToken',
          type: 'json'
        }, (res) => {
            if (res.status == 200) {
                resolve(res)
            }else {
                reject(res)
            }
          
        }, () => {})

    })
}

var p = new Promise(function (resolve, reject) {
    resolve(123);
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    p.then(getToken)
     .then(getBanner)
     .then(function (res) {
        let result = res.data;
        //console.log(result);
          if(result.code != 200){
            next({
                path: '/login',
                query: { redirect: to.fullPath }
              })
            //reject(result)
          }else if(result.code == 200){
            //resolve(result)
            next()
          }
        
    })
     .catch(function(str){
        if(str == 'noToken'){
            next({
                path: '/login',
                query: { redirect: to.fullPath }
              })
        }else{
            modal.toast({
                message: '获取数据失败，请检查网络后从新尝试',
                duration:1
            })
        }
        
     });
  } else {
    next() // 确保一定要调用 next()
  }
})

// register global mixins.
Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
