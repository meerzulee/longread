<template>
  <div class="px-4 my-8 o-modal">
    <video
      @click="toggleModal = !toggleModal"
      :src="video"
      class="w-full cursor-pointer"
      autoplay
      loop
    ></video>

    <transition name="modal-up">
      <div
        v-if="toggleModal"
        class="absolute z-50 flex justify-center items-start inset-0 h-screen bg-primary"
      >
        <a
          class="absolute top-0 right-0 m-4 cursor-pointer"
          @click="toggleModal = !toggleModal"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.6159 16L23.6649 9.95107C24.1117 9.50423 24.1117 8.78197 23.6649 8.33513C23.218 7.88829 22.4958 7.88829 22.0489 8.33513L16 14.3841L9.95107 8.33513C9.50423 7.88829 8.78197 7.88829 8.33513 8.33513C7.88829 8.78197 7.88829 9.50423 8.33513 9.95107L14.3841 16L8.33513 22.0489C7.88829 22.4958 7.88829 23.218 8.33513 23.6649C8.55798 23.8877 8.85054 23.9997 9.1431 23.9997C9.43566 23.9997 9.72822 23.8877 9.95107 23.6649L16 17.6159L22.0489 23.6649C22.2718 23.8877 22.5643 23.9997 22.8569 23.9997C23.1495 23.9997 23.442 23.8877 23.6649 23.6649C24.1117 23.218 24.1117 22.4958 23.6649 22.0489L17.6159 16Z"
              fill="white"
            />
          </svg>
        </a>
        <div
          class="outro-container overflow-y-auto h-full pr-10 pb-40 my-20 text-white"
        >
          <h3 class="text-4xl font-bold mb-12">{{ name }}</h3>
          <p class="text-xl font-normal whitespace-pre-line" v-html="text"></p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    video: String,
    text: String,
  },
  data() {
    return {
      toggleModal: false,
    }
  },
  methods: {
    closeModal() {
      if (event.keyCode === 27) {
        this.toggleModal = false
      }
    },
  },
  mounted() {
    window.addEventListener('keyup', this.closeModal)
  },
  destroyed() {
    window.removeEventListener('keyup', this.closeModal)
  },
}
</script>

<style lang="scss" scoped>
</style>