<template>
  <div class="partners-page">
    <!-- SEO Meta Tags -->
    <Head>
      <Title>{{ $t('meta.partners.title') }}</Title>
      <Meta name="description" :content="$t('meta.partners.description')" />
      <Meta name="keywords" :content="$t('meta.partners.keywords')" />
      <Meta property="og:title" :content="$t('meta.partners.title')" />
      <Meta property="og:description" :content="$t('meta.partners.description')" />
      <Meta property="og:type" content="website" />
    </Head>

    <!-- Hero Section -->
    <PartnersHero />

    <!-- Introduction Section -->
    <section class="py-4 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <p class="lead text-body-secondary fs-5 mb-0">
              {{ $t('partners.introduction.text') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Grid with Filters -->
    <PartnersGrid />

    <!-- Success Stories / Testimonials -->
    <PartnerTestimonials />

    <!-- Become a Partner CTA -->
    <BecomePartner />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from '#imports'
import PartnersHero from '../components/PartnersHero.vue'
import PartnersGrid from '../components/PartnersGrid.vue'
import PartnerTestimonials from '../components/PartnerTestimonials.vue'
import BecomePartner from '../components/BecomePartner.vue'

const { t } = useI18n()

// Initialize AOS animations
onMounted(() => {
  if (typeof window !== 'undefined' && window.AOS) {
    window.AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }
})
</script>

<style scoped>
.partners-page {
  min-height: 100vh;
}

:global([data-bs-theme="dark"]) .partners-page {
  background: var(--bs-dark);
}
</style>
