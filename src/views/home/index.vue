<template>
  <div class="home-layouts">
    <div v-height="-100" class="box-map">假装这里是地图</div>
    <div class="box-table">右边</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const minHeight = window.innerHeight - 0 - 0 - 90

@Component({})
export default class Home extends Vue {}
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
