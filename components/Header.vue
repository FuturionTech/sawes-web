<template>
  <header 
    class="navbar navbar-expand-lg fixed-top bg-body shadow-sm"
    :class="{ 'navbar-scrolled': isScrolled }"
  >
    <div class="container">

      <!-- Navbar brand (Logo) -->
      <HeaderLogo/>

      <!-- Theme switcher -->
      <ThemeToggle class="order-lg-2 me-3 me-lg-4 ms-auto"/>

      <!-- Language selector -->
      <LanguageSelector class="order-lg-3 me-3 me-lg-4 d-none d-sm-inline-flex"/>

      <NuxtLink class="btn btn-primary btn-sm fs-sm order-lg-4 d-none d-sm-inline-flex" :to="contactPath">
        <i class="ai-phone-call fs-xl me-2 ms-n1"></i>
        {{ $t('header.contact_us') }}
      </NuxtLink>

      <!-- Mobile menu toggler (Hamburger) -->
      <button class="navbar-toggler ms-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
              aria-label="Toggle navigation" :aria-expanded="isMenuOpen.toString()" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar collapse (Main navigation) -->
      <nav class="collapse navbar-collapse" id="navbarNav" ref="navbarNav">
        <ul class="navbar-nav navbar-nav-scroll me-auto" style="--ar-scroll-height: 520px;">
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="localePath('/')">{{ $t('header.home') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="localePath('/about')">{{ $t('header.about') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="localePath('/services')">{{ $t('header.expertise') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="projectsPath">{{ $t('header.projects') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="partnersPath">{{ $t('header.partners') }}</NuxtLink>
          </li>
          <!-- Resources Dropdown Menu -->
          <!-- <RessourcesMenu /> -->
        </ul>
        <div class="d-sm-none p-3 mt-n3">
          <!-- Language selector for mobile -->
          <div class="mb-3">
            <LanguageSelector/>
          </div>
          <NuxtLink class="btn btn-primary w-100 mb-1" :to="contactPath">
            <i class="ai-phone-call fs-xl me-2 ms-n1"></i>
            {{ $t('header.contact_us') }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import LanguageSelector from "./selectors/LanguageSelector.vue";
import ThemeToggle from "./selectors/ThemeToggle.vue";
import HeaderLogo from "./logo/HeaderLogo.vue";
import RessourcesMenu from "./menus/RessourcesMenu.vue";

const { t, locale } = useI18n()
const { isScrolled, isMenuOpen, toggleMenu, closeMenu } = useNavbar()
const navbarNav = ref(null)
const route = useRoute()

// Locale-aware path helper
const localePath = (path) => {
  return locale.value === 'en' ? `/en${path}` : path
}

// Computed paths for bilingual routes
const projectsPath = computed(() => locale.value === 'en' ? '/en/projects' : '/projets')
const partnersPath = computed(() => locale.value === 'en' ? '/en/partners' : '/partenaires')
const contactPath = computed(() => locale.value === 'en' ? '/en/contact' : '/contact')

// Watch for route changes to close menu
watch(() => route.path, () => {
  if (navbarNav.value?.classList.contains('show')) {
    navbarNav.value.classList.remove('show')
  }
  closeMenu()
})
</script>


<style scoped>
/* Navbar with solid background */
.navbar {
  border-bottom: 1px solid var(--bs-border-color);
  transition: all 0.3s ease;
}

.navbar-scrolled {
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1) !important;
}

/* Nav links with hover effect */
.nav-link {
  font-weight: 500;
  transition: color 0.3s ease, transform 0.2s ease;
  position: relative;
}

.nav-link:hover {
  transform: translateY(-1px);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--bs-primary);
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 80%;
}

/* Active nav link */
.nav-link.router-link-active {
  font-weight: 600;
  color: var(--bs-primary);
}

.nav-link.router-link-active::after {
  width: 80%;
}

/* Button hover effect */
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(var(--bs-primary-rgb), 0.3);
}

/* Mobile menu toggler */
.navbar-toggler {
  border: none;
  padding: 0.35rem 0.6rem;
}

.navbar-toggler:focus {
  box-shadow: none;
}

/* Responsive mobile menu */
@media (max-width: 991.98px) {
  .navbar-collapse {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    padding: 1rem;
  }

  /* Mobile nav links spacing */
  .nav-link {
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    margin-bottom: 0.25rem;
  }

  .nav-link::after {
    display: none;
  }

  /* Active state on mobile - use background highlight instead of underline */
  .nav-link.router-link-active {
    background-color: rgba(var(--bs-primary-rgb), 0.1);
  }
}
</style>
