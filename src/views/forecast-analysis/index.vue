<template>
  <div>xxxxxxxxxx</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
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
