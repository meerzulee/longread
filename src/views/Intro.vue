<template>
  <div class="home h-screen bg-teal-600 relative">
    <img
      src="@/assets/images/intro.png"
      class="absolute object-cover w-full h-full"
      alt=""
    />

    <div
      class="absolute bottom-0 right-0 flex flex-col items-center mb-14 w-30r mr-30r"
    >
      <p
        class="p-8 text-2xl font-bold leading-9 tracking-wider text-left text-white bg-text"
      >
        Идите прямо, затем поверните налево, затем еще раз налево. Увидите
        лестницу вниз, спускайтесь. Там темно, так что будьте аккуратнее. Лучше
        придерживаться за стену по правую руку и подсветить фонариком. Чтобы
        открыть дверь немного сильнее подтолкните. В воздухе пахнет дымом,
        разными духами и алкоголем…
      </p>
      <button
        @click="slideUp()"
        class="flex items-center justify-center px-10 py-5 text-lg font-semibold leading-relaxed bg-white mt-9 rounded-xl"
      >
        Продолжить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    slideUp() {
      this.$store.commit('setPageTransition', 'slide-up')
      this.$router.push({
        name: 'Page1',
      })
    },
  },
}
</script>
<style >
</style>
