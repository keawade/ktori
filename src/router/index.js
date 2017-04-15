import Vue from 'vue'
import Router from 'vue-router'
import Details from '@/components/Details'
import Photos from '@/components/Photos'
import Registry from '@/components/Registry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Details',
      component: Details
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/registry',
      name: 'Registry',
      component: Registry
    }
  ]
})
