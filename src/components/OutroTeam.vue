<template>
  <div class="flex">
    <outro-modal
      class="w-1/4 h-56"
      :name="$t('p1name')"
      :video="'https://walkerstory.com/wp-content/uploads/2021/01/sveta.mp4'"
      :text="$t('p1text')"
    >
    </outro-modal>
    <outro-modal
      class="w-1/4 h-56"
      :name="$t('p2name')"
      :video="'https://walkerstory.com/wp-content/uploads/2021/01/talgat.mp4'"
      :text="$t('p2text')"
    >
    </outro-modal>
    <outro-modal
      class="w-1/4 h-56"
      :name="$t('p3name')"
      :video="'https://walkerstory.com/wp-content/uploads/2021/01/maya.mp4'"
      :text="$t('p3text')"
    >
    </outro-modal>
    <outro-modal
      class="w-1/4 h-56"
      :name="$t('p4name')"
      :video="'https://walkerstory.com/wp-content/uploads/2021/01/diana.mp4'"
      :text="$t('p4text')"
    >
    </outro-modal>
  </div>
</template>

<script>
import OutroModal from '@/components/OutroModal.vue'

export default {
  components: {
    OutroModal,
  },
}
</script>

<style lang="scss" scoped>
</style>