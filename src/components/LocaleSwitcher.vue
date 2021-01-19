<template>
  <div class="absolute top-0 left-0 z-50 m-10">
    <button
      id="logo"
      @click="changeLocale()"
      class="overflow-hidden rounded-full h-12 focus:outline-none focus:shadow-outline w-12 shadow-lg flex items-center justify-center"
    >
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#000" />
        </svg>-->
      <!-- ru -->
      <svg
        v-if="$i18n.locale === 'kg'"
        class="w-full"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
      >
        <rect style="fill: #0052b4" width="512" height="512" />
        <rect style="fill: #f0f0f0" width="512" height="170.663" />
        <rect y="341.337" style="fill: #d80027" width="512" height="170.663" />
      </svg>
      <!-- kg -->
      <img
        v-if="$i18n.locale === 'en'"
        src="@/assets/icons/kg.png"
        class="w-full"
        alt=""
      />
      <!-- english -->
      <svg
        v-if="$i18n.locale === 'ru'"
        class="w-full"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
      >
        <rect style="fill: #f0f0f0" width="512" height="512" />
        <polygon
          style="fill: #d80027"
          points="0,304 208,304 208,512 304,512 304,304 512,304 512,208 304,208 304,0 208,0 208,208 0,208 
	"
        />
        <g>
          <polygon
            style="fill: #0052b4"
            points="406.92,333.913 512,438.993 512,333.913 	"
          />
          <polygon
            style="fill: #0052b4"
            points="333.913,333.913 512,512 512,461.64 384.273,333.913 	"
          />
          <polygon
            style="fill: #0052b4"
            points="464.564,512 333.913,381.336 333.913,512 	"
          />
        </g>
        <polygon
          style="fill: #f0f0f0"
          points="333.913,333.913 512,512 512,461.64 384.273,333.913 "
        />
        <polygon
          style="fill: #d80027"
          points="333.913,333.913 512,512 512,461.64 384.273,333.913 "
        />
        <g>
          <polygon
            style="fill: #0052b4"
            points="80.302,333.913 0,414.215 0,333.913 	"
          />
          <polygon
            style="fill: #0052b4"
            points="178.084,356.559 178.084,511.997 22.658,511.997 	"
          />
        </g>
        <polygon
          style="fill: #d80027"
          points="127.724,333.916 0,461.641 0,512 0,512 178.084,333.916 "
        />
        <g>
          <polygon
            style="fill: #0052b4"
            points="105.08,178.087 0,73.007 0,178.087 	"
          />
          <polygon
            style="fill: #0052b4"
            points="178.087,178.087 0,0 0,50.36 127.727,178.087 	"
          />
          <polygon
            style="fill: #0052b4"
            points="47.436,0 178.087,130.663 178.087,0 	"
          />
        </g>
        <polygon
          style="fill: #f0f0f0"
          points="178.087,178.087 0,0 0,50.36 127.727,178.087 "
        />
        <polygon
          style="fill: #d80027"
          points="178.087,178.087 0,0 0,50.36 127.727,178.087 "
        />
        <g>
          <polygon
            style="fill: #0052b4"
            points="431.698,178.087 512,97.785 512,178.087 	"
          />
          <polygon
            style="fill: #0052b4"
            points="333.916,155.441 333.916,0.003 489.342,0.003 	"
          />
        </g>
        <polygon
          style="fill: #d80027"
          points="384.276,178.084 512,50.359 512,0 512,0 333.916,178.084 "
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    flag() {
      return this.$i18n.locale === 'ru'
    },
  },
  methods: {
    changeLocale() {
      if (this.$i18n.locale === 'ru') {
        this.$i18n.locale = 'en'
        // console.log(this.$route.path)
        this.$router.replace(this.$route.path.replace(/ru/i, 'en'))
      } else if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'kg'
        // console.log(this.$route.path)
        this.$router.replace(this.$route.path.replace(/en/i, 'kg'))
      } else {
        this.$i18n.locale = 'ru'
        // console.log(this.$route.path)
        this.$router.replace(this.$route.path.replace(/kg/i, 'ru'))
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>