<template>
  <div class="bg-gradient-to-b from-yellow-200 to-green-300 min-h-screen pb-12 md:pb-20">

    <div class="flex flex-col md:flex-row p-4 md:p-10 gap-4 md:gap-6">
      <div class="bg-orange-400 p-6 md:p-10 rounded shadow-2xl md:w-1/2 w-full">
        <p class="font-semibold bg-white px-3 md:px-4 py-1 md:py-2 inline-block mb-3 md:mb-4 text-xs md:text-sm">Special Offers</p>
        <h1 class="text-2xl md:text-4xl font-extrabold leading-tight">
          SUMMER FEST<br>
          PROMO DISCOUNT JOKI GAME 10%
        </h1>
      </div>

      <img
        src="/src/assets/home/Summer.png"
        class="rounded shadow-lg md:w-1/2 w-full object-cover h-48 md:h-auto"
      />
    </div>

    <SearchBar />  
    <Category />
    <GameList />
    <GameUpcoming />
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import Category from '../components/Category.vue'
import GameList from '../components/GameList.vue'
import GameUpcoming from '../components/GameUpcoming.vue'

export default { 
  components: { Category, GameList, GameUpcoming, SearchBar } 
}
</script>
