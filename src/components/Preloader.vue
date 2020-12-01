<template>
  <transition name="fade" mode="in-out">
    <div
      v-show="!isLoaded"
      class="absolute h-screen inset-0 bg-primary-dark w-screen flex items-center justify-center preloader-z"
    >
      <self-building-square-spinner :size="100" color="#CD6EF0" />
      <div class="hidden" v-if="!isLoaded">
        <img
          :src="require('@/assets/images/backgrounds/' + item + '.png')"
          v-for="(item, index) in 13"
          @load="loadedImg(item)"
          :key="'A' + index"
          alt=""
        />
        <video
          :src="require('@/assets/videos/test/' + x + '.webm')"
          v-for="(x, index) in 13"
          @loadeddata="loadedVideo(x)"
          :key="'B' + index"
          alt=""
        />
        <video
          :src="require('@/assets/videos/outro/' + y + '.webm')"
          v-for="(y, index) in ['Sveta', 'Tal', 'Maya', 'Diana']"
          @loadeddata="loadedVideoM(index + 1)"
          :key="'C' + index"
          alt=""
        />
      </div>
    </div>
  </transition>
</template>

<script>
import 'epic-spinners/dist/lib/epic-spinners.min.css'

import { SelfBuildingSquareSpinner } from 'epic-spinners/dist/lib/epic-spinners.min.js'

export default {
  components: {
    SelfBuildingSquareSpinner,
  },
  data() {
    return {
      isLoaded: false,
      imgLoaded: false,
      imgCounter: 0,

      videoCounter: 0,
      videoMCounter: 0,
      videoMLoaded: false,
      videoLoaded: false,
    }
  },
  mounted() {
    this.isLoaded = false
    this.imgCounter = 0
  },

  methods: {
    loadedImg(k) {
      this.imgCounter++
      console.log(k)
      if (this.imgCounter === 13) {
        this.imgLoaded = true
        this.check()
      }
    },
    loadedVideo(l) {
      this.videoLoaded++
      console.log(l)
      if (this.videoLoaded === 13) {
        this.videoLoaded = true
        this.check()
      }
    },
    loadedVideoM(l) {
      this.videoMLoaded++
      console.log(l)
      if (this.videoMLoaded === 4) {
        this.videoMLoaded = true
        this.check()
      }
    },
    check() {
      if (this.imgLoaded && this.videoLoaded && this.videoMLoaded) {
        this.isLoaded = true
      }
    },
  },
}
</script>

<style >
.preloader-z {
  z-index: 9999;
}
</style>