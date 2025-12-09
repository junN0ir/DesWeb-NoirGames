<template>
  <div class="mt-12 md:mt-20 px-6 md:px-12 lg:px-20">

    <h2 class="bg-orange-500 text-white px-4 md:px-6 py-2 md:py-3 rounded font-bold inline-block text-sm md:text-base">
      Game yang akan datang
    </h2>

    <!-- GAME LIST -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-10">
      <img 
        src="/src/assets/upcoming/GuardianTales.png" 
        class="w-full max-w-[180px] md:max-w-[200px] aspect-square rounded-xl shadow-xl object-cover mx-auto cursor-pointer hover:scale-105 transition"
        @click="showPopup = true"
      />

      <img 
        src="/src/assets/upcoming/AetherGazer.png" 
        class="w-full max-w-[180px] md:max-w-[200px] aspect-square rounded-xl shadow-xl object-cover mx-auto cursor-pointer hover:scale-105 transition"
        @click="showPopup = true"
      />

    </div>

    <!-- POPUP -->
    <div 
      v-if="showPopup"
      class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
    >
      <div class="bg-[#D8D1CD] w-full max-w-md rounded-xl p-6 md:p-8 text-center shadow-2xl">

        <h2 class="text-xl md:text-2xl font-extrabold text-[#03051A]">
          Game Belum Tersedia!
        </h2>

        <p class="mt-2 text-sm md:text-base text-gray-700">
          Silahkan pilih game lain
        </p>

        <button
          @click="showPopup = false"
          class="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-bold transition"
        >
          Kembali
        </button>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "GameUpcoming",
  data() {
    return {
      showPopup: false
    }
  }
}
</script>
