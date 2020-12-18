<template>
  <div class="h-screen bg-blue-900 relative flex justify-center">
    <img
      src="@/assets/images/backgrounds/8.jpg"
      class="absolute object-cover w-full h-full object-right-bottom"
      alt=""
    />
    <!-- <video
      loop
      autoplay
      src="@/assets/videos/08.webm"
      class="absolute object-cover w-full h-full"
      alt=""
    /> -->
    <BgVideo
      :src="require('@/assets/videos/webm/8.webm')"
      class="object-right-bottom"
      :end="1"
    />

    <div class="relative mt-12 mr-64 pr-40">
      <Header class="mb-24">
        <template v-slot:name>Евгений</template>
        цисгендерный мужчина, гей, 36 лет
      </Header>
      <Story :storyText="storyText" noScroll />
    </div>
  </div>
</template>

<script>
import BgVideo from '@/components/BgVideo.vue'

import Header from '@/components/Header.vue'
import Story from '@/components/Story.vue'
export default {
  components: { Header, Story, BgVideo },
  data() {
    return {
      storyText: `- Мы поехали с друзьями в «Ретро-Метро» (ночной клуб в Бишкеке), хорошо отдыхали и за баром познакомились с парнем. Он пригласил меня к себе, мы посидели, выпили пива, у нас был секс, а после этого мы уснули. 

Я проснулся от того, что он стоял надо мной с ножом. Он ударил им в шею, я чуть не умер. Он подумал, что убил меня, а я просто потерял сознание, потом выполз на кухню, позвал помощь. Приехала милиция, «скорая» и меня увезли. Скорее всего, он был гетеросексуал, но с детства, может, у него были желания. `,
    }
  },
}
</script>

