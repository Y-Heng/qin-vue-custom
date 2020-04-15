<template>
  <a-menu mode="inline" theme="dark" :inlineCollapsed="collapsed" :defaultSelectedKeys="default_open_keys">
    <template v-for="menu in menus">
      <a-sub-menu v-if="menu.children && menu.children.length>0" :key="menu.name">
        <span slot="title">
          <a-icon :type="menu.icon" /><span>{{menu.name}}</span>
        </span>
        <a-menu-item v-for="sub_chidren in menu.children" :key="sub_chidren.name" @click="toPath(sub_chidren.name)">
          <a-icon :type="sub_chidren.icon" />
          <span>{{sub_chidren.name}}</span>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item v-else :key="menu.name" @click="toPath(menu.name)">
        <a-icon :type="menu.icon" />
        <span>{{generateTitle(menu.name)}}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script lang='ts'>
import { findArray } from '@/utils'
import { constantRouterMap } from '@/router/index'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({})
export default class Menu extends Vue {
  // 父路由名称
  @Prop() ParentName!: string
  // 切换显示
  collapsed: boolean = false
  // 默认选中数组
  default_open_keys: string[] = []
  // 菜单
  menus: any[] = []
  // 跳转
  toPath(name: string) {
    this.$router.push({ name })
  }
  generateTitle(title: string) {
    const hasKey = this.$te('route.' + title)
    const translatedTitle = this.$t('route.' + title) // $t :this method from vue-i18n, inject in @/lang/index.js
    if (hasKey) {
      return translatedTitle
    }
    return ''
  }
  // 遍历数组
  recursionMenus(arr: any): any {
    if (arr && arr.length > 0) {
      for (const index of Object.keys(arr)) {
        const item = arr[index]
        if (item.name === this.ParentName) {
          return item.children
        }
      }
    } else {
      return ''
    }
  }
  // 获取菜单
  getMenus() {
    const children = this.recursionMenus(constantRouterMap)
    if (children) {
      this.menus = children
      this.default_open_keys = [this.$route.name || '']
    }
  }

  // 监听父路由名称
  @Watch('ParentName')
  parentNameChange() {
    this.getMenus()
  }

  private created() {
    this.getMenus()
  }
}
</script>

<style rel='stylesheet/scss' lang='scss' scoped>
.menu {
  background-color: #001529;
  .menu-top {
    text-align: right;
  }
}
</style>