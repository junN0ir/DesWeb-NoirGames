<template>
  <div
    class="min-h-screen pb-20"
    style="background: linear-gradient(180deg,#F88C00 4%,#FAA639 32%,#11E187 100%);"
  >

    <BannerSection
      title="WUTHERING WAVES"
      logo="/src/assets/games/Wuwa.png"
      banner="/src/assets/games/BannerWuwa.png"
    />

    <DescriptionSection />
    <LoginSelect />

    <JokiOptions
      rawatTitle="Rawat Akun"
      storyTitle="Eksplorasi"

      :rawatAkun="[
        { label: 'Daily', price: 5000 },
        { label: 'Weekly', price: 35000 },
        { label: 'Monthly', price: 150000 }
      ]"

      :mainStory="[
        { label: 'Huanglong', price: 60000 },
        { label: 'Rinascita', price: 40000 },
        { label: 'Blackshores', price: 30000 }
      ]"
    />

    <PaymentButtons />
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
