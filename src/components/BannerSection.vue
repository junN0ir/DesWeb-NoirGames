<template>
  <div class="relative w-full overflow-hidden">

    <button
      @click="$router.push('/game')"
      class="absolute top-4 left-4 bg-[#F88C00] text-white px-5 py-2 rounded-md shadow font-semibold flex items-center gap-2 z-30"
    >
      <span class="text-xl">←</span> Kembali
    </button>

    <img :src="banner" class="w-full h-[260px] object-cover" />

    <div class="w-full bg-[#03071E] flex items-center gap-6 px-10 py-6 relative z-20">
      <img :src="logo" class="w-24 h-24 rounded-lg -mt-20 shadow-xl" />
      <h1 class="text-3xl font-bold text-white tracking-wide">{{ title }}</h1>
    </div>

  </div>
</template>

<script>
export default {
  props: ["title", "logo", "banner"]
}
</script>
