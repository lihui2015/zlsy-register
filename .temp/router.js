import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import home from '@/assets/views/home'
import openDoor from '@/assets/views/openDoor'
import sort from '@/assets/views/sort'
import list from '@/assets/views/list'
import bookDetail from '@/assets/views/bookDetail'
import activity from '@/assets/views/activity'
import online from '@/assets/views/online'
import themeDetail from '@/assets/views/themeDetail'
import offline from '@/assets/views/offline'
import signUp from '@/assets/views/signUp'
import personal from '@/assets/views/personal'
import comment from '@/assets/views/comment'
import login from '@/assets/views/login'
import register from '@/assets/views/register'
import forgetPSW from '@/assets/views/forgetPSW'
import resetPSW from '@/assets/views/resetPSW'
import empty from '@/assets/views/_empty'
import postCreate from '@/assets/views/postCreate'
import defaultPage from '@/assets/views/default'
import bookshelf from '@/assets/views/bookshelf'
import mypost from '@/assets/views/mypost'
import about from '@/assets/views/about'
import web from '@/assets/views/web'

Vue.use(Router)

module.exports = new Router({ 
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      // redirect: '/personal',
      meta: { requiresAuth: true }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: { requiresAuth: true }
    },
    {
      path: '/sort',
      name: 'sort',
      component: sort,
      meta: { requiresAuth: true }
    },
    {
      path: '/openDoor',
      name: 'openDoor',
      component: openDoor
    },
    {
      path: '/list/:index/:name',
      name: 'list',
      component: list,
      meta: { requiresAuth: true }
    },
    {
      path: '/bookDetail/:index/:name',
      name: 'bookDetail',
      component: bookDetail,
      meta: { requiresAuth: true }
    },
    {
      path: '/comment/:index',
      name: 'comment',
      component: comment,
      meta: { requiresAuth: true }
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity,
      meta: { requiresAuth: true }
    },
    {
      path: '/online/:index/:name',
      name: 'online',
      component: online,
      meta: { requiresAuth: true }
    },
    {
      path: '/themeDetail/:index',
      name: 'themeDetail',
      component: themeDetail,
      meta: { requiresAuth: true }
    },
    {
      path: '/postCreate/:index',
      name: 'postCreate',
      component: postCreate,
      meta: { requiresAuth: true }
    },
    {
      path: '/offline',
      name: 'offline',
      component: offline
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      meta: { requiresAuth: true }
    },
    {
      path: '/bookshelf',
      name: 'bookshelf',
      component: bookshelf,
      meta: { requiresAuth: true }
    },
    {
      path: '/mypost',
      name: 'mypost',
      component: mypost,
      meta: { requiresAuth: true }
    },
    {
      path: '/about/:current/:new',
      name: 'about',
      component: about
    },
    {
      path: '/web',
      name: 'web',
      component: web
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forgetPSW',
      name: 'forgetPSW',
      component: forgetPSW
    },
    {
      path: '/resetPSW',
      name: 'resetPSW',
      component: forgetPSW
    },
    {
      path: '/_empty',
      name: 'empty',
      component: empty
    }
  ]
})
