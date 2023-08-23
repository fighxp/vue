/* @flow */

import { toArray } from '../util/index'

export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    // 判断插件是否已经存在
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    // 把数组中的第一个元素 （plugin）去掉
    const args = toArray(arguments, 1)
    // 把this(Vue) 插入第一个元素的位置
    args.unshift(this)
    
    if (typeof plugin.install === 'function') {
      // 如果插件传入的参数是对象且有 install 方法，直接调用插件对象的 install 方法
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      // 如果插件是 函数，直接执行函数
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
