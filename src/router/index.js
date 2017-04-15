import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Details from '@/components/Details'
import Photos from '@/components/Photos'
import Registry from '@/components/Registry'
import RSVP from '@/components/RSVP'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/details',
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
    },
    {
      path: '/rsvp',
      name: 'RSVP',
      component: RSVP
    }
  ]
})
