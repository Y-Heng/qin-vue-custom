import Vue from 'vue'
import MinHeight from './height/minHeight'
import Height from './height/height'

// v-height 指令
Vue.directive('height', new Height())
// v-minHeight 指令
Vue.directive('minHeight', new MinHeight())
