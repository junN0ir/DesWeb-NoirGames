<template>
  <footer class="bg-[#03051A] text-white py-16 px-10 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

    <div>
        <h2 class="text-xl font-bold">NoirGames</h2>
        <p class="mt-3 opacity-80 leading-relaxed">
            Selamat datang di NoirGames!<br>
            Jasa Joki Game terpercaya & aman
        </p>
    </div>

    <div>
        <h3 class="text-lg font-bold">Link Cepat</h3>
        <ul class="mt-3 space-y-1 opacity-90">

    <li>
        <router-link to="/" class="hover:text-yellow-300 transition">
        Beranda
        </router-link>
    </li>

    <li>
        <router-link to="/game" class="hover:text-yellow-300 transition">
        Game
        </router-link>
    </li>

    <li>
        <router-link to="/cek-pesanan" class="hover:text-yellow-300 transition">
        Cek Pesanan
        </router-link>
    </li>

    <li>
        <router-link to="/ulasan" class="hover:text-yellow-300 transition">
        Ulasan
        </router-link>
    </li>

    <li>
        <router-link to="/contact" class="hover:text-yellow-300 transition">
        Kontak
        </router-link>
    </li>

    <li>    
        <router-link to="/about" class="hover:text-yellow-300 transition">   
        About
        </router-link>
    </li>
    </ul>
    </div>

    <div>
        <h3 class="text-lg font-bold">Hubungi Kami</h3>
        <p class="mt-3 opacity-80 leading-relaxed">
        Jl Giri Rejo, Balikpapan<br>
        juniormarcellino20@gmail.com
        </p>


    </div>

    <div class="mt-10 border-t border-white/20 pt-5 text-left text-xs opacity-70">
    © 2025 NoirGames. All rights reserved.
    </div>

  </footer>
</template>
