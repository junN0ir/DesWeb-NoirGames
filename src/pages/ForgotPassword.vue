<template>
  <div 
    class="min-h-screen flex items-center justify-center p-4 relative"
    style="background-image: url('/src/assets/loginregister/bg.png'); background-size: cover; background-position: center;"
  >
    
    <!-- OVERLAY -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- FORGOT PASSWORD CARD -->
    <div class="relative z-10 rounded-2xl shadow-2xl w-full max-w-md p-8 md:p-10" style="background-color: rgba(255, 251, 44, 0.70);">
      
      <!-- BACK BUTTON -->
      <button 
        @click="goBack"
        class="absolute top-4 left-4 text-gray-700 hover:text-gray-900 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>

      <!-- LOGO -->
      <div class="flex justify-center mb-6">
        <img src="/src/assets/logo/NoirGames.png" class="w-20 h-20 md:w-24 md:h-24" alt="NoirGames Logo" />
      </div>

      <!-- STEP 1: EMAIL INPUT -->
      <div v-if="currentStep === 1">
        <h2 class="text-center text-xl md:text-2xl font-bold text-gray-800 mb-2">
          LUPA PASSWORD
        </h2>
        <p class="text-center text-sm text-gray-700 mb-6">
          Masukkan email Anda untuk mendapatkan kode verifikasi
        </p>

        <form @submit.prevent="sendVerificationCode" class="space-y-4">
          
          <!-- EMAIL INPUT -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Masukkan Email</label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                v-model="email"
                type="email"
                placeholder="example@email.com"
                class="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base text-gray-800"
              />
            </div>
          </div>

          <!-- SUBMIT BUTTON -->
          <button
            type="submit"
            class="w-full bg-[#03051A] text-white py-3 rounded-lg font-bold hover:bg-[#1a1d3a] transition flex items-center justify-center gap-2 text-sm md:text-base mt-6"
          >
            Kirim Kode Verifikasi
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </form>

        <!-- BACK TO LOGIN -->
        <p class="text-center mt-6 text-sm text-gray-700">
          Ingat password Anda? 
          <router-link to="/login" class="text-orange-600 font-bold hover:text-orange-700">
            Kembali ke Login
          </router-link>
        </p>
      </div>

      <!-- STEP 2: VERIFICATION CODE -->
      <div v-if="currentStep === 2">
        <h2 class="text-center text-xl md:text-2xl font-bold text-gray-800 mb-2">
          VERIFIKASI KODE
        </h2>
        <p class="text-center text-sm text-gray-700 mb-6">
          Masukkan kode verifikasi yang telah dikirim ke<br>
          <span class="font-semibold">{{ email }}</span>
        </p>

        <form @submit.prevent="verifyCode" class="space-y-4">
          
          <!-- VERIFICATION CODE INPUT -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Kode Verifikasi</label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </span>
              <input
                v-model="verificationCode"
                type="text"
                placeholder="Contoh: 123456"
                maxlength="6"
                class="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base text-gray-800 tracking-widest"
              />
            </div>
          </div>

          <!-- RESEND CODE -->
          <div class="text-center">
            <button 
              type="button"
              @click="resendCode"
              class="text-sm text-orange-600 hover:text-orange-700 font-semibold"
            >
              Kirim Ulang Kode
            </button>
          </div>

          <!-- SUBMIT BUTTON -->
          <button
            type="submit"
            class="w-full bg-[#03051A] text-white py-3 rounded-lg font-bold hover:bg-[#1a1d3a] transition flex items-center justify-center gap-2 text-sm md:text-base mt-6"
          >
            Verifikasi
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </form>
      </div>

      <!-- STEP 3: NEW PASSWORD -->
      <div v-if="currentStep === 3">
        <h2 class="text-center text-xl md:text-2xl font-bold text-gray-800 mb-2">
          RESET PASSWORD
        </h2>
        <p class="text-center text-sm text-gray-700 mb-6">
          Buat password baru untuk akun Anda
        </p>

        <form @submit.prevent="resetPassword" class="space-y-4">
          
          <!-- NEW PASSWORD INPUT -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Password Baru</label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                v-model="newPassword"
                :type="showNewPassword ? 'text' : 'password'"
                placeholder="••••••••"
                class="w-full pl-12 pr-12 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base text-gray-800"
              />
              <button
                type="button"
                @click="showNewPassword = !showNewPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <svg v-if="!showNewPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              </button>
            </div>
          </div>

          <!-- CONFIRM PASSWORD INPUT -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Konfirmasi Password Baru</label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                v-model="confirmNewPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="••••••••"
                class="w-full pl-12 pr-12 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base text-gray-800"
              />
              <button
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <svg v-if="!showConfirmPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              </button>
            </div>
          </div>

          <!-- SUBMIT BUTTON -->
          <button
            type="submit"
            class="w-full bg-[#03051A] text-white py-3 rounded-lg font-bold hover:bg-[#1a1d3a] transition flex items-center justify-center gap-2 text-sm md:text-base mt-6"
          >
            Reset Password
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>

        </form>
      </div>

    </div>

    <!-- NOTIFICATION -->
    <div 
      v-if="notification.show"
      :class="[
        'fixed top-4 right-4 px-6 py-4 rounded-lg shadow-xl z-50 flex items-center gap-3 animate-slide-in',
        notification.type === 'success' ? 'bg-green-500 text-white' : 
        notification.type === 'info' ? 'bg-blue-500 text-white' :
        'bg-red-500 text-white'
      ]"
    >
      <span v-if="notification.type === 'success'">✓</span>
      <span v-else-if="notification.type === 'info'">ℹ</span>
      <span v-else>✕</span>
      <span>{{ notification.message }}</span>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      email: '',
      verificationCode: '',
      newPassword: '',
      confirmNewPassword: '',
      showNewPassword: false,
      showConfirmPassword: false,
      notification: {
        show: false,
        type: '',
        message: ''
      }
    }
  },

  methods: {
    goBack() {
      if (this.currentStep === 1) {
        this.$router.push('/login')
      } else {
        this.currentStep--
      }
    },

    sendVerificationCode() {
      // Bisa lanjut meskipun kosong
      this.showNotification('success', 'Kode verifikasi telah dikirim ke email Anda!')
      setTimeout(() => {
        this.currentStep = 2
      }, 1500)
    },

    verifyCode() {
      // Bisa lanjut meskipun kosong
      this.showNotification('success', 'Kode verifikasi berhasil!')
      setTimeout(() => {
        this.currentStep = 3
      }, 1500)
    },

    resendCode() {
      this.showNotification('info', 'Kode verifikasi baru telah dikirim!')
    },

    resetPassword() {
      // Bisa lanjut meskipun kosong
      this.showNotification('success', 'Password berhasil direset! Mengarahkan ke halaman login...')
      setTimeout(() => {
        this.$router.push('/login')
      }, 2000)
    },

    showNotification(type, message) {
      this.notification = {
        show: true,
        type: type,
        message: message
      }

      setTimeout(() => {
        this.notification.show = false
      }, 3000)
    }
  }
}
</script>

<style scoped>
@keyframes slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 0.3s ease-out;
}
</style>