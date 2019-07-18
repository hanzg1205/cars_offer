import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/About.vue'
import Quotation from './views/quotation.vue'
import Image from './views/image.vue'
import Color from './views/color.vue'
import type from './views/type.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:Detail
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/quotation',
      name: 'quotation',
      component: Quotation
    },
    {
      path: '/image',
      name: 'image',
      component: Image
    },
    {
      path: '/color',
      name: 'color',
      component: Color
    },
    {
      path: '/type',
      name: 'type',
      component: type
    }
  ]
})
