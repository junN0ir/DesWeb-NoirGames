<template>
  <section class="px-10 mt-10 mb-10">

    <div class="flex items-center">
      <div class="bg-[#FFD76E] w-12 min-h-[48px] rounded-l-md flex justify-center items-center font-bold">4</div>

      <h2 class="bg-[#03071E] text-white px-6 py-3 rounded-r-md font-bold w-full">
        Kontak
      </h2>
    </div>

    <div class="bg-[rgba(0,0,0,0.52)] p-6 rounded-md mt-4 text-white">
      <input class="w-full px-4 py-3 rounded bg-white text-black border" placeholder="Nomor WhatsApp" />
      <input class="w-full mt-4 px-4 py-3 rounded bg-white text-black border" placeholder="Email aktif" />
    </div>

    <button
      @click="$router.push('/order-success')"
      class="w-full bg-orange-600 text-white mt-6 py-3 rounded-md font-bold text-lg shadow hover:bg-orange-700"
    >
      Order Sekarang
    </button>

  </section>
</template>
