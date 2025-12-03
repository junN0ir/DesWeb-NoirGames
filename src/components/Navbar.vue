<template>
  <nav 
    class="bg-[#03051A] text-white px-6 md:px-10 py-4 flex justify-between items-center shadow relative"
  >

    <!-- Mobile Menu Button -->
    <button 
      @click="toggleMenu"
      class="md:hidden text-white text-3xl focus:outline-none z-50"
    >
      <span v-if="!menuOpen">☰</span>
      <span v-else>✕</span>
    </button>

    <!-- Logo -->
    <div class="flex items-center gap-3">
      <img src="/src/assets/logo/NoirGames.png" class="w-10 h-10 md:w-12 md:h-12" />
      <h1 class="text-xl md:text-2xl font-bold">NoirGames</h1>
    </div>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex gap-10 text-lg font-medium">
      <li><router-link to="/" class="hover:text-yellow-300 transition">Beranda</router-link></li>
      <li><router-link to="/game" class="hover:text-yellow-300 transition">Game</router-link></li>
      <li><router-link to="/cek-pesanan" class="hover:text-yellow-300 transition">Cek Pesanan</router-link></li>
      <li><router-link to="/ulasan" class="hover:text-yellow-300 transition">Ulasan</router-link></li>
      <li><router-link to="/contact" class="hover:text-yellow-300 transition">Kontak</router-link></li>
    </ul>

    <!-- Desktop Buttons -->
    <div class="hidden md:flex gap-4">
      <router-link to="/register">
        <button class="bg-yellow-300 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Daftar
        </button>
      </router-link>

      <router-link to="/login">
        <button class="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition">
          Masuk
        </button>
      </router-link>
    </div>

    <!-- Mobile Sidebar -->
    <div 
      :class="[
        'fixed top-0 left-0 h-full w-72 bg-[#03051A] shadow-2xl transform transition-transform duration-300 ease-in-out z-40',
        menuOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <div class="flex flex-col h-full pt-20 px-6">

        <!-- Menu Links -->
        <ul class="flex flex-col gap-6 text-lg font-medium">
          <li><router-link to="/" @click="closeMenu" class="block py-2 hover:text-yellow-300 transition">Beranda</router-link></li>
          <li><router-link to="/game" @click="closeMenu" class="block py-2 hover:text-yellow-300 transition">Game</router-link></li>
          <li><router-link to="/cek-pesanan" @click="closeMenu" class="block py-2 hover:text-yellow-300 transition">Cek Pesanan</router-link></li>
          <li><router-link to="/ulasan" @click="closeMenu" class="block py-2 hover:text-yellow-300 transition">Ulasan</router-link></li>
          <li><router-link to="/contact" @click="closeMenu" class="block py-2 hover:text-yellow-300 transition">Kontak</router-link></li>
        </ul>

        <!-- Bottom Buttons -->
        <div class="mt-auto mb-8 flex flex-col gap-3">
          <router-link to="/register" @click="closeMenu">
            <button class="w-full bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
              Daftar
            </button>
          </router-link>

          <router-link to="/login" @click="closeMenu">
            <button class="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
              Masuk
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Background overlay -->
    <div 
      v-if="menuOpen"
      @click="closeMenu"
      class="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
    ></div>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    }
  },

  watch: {
    $route() {
      this.closeMenu()
    }
  }
}
</script>
