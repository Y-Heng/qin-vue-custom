import { AxiosStatic } from 'axios'

import { LoginAPi } from '@/api/demo1/Login'

export interface Demo1 {
  LoginAPi: LoginAPi
}
export class Apis {
  Demo1: Demo1
  constructor(axios: AxiosStatic) {
    this.Demo1 = {
      LoginAPi: new LoginAPi(axios)
    }
  }
}
