<template>
  <div class="mt-12 md:mt-20 px-6 md:px-12 lg:px-20">

    <h2 class="bg-orange-500 text-white px-4 md:px-6 py-2 md:py-3 rounded font-bold inline-block text-sm md:text-base">
      Game yang akan datang
    </h2>

    <div class="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-10 max-w-2xl mx-auto md:mx-0">

      <img 
        src="/src/assets/upcoming/GuardianTales.png" 
        class="w-full max-w-[180px] md:max-w-[200px] aspect-square rounded-xl shadow-xl object-cover mx-auto"
      />

      <img 
        src="/src/assets/upcoming/AetherGazer.png" 
        class="w-full max-w-[180px] md:max-w-[200px] aspect-square rounded-xl shadow-xl object-cover mx-auto"
      />

    </div>
  </div>
</template>

<script>
export default {
  name: "GameUpcoming"
}
</script>