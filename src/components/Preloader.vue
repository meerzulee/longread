<template>
  <div>
    <transition name="fade" mode="in-out">
      <div
        v-if="!this.$store.state.loaded"
        class="absolute h-screen inset-0 bg-primary-dark w-screen flex items-center justify-center preloader-z"
      >
        <IntersectingCirclesSpinner :size="100" color="#CD6EF0" />
      </div>
    </transition>
    <div v-if="!isLoaded">
      <!-- stage 1 -->
      <div class="hidden" v-if="!stage1Loaded">
        <!-- stage 1 -->

        <video
          v-for="(v1, index) in 4"
          @loadeddata="loadStage1('video ' + v1)"
          :src="require('@/assets/videos/mp4/' + v1 + '.mp4')"
          :key="'V1' + index"
          alt=""
          muted
          autoplay
          preload="auto"
        ></video>
        <video
          autoplay
          :src="require('@/assets/videos/mp4/intro.mp4')"
          @loadeddata="loadStage1('intro')"
          alt=""
          muted
          preload="auto"
        ></video>

        <video
          autoplay
          :src="require('@/assets/videos/mp4/song.mp4')"
          @loadeddata="loadStage1('song')"
          alt=""
          muted
          preload="auto"
        ></video>
      </div>
      <!-- stage 2 -->
      <div class="hidden" v-if="stage1Loaded">
        <video
          v-for="(v2, index) in 5"
          @loadeddata="loadStage2('video ' + (v2 + 4))"
          :key="'V2' + index"
          alt=""
          muted
          preload="auto"
        >
          <source
            :src="require('@/assets/videos/mp4/' + (v2 + 4) + '.mp4')"
            type="video/mp4"
          />
        </video>
        <video
          v-for="(t, index) in 13"
          @loadeddata="loadStage2('thumbs ' + t)"
          :key="'t' + index"
          alt=""
          muted
          preload="auto"
        >
          <source
            :src="require('@/assets/videos/thumbs/' + t + '.mp4')"
            type="video/mp4"
          />
        </video>
      </div>
      <!-- stage 3 -->
      <div class="hidden" v-if="stage2Loaded && !stage3Loaded">
        <video
          v-for="(v3, index) in 4"
          @loadeddata="loadStage3('video ' + (v3 + 9))"
          :key="'V3' + index"
          alt=""
          muted
          preload="auto"
        >
          <source
            :src="require('@/assets/videos/mp4/' + (v3 + 9) + '.mp4')"
            type="video/mp4"
          />
        </video>
        <video @loadeddata="loadStage3('ending')" alt="" muted preload="auto">
          <source :src="require('@/assets/videos/end.mp4')" type="video/mp4" />
        </video>
        <video
          v-for="(o, index) in ['sveta', 'talgat', 'maya', 'diana']"
          @loadeddata="loadStage3('outro ' + o)"
          :key="'O' + index"
          alt=""
          muted
          preload="auto"
        >
          <source
            :src="require('@/assets/videos/outro/' + o + '.mp4')"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </div>
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
    console.log('fuck')
    this.isLoaded = false
    this.stage1Count = 0
    this.stage2Count = 0
    this.stage3Count = 0

    this.stage1Loaded = false
    this.stage2Loaded = false
    this.stage3Loaded = false
  },

  methods: {
    loadStage1(e) {
      console.log(e)
      this.stage1Count++
      if (this.stage1Count === 6) {
        this.stage1Loaded = true
        console.log('Stage 1 completed')
        this.check()
      }
    },
    loadStage2(e) {
      console.log(e)
      this.stage2Count++
      if (this.stage2Count === 18) {
        this.stage2Loaded = true
        console.log('Stage 2 completed')
      }
    },
    loadStage3(e) {
      console.log(e)
      this.stage2Count++
      if (this.stage2Count === 9) {
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