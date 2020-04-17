import Demo1Api from '../base/Demo1Api'

export class LoginAPi extends Demo1Api {
  // 手机号登录
  login_by_ac(data?: any) {
    return this.post('/account/login_by_ac', data)
  }

  // code 微信授权码
  login_by_wx(code: any) {
    return this.request({
      url: '/account/login_by_wx',
      method: 'post',
      params: { code, type: 1 }
    })
  }
}
