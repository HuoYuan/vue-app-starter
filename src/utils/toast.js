import Vue from 'vue'
import { Toast } from 'mint-ui'
import isMobile from './is-mobile'

export default function toast(arg1, arg2) {
  let type = ''
  let msg = ''

  if (arg2) {
    [type, msg] = [arg1, arg2]
  } else {
    msg = arg1
  }

  if (isMobile()) {
    switch (type) {
      case 'success':
        Toast(msg)
        break;
      case 'warning':
        Toast(`警告：${msg}`)
        break;
      case 'error':
        Toast(`错误提示：${msg}`)
        break;
      default:
        Toast(msg)
    }
    return
  }

  if (!type) {
    Vue.prototype.$toast(msg)
    return
  }
  Vue.prototype.$toast(type, msg)
}
