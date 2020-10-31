<template>
  <div class="story overflow-y-scroll p-8 bg-text">
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
  },
}
</script>

<style lang="scss" scoped>
</style>