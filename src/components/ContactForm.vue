<template>
  <section class="px-4 md:px-10 mt-6 md:mt-10 mb-10">

    <div class="flex items-center">
      <div class="bg-[#FFD76E] w-10 md:w-12 min-h-[40px] md:min-h-[48px] rounded-l-md flex justify-center items-center font-bold text-sm md:text-base">
        4
      </div>

      <h2 class="bg-[#03071E] text-white px-4 md:px-6 py-2 md:py-3 rounded-r-md font-bold w-full text-sm md:text-base">
        Kontak
      </h2>
    </div>

    <div class="bg-[rgba(0,0,0,0.52)] p-4 md:p-6 rounded-md mt-4 text-white">

      <input
        class="w-full px-3 md:px-4 py-2 md:py-3 rounded bg-white text-black border text-sm md:text-base"
        placeholder="Nomor WhatsApp"
      />

      <input
        class="w-full mt-4 px-3 md:px-4 py-2 md:py-3 rounded bg-white text-black border text-sm md:text-base"
        placeholder="Email aktif"
      />

    </div>

    <button
      @click="$router.push('/order-success')"
      class="w-full bg-orange-600 text-white mt-6 py-2 md:py-3 rounded-md font-bold text-sm md:text-base shadow hover:bg-orange-700 transition"
    >
      Order Sekarang
    </button>

  </section>
</template>
