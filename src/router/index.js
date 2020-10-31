import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '@/views/Intro.vue'
import P1 from '@/views/pages/P1.vue'
import P2 from '@/views/pages/P2.vue'
import Outro from '@/views/Outro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/p1',
    name: 'Page1',
    component: P1
  }, {
    path: '/p2',
    name: 'Page2',
    component: P2
  },

  {
    path: '/outro',
    name: 'Outro',
    component: Outro
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
