import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import browserDetect from "vue-browser-detect-plugin";

Vue.use(browserDetect);
// import VuePlyr from 'vue-plyr'
// import 'vue-plyr/dist/vue-plyr.css'
// 
Vue.component('BgVideo', () => import('@/components/BgVideo.vue'))

// 
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

// Vue.use(VuePlyr, {
//   plyr: {
//     controls: false,
//     autoplay: true,
//     clickToPlay: false
//   }
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
