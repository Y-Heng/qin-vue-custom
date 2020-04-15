import Vue from 'vue'
import App from './app.vue'
import Antd from 'ant-design-vue'
import VueLazyload from 'vue-lazyload'
import PouchDB from 'pouchdb'
import Viser from 'viser-vue'

import router from './router'
import axios from 'axios'
import moment from 'moment'
import store from './store'

import i18n from '@/lang'
import * as filters from '@/filters/index.ts'
import '@/directive'
import '@/mock'
import 'ant-design-vue/dist/antd.css'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(Viser)

Vue.use(Antd, {
  i18n: (key: any, value: any) => i18n.t(key, value)
})

moment.locale('zh-cn')

// 注册过滤器
Object.keys(filters).forEach(key => {
  const f: any = filters
  Vue.filter(key, f[key])
})

// 懒加载 附加没有图时或图片出错时的默认显示图片
Vue.use(VueLazyload, {
  error: require('@/assets/empty.png'),
  loading: require('@/assets/empty.png')
})
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  mounted() {
    const db = new PouchDB('admindb')
    db.get('currUser').then((doc: any) => {
      this.$store.commit('account/setuser', doc.user)
    })
  }
}).$mount('#app')
