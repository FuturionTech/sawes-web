export default defineNuxtPlugin((nuxtApp) => {
  // Wait for AOS to be loaded
  const initAOS = () => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
      });

      // Refresh AOS on route change
      nuxtApp.hook('page:finish', () => {
        setTimeout(() => {
          if ((window as any).AOS) {
            (window as any).AOS.refresh();
          }
        }, 100);
      });
    }
  };

  // Try to initialize immediately
  if (process.client) {
    // Wait for the next tick to ensure DOM is ready
    setTimeout(() => {
      initAOS();
    }, 100);

    // Also try after a short delay in case script is still loading
    setTimeout(() => {
      initAOS();
    }, 500);
  }
});

