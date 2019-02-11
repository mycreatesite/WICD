import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import designs from '@/components/designs'
import cordings from '@/components/cordings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/designs',
      name: 'designs',
      component: designs
    },
    {
      path: '/cordings',
      name: 'cordings',
      component: cordings
    }
  ]
})
