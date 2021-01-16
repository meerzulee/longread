<template>
  <div class="h-screen bg-primary-darker relative flex justify-center">
    <div class="outro-container overflow-y-scroll pr-10 mt-20 mb-10 text-white">
      <p
        class="text-xl font-normal whitespace-pre-line"
        v-html="$t('outrotext')"
      ></p>
      <OutroTeam />
      <h1 class="text-4xl font-bold mt-10 mb-16">{{ $t('outrotitle') }}</h1>
      <p
        class="text-xl font-normal whitespace-pre-line mb-32"
        v-html="$t('teaminfo')"
      ></p>
    </div>
  </div>
</template>

<script>
import OutroTeam from '@/components/OutroTeam.vue'
export default {
  components: {
    OutroTeam,
  },

  data() {
    return {
      navbar: {
        prev: 'Page13',
        prevT: 'slide-right',
      },
    }
  },
}
</script>

