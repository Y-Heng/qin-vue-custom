<template>
  <a-layout style="min-height: 80vh">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }" collapsible v-model="collapsed">
      <sider-sub-menu parent-name="forecast_analysis" />
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-content :style="{ margin: '10px 16px 0', overflow: 'initial' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import SiderSubMenu from '@/components/menu-cus/index.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: { SiderSubMenu }
})
export default class ForecastAnalysis extends Vue {
  // 切换显示
  collapsed: boolean = false
  // 切换显示
  toggleCollapsed() {
    this.collapsed = !this.collapsed
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
