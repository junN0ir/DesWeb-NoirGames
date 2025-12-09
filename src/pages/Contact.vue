<template>
  <div class="bg-[#03051A] text-white min-h-screen">

    <!-- HEADER -->
    <section
      class="relative h-[30vh] md:h-[40vh] flex items-center px-6 md:px-20 
      bg-gradient-to-r from-[#03051A] to-[#0a0f3a]"
    >
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div class="relative z-10">
        <h1 class="text-2xl md:text-5xl font-extrabold">Hubungi Kami</h1>
        <p class="mt-2 md:mt-3 text-sm md:text-lg opacity-90">
          Kami selalu siap membantu Anda terjamin fast response & profesional.
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="px-6 md:px-20 py-8 md:py-16">
      <h2 class="text-xl md:text-2xl font-bold mb-6">Informasi Kontak</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

        <!-- LEFT -->
        <div class="space-y-4 text-sm md:text-lg">

          <p>
            <span class="font-semibold text-yellow-300">Alamat:</span><br>
            Jl. Giri Rejo, Balikpapan
          </p>

          <p>
            <span class="font-semibold text-yellow-300">Email:</span><br>
            <a href="mailto:juniormarcellino20@gmail.com" class="hover:text-yellow-300 transition">
              juniormarcellino20@gmail.com
            </a>
          </p>

          <p>
            <span class="font-semibold text-yellow-300">WhatsApp:</span><br>
            <a href="https://wa.me/6281234567890" target="_blank" class="hover:text-yellow-300 transition">
              +62 812-3456-7890
            </a>
          </p>

          <!-- SOCIAL MEDIA -->
          <div>
            <span class="font-semibold text-yellow-300">Sosial Media:</span>

            <div class="flex gap-4 mt-3">

              <!-- FACEBOOK -->
              <button
                @click="openSocialMedia('Facebook', 'https://facebook.com')"
                class="w-10 h-10 md:w-12 md:h-12 rounded-full 
                       flex items-center justify-center 
                       bg-transparent hover:scale-110 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" class="w-6 h-6">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z"/>
                </svg>
              </button>

              <!-- INSTAGRAM -->
              <button
                @click="openSocialMedia('Instagram', 'https://instagram.com')"
                class="w-10 h-10 md:w-12 md:h-12 rounded-full 
                       flex items-center justify-center 
                       bg-transparent hover:scale-110 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="2"
                 viewBox="0 0 24 24" class="w-6 h-6">
                  <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="17" cy="7" r="1.2" fill="white"></circle>
                </svg>
              </button>

              <!-- TWITTER / X -->
              <button
                @click="openSocialMedia('Twitter/X', 'https://twitter.com')"
                class="w-10 h-10 md:w-12 md:h-12 rounded-full 
                       flex items-center justify-center 
                       bg-transparent hover:scale-110 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" class="w-6 h-6">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/>
                </svg>
              </button>



            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div>
          <h2 class="text-xl md:text-2xl font-bold mb-4">Lokasi Kami</h2>

          <div class="w-full h-60 md:h-80 rounded-xl overflow-hidden shadow-xl border border-white/20">
            <iframe
              width="100%"
              height="100%"
              style="border:0;"
              loading="lazy"
              allowfullscreen
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d225.61560023591434!2d116.88238789653107!3d-1.1507312103468308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1763067361969!5m2!1sid!2sid">
            </iframe>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  methods: {
    openSocialMedia(platform, url) {
      alert(`Membuka ${platform}...`);
      window.open(url, "_blank");
    }
  }
}
</script>
