<template>
  <transition name="fade" mode="in-out">
    <div
      v-if="!this.$store.state.loaded"
      class="absolute h-screen inset-0 bg-primary-dark w-screen flex items-center justify-center preloader-z"
    >
      <IntersectingCirclesSpinner :size="100" color="#CD6EF0" />
      <div v-if="!isLoaded">
        <!-- stage 1 -->
        <div class="hidden" v-if="!stage1Loaded">
          <!-- stage 1 -->
          <img
            :src="require('@/assets/images/backgrounds/' + s1 + '.jpg')"
            v-for="(s1, index) in 4"
            @load="loadStage1('img ' + s1)"
            :key="'S1' + index"
            alt=""
          />
          <video
            :src="require('@/assets/videos/webm/' + v1 + '.webm')"
            v-for="(v1, index) in 4"
            @loadeddata="loadStage1('video ' + v1)"
            :key="'V1' + index"
            alt=""
            muted
            preload="auto"
          />
          <video
            :src="require('@/assets/videos/webm/intro.webm')"
            @loadeddata="loadStage1('intro')"
            alt=""
            muted
            preload="auto"
          />

          <video
            :src="require('@/assets/videos/intro.webm')"
            @loadeddata="loadStage1('introbg')"
            alt=""
            muted
            preload="auto"
          />
          <video
            :src="require('@/assets/videos/webm/song.webm')"
            @loadeddata="loadStage1('song')"
            alt=""
            muted
            preload="auto"
          />
        </div>
        <!-- stage 2 -->
        <div class="hidden" v-if="stage1Loaded">
          <img
            :src="require('@/assets/images/backgrounds/' + (s2 + 4) + '.jpg')"
            v-for="(s2, index) in 5"
            @load="loadStage2('img ' + (s2 + 4))"
            :key="'S2' + index"
            alt=""
          />
          <video
            :src="require('@/assets/videos/webm/' + (v2 + 4) + '.webm')"
            v-for="(v2, index) in 5"
            @loadeddata="loadStage2('video ' + (v2 + 4))"
            :key="'V2' + index"
            alt=""
            muted
            preload="auto"
          />
          <video
            :src="require('@/assets/videos/thumbs/' + t + '.mp4')"
            v-for="(t, index) in 13"
            @loadeddata="loadStage2('thumbs ' + t)"
            :key="'t' + index"
            alt=""
            muted
            preload="auto"
          />
        </div>
        <!-- stage 3 -->
        <div class="hidden" v-if="stage2Loaded">
          <img
            :src="require('@/assets/images/backgrounds/' + (s3 + 9) + '.jpg')"
            v-for="(s3, index) in 4"
            @load="loadStage3('img ' + (s3 + 9))"
            :key="'S3' + index"
            alt=""
          />
          <video
            :src="require('@/assets/videos/webm/' + (v3 + 9) + '.webm')"
            v-for="(v3, index) in 4"
            @loadeddata="loadStage3('video ' + (v3 + 9))"
            :key="'V3' + index"
            alt=""
            muted
            preload="auto"
          />
          <video
            :src="require('@/assets/videos/end.webm')"
            @loadeddata="loadStage3('ending')"
            alt=""
            muted
            preload="auto"
          />
          <video
            :src="require('@/assets/videos/outro/' + o + '.webm')"
            v-for="(o, index) in ['Sveta', 'Tal', 'Maya', 'Diana']"
            @loadeddata="loadStage3('outro ' + o)"
            :key="'O' + index"
            alt=""
            muted
            preload="auto"
          />
        </div>
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

      stage1Loaded: false,
      stage2Loaded: false,
      stage3Loaded: false,

      stage1Count: 0,
      stage2Count: 0,
      stage3Count: 0,
    }
  },
  mounted() {
    this.isLoaded = false
    this.imgCounter = 0

    this.stage1Loaded = false
    this.stage2Loaded = false
    this.stage3Loaded = false
  },

  methods: {
    loadStage1(e) {
      console.log(e)
      this.stage1Count++
      if (this.stage1Count === 11) {
        this.stage1Loaded = true
        console.log('Stage 1 completed')
        this.check()
      }
    },
    loadStage2(e) {
      console.log(e)
      this.stage2Count++
      if (this.stage2Count === 23) {
        this.stage2Loaded = true
        console.log('Stage 2 completed')
      }
    },
    loadStage3(e) {
      console.log(e)
      this.stage2Count++
      if (this.stage2Count === 23) {
        this.stage3Loaded = true
        console.log('Stage 2 completed')
      }
    },

    check() {
      if (this.stage1Loaded) {
        this.$store.commit('setLoadedTrue')
      }
      if (this.stage1Loaded && this.stage2Loaded && this.stage3Loaded) {
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