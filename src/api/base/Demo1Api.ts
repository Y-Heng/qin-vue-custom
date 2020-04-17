import Api from './Api'
import { AxiosStatic, AxiosRequestConfig } from 'axios'

/**
 * Demo接口
 */
class Demo1Api extends Api {
  base: string
  constructor(axios: AxiosStatic) {
    super(axios)
    this.base = process.env.VUE_APP_BASE_API || ''
  }
  // tslint:disable-next-line:no-shadowed-variable
  protected async request(config: AxiosRequestConfig) {
    config.baseURL = this.base
    const r = await this.axios(config)
    return r.data
  }
  protected async get(url: string, params?: any) {
    const r = await this.axios.get(this.base + url, { params })
    return r.data
  }
  protected async post(url: string, data?: any, params?: any) {
    const r = await this.axios.post(this.base + url, data, { params })
    return r.data
  }
}

export default Demo1Api
