<template>
  <div class="flex justify-center mt-6 md:mt-8 px-4 md:px-0">
    <div class="relative w-full max-w-xl">

      <input
        type="text"
        placeholder="Cari Game"
        v-model="searchTerm"
        @input="$emit('search', searchTerm)"
        class="w-full py-2 md:py-3 pl-4 md:pl-5 pr-10 md:pr-12 rounded-full shadow-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base"
      />

      <button class="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchTerm: ""
    }
  }
}
</script>
