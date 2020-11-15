<template>
  <div class="h-screen bg-blue-900 relative flex justify-center">
    <Navbar v-bind="navbar" />
    <img
      src="@/assets/images/backgrounds/08.png"
      class="absolute object-cover w-full h-full"
      alt=""
    />
    <video
      loop
      autoplay
      src="@/assets/videos/08.webm"
      class="absolute object-cover w-full h-full"
      alt=""
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
import Header from '@/components/Header.vue'
import Story from '@/components/Story.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  components: { Header, Story, Navbar },
  data() {
    return {
      navbar: {
        prev: 'Page7',
        prevT: 'slide-right',
        next: 'Page9',
        nextT: 'slide-left',
      },
      storyText: `- Мы поехали с друзьями в «Ретро-Метро» (ночной клуб в Бишкеке), хорошо отдыхали и за баром познакомились с парнем. Он пригласил меня к себе, мы посидели, выпили пива, у нас был секс, а после этого мы уснули. 

Я проснулся от того, что он стоял надо мной с ножом. Он ударил им в шею, я чуть не умер. Он подумал, что убил меня, а я просто потерял сознание, потом выполз на кухню, позвал помощь. Приехала милиция, «скорая» и меня увезли. Скорее всего, он был гетеросексуал, но с детства, может, у него были желания. `,
    }
  },
}
</script>

