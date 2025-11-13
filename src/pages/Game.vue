<template>
  <div class="bg-gradient-to-b from-yellow-200 to-green-300 min-h-screen pb-20">

    <div class="flex flex-col md:flex-row p-10 gap-6">
      <div class="bg-orange-400 p-10 rounded shadow-2xl md:w-1/2 w-full">
        <p class="font-semibold bg-white px-4 py-2 inline-block mb-4">Special Offers</p>
        <h1 class="text-4xl font-extrabold leading-tight">
          SUMMER FEST<br>
          PROMO DISCOUNT JOKI GAME 10%
        </h1>
      </div>

      <img
        src="/src/assets/home/Summer.png"
        class="rounded shadow-lg md:w-1/2 w-full object-cover"
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



export default { components: { Category, GameList, GameUpcoming, SearchBar } }
</script>
