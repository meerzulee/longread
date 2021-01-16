<template>
  <div class="h-screen bg-blue-900 relative flex justify-center">
    <!-- <img
      src="@/assets/images/backgrounds/4.jpg"
      class="absolute object-cover w-full h-full object-left-bottom"
      alt=""
    /> -->

    <!-- <BgVideo
      :src="require('@/assets/videos/mp4/4.mp4')"
      class="object-left-bottom"
    />   -->
    <BgVideo
      src="https://walkerstory.com/assets/media/videos/mp4/4.mp4"
      class="object-left-bottom"
    />
    <!-- <video
      loop
      autoplay
      src="@/assets/videos/04.webm"
      class="absolute object-cover w-full h-full"
      alt=""
    /> -->
    <div class="relative my-12 mr-40 flex flex-col justify-between">
      <Header>
        <template v-slot:name>{{ $t('page4name') }}</template>
        {{ $t('page4desc') }}
      </Header>
      <Story :storyText="$t('page4storytext')" />
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
      page4name: 'Сулейма',
      page4desc: `квир-христианка, 25 лет`,
      page4storyText: `- Я не хожу на служения в церковь уже много-много лет. На это были разные причины – учеба не позволяла, потом работа. Я не хочу превращать свою жизнь в кучу ритуалов, не хочу становиться религиозной в не очень хорошем смысле этого слова, когда это превращается в автоматизм. Для меня это личное и интимное. Я хочу делать это осознанно. 

У нас есть прославление и там много прикольных песен. Я даже могу не молиться, но я пою песни, в основном стихи из Библии. На музыкальный лад легче воспринимается. 

Одной в жизни все равно сложно. Что бы ни случилось в моей жизни, у меня есть опора. У меня есть четкое осознание, Бог - единственный, кто не уйдет и не оставит меня по разным причинам, а все остальные люди, родственники, партнеры – они могут уйти, и я даже не обижаюсь на это. 

Когда я рассказала бабуле, что работаю в ЛГБТ-организации, она сказала, что это не по-христиански. Я сказала: «Бабуль, Бог сказал: "люби всех", так люби, пожалуйста, всех». Все легко - просто нужно всех принимать и любить. Я считаю, что Бог любит всех, несмотря ни на что. Для меня христианство – это принятие всех вокруг себя. 
`,
    }
  },
}
</script>

