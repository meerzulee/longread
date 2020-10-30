<template>
  <div class="relative flex flex-col items-center h-screen bg-purple-900 home">
    <video muted loop autoplay class="absolute inset-0 z-10 bg-gray-900">
      <source src="@/assets/03.webm" type="video/webm" />
    </video>
    <video muted loop autoplay class="absolute inset-0 z-20">
      <source src="@/assets/02.webm" type="video/webm" />
    </video>
    <router-link
      :to="{ name: 'Intro', params: { transition: 'fade' } }"
      class="relative z-30 flex items-center justify-center px-10 py-5 text-lg font-semibold leading-relaxed bg-white mt-9 rounded-xl"
    >
      Продолжить
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>