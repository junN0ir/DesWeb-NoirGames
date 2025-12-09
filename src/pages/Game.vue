<template>
  <div class="bg-gradient-to-b from-yellow-200 to-green-300 min-h-screen pb-12 md:pb-20">

    <Navbar />

    <!-- SUMMER FEST BANNER - FULL WIDTH WITH IMAGE -->
    <div class="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
      
      <!-- BACKGROUND IMAGE -->
      <img
        src="/src/assets/home/Summer.png"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Summer Fest"
      />

      <!-- OVERLAY GRADIENT -->
      <div class="absolute inset-0 bg-gradient-to-r from-orange-400/90 to-transparent"></div>

      <!-- CONTENT -->
      <div class="relative z-10 h-full flex items-center px-6 md:px-10 lg:px-20">
        <div class="max-w-xl">
          <span class="inline-block bg-white px-3 md:px-4 py-1 md:py-2 rounded text-xs md:text-sm font-semibold text-black-600 mb-3 md:mb-4">
            Special Offers
          </span>
          <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg">
            SUMMER FEST<br>
            PROMO DISCOUNT JOKI GAME 10%
          </h1>
        </div>
      </div>

    </div>

    <SearchBar @search="handleSearch" />  
    <Category />

    <!-- GAME LIST WITH FILTER -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-6 md:px-12 lg:px-20 mt-6 md:mt-10">
      
      <router-link 
        v-for="game in filteredGames" 
        :key="game.id"
        :to="game.route"
      >
        <img 
          :src="game.image" 
          :alt="game.name"
          class="cursor-pointer w-full max-w-[180px] md:max-w-[200px] aspect-square rounded-xl shadow-xl object-cover mx-auto hover:scale-105 transition"
        />
        <p class="text-center mt-2 font-semibold text-sm md:text-base">{{ game.name }}</p>
      </router-link>

    </div>

    <!-- NO RESULTS MESSAGE -->
    <div v-if="filteredGames.length === 0" class="text-center py-10 px-4">
      <p class="text-xl md:text-2xl font-bold text-gray-700 mb-2">Game tidak ditemukan</p>
      <p class="text-sm md:text-base text-gray-600">Coba kata kunci lain atau lihat semua game kami</p>
    </div>

    <GameUpcoming />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import SearchBar from '../components/SearchBar.vue'
import Category from '../components/Category.vue'
import GameUpcoming from '../components/GameUpcoming.vue'
import Footer from '../components/Footer.vue'

export default { 
  components: { 
    Category, 
    GameUpcoming, 
    SearchBar
  },

  data() {
    return {
      searchQuery: '',
      games: [
        {
          id: 1,
          name: 'Arknights',
          image: '/src/assets/games/Arknights.png',
          route: '/game/arknights'
        },
        {
          id: 2,
          name: 'Uma Musume',
          image: '/src/assets/games/UmaMusume.png',
          route: '/game/umamusume'
        },
        {
          id: 3,
          name: 'Persona 5 X',
          image: '/src/assets/games/P5X.png',
          route: '/game/p5x'
        },
        {
          id: 4,
          name: 'Wuthering Waves',
          image: '/src/assets/games/Wuwa.png',
          route: '/game/wuwa'
        }
      ]
    }
  },

  computed: {
    filteredGames() {
      if (!this.searchQuery) {
        return this.games
      }

      return this.games.filter(game => 
        game.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },

  methods: {
    handleSearch(query) {
      this.searchQuery = query
    }
  }
}
</script>