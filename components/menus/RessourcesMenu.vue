<template>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" role="button">
      {{ $t('header.resources') }}
    </a>
    <div class="dropdown-menu resources-dropdown shadow-lg border-0">
      <!-- Header Section -->
      <div class="dropdown-header-section">
        <h6 class="dropdown-header-title">{{ $t('resources.dropdown.title') || 'Resource Center' }}</h6>
        <p class="dropdown-header-subtitle">{{ $t('resources.dropdown.subtitle') || 'Access our knowledge base and stay informed' }}</p>
      </div>

      <div class="row g-3">
        <!-- Documentation & Publications -->
        <div class="col-md-6">
          <div class="resource-category">
            <h6 class="resource-category-title">
              <i class="bi bi-journal-text me-2"></i>
              {{ $t('resources.dropdown.documentation') || 'Documentation' }}
            </h6>

            <NuxtLink :to="newsPath" class="resource-dropdown-item">
              <div class="resource-icon-wrapper news">
                <i class="bi bi-newspaper"></i>
              </div>
              <div class="resource-content">
                <div class="resource-title">{{ $t('resources.sections.news') }}</div>
                <div class="resource-description">{{ $t('resources.dropdown.news_desc') || 'Latest news and updates' }}</div>
              </div>
              <div class="resource-arrow">
                <i class="bi bi-arrow-right"></i>
              </div>
            </NuxtLink>

            <NuxtLink :to="publicationsPath" class="resource-dropdown-item">
              <div class="resource-icon-wrapper publications">
                <i class="bi bi-file-earmark-pdf"></i>
              </div>
              <div class="resource-content">
                <div class="resource-title">{{ $t('resources.sections.publications') }}</div>
                <div class="resource-description">{{ $t('resources.dropdown.publications_desc') || 'Technical reports and studies' }}</div>
              </div>
              <div class="resource-arrow">
                <i class="bi bi-arrow-right"></i>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Media & Events -->
        <div class="col-md-6">
          <div class="resource-category">
            <h6 class="resource-category-title">
              <i class="bi bi-collection me-2"></i>
              {{ $t('resources.dropdown.media_events') || 'Media & Events' }}
            </h6>

            <NuxtLink :to="galleryPath" class="resource-dropdown-item">
              <div class="resource-icon-wrapper gallery">
                <i class="bi bi-images"></i>
              </div>
              <div class="resource-content">
                <div class="resource-title">{{ $t('resources.sections.gallery') }}</div>
                <div class="resource-description">{{ $t('resources.dropdown.gallery_desc') || 'Project photos and visuals' }}</div>
              </div>
              <div class="resource-arrow">
                <i class="bi bi-arrow-right"></i>
              </div>
            </NuxtLink>

            <NuxtLink :to="eventsPath" class="resource-dropdown-item">
              <div class="resource-icon-wrapper events">
                <i class="bi bi-calendar-event"></i>
              </div>
              <div class="resource-content">
                <div class="resource-title">{{ $t('resources.sections.events') }}</div>
                <div class="resource-description">{{ $t('resources.dropdown.events_desc') || 'Workshops and training sessions' }}</div>
              </div>
              <div class="resource-arrow">
                <i class="bi bi-arrow-right"></i>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Additional Links Section -->
      <div class="support-section">
        <div class="support-header">
          <span class="support-label">{{ $t('resources.dropdown.more') || 'More' }}</span>
        </div>
        <div class="support-links">
          <NuxtLink class="support-link" :to="resourcesPath">
            <i class="bi bi-grid"></i>
            {{ $t('resources.dropdown.all_resources') || 'All Resources' }}
          </NuxtLink>
          <NuxtLink class="support-link" :to="faqPath">
            <i class="bi bi-question-circle"></i>
            {{ $t('header.faq') || 'FAQ' }}
          </NuxtLink>
          <NuxtLink class="support-link" :to="careersPath">
            <i class="bi bi-briefcase"></i>
            {{ $t('header.careers') || 'Careers' }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// Computed paths for bilingual routes
const newsPath = computed(() => locale.value === 'en' ? '/en/news' : '/actualites')
const publicationsPath = computed(() => locale.value === 'en' ? '/en/publications' : '/publications')
const galleryPath = computed(() => locale.value === 'en' ? '/en/gallery' : '/galerie')
const eventsPath = computed(() => locale.value === 'en' ? '/en/events' : '/evenements')
const resourcesPath = computed(() => locale.value === 'en' ? '/en/resources' : '/ressources')
const faqPath = computed(() => locale.value === 'en' ? '/en/faq' : '/faq')
const careersPath = computed(() => locale.value === 'en' ? '/en/careers' : '/carrieres')
</script>

<style scoped>
/* ===== DROPDOWN TOGGLE STYLES ===== */
.dropdown-toggle {
  font-weight: 500;
  transition: color 0.3s ease, transform 0.2s ease;
  position: relative;
}

.dropdown-toggle::after {
  vertical-align: 0.2em;
}

/* ===== DROPDOWN CONTAINER ===== */
.resources-dropdown {
  background: var(--bs-body-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 1rem !important;
  margin-top: 0.75rem;
  padding: 1.5rem;
  border: 1px solid var(--bs-border-color) !important;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  min-width: 540px;
  max-width: 600px;
}

/* ===== HEADER SECTION ===== */
.dropdown-header-section {
  margin-bottom: 1.5rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--bs-primary-border-subtle);
  position: relative;
}

.dropdown-header-section::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: var(--bs-primary);
  border-radius: 1px;
}

.dropdown-header-title {
  color: var(--bs-body-color);
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
  letter-spacing: -0.02em;
}

.dropdown-header-subtitle {
  color: var(--bs-secondary-color);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0;
  line-height: 1.4;
}

/* ===== RESOURCE CATEGORIES ===== */
.resource-category {
  margin-bottom: 1rem;
}

.resource-category-title {
  color: var(--bs-body-color);
  font-weight: 700;
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--bs-border-color);
}

/* ===== RESOURCE ITEMS ===== */
.resource-dropdown-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 0.875rem;
  border-radius: 0.75rem;
  margin-bottom: 0.625rem;
  background: var(--bs-secondary-bg);
  border: 1px solid var(--bs-border-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.resource-dropdown-item:hover {
  transform: translateY(-2px);
  background: var(--bs-body-bg);
  border-color: var(--bs-primary);
  box-shadow: 0 0.5rem 1.5rem rgba(var(--bs-primary-rgb), 0.25);
  text-decoration: none;
  color: inherit;
}

.resource-dropdown-item:hover .resource-arrow {
  opacity: 1;
  transform: translateX(0);
}

.resource-dropdown-item:hover .resource-icon-wrapper i {
  transform: scale(1.1);
}

/* ===== ICON WRAPPER ===== */
.resource-icon-wrapper {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.resource-icon-wrapper.news {
  background: linear-gradient(135deg, #0d6efd, #6ea8fe);
  box-shadow: 0 4px 16px rgba(13, 110, 253, 0.25);
}

.resource-icon-wrapper.publications {
  background: linear-gradient(135deg, #dc3545, #ea868f);
  box-shadow: 0 4px 16px rgba(220, 53, 69, 0.25);
}

.resource-icon-wrapper.gallery {
  background: linear-gradient(135deg, #198754, #75b798);
  box-shadow: 0 4px 16px rgba(25, 135, 84, 0.25);
}

.resource-icon-wrapper.events {
  background: linear-gradient(135deg, #ffc107, #ffda6a);
  box-shadow: 0 4px 16px rgba(255, 193, 7, 0.25);
}

.resource-icon-wrapper i {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  transition: transform 0.3s ease;
}

/* ===== CONTENT AREA ===== */
.resource-content {
  flex: 1;
  min-width: 0;
}

.resource-title {
  font-weight: 700;
  font-size: 0.9375rem;
  color: var(--bs-body-color);
  margin-bottom: 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.resource-description {
  color: var(--bs-secondary-color);
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ===== ARROW INDICATOR ===== */
.resource-arrow {
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.3s ease;
  color: var(--bs-primary);
  font-size: 1rem;
  margin-left: 0.75rem;
}

/* ===== SUPPORT SECTION ===== */
.support-section {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 2px solid var(--bs-primary-border-subtle);
  position: relative;
}

.support-section::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: var(--bs-primary);
  border-radius: 1px;
}

.support-header {
  text-align: center;
  margin-bottom: 1rem;
}

.support-label {
  color: var(--bs-body-color);
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.support-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.support-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  background: var(--bs-primary-bg-subtle);
  color: var(--bs-primary);
  font-weight: 600;
  font-size: 0.8125rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: 1px solid var(--bs-primary-border-subtle);
  transition: all 0.3s ease;
  text-decoration: none;
  white-space: nowrap;
}

.support-link:hover {
  background: var(--bs-primary);
  color: white;
  border-color: var(--bs-primary);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(var(--bs-primary-rgb), 0.3);
  text-decoration: none;
}

.support-link i {
  font-size: 0.875rem;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 991.98px) {
  .resources-dropdown {
    min-width: auto !important;
    max-width: none !important;
    width: 100%;
    padding: 1.25rem;
  }

  .row {
    flex-direction: column;
  }
}

@media (max-width: 575.98px) {
  .resources-dropdown {
    padding: 1rem;
  }

  .resource-dropdown-item {
    padding: 0.75rem;
  }

  .resource-icon-wrapper {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.75rem;
  }

  .resource-icon-wrapper i {
    font-size: 1.125rem;
  }

  .support-links {
    flex-direction: column;
    align-items: stretch;
  }

  .support-link {
    justify-content: center;
  }
}
</style>
