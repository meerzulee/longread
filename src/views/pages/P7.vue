<template>
  <div class="h-screen bg-blue-900 relative flex justify-end">
    <!-- <img
      src="@/assets/images/backgrounds/7.jpg"
      class="absolute object-cover w-full h-full object-left-bottom"
      alt=""
    /> -->
    <!-- 
    <BgVideo
      :src="require('@/assets/videos/mp4/7.mp4')"
      class="object-left-bottom"
    />     -->
    <BgVideo
      src="https://walkerstory.com/wp-content/uploads/2021/01/7.mp4"
      class="object-left-bottom"
    />
    <div
      class="relative my-16 mr-360p desktop:mr-64 laptop:mr-48 laptop-mini:mr-32 flex flex-col justify-between"
    >
      <Header>
        <template class="desktop:mt-16" v-slot:name>
          {{ $t('page7name') }}</template
        >
        {{ $t('page7desc') }}
      </Header>
      <Story :storyText="$t('page7storytext')" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Story from '@/components/Story.vue'
import BgVideo from '@/components/BgVideo.vue'
export default {
  components: { Header, Story, BgVideo },

  data() {
    return {
      page7name: 'Адилет',
      page7desc: `директор ЛГБТ-организации «Кыргыз Индиго», <br />
        24 года`,
      page7storyText: `- Каждый год мы стараемся, чтобы в академии МВД все курсанты проходили модуль по работе с ЛГБТ-сообществом. Конечно, не всегда получается. 

Им, конечно, тяжело дается. Ну, вы представляете, таргет-группа академии МВД – это, в основном, приезжие ребята из регионов. И они никогда, ни под каким предлогом не сталкивались с сексуальностью. Для них есть черное и белое, для них есть роль женщины и роль мужчины - все такое супер-бинарное. И, когда мы приходим и начинаем рассказывать то, что не входит в их рамки восприятия мира, им это очень сложно дается. 

Когда говорят, что у нас пропагандируют ЛГБТ, я не знаю, как это воспринимать, потому что каких-то специальных медиакампаний, чтобы как-то деструктивно, токсично влиять на людей, мы не делаем. Есть определенные стереотипы и представления об ЛГБТ-людях у кыргызской общественности. 

В целом, почему еще слово «пропаганда» очень созвучно или, может, рядом находится со словом ЛГБТ, это потому, что в целом понятия, которые идут под лейблом «сексуальности и секса» очень остро воспринимаются обществом. Всем это интересно, но когда видят ЛГБТ-человека, лесбиянку, гея или транс-человека, сразу начинают представлять себе адский секс в голове. 

Почти для каждого ЛГБТ-человека процесс идентификации является центральным. Тебе не обязательно делать каминг-аут, потому что, например, человек не приходит и не говорит же, что он гетеросексуален. Но у нас мир в целом очень бинарный. 

Например, меня воспринимают как цисгендерного, гетеросексуального парня, у которого есть девушка. Мне становится неприятно и я часто говорю, что я не гетеро и мне не хочется дальше по этой цепочке коммуникации проходить. Я хочу, чтобы люди считались с моей идентификацией ЛГБТ-человека. 

Мне кажется, это очень важный процесс для восприятия целостности человека. И он/она, конечно, может этого не делать по каким-то своим личным причинам и это будет абсолютно нормально. То же самое, если человек это будет делать, потому что для него самоидентификация - это центральная тема.

У ЛГБТ-людей популярны квартирники, потому что тусовки на квартирах могут быть супер-безопасными. Там только свои люди, и они могут пить, веселиться и быть самими собой. В моем восприятии квартирники - это тусы ЛГБТ-людей, где ты приходишь, тусишь, веселишься и т.д. 

Но среди мужчин, практикующих секс с другими мужчинами, геев и бисексуалов есть другое понятие квартирников. Это специальные локации, которые они снимают или кто-то из парней организовывает пространство, куда приходят исключительно цис- и гей-парни. Они там пьют, знакомятся, есть специальные комнаты, где они могут заняться сексом. Это такие пространства, где ты говоришь «квартирник» и люди понимают, что это про секс, знакомства, алкоголь и наркотики. 
`,
    }
  },
}
</script>

