import Vue, { VNode } from 'vue'
import * as _lodash from 'lodash'
import _moment from 'moment'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }

  const lodash: typeof _lodash

  const moment: typeof _moment
}
