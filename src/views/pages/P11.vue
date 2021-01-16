<template>
  <div class="h-screen bg-blue-900 relative flex justify-center">
    <!-- <img
      src="@/assets/images/backgrounds/11.jpg"
      class="absolute object-cover w-full h-full object-left-bottom"
      alt=""
    /> -->
    <!-- <video
      loop
      autoplay
      src="@/assets/videos/11.webm"
      class="absolute object-cover w-full h-full"
      alt=""
    /> -->
    <!-- <BgVideo
      :src="require('@/assets/videos/mp4/11.mp4')"
      class="object-left-bottom"
    /> -->
    <BgVideo
      src="https://walkerstory.com/wp-content/uploads/2021/01/11.mp4"
      class="object-left-bottom"
    />

    <div class="relative my-12 ml-24 tablet:ml-56 flex flex-col justify-start">
      <Header>
        <template v-slot:name>
          <span>{{ $t('page11name') }}</span></template
        >
        <span>{{ $t('page11desc') }}</span>
      </Header>
      <Story class="mt-20" :storyText="$t('page11storytext')" noScroll />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Story from '@/components/Story.vue'
export default {
  components: { Header, Story },
  data() {
    return {
      page11name: 'Айдай',
      page11desc: `представительница ЛГБТ-сообщества, 21 год`,
      page11storyText: `- Мне не нравится ходить в ЛГБТ-клуб постоянно, потому что публика там иногда может харассить, постоянно происходят какие-то драки, стычки и скандалы. 
      
Почему я все-таки туда хожу? Мне нравится ощущение того, что люди счастливы. Например, парень сидит на коленях у другого парня, они целуются и вообще все окей. Мне нравится ходить в клуб только за ощущением того, что люди свободны.
`,
    }
  },
}
</script>

