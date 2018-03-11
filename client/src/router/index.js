import Vue from 'vue'
import Router from 'vue-router'
import Charts from '@/pages/Charts'
import History from '@/pages/History'
import Patterns from '@/pages/Patterns'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/history',
      name: 'History',
      component: History,
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts,
    },
    {
      path: '/patterns',
      name: 'Patterns',
      component: Patterns,
    },
  ],
})
