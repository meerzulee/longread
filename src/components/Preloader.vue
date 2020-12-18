<template>
  <transition name="fade" mode="in-out">
    <div
      v-show="!isLoaded"
      class="absolute h-screen inset-0 bg-primary-dark w-screen flex items-center justify-center preloader-z"
    >
      <IntersectingCirclesSpinner :size="100" color="#CD6EF0" />
      <div class="hidden" v-if="!tLoaded">
        <img
          :src="require('@/assets/images/backgrounds/' + item + '.jpg')"
          v-for="(item, index) in 4"
          @load="loadedImg(item)"
          :key="'A' + index"
          alt=""
        />
        <video
          :src="require('@/assets/videos/webm/' + x + '.webm')"
          v-for="(x, index) in 4"
          @loadeddata="loadedVideo(x)"
          :key="'B' + index"
          alt=""
        />
        <!-- download others -->
        <div v-if="isLoaded">
          <img
            :src="require('@/assets/images/backgrounds/' + (i1 + 4) + '.jpg')"
            v-for="(i1, index) in 7"
            @load="loadedT(i1)"
            :key="'A1' + index"
            alt=""
          />
          <video
            :src="require('@/assets/videos/webm/' + (v1 + 4) + '.webm')"
            v-for="(v1, index) in 7"
            @loadeddata="loadedT(v1)"
            :key="'B1' + index"
            alt=""
          />
        </div>
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

import { IntersectingCirclesSpinner } from 'epic-spinners/dist/lib/epic-spinners.min.js'

export default {
  components: {
    IntersectingCirclesSpinner,
  },
  data() {
    return {
      isLoaded: false,
      imgLoaded: false,
      videoLoaded: false,
      tLoaded: false,
      imgCounter: 0,
      videoCounter: 0,
      tCounter: 0,
      videoMCounter: 0,
      videoMLoaded: false,
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
      if (this.imgCounter === 4) {
        this.imgLoaded = true
        this.check()
      }
    },
    loadedVideo(l) {
      this.videoLoaded++
      console.log(l)
      if (this.videoLoaded === 4) {
        this.videoLoaded = true
        this.check()
      }
    },
    loadedVideoM(l) {
      this.videoMCounter++
      console.log(l)
      if (this.videoMCounter === 4) {
        this.videoMLoaded = true
        this.check()
      }
    },
    loadedT(t) {
      this.tCounter++
      console.log(t)
      if (this.tCounter === 14) {
        this.tLoaded = true
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