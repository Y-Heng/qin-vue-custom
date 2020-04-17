import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import store from '@/store'
import { message } from 'ant-design-vue'

// request interceptor
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Do something before request is sent
    if (store.getters.auth && store.getters.auth.token) {
      config.headers.auth = store.getters.auth.token // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    }
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)

// respone interceptor
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: any) => {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        // 没权限
        case 403:
          store.dispatch('LogOut').then(() => {
            window.location.reload()
          })
          break
        default:
          message.error(error.response.data.Message || '系统繁忙请稍后再试')
          break
      }
    } else {
      error.message = error.message === 'Network Error' ? '网络异常，请稍后再试' : '接口请求失败！'
      message.error(error.message)
    }
    return Promise.reject(error)
  }
)

export default axios
