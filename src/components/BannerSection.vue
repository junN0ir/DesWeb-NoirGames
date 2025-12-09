<template>
  <div class="relative w-full overflow-hidden">

    <!-- BACK BUTTON -->
    <button
      @click="$router.push('/game')"
      class="absolute top-2 left-2 md:top-4 md:left-4 bg-[#F88C00] text-white px-3 py-1.5 md:px-5 md:py-2 rounded-md shadow font-semibold flex items-center gap-1 md:gap-2 z-30 text-xs md:text-base"
    >
      <span class="text-base md:text-xl">←</span> Kembali
    </button>

    <!-- BANNER IMAGE -->
    <img :src="banner" class="w-full h-[180px] md:h-[260px] object-cover" />

    <!-- TITLE SECTION -->
    <div class="w-full bg-[#03071E] flex items-center gap-3 md:gap-6 px-4 md:px-10 py-4 md:py-6 relative z-20">
      <img :src="logo" class="w-16 h-16 md:w-24 md:h-24 rounded-lg -mt-12 md:-mt-20 shadow-xl flex-shrink-0" />
      <h1 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide break-words">
        {{ title }}
      </h1>
    </div>

  </div>
</template>

<script>
export default {
  props: ["title", "logo", "banner"]
}
</script>