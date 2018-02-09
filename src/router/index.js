import Vue from 'vue'
import Router from 'vue-router'
import pageA from '@/views/page-a'
import notFound from '@/views/not-found'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/page-a',
      name: 'pageA',
      component: pageA,
    },
    {
      path: '*',
      name: '404',
      component: notFound,
    },
  ],
})

export default router
