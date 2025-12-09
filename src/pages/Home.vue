<template>
  <section 
    class="relative w-full min-h-[70vh] md:h-[90vh] bg-cover bg-center flex items-center px-4 md:px-10 lg:px-20 py-12 md:py-0"
    style="background-image: url('/src/assets/hero/hero-gaming.png');"
  >
    <div class="absolute inset-0 bg-[#03051A]/80 backdrop-blur-[2px]"></div>

    <div class="relative z-10 max-w-2xl text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]">

      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
        Jasa Joki Game 
        <span class="text-yellow-300">Terpercaya</span> 
        & Aman
      </h1>

      <p class="mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-white/95">
        NoirGames menyediakan layanan joki game gacha untuk Arknights,
        Uma Musume, Persona 5 : Phantom X, dan Wuthering Waves.
        Aman, cepat, dan dikerjakan oleh player berpengalaman.
      </p>

      <div class="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
        
        <router-link 
          to="/game"
          class="bg-yellow-300 text-black px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg font-semibold rounded-lg hover:bg-yellow-400 transition text-center"
        >
          Pesan Sekarang
        </router-link>

        <router-link 
          to="/game"
          class="border-2 border-yellow-300 px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg font-semibold rounded-lg text-white hover:bg-yellow-300 hover:text-black transition text-center"
        >
          Lihat Game
        </router-link>

      </div>

    </div>

  </section>
</template>