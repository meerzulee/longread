<template>
  <div class="h-screen bg-gray-900 flex justify-center items-center">
    <button
      @click="slideBack()"
      class="flex items-center justify-center px-10 py-5 text-lg font-semibold leading-relaxed bg-white mt-9 rounded-xl"
    >
      Back
    </button>
    <button
      @click="slideNext()"
      class="flex items-center justify-center px-10 py-5 text-lg font-semibold leading-relaxed bg-white mt-9 rounded-xl"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    slideBack() {
      this.$store.commit('setPageTransition', 'slide-right')
      this.$router.push({
        name: 'Page1',
      })
    },
    slideNext() {
      this.$store.commit('setPageTransition', 'slide-left')
      this.$router.push({
        name: 'Intro',
      })
    },
  },
}
</script>

