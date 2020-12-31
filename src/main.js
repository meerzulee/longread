import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import VueScreen from 'vue-screen';

Vue.use(VueScreen, {
  'mobile': 992,

});

Vue.component('BgVideo', () => import('@/components/BgVideo.vue'))


import '@/assets/css/tailwind.css'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
