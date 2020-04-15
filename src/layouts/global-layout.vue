<template>
  <a-layout>
    <drawer v-if="isMobile" :openDrawer="collapsed" @change="onDrawerChange">
      <sider-menu :theme="theme" :menuData="menuData" :collapsed="false" :collapsible="false" @menuSelect="onMenuSelect" />
    </drawer>
    <sider-menu :theme="theme" v-else-if="layout === 'side'" :menuData="menuData" :collapsed="collapsed" :collapsible="true" />
    <!-- 设置栏 -->
    <!-- <drawer :open-drawer="showSetting" placement="right" @change="onSettingDrawerChange">
      <div class="setting" slot="handler">
        <a-icon :type="showSetting ? 'close' : 'setting'" />
      </div>
      <setting />
    </drawer> -->
    <a-layout>
      <a-layout-sider v-if="homeHide" :style="{ overflow: 'auto', marginTop:'60px' ,height: '100vh', position: 'fixed', left: 0}" collapsible v-model="collapsed">
        <sider-sub-menu :parent-name="menuString" />
      </a-layout-sider>
      <global-header :menuData="menuData" :collapsed="collapsed" @toggleCollapse="toggleCollapse" :style="{ position: 'fixed', zIndex: 1, width: '100%' }" />
      <a-layout :style="{ marginLeft: '200px' }">
         <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
          <slot></slot>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import GlobalHeader from './global-header'
import GlobalFooter from './global-footer'
import Drawer from '../components/tool/drawer'
import SiderMenu from '../components/menu/sider-menu'
import Setting from '../components/setting/setting'
import SiderSubMenu from '@/components/menu-cus/index.vue'

const minHeight = window.innerHeight - 0 - 0 - 90

let menuData = []

export default {
  name: 'GlobalLayout',
  components: { Setting, SiderMenu, Drawer, GlobalFooter, GlobalHeader, SiderSubMenu },
  data() {
    return {
      minHeight: minHeight + 'px',
      collapsed: false,
      menuData,
      showSetting: false,
    }
  },
  computed: {
    homeHide() {
      return this.$route.path !== '/home'
    },
    isMobile() {
      return this.$store.state.setting.isMobile
    },
    theme() {
      return this.$store.state.setting.theme
    },
    layout() {
      return this.$store.state.setting.layout
    },
    linkList() {
      return this.$store.state.setting.footerLinks
    },
    copyright() {
      return this.$store.state.setting.copyright
    }
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed
    },
    onDrawerChange(show) {
      this.collapsed = show
    },
    onMenuSelect() {
      this.toggleCollapse()
    },
    onSettingDrawerChange(val) {
      this.showSetting = val
    }
  },
  beforeCreate() {
    menuData = this.$router.options.routes.find(item => item.path === '/').children
  }
}
</script>

<style lang="less" scoped>
.setting {
  background-color: #1890ff;
  color: #fff;
  border-radius: 5px 0 0 5px;
  line-height: 40px;
  font-size: 22px;
  width: 40px;
  height: 40px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
}
</style>
