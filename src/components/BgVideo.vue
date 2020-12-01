<template>
  <video
    autoplay
    :src="src"
    class="absolute w-full object-cover h-full"
    alt=""
    ref="bgvid"
    @timeupdate="loop($event)"
    muted
  />
</template>

<script>
export default {
  props: {
    src: String,
    start: {
      type: Number,
      default: 0.5,
    },
    end: {
      type: Number,
      default: 0.5,
    },
  },
  mounted() {
    this.$refs.bgvid.play()
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