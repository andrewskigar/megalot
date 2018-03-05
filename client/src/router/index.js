import Vue from 'vue'
import Router from 'vue-router'
import Statistics from '@/components/controllers/Statistics'
import Results from '@/components/controllers/Results'
import Patterns from '@/components/controllers/Patterns'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/results',
      name: 'Results',
      component: Results,
    },
    {
      path: '/stats',
      name: 'Statistics',
      component: Statistics,
    },
    {
      path: '/patterns',
      name: 'Patterns',
      component: Patterns,
    },
  ],
})
