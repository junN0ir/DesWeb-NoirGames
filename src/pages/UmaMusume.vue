<template>
  <div
    class="min-h-screen pb-20"
    style="background: linear-gradient(180deg,#F88C00 4%,#FAA639 32%,#11E187 100%);"
  >

    <BannerSection
      title="UMA MUSUME"
      logo="/src/assets/games/UmaMusume.png"
      banner="/src/assets/games/BannerUmaMusume.png"
    />

    <DescriptionSection />
    <LoginSelect />

    <JokiOptions
      rawatTitle="Rawat Akun"
      storyTitle="Farming Fans"

      :rawatAkun="[
        { label: 'Daily', price: 5000 },
        { label: 'Weekly', price: 38000 },
        { label: 'Monthly', price: 140000 }
      ]"

      :mainStory="[
        { label: '250k Fans', price: 3000 },
        { label: '500k Fans', price: 15000 },
        { label: '1 Juta Fans', price: 25000 }
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
