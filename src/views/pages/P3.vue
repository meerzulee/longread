<template>
  <div class="h-screen bg-blue-900 relative flex justify-center">
    <img
      src="@/assets/images/backgrounds/3.jpg"
      class="absolute object-cover w-full h-full"
      alt=""
    />
    <!-- <video
      loop
      autoplay
      src="@/assets/videos/test/03.webm"
      class="absolute object-cover w-full h-full"
      alt=""
    /> -->
    <BgVideo :src="require('@/assets/videos/test/3.webm')" :end="0.8" />

    <div class="relative mt-12 mr-64 pr-56 flex flex-col justify-between">
      <Header>
        <template v-slot:name>Наталья Викторовна</template>
        дружественный психиатр
      </Header>
      <Story class="mb-20" maxLimitMini :storyText="storyText" />
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
      storyText: `- Помню, я брала своего сына в лагерь на тренинги по ЛГБТ. Позже он сказал мне, что он трансгендер. Потом, что, наверное, он гей. И я себя поймала на мысли, что я испугалась: таскаю ребенка везде и, вот, теперь. Мне с трудом удалось себя остановить. 

Я провела несколько ужасных дней сама с собой, потом подумала: «Боже мой, что я делаю? Это все тот же мой ребенок, он никак не изменился, ничего не произошло. Я что оставлю его сейчас один на один с этими непонятными переживаниями?» Ему тогда было 11 лет. 

Я поняла, что ребенок просто исследует себя, мир. Мне удалось себя остановить - не прессовать его, не говорить, что ты еще маленький и рано тебе. Я просто попросила его не говорить ничего в школе, потому что дома ты можешь быть открытым, но таких, как я мало. Ты не можешь пока себя защитить.

Задача родителя - внушить ребенку, что его любят, каким бы он ни был, и его примут всегда.`,
    }
  },
}
</script>

