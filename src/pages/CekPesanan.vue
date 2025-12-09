<template>
  <div class="min-h-screen bg-gradient-to-b from-yellow-200 to-green-300">
    
    <div class="py-8 md:py-12 px-4 md:px-8 lg:px-20">
      
      <div class="mb-6 md:mb-8">
        <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Cek Pesanan</h1>
        <p class="text-sm md:text-base text-gray-700">Lacak status pesanan joki game Anda</p>
      </div>

      <!-- FILTER SECTION -->
      <div class="mb-6 md:mb-8 bg-white rounded-lg shadow-md p-4 md:p-6">
        <h3 class="font-bold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">Filter Pesanan:</h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          
          <!-- FILTER BY GAME -->
          <div>
            <label class="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">Berdasarkan Game</label>
            <select 
              v-model="filterGame"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-xs md:text-sm"
            >
              <option value="">Semua Game</option>
              <option value="Arknights">Arknights</option>
              <option value="Wuthering Waves">Wuthering Waves</option>
              <option value="Uma Musume">Uma Musume</option>
              <option value="Persona 5">Persona 5 : Tha Phantom X</option>
            </select>
          </div>

          <!-- FILTER BY STATUS -->
          <div>
            <label class="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">Berdasarkan Status</label>
            <select 
              v-model="filterStatus"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-xs md:text-sm"
            >
              <option value="">Semua Status</option>
              <option value="diproses">Pesanan Diproses</option>
              <option value="selesai">Pesanan Selesai</option>
              <option value="gagal">Pesanan Gagal</option>
            </select>
          </div>

          <!-- FILTER BY DATE -->
          <div>
            <label class="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">Berdasarkan Tanggal</label>
            <select 
              v-model="filterDate"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-xs md:text-sm"
            >
              <option value="">Semua Tanggal</option>
              <option value="newest">Terbaru</option>
              <option value="oldest">Terlama</option>
            </select>
          </div>

        </div>

        <!-- RESET FILTER BUTTON -->
        <button 
          v-if="filterGame || filterStatus || filterDate"
          @click="resetFilters"
          class="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-xs md:text-sm font-semibold transition"
        >
          Reset Filter
        </button>
      </div>

      <!-- TABLE CONTAINER -->
      <div class="bg-white rounded-lg shadow-xl overflow-hidden">
        
        <div class="bg-[#03051A] text-white grid grid-cols-3 gap-2 md:gap-4 px-4 md:px-6 py-3 md:py-4 text-xs md:text-base font-bold">
          <div>Waktu</div>
          <div>Produk</div>
          <div>Status Pemesanan</div>
        </div>

        <div class="divide-y divide-gray-200">
          
          <div 
            v-for="order in filteredOrders" 
            :key="order.id"
            class="grid grid-cols-3 gap-2 md:gap-4 px-4 md:px-6 py-4 md:py-5 hover:bg-gray-50 transition text-xs md:text-sm"
          >
            <div class="font-medium text-gray-800">{{ order.date }}</div>
            <div class="text-gray-700">{{ order.product }}</div>
            <div>
              <span 
                :class="[
                  'inline-block px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold',
                  order.status === 'diproses' ? 'bg-yellow-100 text-yellow-800' :
                  order.status === 'selesai' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                ]"
              >
                {{ getStatusText(order.status) }}
              </span>
            </div>
          </div>

          <!-- NO RESULTS -->
          <div v-if="filteredOrders.length === 0" class="px-4 md:px-6 py-8 text-center text-gray-500">
            <p class="text-sm md:text-base">Tidak ada pesanan yang sesuai dengan filter</p>
          </div>

        </div>

      </div>

      <!-- INFO BOX -->
      <div class="mt-6 md:mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg">
        <div class="flex items-start gap-3">
          <div class="text-xl md:text-2xl"></div>
          <div>
            <h3 class="font-bold text-blue-900 mb-1 text-sm md:text-base">Informasi Penting</h3>
            <p class="text-blue-800 text-xs md:text-sm leading-relaxed">
              Pesanan yang berstatus "Diproses" akan dikerjakan dalam 1-3 hari kerja. 
              Jika ada kendala, kami akan menghubungi Anda melalui WhatsApp yang terdaftar.
            </p>
          </div>
        </div>
      </div>

      <!-- STATUS LEGEND -->
      <div class="mt-6 md:mt-8 bg-white rounded-lg shadow-md p-4 md:p-6">
        <h3 class="font-bold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">Keterangan Status:</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          
          <div class="flex items-center gap-2 md:gap-3">
            <span class="inline-block px-2 md:px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-[10px] md:text-xs font-semibold">
              Pesanan Diproses
            </span>
            <span class="text-xs md:text-sm text-gray-600">Sedang dikerjakan</span>
          </div>

          <div class="flex items-center gap-2 md:gap-3">
            <span class="inline-block px-2 md:px-3 py-1 bg-green-100 text-green-800 rounded-full text-[10px] md:text-xs font-semibold">
              Pesanan Selesai
            </span>
            <span class="text-xs md:text-sm text-gray-600">Berhasil diselesaikan</span>
          </div>

          <div class="flex items-center gap-2 md:gap-3">
            <span class="inline-block px-2 md:px-3 py-1 bg-red-100 text-red-800 rounded-full text-[10px] md:text-xs font-semibold">
              Pesanan Gagal
            </span>
            <span class="text-xs md:text-sm text-gray-600">Terjadi kendala</span>
          </div>

        </div>
      </div>

    </div>


  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },

  data() {
    return {
      filterGame: '',
      filterStatus: '',
      filterDate: '',
      orders: [
        {
          id: 1,
          date: '10-16-2025',
          product: 'Daily - Wuthering Waves',
          status: 'diproses',
          game: 'Wuthering Waves',
          timestamp: new Date('2025-10-16')
        },
        {
          id: 2,
          date: '09-20-2025',
          product: 'Daily - Arknights',
          status: 'selesai',
          game: 'Arknights',
          timestamp: new Date('2025-09-20')
        },
        {
          id: 3,
          date: '09-11-2025',
          product: 'Monthly - Uma Musume',
          status: 'selesai',
          game: 'Uma Musume',
          timestamp: new Date('2025-09-11')
        },
        {
          id: 4,
          date: '07-11-2025',
          product: 'Daily - Persona 5 : Tha Phantom X',
          status: 'gagal',
          game: 'Persona 5',
          timestamp: new Date('2025-07-11')
        },
        {
          id: 5,
          date: '06-28-2025',
          product: 'Weekly - Wuthering Waves',
          status: 'selesai',
          game: 'Wuthering Waves',
          timestamp: new Date('2025-06-28')
        },
        {
          id: 6,
          date: '06-15-2025',
          product: 'Clear Story - Arknights',
          status: 'selesai',
          game: 'Arknights',
          timestamp: new Date('2025-06-15')
        }
      ]
    }
  },

  computed: {
    filteredOrders() {
      let result = [...this.orders]

      // Filter by game
      if (this.filterGame) {
        result = result.filter(order => order.game === this.filterGame)
      }

      // Filter by status
      if (this.filterStatus) {
        result = result.filter(order => order.status === this.filterStatus)
      }

      // Sort by date
      if (this.filterDate === 'newest') {
        result.sort((a, b) => b.timestamp - a.timestamp)
      } else if (this.filterDate === 'oldest') {
        result.sort((a, b) => a.timestamp - b.timestamp)
      }

      return result
    }
  },

  methods: {
    getStatusText(status) {
      const statusMap = {
        'diproses': 'Pesanan Diproses',
        'selesai': 'Pesanan Selesai',
        'gagal': 'Pesanan Gagal'
      }
      return statusMap[status] || status
    },

    resetFilters() {
      this.filterGame = ''
      this.filterStatus = ''
      this.filterDate = ''
    }
  }
}
</script>