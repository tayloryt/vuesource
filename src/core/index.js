import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'//判断是否在服务端运行
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'
//入口文件
initGlobalAPI(Vue)
//是否在服务端运行
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})
//
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
