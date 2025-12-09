<template>
<section class="px-4 md:px-10 mt-6 md:mt-10">

  <div class="flex items-center">
    <div class="bg-[#FFD76E] w-10 md:w-12 min-h-[40px] md:min-h-[48px] rounded-l-md flex justify-center items-center font-bold text-sm md:text-base">
      3
    </div>

    <h2 class="bg-[#03071E] text-white px-4 md:px-6 py-2 md:py-3 rounded-r-md font-bold w-full text-sm md:text-base">
      Metode Pembayaran
    </h2>
  </div>

  <div class="bg-[rgba(0,0,0,0.52)] p-4 md:p-6 rounded-md mt-4 text-white">

    <h3 class="font-bold mb-2 text-sm md:text-base">E-Wallet</h3>

    <div class="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">

      <button
        @click="selectPayment('Qris')"
        :class="[
          'px-4 md:px-5 py-2 rounded-md text-xs md:text-sm font-semibold shadow border border-yellow-500 transition',
          selectedPayment === 'Qris' 
            ? 'bg-[#E85D04] text-white border-orange-700' 
            : 'bg-[#FFD76E] text-black'
        ]"
      >
          Qris
        </button>

        <button
          @click="selectPayment('Shopee Pay')"
          :class="[
            'px-5 py-2 rounded-md text-sm font-semibold shadow border border-yellow-500 transition',
            selectedPayment === 'Shopee Pay' 
              ? 'bg-[#E85D04] text-white border-orange-700' 
              : 'bg-[#FFD76E] text-black hover:bg-orange-200'
          ]"
        >
          Shopee Pay
        </button>

        <button
          @click="selectPayment('Ovo')"
          :class="[
            'px-5 py-2 rounded-md text-sm font-semibold shadow border border-yellow-500 transition',
            selectedPayment === 'Ovo' 
              ? 'bg-[#E85D04] text-white border-orange-700' 
              : 'bg-[#FFD76E] text-black hover:bg-orange-200'
          ]"
        >
          Ovo
        </button>

      </div>

      <h3 class="font-bold mb-2">Virtual Account</h3>
      <div class="flex flex-wrap gap-3">

        <button
          @click="selectPayment('BRIVA')"
          :class="[
            'px-5 py-2 rounded-md text-sm font-semibold shadow border border-yellow-500 transition',
            selectedPayment === 'BRIVA' 
              ? 'bg-[#E85D04] text-white border-orange-700' 
              : 'bg-[#FFD76E] text-black hover:bg-orange-200'
          ]"
        >
          BRIVA
        </button>

        <button
          @click="selectPayment('Mandiri')"
          :class="[
            'px-5 py-2 rounded-md text-sm font-semibold shadow border border-yellow-500 transition',
            selectedPayment === 'Mandiri' 
              ? 'bg-[#E85D04] text-white border-orange-700' 
              : 'bg-[#FFD76E] text-black hover:bg-orange-200'
          ]"
        >
          Mandiri
        </button>

        <button
          @click="selectPayment('BNI')"
          :class="[
            'px-5 py-2 rounded-md text-sm font-semibold shadow border border-yellow-500 transition',
            selectedPayment === 'BNI' 
              ? 'bg-[#E85D04] text-white border-orange-700' 
              : 'bg-[#FFD76E] text-black hover:bg-orange-200'
          ]"
        >
          BNI
        </button>

      </div>

      <div v-if="selectedPayment" class="mt-6 pt-4 border-t border-gray-500">
        <p class="text-sm">
          <span class="font-bold">Metode terpilih:</span> 
          <span class="text-[#FFD76E] font-semibold ml-2">{{ selectedPayment }}</span>
        </p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedPayment: ""
    }
  },

  methods: {
    selectPayment(method) {
      this.selectedPayment = method
    }
  }
}
</script>