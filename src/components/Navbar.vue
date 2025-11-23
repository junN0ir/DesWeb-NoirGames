<template>
  <nav class="bg-[#03051A] text-white px-10 py-4 flex justify-between items-center shadow">

    <div class="flex items-center gap-3">
      <img src="/src/assets/logo/NoirGames.png" class="w-12 h-12" />
      <h1 class="text-2xl font-bold">NoirGames</h1>
    </div>

    <ul class="hidden md:flex gap-10 text-lg font-medium">

      <li>
        <router-link 
          to="/" 
          class="hover:text-yellow-300"
        >
          Beranda
        </router-link>
      </li>

      <li>
        <router-link 
          to="/game" 
          class="hover:text-yellow-300"
        >
          Game
        </router-link>
      </li>
      
      <li><a class="hover:text-yellow-300">Cek Pesanan</a></li>
      <li>
        <router-link 
          to="/ulasan" 
          class="hover:text-yellow-300"
        >
          Ulasan
          </router-link>
      </li>
      
        <li>
            <router-link 
            to="/contact" 
            class="hover:text-yellow-300"
            >
            Kontak
            </router-link>  
        </li>
    </ul>

    <div class="flex gap-4">
      <button class="bg-yellow-300 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400">
        Daftar
      </button>
      <button class="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700">
        Masuk
      </button>
    </div>

  </nav>
</template>

<script>
export default {}
</script>
