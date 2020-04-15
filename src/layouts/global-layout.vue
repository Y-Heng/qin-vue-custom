<template>
  <a-layout>
    <drawer v-if="isMobile" :openDrawer="collapsed" @change="onDrawerChange">
      <sider-menu :theme="theme" :menuData="menu_data" :collapsed="false" :collapsible="false" @menuSelect="onMenuSelect" />
    </drawer>
    <sider-menu :theme="theme" v-else-if="layout === 'side'" :menuData="menu_data" :collapsed="collapsed" :collapsible="true" />
    <a-layout>
      <a-layout-sider v-if="homeHide" :style="{ overflow: 'auto', marginTop:'60px' ,height: '100vh', position: 'fixed', left: 0}" collapsible v-model="collapsed">
        <sider-sub-menu :parent-name="parent_name" />
      </a-layout-sider>
      <global-header :menuData="menu_data" :collapsed="collapsed" @toggleCollapse="toggleCollapse" :style="{ position: 'fixed', zIndex: 1, width: '100%' }" />
      <a-layout :style="{ marginLeft: '200px' }">
        <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
          <slot></slot>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang='ts'>
import { findArray } from '@/utils'
import GlobalHeader from './global-header.vue'
import GlobalFooter from './global-footer.vue'
import Drawer from '../components/tool/drawer.vue'
import { constantRouterMap, headerRouter } from '@/router/index'
import Setting from '../components/setting/setting.vue'
import SiderMenu from '../components/menu/sider-menu.vue'
import SiderSubMenu from '@/components/menu-cus/index.vue'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  components: { Setting, SiderMenu, Drawer, GlobalFooter, GlobalHeader, SiderSubMenu }
})
export default class GlobalLayout extends Vue {
  // 缩放
  collapsed: boolean = false
  // 头部路由菜单
  menu_data: any[] = headerRouter
  // 父路由节点
  parent_name: string = ''

  get homeHide() {
    return this.$route.path !== '/home'
  }
  get isMobile() {
    return this.$store.state.setting.isMobile
  }
  get theme() {
    return this.$store.state.setting.theme
  }
  get layout() {
    return this.$store.state.setting.layout
  }
  get linkList() {
    return this.$store.state.setting.footerLinks
  }
  get copyright() {
    return this.$store.state.setting.copyright
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed
  }
  onDrawerChange(show: boolean) {
    this.collapsed = show
  }
  onMenuSelect() {
    this.toggleCollapse()
  }
  @Watch('$route', { deep: true, immediate: true })
  routeChange(val: any) {
    let route_path = ''
    let route_name = ''
    if (val && val.fullPath) {
      const f_index: number = val.fullPath.indexOf('/', 1)
      if (f_index > -1) {
        route_path = val.fullPath.substring(0, f_index)
      }
    }
    if (route_path) {
      for (const item of constantRouterMap) {
        if (route_path === item.path) {
          route_name = item.name
          break
        }
      }
    }
    this.parent_name = route_name
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
