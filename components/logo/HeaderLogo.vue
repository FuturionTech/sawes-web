<template>
  <div class="d-flex align-items-center justify-content-center">
    <NuxtLink class="navbar-brand pe-sm-3" to="/">
      <span class="logo-text text-primary fw-bold">
        S.A.W.E.S
      </span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.logo-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-weight: 700;
}

/* Responsive logo sizing */
@media (max-width: 768px) {
  .logo-text {
    font-size: 1.25rem;
  }
}

@media (max-width: 576px) {
  .logo-text {
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
}
</style>