import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login/index.vue'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/login',
    name: '登录页',
    component: Login,
    invisible: true
  }
]

export default new Router({
  routes: constantRouterMap
})
