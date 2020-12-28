<template>
  <div
    class="story p-8"
    :class="[
      maxLimitMini ? 'story-half' : '',
      noScroll ? 'overflow-y-hidden' : 'overflow-y-scroll ',
    ]"
  >
    <p
      class="text-lg font-normal whitespace-pre-line leading-9 tracking-wider text-left text-white"
      v-html="storyText"
    ></p>
  </div>
</template>

<script>
export default {
  props: {
    storyText: String,
    maxLimit: Boolean,
    maxLimitMini: Boolean,
    noScroll: Boolean,
  },
}
</script>

<style lang="scss" scoped>
</style>