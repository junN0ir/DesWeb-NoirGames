<template>
  <div 
    class="min-h-screen flex items-center justify-center p-4 relative"
    style="background-image: url('/src/assets/loginregister/bg.png'); background-size: cover; background-position: center;"
  >
    
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative z-10 rounded-2xl shadow-2xl w-full max-w-md p-8 md:p-10" style="background-color: rgba(255, 251, 44, 0.70);">
      
      <!-- BACK BUTTON -->
      <button 
        @click="$router.push('/')"
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

      <!-- TITLE -->
      <h2 class="text-center text-xl md:text-2xl font-bold text-gray-800 mb-2">
        BUAT AKUN
      </h2>

      <!-- FORM -->
      <form @submit.prevent="handleRegister" class="space-y-4 mt-6">
        
        <!-- USERNAME INPUT -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Masukkan Username</label>
          <div class="relative">
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <input
              v-model="username"
              type="text"
              placeholder="Username"
              class="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base text-gray-800"
              required
            />
          </div>
        </div>

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
              required
            />
          </div>
        </div>

        <!-- PASSWORD INPUT -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Masukkan Password</label>
          <div class="relative">
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              class="w-full pl-12 pr-12 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base text-gray-800"
              required
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <label class="block text-sm font-semibold text-gray-700 mb-2">Konfirmasi Password</label>
          <div class="relative">
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input
              v-model="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="••••••••"
              class="w-full pl-12 pr-12 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base text-gray-800"
              required
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
          Buat Akun
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

      </form>

      <!-- LOGIN LINK -->
      <p class="text-center mt-6 text-sm text-gray-700">
        Sudah Punya Akun? Masuk 
        <router-link to="/login" class="text-orange-600 font-bold hover:text-orange-700">
          Disini
        </router-link>
      </p>

    </div>

    <!-- NOTIFICATION -->
    <div 
      v-if="notification.show"
      :class="[
        'fixed top-4 right-4 px-6 py-4 rounded-lg shadow-xl z-50 flex items-center gap-3 animate-slide-in',
        notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
      ]"
    >
      <span v-if="notification.type === 'success'">✓</span>
      <span v-else>✕</span>
      <span>{{ notification.message }}</span>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false,
      notification: {
        show: false,
        type: '',
        message: ''
      }
    }
  },

  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        this.showNotification('error', 'Password dan konfirmasi password tidak cocok!')
        return
      }

      if (this.password.length < 6) {
        this.showNotification('error', 'Password minimal 6 karakter!')
        return
      }

      this.showNotification('success', 'Registrasi berhasil! Mengarahkan ke halaman login...')
      
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
