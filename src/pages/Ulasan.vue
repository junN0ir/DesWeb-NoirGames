<template>
  <div
    class="min-h-screen py-16 px-8"
    style="background: linear-gradient(180deg, #FFE76A 0%, #B2FF7D 100%);"
  >

    <div class="mb-6">
      <button class="bg-orange-400 px-5 py-2 rounded text-white font-semibold">
        Ulasan
      </button>
    </div>

    <!-- RATING SUMMARY -->
    <div class="flex items-center gap-4 text-lg font-semibold mb-10">
      <span>4,4</span>

      <div class="flex text-yellow-400 text-xl">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </div>

      <p class="text-gray-700">Dari total 152 ulasan</p>
    </div>

    <div class="bg-white p-5 rounded-md shadow mb-8 flex flex-col gap-3">
      <div class="flex items-center gap-4">
        <img src="/src/assets/ulasan/1.png" class="w-12 h-12 rounded-full object-cover" />
        <div>
          <p class="font-bold">Lusy</p>
          <p class="text-xs text-gray-500">3 Jam lalu</p>
        </div>
      </div>

      <div class="flex text-yellow-400 text-lg mt-1">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </div>

      <p class="text-gray-800 leading-relaxed">
        Website nya sangat berguna bagi saya yang seorang kantoran. Saya sedikit terkendala dalam main game online saya karena keterbatasan waktu namun dengan website NoirGames jadi aman terkendali
      </p>
    </div>

    <div class="bg-white p-5 rounded-md shadow mb-8 flex flex-col gap-3">
      <div class="flex items-center gap-4">
        <img src="/src/assets/ulasan/2.png" class="w-12 h-12 rounded-full object-cover" />
        <div>
          <p class="font-bold">Emma Myers</p>
          <p class="text-xs text-gray-500">1 Hari lalu</p>
        </div>
      </div>

      <div class="flex text-yellow-400 text-lg">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div>

      <p class="text-gray-800 leading-relaxed">
        Keren Banget... Desainer Web nya favorit banget deh :)
      </p>
    </div>

    <div class="bg-white p-5 rounded-md shadow mb-8 flex flex-col gap-3">
      <div class="flex items-center gap-4">
        <img src="/src/assets/ulasan/3.png" class="w-12 h-12 rounded-full object-cover" />
        <div>
          <p class="font-bold">Ishowspeed</p>
          <p class="text-xs text-gray-500">1 Hari lalu</p>
        </div>
      </div>

      <div class="flex text-yellow-400 text-lg">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      </div>

      <p class="text-gray-800 leading-relaxed">
        Kurang banyak gamenya.
      </p>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Font Awesome for stars */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style>
