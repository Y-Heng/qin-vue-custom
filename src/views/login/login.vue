<template>
  <div class="container">
    <div class="content">
      <div class="top">
        <div class="header">
          <span class="title">{{ systemName }}</span>
        </div>
      </div>
      <div class="login">
        <a-form :form="form" @submit="onSubmit">
          <a-tabs size="large" :tabBarStyle="{ textAlign: 'center' }" style="padding: 0 2px;">
            <a-tab-pane tab="欢迎登录" key="1">
              <a-alert type="error" :closable="true" v-show="error" :message="error" showIcon style="margin-bottom: 24px;" />
              <a-form-item label="用户名">
                <a-input v-decorator="['username', { initialValue: 'admin',rules: [{ required: true, message: '请输入用户名！' }] }]" size="large" placeholder="admin">
                  <a-icon slot="prefix" type="user" />
                </a-input>
              </a-form-item>
              <a-form-item label="密码">
                <a-input v-decorator="['password', {  initialValue: '888888',rules: [{ required: true, message: '请输入密码!' }] }]" size="large" placeholder="888888" type="password">
                  <a-icon slot="prefix" type="lock" />
                </a-input>
              </a-form-item>
            </a-tab-pane>
          </a-tabs>
          <div>
            <a-checkbox :checked="true">自动登录</a-checkbox>
          </div>
          <a-form-item>
            <a-button :loading="logging" style="width: 100%;margin-top: 24px" size="large" htmlType="submit" type="primary">登录</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <global-footer :link-list="linkList" :copyright="copyright" />
  </div>
</template>

<script>
import GlobalFooter from '../../layouts/global-footer.vue'

export default {
  name: 'Login',
  components: { GlobalFooter },
  data() {
    return {
      form: this.$form.createForm(this, { name: 'login' }),
      logging: false,
      error: ''
    }
  },
  computed: {
    systemName() {
      return this.$store.state.setting.systemName
    },
    linkList() {
      return this.$store.state.setting.footerLinks
    },
    copyright() {
      return this.$store.state.setting.copyright
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.logging = true
          this.$axios
            .post('/login', {
              name: this.form.getFieldValue('username'),
              password: this.form.getFieldValue('password')
            })
            .then(res => {
              this.logging = false
              const result = res.data
              if (result.code >= 0) {
                const user = result.data.user
                this.$router.push('/home')
                this.$store.commit('account/setuser', user)
                this.$message.success(result.message, 3)
              } else {
                this.error = result.message
              }
            })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5 url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg') no-repeat center 110px;
  background-size: 100%;
  .content {
    padding: 32px 0;
    flex: 1;
    @media (min-width: 768px) {
      padding: 112px 0 24px;
    }
    .top {
      text-align: center;
      .header {
        height: 44px;
        line-height: 44px;
        a {
          text-decoration: none;
        }
        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
        }
        .title {
          font-size: 33px;
          color: rgba(0, 0, 0, 0.85);
          font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }
    .login {
      width: 368px;
      margin: 0 auto;
      @media screen and (max-width: 576px) {
        width: 95%;
      }
      @media screen and (max-width: 320px) {
        .captcha-button {
          font-size: 14px;
        }
      }
      .icon {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.2);
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: #1890ff;
        }
      }
    }
  }
}
</style>
