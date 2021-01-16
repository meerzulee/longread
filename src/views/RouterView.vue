<template>
  <transition
    :name="$store.state.pageTransition.name"
    :mode="$store.state.pageTransition.mode"
    v-on:after-enter="afterEnter"
    v-on:after-leave="afterLeave"
  >
    <router-view class="transition" />
  </transition>
</template>

<script>
export default {
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

<style lang="scss" scoped>
</style>