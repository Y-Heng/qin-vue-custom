import Vue from 'vue'
import Router from 'vue-router'
import MenuView from '@/layouts/menu-view.vue'

const originalPush: any = Router.prototype.push
Router.prototype.push = function push(location: any) {
  return originalPush.call(this, location).catch((err: any) => err)
}
Vue.use(Router)

// 头部菜单
export const headerRouter = [
  {
    name: 'home',
    path: '/home',
    icon: 'home'
  },
  {
    name: 'forecast_analysis',
    path: '/forecast-analysis',
    icon: 'dot-chart'
  },
  {
    name: 'component_lib',
    path: '/component-lib',
    icon: 'appstore'
  }
]

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
        name: 'home',
        path: '/home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        icon: 'home',
        meta: {
          title: 'home'
        }
      }
    ]
  },
  {
    name: 'forecast_analysis',
    path: '/forecast-analysis',
    component: MenuView,
    redirect: '/forecast-analysis/index',
    icon: 'dot-chart',
    meta: {
      title: 'forecast-analysis'
    },
    children: [
      {
        name: 'forecast_analysis_index',
        path: 'index',
        icon: 'dot-chart',
        component: () => import(/* webpackChunkName: "forecastAnalysis" */ '@/views/forecast-analysis/index.vue')
      },
      {
        name: 'forecast_analysis_test1',
        path: 'test1',
        component: () => import(/* webpackChunkName: "forecast-analysis-test1" */ '@/views/forecast-analysis/test1.vue'),
        icon: 'dot-chart',
        meta: {
          title: 'test1'
        }
      },
      {
        name: 'forecast_analysis_test2',
        path: 'test2',
        component: () => import(/* webpackChunkName: "forecast-analysis-test2" */ '@/views/forecast-analysis/test2.vue'),
        icon: 'dot-chart',
        meta: {
          title: 'test2'
        }
      }
    ]
  },
  {
    name: 'component_lib',
    path: '/component-lib',
    component: MenuView,
    redirect: '/component-lib/index',
    icon: 'appstore',
    meta: {
      title: 'component'
    },
    children: [
      {
        name: 'component_lib_index',
        path: 'index',
        icon: 'dot-chart',
        redirect: '/component-lib/index/sub',
        component: () => import(/* webpackChunkName: "forecastAnalysis" */ '@/views/component-lib/index.vue'),
        // 三级路由跳转
        children: [
          {
            name: 'sub',
            path: 'sub',
            icon: 'file-search',
            component: () => import(/* webpackChunkName: "forecastAnalysis" */ '@/views/component-lib/search.vue')
          }
        ]
      },
      {
        name: 'component_lib_search',
        path: 'search',
        icon: 'file-search',
        component: () => import(/* webpackChunkName: "forecastAnalysis" */ '@/views/component-lib/search.vue')
      }
    ]
  }
]

const router = new Router({
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
