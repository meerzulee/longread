<template>
  <div id="app" class="relative">
    <LocaleSwitcher v-if="this.$route.name == 'Intro'" />
    <Preloader />
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
// import Store from './store/index'
import Navbar from '@/components/Navbar.vue'
import Preloader from '@/components/Preloader.vue'
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
//
// let messages = {}
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    Navbar,
    Preloader,
    LocaleSwitcher,
  },
  mounted() {},
}
</script>
<style >
body {
  margin: 0;
}

.transition {
  overflow: hidden;
}
</style>
