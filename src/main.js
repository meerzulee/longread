import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import VueScreen from 'vue-screen';
import browserDetect from "vue-browser-detect-plugin";
import VueI18n from 'vue-i18n'
import '@/assets/css/tailwind.css'
// import messages from './lang';

const axios = require('axios');


Vue.component('BgVideo', () => import('@/components/BgVideo.vue'))
Vue.use(VueI18n)
Vue.use(VueScreen, {
  'mobile': 992,

});
Vue.use(browserDetect);



Vue.config.productionTip = false

export const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'en',

});


new Vue({
  router,
  i18n,
  store,

  beforeCreate() {
    const vm = this;
    axios.get('https://walkerstory.com/wp-json/acf/v3/posts')
      .then((result) => {
        result.data.forEach((element) => {
          if (element.acf.language == 'ru') {
            vm.$i18n.setLocaleMessage('ru', { ...element.acf })
          }
          if (element.acf.language == 'en') {
            vm.$i18n.setLocaleMessage('en', { ...element.acf })
          }
        })
      })

  },
  render: h => h(App)
}).$mount('#app')
