<template>
  <div
    v-if="this.$route.name !== 'Intro'"
    class="fixed z-50 w-full top-0 left-0 right-0"
  >
    <div class="pt-2 flex justify-between px-4">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        class="cursor-pointer"
        @click="toggleMenu = !toggleMenu"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.8901 17C18.1844 17 18.4668 16.8946 18.6749 16.7071C18.8831 16.5196 19 16.2652 19 16C19 15.7348 18.8831 15.4804 18.6749 15.2929C18.4668 15.1054 18.1844 15 17.8901 15H9.10995C8.81557 15 8.53325 15.1054 8.3251 15.2929C8.11694 15.4804 8 15.7348 8 16C8 16.2652 8.11694 16.5196 8.3251 16.7071C8.53325 16.8946 8.81557 17 9.10995 17H17.8901Z"
          fill="white"
        />
        <path
          d="M24 9.99997C23.9985 9.73514 23.877 9.48152 23.6617 9.29426C23.4465 9.10699 23.155 9.00123 22.8506 8.99997H9.14943C8.84458 8.99997 8.55222 9.10533 8.33666 9.29286C8.1211 9.4804 8 9.73475 8 9.99997C8 10.2652 8.1211 10.5195 8.33666 10.7071C8.55222 10.8946 8.84458 11 9.14943 11H22.8506C23.1544 10.9971 23.4448 10.8908 23.6596 10.7039C23.8745 10.5169 23.9967 10.2643 24 9.99997Z"
          fill="white"
        />
        <path
          d="M9.10988 23H14.8901C15.1845 23 15.4668 22.8946 15.6749 22.7071C15.8831 22.5195 16 22.2652 16 22C16 21.7348 15.8831 21.4804 15.6749 21.2929C15.4668 21.1053 15.1845 21 14.8901 21H9.10988C8.81552 21 8.53322 21.1053 8.32508 21.2929C8.11693 21.4804 8 21.7348 8 22C8 22.2652 8.11693 22.5195 8.32508 22.7071C8.53322 22.8946 8.81552 23 9.10988 23Z"
          fill="white"
        />
      </svg>

      <div class="flex">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mr-10 cursor-pointer"
          :class="[end ? 'mr-20' : '']"
          @click="slideBack()"
        >
          <path
            d="M6.25229 16.763L11.8552 23.5663C12.3187 24.0851 13.062 24.1347 13.5499 23.7352C14.0378 23.3357 14.1182 22.5284 13.7187 22.0405L9.72909 17.2007H24.7994C25.4625 17.2007 26 16.6632 26 16.0001C26 15.337 25.4625 14.7995 24.7994 14.7995L9.72909 14.7995L13.7187 9.95968C14.1182 9.47188 14.0283 8.67581 13.5499 8.26501C13.0567 7.84136 12.2546 7.94602 11.8552 8.43394L6.25229 15.2372C5.88756 15.7501 5.91872 16.267 6.25229 16.763Z"
            fill="white"
          />
        </svg>
        <!--  -->
        <svg
          :class="[end ? 'hidden' : 'block']"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          class="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          @click="slideNext()"
        >
          <path
            d="M25.7477 15.237L20.1448 8.43374C19.6813 7.91486 18.938 7.86531 18.4501 8.26478C17.9622 8.66425 17.8818 9.47165 18.2813 9.95947L22.2709 14.7993H7.20062C6.53754 14.7993 6 15.3368 6 15.9999C6 16.663 6.53754 17.2005 7.20062 17.2005H22.2709L18.2813 22.0403C17.8818 22.5281 17.9717 23.3242 18.4501 23.735C18.9433 24.1586 19.7454 24.054 20.1448 23.5661L25.7477 16.7628C26.1124 16.2499 26.0813 15.733 25.7477 15.237Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
    <!-- dropdown menu -->
    <transition name="menu-down">
      <div
        v-if="toggleMenu"
        class="absolute z-40 top-0 w-full bg-primary-dark navbar-menu"
      >
        <div class="navbar-container mx-auto mt-20 flex flex-wrap">
          <div
            class="navbar-rect my-10 mx-2 cursor-pointer group rounded-md text-white hover:bg-secondary flex justify-center items-center"
            v-for="(item, index) in items"
            @click="navigateTo(item.link)"
            :key="index"
          >
            <video
              v-if="item.video"
              autoplay
              loop
              class="group-hover:hidden"
              :src="item.video"
              alt=""
            />
            <p v-if="item.text" class="group-hover:hidden text-4xl font-bold">
              {{ item.text }}
            </p>
            <p
              class="font-bold hidden group-hover:block"
              :class="[item.text ? 'text-4xl' : 'text-lg']"
            >
              {{ item.textHover }}
            </p>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 px-4 mb-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            class="cursor-pointer"
            @click="toggleMenu = !toggleMenu"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9264 12.0029C15.7338 12.019 15.5514 12.0963 15.4059 12.2235L8.34426 18.3798C8.24806 18.4558 8.16828 18.5505 8.10978 18.6582C8.05127 18.7659 8.01525 18.8844 8.00389 19.0065C7.99254 19.1285 8.00608 19.2516 8.04371 19.3683C8.08134 19.485 8.14227 19.5928 8.2228 19.6852C8.30333 19.7776 8.40179 19.8527 8.51221 19.9059C8.62262 19.9592 8.74271 19.9894 8.86517 19.9949C8.98763 20.0003 9.10991 19.9809 9.22463 19.9377C9.33934 19.8944 9.44409 19.8284 9.53251 19.7435L16 14.1078L22.4675 19.7435C22.5559 19.8284 22.6607 19.8944 22.7754 19.9377C22.8901 19.9809 23.0124 20.0003 23.1348 19.9949C23.2573 19.9894 23.3774 19.9592 23.4878 19.9059C23.5982 19.8527 23.6967 19.7776 23.7772 19.6852C23.8577 19.5928 23.9187 19.485 23.9563 19.3683C23.9939 19.2516 24.0075 19.1285 23.9961 19.0065C23.9848 18.8844 23.9487 18.7659 23.8902 18.6582C23.8317 18.5505 23.7519 18.4558 23.6557 18.3798L16.5941 12.2235C16.5032 12.1441 16.3972 12.0836 16.2826 12.0457C16.1679 12.0078 16.0468 11.9932 15.9264 12.0029Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </transition>

    <!-- bg-color -->
    <transition name="fade" mode="in-out">
      <div
        @click="toggleMenu = !toggleMenu"
        v-if="toggleMenu"
        class="w-full h-screen top-0 z-30 menu-mask"
      ></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleMenu: false,

      items: [
        { text: 'Пролог', textHover: 'Пролог', video: '', link: 'Intro' },
        {
          text: '',
          textHover: 'Женя Юрьевна',
          video: require('@/assets/videos/thumbs/1.mp4'),
          link: 'Page1',
        },
        {
          text: '',
          textHover: 'Диана Алиева',
          video: require('@/assets/videos/thumbs/2.mp4'),
          link: 'Page2',
        },
        {
          text: '',
          textHover: 'Наталья Викторовна',
          video: require('@/assets/videos/thumbs/3.mp4'),
          link: 'Page3',
        },
        {
          text: '',
          textHover: 'Сулейма',
          video: require('@/assets/videos/thumbs/4.mp4'),
          link: 'Page4',
        },
        {
          text: '',
          textHover: 'Диас',
          video: require('@/assets/videos/thumbs/5.mp4'),
          link: 'Page5',
        },
        {
          text: '',
          textHover: 'Евгения',
          video: require('@/assets/videos/thumbs/6.mp4'),
          link: 'Page6',
        },
        {
          text: '',
          textHover: 'Адилет',
          video: require('@/assets/videos/thumbs/7.mp4'),
          link: 'Page7',
        },
        {
          text: '',
          textHover: 'Евгений',
          video: require('@/assets/videos/thumbs/8.mp4'),
          link: 'Page8',
        },
        {
          text: '',
          textHover: 'Аскар',
          video: require('@/assets/videos/thumbs/9.mp4'),
          link: 'Page9',
        },

        {
          text: '',
          textHover: 'Олеся',
          video: require('@/assets/videos/thumbs/10.mp4'),
          link: 'Page10',
        },
        {
          text: '',
          textHover: 'Айдай',
          video: require('@/assets/videos/thumbs/11.mp4'),
          link: 'Page11',
        },
        {
          text: '',
          textHover: 'ЛГБТ-активист с юга',
          video: require('@/assets/videos/thumbs/12.mp4'),
          link: 'Page12',
        },
        {
          text: '',
          textHover: 'ЛГБТ-активист с юга',
          video: require('@/assets/videos/thumbs/13.mp4'),
          link: 'Page13',
        },
        {
          text: 'Заключение',
          textHover: 'Заключение',
          video: '',
          link: 'Outro',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('keyup', this.handleKeyUp)
  },
  destroyed() {
    window.removeEventListener('keyup', this.handleKeyUp)
  },
  computed: {
    prev() {
      if (this.$route.name === 'Page1') {
        return 'Intro'
      } else if (this.$route.name === 'Outro') {
        return 'Page14'
      } else if (this.$route.name === 'Page4Song') {
        return 'Page4'
      } else if (this.$route.name === 'Page5') {
        return 'Page4Song'
      } else {
        return `Page${this.$route.name.split('Page')[1] - 1}`
      }
    },
    prevT() {
      if (this.$route.name === 'Page1') {
        return 'slide-down'
      } else {
        return 'slide-right'
      }
    },
    next() {
      if (this.$route.name === 'Page4Song') {
        return 'Page5'
      } else if (parseInt(this.$route.name.split('Page')[1]) + 1 <= 14) {
        if (this.$route.name === 'Page4') {
          return 'Page4Song'
        } else {
          return `Page${parseInt(this.$route.name.split('Page')[1]) + 1}`
        }
      } else {
        return 'Outro'
      }
    },
    nextT() {
      if (this.$route.name === 'Outro') {
        return ''
      } else {
        return 'slide-left'
      }
    },
    end() {
      if (this.$route.name === 'Outro') {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    slideBack() {
      this.$store.commit('setPageTransition', this.prevT)
      this.$router.push({
        name: this.prev,
      })
    },
    slideNext() {
      this.$store.commit('setPageTransition', this.nextT)
      this.$router.push({
        name: this.next,
      })
    },
    navigateTo(link) {
      this.toggleMenu = !this.toggleMenu
      setTimeout(() => {
        this.$router.push({
          name: link,
        })
      }, 500)
    },
    handleKeyUp() {
      if (event.keyCode === 27 || event.keyCode === 38) {
        this.toggleMenu = false
      }
      if (this.toggleMenu === false && event.keyCode === 40) {
        this.toggleMenu = true
      }
      if (this.toggleMenu === false) {
        // Page up
        if (event.keyCode === 37 && this.$route.name !== 'Intro') {
          this.slideBack()
        }

        // Page down
        if (
          event.keyCode === 39 &&
          this.$route.name !== 'Outro' &&
          this.$route.name !== 'Intro'
        ) {
          this.slideNext()
        }
      }
    },
  },
}
</script>

<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.7s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>