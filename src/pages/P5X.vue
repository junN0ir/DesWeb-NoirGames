<template>
  <div
    class="min-h-screen pb-20"
    style="background: linear-gradient(180deg,#F88C00 4%,#FAA639 32%,#11E187 100%);"
  >

    <BannerSection
      title="PERSONA 5: THE PHANTOM X"
      logo="/src/assets/games/P5X.png"
      banner="/src/assets/games/BannerP5X.png"
    />

    <DescriptionSection />
    <LoginSelect />

    <JokiOptions
      rawatTitle="Rawat Akun"
      storyTitle="Main Story (Palace)"

      :rawatAkun="[
        { label: 'Daily', price: 6000 },
        { label: 'Weekly', price: 40000 },
        { label: 'Monthly', price: 150000 }
      ]"

      :mainStory="[
        { label: 'Palace 1', price: 50000 },
        { label: 'Palace 2', price: 70000 },
        { label: 'Palace 3', price: 45000 }
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
