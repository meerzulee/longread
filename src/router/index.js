import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '@/views/Intro.vue'
import P1 from '@/views/pages/P1.vue'
import P2 from '@/views/pages/P2.vue'
import P3 from '@/views/pages/P3.vue'
import P4 from '@/views/pages/P4.vue'
import P4Song from '@/views/pages/P4Song.vue'
import P5 from '@/views/pages/P5.vue'
import P6 from '@/views/pages/P6.vue'
import P7 from '@/views/pages/P7.vue'
import P8 from '@/views/pages/P8.vue'
import P9 from '@/views/pages/P9.vue'
import P10 from '@/views/pages/P10.vue'
import P11 from '@/views/pages/P11.vue'
import P12 from '@/views/pages/P12.vue'
import P13 from '@/views/pages/P13.vue'
import P14 from '@/views/pages/P14.vue'

import Outro from '@/views/Outro.vue'
import RouterView from '@/views/RouterView.vue'
import { i18n } from '@/main.js';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ru',
  },
  {

    path: "/:lang/",
    component: RouterView,
    beforeEnter(to, from, next) {
      document.title = 'Не под этим солнцем';
      const lang = to.params.lang;
      if (!["en", "ru", "kg"].includes(lang)) return next("ru");
      if (i18n.locale !== lang) {
        i18n.locale = lang;
      }
      return next();
    },
    children: [
      {
        path: '',
        name: 'Intro',
        component: Intro
      },
      {
        path: 'p1',
        name: 'Page1',
        component: P1
      }, {
        path: 'p2',
        name: 'Page2',
        component: P2
      }, {
        path: 'p3',
        name: 'Page3',
        component: P3
      },
      {
        path: 'p4',
        name: 'Page4',
        component: P4
      },
      {
        path: 'p4song',
        name: 'Page4Song',
        component: P4Song
      },
      {
        path: 'p5',
        name: 'Page5',
        component: P5
      }, {
        path: 'p6',
        name: 'Page6',
        component: P6
      }, {
        path: 'p7',
        name: 'Page7',
        component: P7
      }, {
        path: 'p8',
        name: 'Page8',
        component: P8
      },
      {
        path: 'p9',
        name: 'Page9',
        component: P9
      },
      {
        path: 'p10',
        name: 'Page10',
        component: P10
      },
      {
        path: 'p11',
        name: 'Page11',
        component: P11
      },
      {
        path: 'p12',
        name: 'Page12',
        component: P12
      },
      {
        path: 'p13',
        name: 'Page13',
        component: P13
      },
      {
        path: 'p14',
        name: 'Page14',
        component: P14
      },

      {
        path: 'outro',
        name: 'Outro',
        component: Outro
      },

    ]
  }, { path: '*', component: Intro }

]

const router = new VueRouter({
  mode: 'history',
  base: '/ne-pod-etim-solncem',
  routes
})



export default router
