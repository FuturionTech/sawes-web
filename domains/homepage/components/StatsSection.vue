<template>
  <!-- Stats Section - Business Consulting Style -->
  <section class="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xl-3 mb-xxl-5">
    <div class="bg-secondary bg-opacity-10 rounded-5 py-4 py-md-5 px-lg-5">
      <div class="row row-cols-2 row-cols-md-4 g-0">

        <!-- Stat 1: Years of Experience -->
        <div class="col d-md-flex justify-content-center text-center text-md-start position-relative">
          <div class="position-absolute top-50 end-0 translate-middle-y border-end" style="height: 60px;"></div>
          <div class="p-3 px-sm-0 py-sm-4">
            <div class="h2 display-5 text-primary mb-0">{{ $t('homepage.stats.years') }}</div>
            <span>{{ $t('homepage.stats.years_label') }}</span>
          </div>
        </div>

        <!-- Stat 2: Projects Completed -->
        <div class="col d-md-flex justify-content-center text-center text-md-start position-relative">
          <div class="position-absolute top-50 end-0 translate-middle-y border-end d-none d-md-block" style="height: 60px;"></div>
          <div class="p-3 px-sm-0 py-sm-4">
            <div class="h2 display-5 text-primary mb-0">{{ $t('homepage.stats.projects') }}</div>
            <span>{{ $t('homepage.stats.projects_label') }}</span>
          </div>
        </div>

        <!-- Stat 3: Regions Served -->
        <div class="col d-md-flex justify-content-center text-center text-md-start position-relative">
          <div class="position-absolute top-50 end-0 translate-middle-y border-end" style="height: 60px;"></div>
          <div class="p-3 px-sm-0 py-sm-4">
            <div class="h2 display-5 text-primary mb-0">{{ $t('homepage.stats.regions') }}</div>
            <span>{{ $t('homepage.stats.regions_label') }}</span>
          </div>
        </div>

        <!-- Stat 4: Partner Organizations -->
        <div class="col d-md-flex justify-content-center text-center text-md-start position-relative">
          <div class="p-3 px-sm-0 py-sm-4">
            <div class="h2 display-5 text-primary mb-0">{{ $t('homepage.stats.partners') }}</div>
            <span>{{ $t('homepage.stats.partners_label') }}</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>

<style scoped>
/* Responsive display sizing */
@media (max-width: 991.98px) {
  .display-5 {
    font-size: 2rem;
  }
}

@media (max-width: 767.98px) {
  .display-5 {
    font-size: 1.75rem;
  }
}

@media (max-width: 575.98px) {
  .display-5 {
    font-size: 1.5rem;
  }
}
</style>
