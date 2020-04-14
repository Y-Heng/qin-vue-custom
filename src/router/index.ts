import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/layouts/page-view.vue'
import RouteView from '@/layouts/route-view.vue'
import MenuView from '@/layouts/menu-view.vue'

import Login from '@/views/login/login.vue'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/login',
    name: '登录页',
    component: Login,
    invisible: true
  },
  {
    path: '/',
    name: '首页',
    component: MenuView,
    redirect: '/login',
    icon: 'none',
    invisible: true,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: RouteView,
        icon: 'home',
        children: [
          {
            path: '/home',
            name: '工作台',
            component: () => import('@/views/home/home.vue'),
            icon: 'none'
          }
        ]
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})
