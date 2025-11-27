<template>
  <div
    class="min-h-screen py-8 md:py-16 px-4 md:px-8"
    style="background: linear-gradient(180deg, #FFE76A 0%, #B2FF7D 100%);"
  >

    <div class="mb-4 md:mb-6">
      <button class="bg-orange-400 px-4 md:px-5 py-1.5 md:py-2 rounded text-white font-semibold text-sm md:text-base">
        Ulasan
      </button>
    </div>

    <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-base md:text-lg font-semibold mb-6 md:mb-10">
      <span>4,4</span>

      <div class="flex text-yellow-400 text-lg md:text-xl">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </div>

      <p class="text-gray-700 text-sm md:text-base">Dari total 152 ulasan</p>
    </div>

    <!-- REVIEW 1 -->
    <div class="bg-white p-4 md:p-5 rounded-md shadow mb-4 md:mb-8 flex flex-col gap-2 md:gap-3">
      <div class="flex items-center gap-3 md:gap-4">
        <img src="/src/assets/ulasan/1.png" class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
        <div>
          <p class="font-bold text-sm md:text-base">Lusy</p>
          <p class="text-[10px] md:text-xs text-gray-500">3 Jam lalu</p>
        </div>
      </div>

      <div class="flex text-yellow-400 text-base md:text-lg mt-1">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </div>

      <p class="text-gray-800 leading-relaxed text-xs md:text-sm">
        Website nya sangat berguna bagi saya yang seorang kantoran. Saya sedikit terkendala dalam main game online saya karena keterbatasan waktu namun dengan website NoirGames jadi aman terkendali
      </p>
    </div>

    <!-- REVIEW 2 -->
    <div class="bg-white p-4 md:p-5 rounded-md shadow mb-4 md:mb-8 flex flex-col gap-2 md:gap-3">
      <div class="flex items-center gap-3 md:gap-4">
        <img src="/src/assets/ulasan/2.png" class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
        <div>
          <p class="font-bold text-sm md:text-base">Emma Myers</p>
          <p class="text-[10px] md:text-xs text-gray-500">1 Hari lalu</p>
        </div>
      </div>

      <div class="flex text-yellow-400 text-base md:text-lg">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div>

      <p class="text-gray-800 leading-relaxed text-xs md:text-sm">
        Keren Banget... Desainer Web nya favorit banget deh :)
      </p>
    </div>

    <!-- REVIEW 3 -->
    <div class="bg-white p-4 md:p-5 rounded-md shadow mb-4 md:mb-8 flex flex-col gap-2 md:gap-3">
      <div class="flex items-center gap-3 md:gap-4">
        <img src="/src/assets/ulasan/3.png" class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
        <div>
          <p class="font-bold text-sm md:text-base">Ishowspeed</p>
          <p class="text-[10px] md:text-xs text-gray-500">1 Hari lalu</p>
        </div>
      </div>

      <div class="flex text-yellow-400 text-base md:text-lg">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      </div>

      <p class="text-gray-800 leading-relaxed text-xs md:text-sm">
        Kurang banyak gamenya.
      </p>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style>