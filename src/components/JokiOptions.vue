<template>
  <section class="px-10 mt-10">
    
    <!-- TITLE HEADER -->
    <div class="flex items-center">
      <div class="bg-[#FFD76E] w-12 min-h-[48px] rounded-l-md flex justify-center items-center font-bold">2</div>
      <h2 class="bg-[#03071E] text-white px-6 py-3 rounded-r-md font-bold w-full">
        Jenis Joki
      </h2>
    </div>

    <!-- MAIN CONTAINER -->
    <div class="bg-[rgba(0,0,0,0.52)] p-6 rounded-md mt-4 text-white">

      <!-- KATEGORI 1: RAWAT AKUN -->
      <h3 class="font-bold mb-2">{{ rawatTitle }}</h3>
      <div class="flex flex-wrap gap-3 mb-6">
        <button
          v-for="item in rawatAkun"
          :key="item.label"
          @click="toggleItem(item)"
          :class="[
            'px-4 py-2 rounded-md text-sm font-semibold shadow border transition',
            isItemSelected(item.label)
              ? 'bg-[#E85D04] text-white border-orange-700'
              : 'bg-[#FFD76E] text-black border-yellow-500'
          ]"
        >
          {{ item.label }} <br />
          <span class="text-[10px]">Rp{{ item.price.toLocaleString() }}</span>
        </button>
      </div>

      <!-- KATEGORI 2: MAIN STORY -->
      <h3 class="font-bold mb-2">{{ storyTitle }}</h3>
      <div class="flex flex-wrap gap-3 mb-6">
        <button
          v-for="item in mainStory"
          :key="item.label"
          @click="toggleItem(item)"
          :class="[
            'px-4 py-2 rounded-md text-sm font-semibold shadow border transition',
            isItemSelected(item.label)
              ? 'bg-[#E85D04] text-white border-orange-700'
              : 'bg-[#FFD76E] text-black border-yellow-500'
          ]"
        >
          {{ item.label }} <br />
          <span class="text-[10px]">Rp{{ item.price.toLocaleString() }}</span>
        </button>
      </div>

      <!-- DAFTAR ITEM YANG DIPILIH -->
      <div v-if="selectedItems.length > 0" class="mt-6 border-t border-gray-500 pt-4">
        <h3 class="font-bold mb-3 text-lg">Item yang Dipilih:</h3>
        
        <div 
          v-for="item in selectedItems" 
          :key="item.label" 
          class="flex items-center justify-between mb-3 bg-[rgba(255,255,255,0.1)] p-4 rounded-lg"
        >
          <span class="font-semibold text-base">{{ item.label }}</span>
          
          <div class="flex items-center gap-4">
            <button 
              @click="decreaseQuantity(item)"
              class="bg-red-600 hover:bg-red-700 text-white w-8 h-8 rounded-md font-bold transition"
            >
              -
            </button>
            
            <span class="w-10 text-center font-bold text-lg">{{ item.quantity }}</span>
            
            <button 
              @click="increaseQuantity(item)"
              class="bg-green-600 hover:bg-green-700 text-white w-8 h-8 rounded-md font-bold transition"
            >
              +
            </button>
            
            <span class="ml-4 font-bold text-yellow-300 min-w-[120px] text-right">
              Rp{{ (item.price * item.quantity).toLocaleString() }}
            </span>
          </div>
        </div>

        <!-- TOTAL HARGA -->
        <div class="mt-6 pt-4 border-t-2 border-yellow-500 flex justify-between items-center">
          <span class="text-xl font-bold">Total Harga:</span>
          <span class="text-2xl font-bold text-[#FFD76E]">
            Rp{{ totalPrice.toLocaleString() }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  props: {
    rawatTitle: String,
    storyTitle: String,
    rawatAkun: Array,
    mainStory: Array
  },

  data() {
    return {
      selectedItems: []
    }
  },

  computed: {
    totalPrice() {
      return this.selectedItems.reduce((sum, item) => {
        return sum + (item.price * item.quantity)
      }, 0)
    }
  },

  methods: {
    toggleItem(item) {
      const index = this.selectedItems.findIndex(i => i.label === item.label)
      
      if (index !== -1) {
        // Jika sudah ada, hapus dari list
        this.selectedItems.splice(index, 1)
      } else {
        // Jika belum ada, tambahkan ke list dengan quantity 1
        this.selectedItems.push({
          label: item.label,
          price: item.price,
          quantity: 1
        })
      }
    },

    isItemSelected(label) {
      return this.selectedItems.some(item => item.label === label)
    },

    increaseQuantity(item) {
      const foundItem = this.selectedItems.find(i => i.label === item.label)
      if (foundItem) {
        foundItem.quantity++
      }
    },

    decreaseQuantity(item) {
      const foundItem = this.selectedItems.find(i => i.label === item.label)
      if (foundItem && foundItem.quantity > 1) {
        foundItem.quantity--
      }
    }
  }
}
</script>