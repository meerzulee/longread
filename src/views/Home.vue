<template>
  <div class="relative flex flex-col items-center bg-purple-900 home">
    <video muted loop autoplay class="absolute inset-0 z-10 bg-gray-900">
      <source src="@/assets/03.webm" type="video/webm" />
    </video>
    <video muted loop autoplay class="absolute inset-0 z-20">
      <source src="@/assets/02.webm" type="video/webm" />
    </video>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
}
</script>
