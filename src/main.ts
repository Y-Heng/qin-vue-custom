import Vue from 'vue'
import App from './app.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import Viser from 'viser-vue'
import axios from 'axios'
import '@/mock'
import store from './store'
import VueLazyload from 'vue-lazyload'
import PouchDB from 'pouchdb'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Viser)
Vue.use(Antd)

// 懒加载 附加没有图时或图片出错时的默认显示图片
Vue.use(VueLazyload, {
  error: require('@/assets/empty.png'),
  loading: require('@/assets/empty.png')
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: {
//     App
//   },
//   template: '<app />',
//   mounted() {
//     // var db = new PouchDB('admindb')
//     // db.get('currUser').then(doc => {
//     //   this.$store.commit('account/setuser', doc.user)
//     // })
//   }
// })
