<template>
  <div class="flex justify-center mt-8">
    <div class="relative w-full max-w-xl">

      <input
        type="text"
        placeholder="Cari Game"
        class="w-full py-3 pl-5 pr-12 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        v-model="searchTerm"
      />

      <button class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800">
        🔍
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
