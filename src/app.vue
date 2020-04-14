<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import enquireScreen from './utils/device'
import PouchDB from 'pouchdb'

export default class App extends Vue {
  private created() {
    // 组件创建时
    enquireScreen((isMobile: boolean) => {
      this.$store.commit('setting/setDevice', isMobile)
    })
  }
  private destroyed() {
    // 组件销毁时
  }
}
</script>

<style lang="less">
:global {
  //拖拽控件全局样式
  .dragable-ghost {
    border: 1px dashed #aaaaaa;
    opacity: 0.65;
  }
  .dragable-chose {
    border: 1px dashed #aaaaaa;
    opacity: 0.65;
  }
  .dragable-drag {
    border: 1px dashed #aaaaaa;
    opacity: 0.65;
  }
  //页面切换动画
  .page-toggle-enter-active {
    transition: all 0.2s ease-in 0.25s;
  }
  .page-toggle-leave-active {
    transition: all 0.2s ease-out 0s;
  }
  .page-toggle-enter,
  .page-toggle-leave-to {
    opacity: 0;
    padding: 0px;
  }
}
</style>
