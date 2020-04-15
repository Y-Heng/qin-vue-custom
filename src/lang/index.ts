import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
// import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui lang
import antDesignEnLocale from 'ant-design-vue/lib/locale-provider/en_US' // ant-design
import antDesignZhLocale from 'ant-design-vue/lib/locale-provider/zh_CN' // ant-design
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    // ...elementEnLocale,
    ...antDesignEnLocale
  },
  zh: {
    ...zhLocale,
    // ...elementZhLocale,
    ...antDesignZhLocale
  }
}

const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages // set locale messages
})

export default i18n
