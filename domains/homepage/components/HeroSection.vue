<template>
  <!-- Hero Section - Business Consulting Style -->
  <section class="overflow-hidden">
    <div class="container pt-2 pt-sm-4 pb-sm-2 pb-md-4 py-xl-5 mt-5">
      <div class="row align-items-center py-5 mt-md-2 my-lg-3 my-xl-4 my-xxl-5">

        <!-- Right Column: Hero Image -->
        <div class="col-lg-7 order-lg-2 d-flex justify-content-center justify-content-lg-end mb-4 mb-md-5 mb-lg-0 pb-3 pb-md-0">
          <div class="me-lg-n4 me-xl-n5" style="max-width: 667px;">
            <img src="/assets/images/hero/hero-engineer-1.png"
                 alt="SAWES - African Water Infrastructure Professional"
                 class="img-fluid rounded-3">
          </div>
        </div>

        <!-- Left Column: Hero Content -->
        <div class="col-lg-5 order-lg-1">
          <h1 class="display-3 text-center text-lg-start pb-sm-2 pb-md-3">
            {{ $t('homepage.hero.title') }}
          </h1>
          <p class="fs-lg text-center text-lg-start pb-xl-2 mx-auto mx-lg-0 mb-5" style="max-width: 420px;">
            {{ $t('homepage.hero.subtitle') }}
          </p>

          <!-- Email Input Group / Contact Form -->
          <div class="input-group mx-auto mx-lg-0" style="max-width: 420px;">
            <span class="input-group-text text-body-secondary">
              <i class="ai-mail"></i>
            </span>
            <input class="form-control" type="email" :placeholder="$t('contact.form.email_placeholder')" v-model="email">
            <NuxtLink :to="contactPath" class="btn btn-primary">
              {{ $t('homepage.hero.cta_primary') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n()
const email = ref('')

// Computed path for contact page
const contactPath = computed(() => locale.value === 'en' ? '/en/contact' : '/contact')
</script>

<style scoped>
.fs-lg {
  font-size: 1.125rem;
}

/* Input group styling - uses theme variables */
.input-group {
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.08);
  border-radius: 0.75rem;
  overflow: hidden;
}

.input-group-text {
  border-right: 0;
}

.input-group .form-control {
  border-left: 0;
  border-right: 0;
}

.input-group .form-control:focus {
  box-shadow: none;
}

/* Responsive adjustments */
@media (max-width: 991.98px) {
  .display-3 {
    font-size: 2.5rem;
  }
}

@media (max-width: 767.98px) {
  .display-3 {
    font-size: 2rem;
  }

  .fs-lg {
    font-size: 1rem;
  }
}
</style>
