<template>
  <div class="h-screen bg-blue-900 relative flex justify-center">
    <!-- <img
      src="@/assets/images/backgrounds/9.jpg"
      class="absolute object-cover w-full h-full object-right-bottom"
      alt=""
    /> -->
    <!-- <video
      loop
      autoplay
      src="@/assets/videos/09.webm"
      class="absolute object-cover w-full h-full"
      alt=""
    /> -->

    <!-- <BgVideo
      :src="require('@/assets/videos/mp4/9.mp4')"
      class="object-right-bottom"
      :end="0.8"
    /> -->
    <BgVideo
      src="https://walkerstory.com/wp-content/uploads/2021/01/9.mp4"
      class="object-right-bottom"
      :end="0.8"
    />

    <div
      class="relative my-12 mr-56 laptop-mini:pr-64 flex flex-col justify-between"
    >
      <Header>
        <template class="mb-10" v-slot:name>Аскар</template>
        цисгендерный мужчина, гей, 31 год
      </Header>
      <Story :storyText="storyText" />
    </div>
  </div>
</template>

<script>
// import BgVideo from '@/components/BgVideo.vue'

import Header from '@/components/Header.vue'
import Story from '@/components/Story.vue'
export default {
  components: { Header, Story },
  data() {
    return {
      storyText: `- Как и все, примерно в 13 лет я начал мастурбировать и меня заводили мужчины. Сейчас я стесняюсь этого, но тогда я был влюблен в Путина. Это сейчас я его ненавижу. У меня был школьный дневник с его портретом. Тогда я про него ничего не знал. 

Вышло так, что было уже 15 сентября и я каждый день в школе получал втык за отсутствие дневника. Поэтому мама, выходя с работы, по дороге купила этот дневник. А там только такие и были. В туалете были газеты «СпидИнфо» с обнаженными женщинами и мужчинами, но меня возбуждал Путин.

Я жил в другом городе и больше боялся общества, не себя. Мне приходилось всегда контролировать свое поведение. На людях я старался выглядеть гетеро-нормативным - встречался с девушками, их очень много было. Но когда подходил момент секса, я находил причины, и мы расставались.  
`,
    }
  },
}
</script>

