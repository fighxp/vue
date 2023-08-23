/* @flow */

import { mergeOptions } from '../util/index'

export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    // 把minxin中的所有成员拷贝都到 Vue.options 中
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
