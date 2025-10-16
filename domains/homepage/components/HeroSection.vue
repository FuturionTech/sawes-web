<template>
  <!-- Hero Section - Business Consulting Style -->
  <section class="overflow-hidden">
    <div class="container pt-2 pt-sm-4 pb-sm-2 pb-md-4 py-xl-5 mt-5">
      <div class="row align-items-center py-5 mt-md-2 my-lg-3 my-xl-4 my-xxl-5">

        <!-- Right Column: Parallax Images -->
        <div class="col-lg-7 order-lg-2 d-flex justify-content-center justify-content-lg-end mb-4 mb-md-5 mb-lg-0 pb-3 pb-md-0">
          <div class="parallax me-lg-n4 me-xl-n5" style="max-width: 667px;">
            <div class="parallax-layer" data-depth="0.1">
              <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800&auto=format&fit=crop"
                   alt="Water Infrastructure"
                   class="img-fluid rounded-3">
            </div>
            <div class="parallax-layer" data-depth="-0.2">
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop"
                   alt="Sanitation Services"
                   class="img-fluid rounded-3">
            </div>
            <div class="parallax-layer" data-depth="0.25">
              <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=800&auto=format&fit=crop"
                   alt="Environmental Solutions"
                   class="img-fluid rounded-3">
            </div>
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
const { t, locale } = useI18n()
const email = ref('')

// Computed path for contact page
const contactPath = computed(() => locale.value === 'en' ? '/en/contact' : '/contact')

// Initialize Parallax.js on mount
onMounted(() => {
  if (typeof window !== 'undefined' && window.Parallax) {
    const parallaxContainers = document.querySelectorAll('.parallax')
    parallaxContainers.forEach(container => {
      new window.Parallax(container, {
        relativeInput: true,
        hoverOnly: false
      })
    })
  }
})
</script>

<style scoped>
.fs-lg {
  font-size: 1.125rem;
}

/* Parallax container */
.parallax {
  position: relative;
  width: 100%;
  height: auto;
}

.parallax-layer {
  position: relative;
  display: block;
}

.parallax-layer img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 1rem;
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
