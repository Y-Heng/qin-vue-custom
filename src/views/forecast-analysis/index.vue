<template>
  <div>
    <diy-menu parent-name="forecast_analysis" />
  </div>
</template>

<script lang="ts">
import DiyMenu from '@/components/menu2/index.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: { DiyMenu }
})
export default class ForecastAnalysis extends Vue {}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
