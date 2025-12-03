<template>
  <div>
    <Navbar v-if="!isAuthPage" />
    <router-view />
    <Footer v-if="!isAuthPage" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Navbar, Footer },

  computed: {
    isAuthPage() {
      return this.$route.path === '/login' || this.$route.path === '/register'
    }
  }
}
</script>
