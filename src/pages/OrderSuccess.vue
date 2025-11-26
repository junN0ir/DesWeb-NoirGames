<template>
  <div class="bg-gradient-to-b from-yellow-200 to-green-300 min-h-screen flex flex-col items-center py-20">

    <div class="bg-white w-10/12 md:w-7/12 p-10 rounded-xl shadow-xl text-center">

      <div class="text-6xl mb-4 animate-pulse">✔️</div>

      <h1 class="text-3xl font-bold mb-6">Pemesanan Selesai</h1>

      <p class="text-lg">Terima kasih telah memesan jasa joki di NoirGames!</p>

      <div class="mt-10 text-left space-y-2 text-sm">
        <p><strong>Game:</strong> {{ $route.query.game }}</p>
        <p><strong>Jenis Joki:</strong> {{ $route.query.items }}</p>
        <p><strong>Metode Pembayaran:</strong> {{ $route.query.payment }}</p>
        <p><strong>No WhatsApp:</strong> {{ $route.query.wa }}</p>
        <p><strong>Email:</strong> {{ $route.query.email }}</p>
        <p><strong>Diskon:</strong> {{ $route.query.diskon }}%</p>
      </div>

      <router-link
        to="/"
        class="mt-10 inline-block bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700"
      >
        Kembali ke Beranda
      </router-link>

    </div>
  </div>
</template>
