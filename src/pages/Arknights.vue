<template>
  <div
    class="min-h-screen pb-20"
    style="background: linear-gradient(180deg,#F88C00 4%,#FAA639 32%,#11E187 100%);"
  >

    <!-- HEADER, BANNER, TITLE -->
    <BannerSection
      title="ARKNIGHTS"
      logo="/src/assets/games/Arknights.png"
      banner="/src/assets/games/BannerArknights.png"
    />

    <!-- DESKRIPSI -->
    <DescriptionSection />

    <!-- VIA LOGIN -->
    <LoginSelect />

    <!-- JENIS JOKI -->
    <JokiOptions
      rawatTitle="Rawat Akun"
      storyTitle="Clear Main Story"

      :rawatAkun="[
        { label: 'Daily', price: 5000 },
        { label: 'Weekly', price: 20000 },
        { label: 'Monthly', price: 50000 }
      ]"

      :mainStory="[
        { label: 'Normal', price: 3000 },
        { label: 'Adverse/CM', price: 5000 },
        { label: 'CM + Normal', price: 10000 }
      ]"
    />

    <!-- METODE PEMBAYARAN -->
    <PaymentButtons />

    <!-- FORM KONTAK -->
    <ContactForm />

  </div>
</template>

<script>
import BannerSection from '../components/BannerSection.vue'
import DescriptionSection from '../components/DescriptionSection.vue'
import LoginSelect from '../components/LoginSelect.vue'
import JokiOptions from '../components/JokiOptions.vue'
import PaymentButtons from '../components/PaymentButtons.vue'
import ContactForm from '../components/ContactForm.vue'

export default {
  components: {
    BannerSection,
    DescriptionSection,
    LoginSelect,
    JokiOptions,
    PaymentButtons,
    ContactForm
  }
}
</script>
