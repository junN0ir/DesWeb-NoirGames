<template>
  <div class="bg-[#03051A] text-white min-h-screen">

    <section class="relative h-[30vh] md:h-[40vh] flex items-center px-6 md:px-20 
                    bg-gradient-to-r from-[#03051A] to-[#0a0f3a]">

      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div class="relative z-10">
        <h1 class="text-2xl md:text-5xl font-extrabold">Hubungi Kami</h1>
        <p class="mt-2 md:mt-3 text-sm md:text-lg opacity-90">
          Kami selalu siap membantu Anda — fast response & profesional.
        </p>
      </div>
    </section>

    <section class="px-6 md:px-20 py-8 md:py-16">
      <h2 class="text-xl md:text-2xl font-bold mb-4 md:mb-6">Informasi Kontak</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

        <div class="space-y-3 md:space-y-4 text-sm md:text-lg">
          <p><span class="font-semibold text-yellow-300">Alamat:</span><br>
            Jl. Giri Rejo, Balikpapan
          </p>

          <p><span class="font-semibold text-yellow-300">Email:</span><br>
            juniormarcellino20@gmail.com
          </p>

          <p><span class="font-semibold text-yellow-300">WhatsApp:</span><br>
            +62 812-3456-7890
          </p>

          <div>
            <span class="font-semibold text-yellow-300">Sosial Media:</span>
            <div class="flex gap-3 md:gap-4 text-xl md:text-2xl mt-2">
              <i class="fab fa-facebook hover:text-blue-400"></i>
              <i class="fab fa-instagram hover:text-pink-400"></i>
              <i class="fab fa-x-twitter hover:text-gray-300"></i>
              <i class="fab fa-telegram hover:text-blue-300"></i>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-xl md:text-2xl font-bold mb-3 md:mb-4">Lokasi Kami</h2>

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
import Navbar from '../components/Navbar.vue'
import FooterComponent from '../components/Footer.vue'

export default {
  components: { Navbar, FooterComponent }
}
</script>