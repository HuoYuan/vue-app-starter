import 'babel-polyfill'
import Vue from 'vue'
import app from '@/app'
import router from '@/router'
import store from '@/store'
import * as tbc from '@zhinan/tb-components'

Vue.use(tbc)

require('normalize.css')
require('animate.css')
require('@/styles/global/index.less')
require('@zhinan/tb-components/dist/main.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<app />',
  components: { app },
})
