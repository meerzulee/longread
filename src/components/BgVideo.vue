<template>
  <video
    autoplay
    class="absolute w-full object-cover h-full"
    alt=""
    ref="bgvid"
    @timeupdate="loop($event)"
    muted
    playsinline
  >
    <source :src="src" type="video/mp4" />
  </video>
</template>

<script>
export default {
  props: {
    src: String,
    start: {
      type: Number,
      default: 0,
    },
    end: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.$refs.bgvid.play()
    this.$refs.bgvid.load()
  },
  methods: {
    loop(e) {
      if (e.currentTarget.currentTime >= e.currentTarget.duration - this.end) {
        e.currentTarget.currentTime = this.start
        e.currentTarget.play()
      }
      // console.log(e.currentTarget.currentTime)
      // console.log()
    },
  },
}
</script>

<style lang="scss" scoped>
</style>