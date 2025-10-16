<template>
  <footer class="footer-modern bg-white border-top">
    <div class="container">
      <!-- Main Footer Content -->
      <div class="row py-5 gy-4">
        <!-- Company Info Column -->
        <div class="col-lg-4 col-md-6">
          <HeaderLogo class="d-inline-flex align-items-center mb-3" />
          <p class="text-muted mb-4" style="max-width: 320px;">
            {{ $t('footer.description') }}
          </p>
          
          <!-- Social Media Icons -->
          <div class="d-flex gap-2">
            <a class="social-icon" 
               href="https://facebook.com/sawes" 
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a class="social-icon" 
               href="https://instagram.com/sawes" 
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a class="social-icon" 
               href="https://linkedin.com/company/sawes" 
               target="_blank"
               rel="noopener noreferrer"
               aria-label="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
            <a class="social-icon" 
               href="https://twitter.com/sawes" 
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Twitter">
              <i class="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links Column -->
        <div class="col-lg-2 col-md-3 col-6">
          <h6 class="footer-heading mb-3">{{ $t('header.expertise') }}</h6>
          <ul class="footer-links list-unstyled mb-0">
            <li class="mb-2"><NuxtLink :to="localePath('/services')">{{ $t('header.expertise') }}</NuxtLink></li>
            <li class="mb-2"><NuxtLink :to="partnersPath">{{ $t('header.partners') }}</NuxtLink></li>
            <li class="mb-2"><NuxtLink :to="projectsPath">{{ $t('header.projects') }}</NuxtLink></li>
            <li class="mb-2"><NuxtLink :to="resourcesPath">{{ $t('header.resources') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Company Column -->
        <div class="col-lg-2 col-md-3 col-6">
          <h6 class="footer-heading mb-3">{{ $t('header.about') }}</h6>
          <ul class="footer-links list-unstyled mb-0">
            <li class="mb-2"><NuxtLink :to="localePath('/about')">{{ $t('header.about') }}</NuxtLink></li>
            <li class="mb-2"><NuxtLink :to="careersPath">{{ $t('header.careers') }}</NuxtLink></li>
            <li class="mb-2"><NuxtLink :to="localePath('/contact')">{{ $t('header.contact_us') }}</NuxtLink></li>
            <li class="mb-2"><NuxtLink to="/privacy-policy">{{ $t('footer.privacy_policy') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div class="col-lg-4 col-md-6">
          <h6 class="footer-heading mb-3">Contact</h6>
          <ul class="footer-contact list-unstyled mb-0">
            <li class="mb-3 d-flex align-items-start">
              <i class="bi bi-telephone-fill text-primary me-2 mt-1"></i>
              <div>
                <a href="tel:+22625411556" class="d-block">+226 25 41 15 56</a>
                <a href="tel:+22665501616" class="d-block">+226 65 50 16 16</a>
              </div>
            </li>
            <li class="mb-3 d-flex align-items-start">
              <i class="bi bi-envelope-fill text-primary me-2 mt-1"></i>
              <a href="mailto:sawes.bf@gmail.com">sawes.bf@gmail.com</a>
            </li>
            <li class="d-flex align-items-start">
              <i class="bi bi-geo-alt-fill text-primary me-2 mt-1"></i>
              <span class="text-muted">Ouagadougou, Burkina Faso</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom py-4 border-top">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p class="mb-0 text-muted small">
              &copy; 2025 {{ $t('footer.rights_reserved') }} 
              <a href="https://sawes.bf" target="_blank" rel="noopener" class="text-primary fw-semibold">SAWES</a>
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <span class="text-muted small">{{ $t('footer.slogan') }}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { t, locale } = useI18n()

// Locale-aware path helper
const localePath = (path) => {
  return locale.value === 'en' ? `/en${path}` : path
}

// Computed paths for bilingual routes
const projectsPath = computed(() => locale.value === 'en' ? '/en/projects' : '/projets')
const partnersPath = computed(() => locale.value === 'en' ? '/en/partners' : '/partenaires')
const resourcesPath = computed(() => locale.value === 'en' ? '/en/resources' : '/ressources')
const careersPath = computed(() => locale.value === 'en' ? '/en/careers' : '/carrieres')
</script>

<style scoped>
/* Modern Footer Styles */
.footer-modern {
  background-color: #ffffff;
  border-top: 1px solid #e9ecef;
}

/* Footer Headings */
.footer-heading {
  color: #121519;
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

/* Social Media Icons */
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f6f9fc 0%, #e9ecef 100%);
  color: #0000FF;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 2px solid transparent;
}

.social-icon:hover {
  background: linear-gradient(135deg, #0000FF 0%, #1e40af 100%);
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 255, 0.25);
  border-color: #0000FF;
}

/* Footer Links */
.footer-links a {
  color: #6c757d;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: #0000FF;
  padding-left: 5px;
}

/* Contact Links */
.footer-contact a {
  color: #495057;
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.9rem;
}

.footer-contact a:hover {
  color: #0000FF;
}

.footer-contact i {
  font-size: 1.1rem;
  flex-shrink: 0;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid #e9ecef;
}

.footer-bottom a {
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-bottom a:hover {
  color: #1e40af !important;
}

/* Responsive Adjustments */
@media (max-width: 767.98px) {
  .footer-heading {
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }

  .social-icon {
    width: 38px;
    height: 38px;
    font-size: 1rem;
  }

  .footer-links,
  .footer-contact {
    font-size: 0.85rem;
  }

  .col-6:first-child .footer-heading {
    margin-top: 0;
  }
}

@media (max-width: 575.98px) {
  .footer-modern .row.gy-4 {
    text-align: center;
  }

  .footer-contact li {
    justify-content: center;
  }

  .social-icon {
    margin: 0 0.25rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .footer-modern {
    background-color: #1a1d23;
    border-top-color: #2d3139;
  }

  .footer-heading {
    color: #ffffff;
  }

  .footer-links a {
    color: #9ca3af;
  }

  .footer-contact a,
  .footer-contact span {
    color: #d1d5db;
  }

  .social-icon {
    background: linear-gradient(135deg, #2d3139 0%, #1a1d23 100%);
    color: #60a5fa;
  }

  .social-icon:hover {
    background: linear-gradient(135deg, #0000FF 0%, #1e40af 100%);
    color: #ffffff;
  }

  .footer-bottom {
    border-top-color: #2d3139;
  }
}
</style>
