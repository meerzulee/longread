<template>
  <div class="h-screen bg-blue-900 relative flex justify-center">
    <Navbar v-bind="navbar" />
    <img
      src="@/assets/images/backgrounds/09.png"
      class="absolute object-cover w-full h-full"
      alt=""
    />

    <div class="relative mt-12 mr-56">
      <Header class="mb-12">
        <template v-slot:name>Аскар</template>
        цисгендерный мужчина, гей, 31 год
      </Header>
      <Story :storyText="storyText" />
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
        prev: 'Page8',
        prevT: 'slide-right',
        next: 'Page10',
        nextT: 'slide-left',
      },
      storyText: `- Как и все, примерно в 13 лет я начал мастурбировать и меня заводили мужчины. Сейчас я стесняюсь этого, но тогда я был влюблен в Путина. Это сейчас я его ненавижу. У меня был школьный дневник с его портретом. Тогда я про него ничего не знал. 

Вышло так, что было уже 15 сентября и я каждый день в школе получал втык за отсутствие дневника. Поэтому мама, выходя с работы, по дороге купила этот дневник. А там только такие и были. В туалете были газеты «СпидИнфо» с обнаженными женщинами и мужчинами, но меня возбуждал Путин.

Я жил в другом городе и больше боялся общества, не себя. Мне приходилось всегда контролировать свое поведение. В обществе я старался выглядеть гетеро-нормативным - встречался с девушками, их очень много было. Но когда подходил момент секса, я находил причины и мы расставались. `,
    }
  },
}
</script>

