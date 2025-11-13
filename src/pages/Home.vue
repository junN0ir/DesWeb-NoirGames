<template>
  <section 
    class="relative w-full h-[90vh] bg-cover bg-center flex items-center px-10 md:px-20"
    style="background-image: url('/src/assets/hero/hero-gaming.png');">
    <div class="absolute inset-0 bg-[#03051A]/80 backdrop-blur-[2px]"></div>

    <div class="relative z-10 max-w-2xl text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]">

      <h1 class="text-4xl md:text-5xl font-extrabold leading-tight text-white">
        Jasa Joki Game 
        <span class="text-yellow-300">Terpercaya</span> 
        & Aman
      </h1>

      <p class="mt-6 text-base md:text-lg leading-relaxed text-white/95">
        NoirGames menyediakan layanan joki game gacha untuk Arknights,
        Uma Musume, Persona 5 : Phantom X, dan Wuthering Waves.
        Aman, cepat, dan dikerjakan oleh player berpengalaman.
      </p>

      <div class="mt-8 flex gap-4">
        
        <router-link 
          to="/game"
          class="bg-yellow-300 text-black px-8 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-400 transition"
        >
          Pesan Sekarang
        </router-link>

        <router-link 
          to="/game"
          class="border border-yellow-300 px-8 py-3 text-lg font-semibold rounded-lg text-white hover:bg-yellow-300 hover:text-black transition">
          Lihat Game
        </router-link>

      </div>

    </div>

  </section>
</template>
