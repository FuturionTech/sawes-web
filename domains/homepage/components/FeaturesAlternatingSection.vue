<template>
  <!-- Features Section - Alternating Image/Text Rows -->
  <section class="container py-5 my-lg-3 my-xl-4 my-xxl-5">
    <!-- Row 1: 25+ years of expertise -->
    <div class="row align-items-center pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
      <div class="col-md-6 mb-4 mb-md-0" data-aos="fade-right" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
        <div class="position-relative">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
               class="rounded-1"
               alt="SAWES Expertise">
        </div>
      </div>
      <div class="col-md-6 col-xl-5 offset-xl-1" data-aos="fade-left" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
        <div class="ps-md-4 ps-xl-0">
          <h2 class="h1 pb-2 pb-lg-3">{{ $t('homepage.hero.years_experience') }}</h2>
          <p class="pb-2 pb-lg-3 mb-3">
            Founded in 2000, SAWES brings over two decades of proven excellence in water, sanitation, and environmental solutions across West Africa. Our track record speaks for itself.
          </p>
          <ul class="list-unstyled pb-3 pb-lg-4 mb-3">
            <li class="d-flex pb-1 mb-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Trusted by international organizations and governments
            </li>
            <li class="d-flex pb-1 mb-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              30+ major projects successfully delivered
            </li>
            <li class="d-flex">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Presence in 7+ regions across Burkina Faso
            </li>
          </ul>
          <NuxtLink to="/about" class="btn btn-outline-primary">
            Learn More About Us
            <i class="ai-arrow-right ms-2"></i>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Row 2: Professional Approach -->
    <div class="row align-items-center pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
      <div class="col-md-6 col-xl-5 order-md-2 mb-4 mb-md-0" data-aos="fade-left" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
        <div class="position-relative">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
               class="rounded-1"
               alt="Professional Approach">
        </div>
      </div>
      <div class="col-md-6 offset-xl-1 order-md-1" data-aos="fade-right" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
        <div class="pe-md-4 pe-xl-0">
          <h2 class="h1 pb-2 pb-lg-3">Professional Approach</h2>
          <p class="pb-2 pb-lg-3 mb-3">
            Our methodology is built on excellence, innovation, and a deep commitment to delivering sustainable solutions that create lasting impact.
          </p>

          <!-- Numbered features -->
          <div class="d-flex pb-3 mb-3">
            <div class="flex-shrink-0 bg-primary rounded-circle text-white fw-bold d-flex align-items-center justify-content-center me-3"
                 style="width: 48px; height: 48px;">
              01
            </div>
            <div>
              <h3 class="h5 mb-2">Strategic Planning</h3>
              <p class="mb-0">We develop comprehensive strategies aligned with national and regional water policies.</p>
            </div>
          </div>

          <div class="d-flex pb-3 mb-3">
            <div class="flex-shrink-0 bg-primary rounded-circle text-white fw-bold d-flex align-items-center justify-content-center me-3"
                 style="width: 48px; height: 48px;">
              02
            </div>
            <div>
              <h3 class="h5 mb-2">Technical Excellence</h3>
              <p class="mb-0">Our team of experts ensures quality in every technical study and infrastructure project.</p>
            </div>
          </div>

          <div class="d-flex">
            <div class="flex-shrink-0 bg-primary rounded-circle text-white fw-bold d-flex align-items-center justify-content-center me-3"
                 style="width: 48px; height: 48px;">
              03
            </div>
            <div>
              <h3 class="h5 mb-2">Capacity Building</h3>
              <p class="mb-0">We empower communities and institutions through training and knowledge transfer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Row 3: Full Spectrum Services -->
    <div class="row align-items-center">
      <div class="col-md-6 mb-4 mb-md-0" data-aos="fade-right" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
        <div class="position-relative">
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
               class="rounded-1"
               alt="Full Spectrum Services">
        </div>
      </div>
      <div class="col-md-6 col-xl-5 offset-xl-1" data-aos="fade-left" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
        <div class="ps-md-4 ps-xl-0">
          <h2 class="h1 pb-2 pb-lg-3">Full Spectrum of Services</h2>
          <p class="pb-2 pb-lg-3 mb-3">
            From initial planning to project management and ongoing operations, SAWES provides end-to-end solutions for all your water, sanitation, and environment needs.
          </p>
          <ul class="list-unstyled pb-3 pb-lg-4 mb-3">
            <li class="d-flex pb-1 mb-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Strategic and operational planning
            </li>
            <li class="d-flex pb-1 mb-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Technical and financial investment studies
            </li>
            <li class="d-flex pb-1 mb-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Training and capacity building programs
            </li>
            <li class="d-flex pb-1 mb-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Urban service management and development
            </li>
            <li class="d-flex">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Drinking water infrastructure works
            </li>
          </ul>
          <NuxtLink to="/services" class="btn btn-primary">
            Explore Our Services
            <i class="ai-arrow-right ms-2"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()

// Initialize AOS on mount
onMounted(() => {
  if (typeof window !== 'undefined' && window.AOS) {
    window.AOS.init()
  }
})
</script>

<style scoped>
.rounded-1 {
  border-radius: 0.25rem !important;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
