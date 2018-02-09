import Vue from 'vue'
import { Toast } from 'mint-ui'
import isMobile from './is-mobile'

export default function handleError(err) {
  const msg = err.message || '发生未知错误'
  if (isMobile()) {
    Toast(`错误提示：${msg}`)
    return
  }
  Vue.prototype.$toast.error(msg)
}
