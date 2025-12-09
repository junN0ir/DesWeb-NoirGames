<template>
<section class="px-4 md:px-10 mt-6 md:mt-10">

  <div class="flex items-center">
    <div class="bg-[#FFD76E] w-10 md:w-12 min-h-[40px] md:min-h-[48px] rounded-l-md flex justify-center items-center font-bold text-sm md:text-base">
      1
    </div>

    <h2 class="bg-[#03071E] text-white px-4 md:px-6 py-2 md:py-3 rounded-r-md font-bold w-full text-sm md:text-base">
      Pilih Via Login
    </h2>
  </div>

  <div class="bg-[rgba(0,0,0,0.52)] p-4 md:p-6 rounded-md mt-4 text-white">
    
    <select
      v-model="selectedLogin"
      class="bg-[#FFD76E] text-black font-semibold px-4 md:px-5 py-2 md:py-3 rounded-md shadow w-full cursor-pointer text-sm md:text-base"
    >
      <option value="" disabled>Pilih Via Login</option>
      <option value="Facebook">Facebook</option>
      <option value="Email">Email</option>
      <option value="Yostar">Yostar</option>
    </select>

  </div>
</section>

</template>

<script>
export default {
  data() {
    return {
      selectedLogin: ""
    }
  }
}
</script>