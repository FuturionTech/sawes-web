/**
 * Swiper Initialization Plugin
 * Ensures Swiper carousels are properly initialized after Vue components mount
 */

export default defineNuxtPlugin((nuxtApp) => {
  // Wait for the app to be mounted
  nuxtApp.hook('app:mounted', () => {
    // Initialize Swiper with a slight delay to ensure DOM is ready
    setTimeout(() => {
      initializeSwiper()
    }, 100)

    // Also reinitialize on route changes
    nuxtApp.hook('page:finish', () => {
      setTimeout(() => {
        initializeSwiper()
      }, 100)
    })
  })
})

function initializeSwiper() {
  if (typeof window === 'undefined') return
  
  // Check if Swiper is available
  if (typeof (window as any).Swiper === 'undefined') {
    console.warn('Swiper library not loaded yet')
    return
  }

  const Swiper = (window as any).Swiper

  // Find all swiper elements
  const carousels = document.querySelectorAll('.swiper')
  
  carousels.forEach((carousel: Element) => {
    // Skip if already initialized
    if ((carousel as any).swiper) {
      return
    }

    const element = carousel as HTMLElement
    let options: any = {}

    // Parse data-swiper-options attribute
    if (element.dataset.swiperOptions) {
      try {
        options = JSON.parse(element.dataset.swiperOptions)
      } catch (e) {
        console.error('Error parsing swiper options:', e)
      }
    }

    // Initialize Swiper
    try {
      new Swiper(element, options)
    } catch (e) {
      console.error('Error initializing Swiper:', e)
    }
  })
}

