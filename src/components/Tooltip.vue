<template>
  <div class="relative focus flex mt-4 flex-col">
    <div
      class="absolute bottom-0 modal mb-10 rounded-sm overflow-y-scroll"
      v-click-outside="onClickOutside"
      v-if="toggle"
    >
      <div
        class="py-5 px-3 pb-10 bg-white text-sm leading-loose text-primary-dark whitespace-pre-line"
        v-html="content"
      ></div>
      <div class="shadowt z-20 sticky bottom-0 -mt-20 w-full h-20"></div>
    </div>
    <p
      @click="toggle = !toggle"
      class="hover:bg-secondary cursor-pointer w-auto rounded-full py-1 px-3"
      :class="[toggle ? 'bg-secondary' : '']"
    >
      {{ btn }}
    </p>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  props: {
    btn: String,
    content: String,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      toggle: false,
    }
  },
  methods: {
    hide() {
      this.toggle = !this.toggle
    },
    onClickOutside() {
      this.hide()
    },
  },
}
</script>

<style>
.shadowt {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
}
</style>