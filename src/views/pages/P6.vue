<template>
  <div class="h-screen bg-blue-900 relative flex justify-start">
    <!-- <img
      src="@/assets/images/backgrounds/6.jpg"
      class="absolute object-cover w-full h-full object-right-top"
      alt=""
    /> -->
    <!-- <video
      loop
      autoplay
      src="@/assets/videos/06.webm"
      class="absolute object-cover w-full h-full"
      alt=""
    /> -->
    <!-- 
    <BgVideo
      :src="require('@/assets/videos/mp4/6.mp4')"
      class="object-right-top"
    />
   -->
    <BgVideo
      src="https://walkerstory.com/wp-content/uploads/2021/01/6.mp4"
      class="object-right-top"
    />

    <div
      class="relative flex flex-col justify-between my-16 ml-360p desktop:ml-32"
    >
      <Header>
        <template v-slot:name>{{ $t('page6name') }}</template>
        {{ $t('page6desc') }}
      </Header>
      <Story :storyText="$t('page6storytext')" />
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
      page6name: 'Евгения',
      page6desc: `дружественная адвокатесса, 34 года`,
      page6storyText: `- Сколько примерно к вам поступает просьб о помощи в месяц?

- Ну, больше десяти точно, в зависимости от времени. Потому что если это окончание квартала, то милиция начинает вымогать деньги. Также больше задержаний происходит, к примеру, в какие-то предпраздничные дни. Я могу уже предположить, что такой-то день будут задержания, будут останавливать на улице и проверять документы. 

- Это связано с планом, который они должны выполнять?

- Да, планы и попытка собрать деньги для отчетности перед начальством или на праздники.

- С какими проблемами чаще всего обращаются?

- Часто обращаются трансгендерные ребята. Особенно когда на улице останавливают для проверки документов. Бывает, что пол в паспорте не соответствует внешнему облику человека. Ребята звонят и говорят, что с них потребовали справки о хирургическом вмешательстве, всякие разные ужасные случаи бывают. 

К примеру, когда люди хотят поменять документы, то государственные структуры не верят тому, что говорит человек, а хотят убедиться сами, что у человека под одеждой. Просят раздеться, показать гениталии или другие части тела. 

В таких случаях мы обращаемся в высшие инстанции, чтобы были предприняты меры. Часто получается так, что после этого за один день делают то, что обычно растягивается на месяцы.
`,
    }
  },
}
</script>

