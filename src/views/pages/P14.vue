<template>
  <div class="h-screen relative flex justify-center">
    <!-- <BgVideo :src="require('@/assets/videos/end.mp4')" /> -->
    <BgVideo src="https://walkerstory.com/wp-content/uploads/2021/01/end.mp4" />
    <div
      class="absolute inset-0 h-full w-full flex justify-center items-center"
    >
      <div class="flex mb-14 max-w-2xl">
        <p
          class="p-8 text-2xl font-bold leading-9 tracking-wider text-left text-white bg-text"
          v-html="$t('page14text')"
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page14text: `Знаете, я все время думаю о будущем. Я думаю, что все-таки станет
          лучше когда-нибудь, но, может быть, мы этого не увидим... Скорее
          всего, мы этого не увидим... но станет обязательно.`,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>