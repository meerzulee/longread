<template>
  <div class="h-screen bg-blue-900 relative flex justify-start">
    <img
      src="@/assets/images/backgrounds/6.jpg"
      class="absolute object-cover w-full h-full object-right-top"
      alt=""
    />
    <!-- <video
      loop
      autoplay
      src="@/assets/videos/06.webm"
      class="absolute object-cover w-full h-full"
      alt=""
    /> -->
    <BgVideo
      :src="require('@/assets/videos/webm/6.webm')"
      class="object-right-top"
    />

    <div
      class="relative flex flex-col justify-between my-16 ml-360p desktop:ml-32"
    >
      <Header>
        <template v-slot:name>Евгения</template>
        дружественная адвокатесса, 34 года
      </Header>
      <Story :storyText="storyText" />
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
      storyText: `<b>- Сколько примерно к вам поступает просьб о помощи в  месяц? </b>

- Ну, больше десяти точно, в зависимости от времени. Потому что если это окончание квартала, то милиция начинает вымогать деньги. Также больше задержаний происходит, к примеру, в какие-то предпраздничные дни. Я могу уже предположить, что такой-то день будут задержания, будут останавливать на улице и проверять документы. 

<b>- Это связано с планом, который они должны выполнять?</b>

- Да, планы и попытка собрать деньги для отчетности перед начальством или на праздники.

<b>- С какими проблемами чаще всего обращаются?</b>

- Часто обращаются трансгендерные ребята. Особенно, когда на улице останавливают для проверки документов. Бывает, что пол в паспорте не соответствует внешнему облику человека. Ребята звонят и говорят, что с них потребовали справки о хирургическом вмешательстве, всякие разные ужасные случаи бывают. 

К примеру, когда люди хотят поменять документы, то государственные структуры не верят тому, что говорит человек, а хотят убедиться сами, что у человека под одеждой. Просят раздеться, показать гениталии или другие части тела. 

В таких случаях мы обращаемся в высшие инстанции, чтобы были предприняты меры. Часто получается так, что после этого за один день делают то, что обычно растягивается на месяцы.`,
    }
  },
}
</script>

