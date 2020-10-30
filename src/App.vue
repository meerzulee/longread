<template>
  <div id="app">
    <transition :name="transition">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transition: 'fade',
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.transition = to.params.transition ? to.params.transition : 'fade'

      next()
    })
  },
}
</script>
<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
