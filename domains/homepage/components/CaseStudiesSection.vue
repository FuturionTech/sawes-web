<template>
  <!-- Case Studies Section - Business Consulting Style -->
  <section class="container pt-2 pt-sm-4 pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
    <h2 class="h1 text-center pb-3 pb-lg-4">{{ $t('homepage.case_studies.title') }}</h2>
    <div class="row row-cols-1 row-cols-md-2 g-4">

      <!-- Case Study 1: Water Infrastructure -->
      <div class="col">
        <div class="card bg-primary border-0 h-100 overflow-hidden pt-3 pt-xl-4 px-lg-3 px-xl-4">
          <div class="card-body position-relative z-2 pb-0">
            <h3 class="h4 card-title text-light">{{ $t('homepage.case_studies.case1.title') }}</h3>
            <p class="card-text text-light opacity-80 pb-sm3 pb-md-4 mb-2">
              {{ $t('homepage.case_studies.case1.description') }}
            </p>
            <NuxtLink class="btn btn-lg btn-link text-light px-0" :to="projectsPath">
              {{ $t('homepage.case_studies.read_case_study') }}
              <i class="ai-arrow-right ms-2"></i>
            </NuxtLink>
          </div>
          <div class="d-flex justify-content-end mt-sm-n5 me-n4">
            <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=400&auto=format&fit=crop" 
                 width="347" alt="Water Infrastructure Project">
          </div>
        </div>
      </div>

      <!-- Case Study 2: Sanitation Program -->
      <div class="col">
        <div class="card bg-primary bg-opacity-10 border-0 h-100 overflow-hidden pt-3 pt-xl-4 px-lg-3 px-xl-4">
          <div class="card-body position-relative z-2 pb-0">
            <h3 class="h4 card-title text-primary">{{ $t('homepage.case_studies.case2.title') }}</h3>
            <p class="card-text text-primary pb-sm3 pb-md-4 mb-2">
              {{ $t('homepage.case_studies.case2.description') }}
            </p>
            <NuxtLink class="btn btn-lg btn-link px-0" :to="projectsPath">
              {{ $t('homepage.case_studies.read_case_study') }}
              <i class="ai-arrow-right ms-2"></i>
            </NuxtLink>
          </div>
          <div class="d-flex justify-content-end mt-n4 mt-sm-n5 me-n4">
            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=400&auto=format&fit=crop" 
                 width="291" alt="Sanitation Program">
          </div>
        </div>
      </div>
    </div>

    <!-- More button -->
    <div class="text-center my-2 mt-sm-3 mt-lg-0 pt-4 pb-1 pb-sm-3 pb-md-4 pt-lg-5">
      <NuxtLink class="btn btn-outline-primary" :to="projectsPath">
        {{ $t('homepage.case_studies.read_all') }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { t, locale } = useI18n()

// Computed path for projects page
const projectsPath = computed(() => locale.value === 'en' ? '/en/projects' : '/projets')
</script>

<style scoped>
/* Responsive adjustments */
@media (max-width: 767.98px) {
  .h4 {
    font-size: 1.25rem;
  }
  
  .card-text {
    font-size: 0.9rem;
  }
}
</style>
