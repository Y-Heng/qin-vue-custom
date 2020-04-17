<template>
  <div class="home-layouts">
    <div class="box-map">
      <region-flux />
    </div>
    <div class="box-table">右边</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RegionFlux from '../maps/region-flux.vue'

const minHeight = window.innerHeight - 0 - 0 - 90

@Component({
  components: { RegionFlux }
})
export default class Home extends Vue {
  getFaceInter() {
    this.$api.Demo1.LoginAPi.login_by_ac()
  }
  private created() {
    this.getFaceInter()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.home-layouts {
  display: flex;
  justify-content: center;
}
.box-map {
  width: 80%;
  margin-right: 10px;
  border: 1px solid rgb(119, 217, 241);
}
.box-table {
  width: 20%;
  border: 1px solid rgb(119, 217, 241);
}
</style>
