<template>
  <div>
    <sider-sub-menu parent-name="forecast_analysis" />
  </div>
</template>

<script lang="ts">
import SiderSubMenu from '@/components/menu-cus/index.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: { SiderSubMenu }
})
export default class ForecastAnalysis extends Vue {}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
