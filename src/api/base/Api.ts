import { AxiosStatic } from 'axios'

class Api {
  axios: AxiosStatic
  constructor(axios: any) {
    this.axios = axios
  }
}

export default Api
