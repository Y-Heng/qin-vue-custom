import { Apis } from './Apis'
import axios from './RendererAxios'

declare module 'vue/types/vue' {
  interface Vue {
    $api: Apis
  }
}

const install = (Vue: any, options: any) => {
  Vue.prototype.$api = new Apis(axios)
}

export default install
