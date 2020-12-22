<template>
  <div id="app" class="relative">
    <Preloader />
    <Navbar />

    <transition
      :name="$store.state.pageTransition.name"
      :mode="$store.state.pageTransition.mode"
      v-on:after-enter="afterEnter"
      v-on:after-leave="afterLeave"
    >
      <router-view class="transition" />
    </transition>
  </div>
</template>

<script>
// import Store from './store/index'
import Navbar from '@/components/Navbar.vue'
import Preloader from '@/components/Preloader.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Preloader,
  },

  methods: {
    afterEnter: () => {
      window.scrollTo(0, 0)
    },
    afterLeave: () => {
      // Store.commit('setPageTransition', 'default')
    },
    defocusApp() {
      this.$root.$emit('defocusApp') // emitted event
    },
  },
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
