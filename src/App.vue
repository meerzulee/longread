<template>
  <div id="app">
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

export default {
  name: 'App',
  components: {},
  methods: {
    afterEnter: () => {
      window.scrollTo(0, 0)
    },
    afterLeave: () => {
      // Store.commit('setPageTransition', 'default')
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
