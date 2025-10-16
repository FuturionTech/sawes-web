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
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <p class="lead text-muted">
              {{ $t('partners.introduction.text') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Grid with Filters -->
    <PartnersGrid />

    <!-- Partnership Timeline -->
    <PartnershipTimeline />

    <!-- Success Stories / Testimonials -->
    <PartnerTestimonials />

    <!-- Become a Partner CTA -->
    <BecomePartner />

    <!-- Map Section (Optional) -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center mb-5" data-aos="fade-up">
            <h2 class="display-5 fw-bold mb-3">{{ $t('partners.map.title') }}</h2>
            <p class="lead text-muted">{{ $t('partners.map.subtitle') }}</p>
          </div>
        </div>

        <div class="row">
          <div class="col-12" data-aos="zoom-in">
            <div class="card border-0 shadow-sm overflow-hidden">
              <div class="card-body p-0">
                <!-- Placeholder for interactive map -->
                <div class="map-placeholder bg-light d-flex align-items-center justify-content-center" style="min-height: 500px;">
                  <div class="text-center p-5">
                    <i class="bi bi-geo-alt display-1 text-primary mb-3"></i>
                    <h4>{{ $t('partners.map.placeholder_title') }}</h4>
                    <p class="text-muted">{{ $t('partners.map.placeholder_text') }}</p>

                    <!-- Partner Regions Stats -->
                    <div class="row g-3 mt-4">
                      <div class="col-4">
                        <div class="border rounded p-3">
                          <div class="h5 fw-bold text-primary mb-0">15+</div>
                          <div class="small text-muted">{{ $t('partners.map.countries') }}</div>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="border rounded p-3">
                          <div class="h5 fw-bold text-primary mb-0">5</div>
                          <div class="small text-muted">{{ $t('partners.map.continents') }}</div>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="border rounded p-3">
                          <div class="h5 fw-bold text-primary mb-0">30+</div>
                          <div class="small text-muted">{{ $t('partners.map.organizations') }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Indicators Section -->
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6" data-aos="fade-right">
            <h2 class="display-6 fw-bold mb-4">{{ $t('partners.trust.title') }}</h2>
            <p class="lead text-muted mb-4">
              {{ $t('partners.trust.description') }}
            </p>

            <div class="row g-4">
              <div class="col-sm-6">
                <div class="d-flex align-items-start">
                  <div class="icon-box bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-3">
                    <i class="bi bi-award fs-4"></i>
                  </div>
                  <div>
                    <h6 class="fw-bold mb-1">{{ $t('partners.trust.point1_title') }}</h6>
                    <p class="text-muted small mb-0">{{ $t('partners.trust.point1_text') }}</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="d-flex align-items-start">
                  <div class="icon-box bg-success bg-opacity-10 text-success rounded-circle p-3 me-3">
                    <i class="bi bi-graph-up-arrow fs-4"></i>
                  </div>
                  <div>
                    <h6 class="fw-bold mb-1">{{ $t('partners.trust.point2_title') }}</h6>
                    <p class="text-muted small mb-0">{{ $t('partners.trust.point2_text') }}</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="d-flex align-items-start">
                  <div class="icon-box bg-info bg-opacity-10 text-info rounded-circle p-3 me-3">
                    <i class="bi bi-people fs-4"></i>
                  </div>
                  <div>
                    <h6 class="fw-bold mb-1">{{ $t('partners.trust.point3_title') }}</h6>
                    <p class="text-muted small mb-0">{{ $t('partners.trust.point3_text') }}</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="d-flex align-items-start">
                  <div class="icon-box bg-warning bg-opacity-10 text-warning rounded-circle p-3 me-3">
                    <i class="bi bi-lightbulb fs-4"></i>
                  </div>
                  <div>
                    <h6 class="fw-bold mb-1">{{ $t('partners.trust.point4_title') }}</h6>
                    <p class="text-muted small mb-0">{{ $t('partners.trust.point4_text') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-left">
            <div class="position-relative">
              <!-- Decorative background -->
              <div class="bg-primary bg-opacity-10 rounded-3 p-5">
                <div class="row g-3">
                  <div class="col-6">
                    <div class="card border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                        <i class="bi bi-trophy text-warning display-4 mb-2"></i>
                        <div class="h5 fw-bold mb-0">25+</div>
                        <div class="small text-muted">{{ $t('partners.trust.stat1') }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="card border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                        <i class="bi bi-check-circle text-success display-4 mb-2"></i>
                        <div class="h5 fw-bold mb-0">100%</div>
                        <div class="small text-muted">{{ $t('partners.trust.stat2') }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="card border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                        <i class="bi bi-globe text-primary display-4 mb-2"></i>
                        <div class="h5 fw-bold mb-0">15+</div>
                        <div class="small text-muted">{{ $t('partners.trust.stat3') }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="card border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                        <i class="bi bi-arrow-repeat text-info display-4 mb-2"></i>
                        <div class="h5 fw-bold mb-0">85%</div>
                        <div class="small text-muted">{{ $t('partners.trust.stat4') }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Initialize AOS animations
onMounted(() => {
  if (typeof window !== 'undefined' && (window as any).AOS) {
    (window as any).AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }
})
</script>

<style scoped>
.partners-page {
  background: #fff;
}

.icon-box {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.map-placeholder {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}
</style>
