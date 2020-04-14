import Vue from 'vue'
import Router from 'vue-router'
import MenuView from '@/layouts/menu-view.vue'
import Home from '@/views/home/home.vue'

Vue.use(Router)

/*
  hidden: false, 是否导航条显示
  meta: {
    title: '', // 默认空，页面标题,用于导航栏显示
    icon: '', 图标
    roles: '', // 权限码 为空都展示
  }
*/

export const constantRouterMap = [
  {
    name: '首页',
    path: '/',
    component: MenuView,
    redirect: '/login',
    icon: 'home',
    meta: {
      title: '首页'
    },
    children: [
      {
        name: '首页',
        path: '/home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue'),
        icon: 'home',
        meta: {
          title: 'home'
        }
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.VUE_APP_BASE_PATH,
  routes: [
    ...constantRouterMap,
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "svg" */ '@/views/login/login.vue')
    },
    // 错误页
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue')
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue')
    }
  ]
})

export default router
