<template>
  <div class="intro h-screen bg-teal-600 relative">
    <!-- <img
      src="@/assets/images/intro.png"
      class="absolute object-cover w-full h-full object-bottom"
      alt=""
    /> -->
    <!-- <vue-plyr class="absolute w-full h-full bottom-0">
      <div class="plyr__video-embed">
        <iframe
          class="object-cover"
          src="https://player.vimeo.com/video/485585685?background=1&amp;loop=true&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media"
          allow="autoplay"
          loop
        ></iframe>
      </div>
    </vue-plyr> -->

    <BgVideo
      :src="require('@/assets/videos/intro.webm')"
      :start="0"
      class="object-bottom"
    />
    <BgVideo :src="require('@/assets/videos/webm/intro.webm')" :end="0.65" />

    <div
      class="absolute bottom-0 left-1/2 ml-1 flex flex-col items-center mb-14 w-30r"
    >
      <p
        class="p-8 text-2xl desktop:text-xl font-bold leading-9 tracking-wider text-left text-white bg-text"
      >
        Идите прямо, затем поверните налево, затем еще раз налево. Увидите
        лестницу вниз, спускайтесь. Там темно, так что будьте аккуратнее. Лучше
        придерживаться за стену по правую руку и подсветить фонариком. Чтобы
        открыть дверь немного сильнее подтолкните. В воздухе пахнет дымом,
        разными духами и алкоголем…
      </p>
      <div>
        <a
          @click="slideUp()"
          class="flex items-center justify-center cursor-pointer px-10 py-5 text-lg font-semibold relative laptop:mt-4 leading-relaxed mt-9 rounded-xl tb"
        >
          Продолжить
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import { vueVimeoPlayer } from 'vue-vimeo-player'

export default {
  components: {
    // vueVimeoPlayer,
  },
  mounted() {
    window.addEventListener('keyup', this.start)
  },
  destroyed() {
    window.removeEventListener('keyup', this.start)
  },
  methods: {
    slideUp() {
      this.$store.commit('setPageTransition', 'slide-up')
      this.$router.push({
        name: 'Page1',
      })
    },
    start() {
      if (event.keyCode === 38 || event.keyCode === 39) {
        this.slideUp()
      }
    },
  },
}
</script>
<style >
</style>
