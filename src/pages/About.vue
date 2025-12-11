<script setup lang="ts">
import Skillcard from '@/components/Skillcard.vue';

</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-yellow-200 to-green-300">

    <Navbar />

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
    <!-- LEFT -->
        <div class="space-y-4 text-sm md:text-lg">
        
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Junnior M. Polla</h1>
          <p class="text-base md:text-lg text-gray-700">
          Seorang mahasiswa asal isntitut teknologi kalimantan
          prodi informatika saya suka bermain game dan seorang 
          mahasiswa
          </p>
          
        </div>

    <div> 
      <h2 class="text-xl md:text-2xl font-bold mb-4">foto gwehj</h2>
      <div class="w-full h-60 md:h-80 rounded-xl overflow-hidden shadow-xl border border-white/20">
        <img
              width="100%"
              height="100%"
              style="border:0;"
              src="/src/assets/ulasan/3.png">
            </img>
          </div>
    </div>
    </div>

    


  

 <Skillcard />
    
  </div>
    
</template>