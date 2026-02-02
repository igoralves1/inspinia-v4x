<template>
  <div class="auth-box p-0 w-100">
    <BRow class="w-100 g-0">
      <BCol>
        <div class="h-100 position-relative card-side-img rounded-0 overflow-hidden">
          <div
            class="p-4 card-img-overlay auth-overlay d-flex align-items-end justify-content-center"
          ></div>
        </div>
      </BCol>

      <BCol xl="auto">
        <BCard no-body class="auth-box-form border-0 mb-0">
          <BCardBody class="min-vh-100 d-flex flex-column justify-content-center">
            <div class="p-2 text-center mt-auto">
              <img :src="img500" alt="500" class="img-fluid" />
              <h3 class="fw-bold text-uppercase">Internal Server Error</h3>
              <p class="text-muted">Something went wrong on our end. Please try again later.</p>

              <RouterLink to="/" class="btn btn-primary mt-3 rounded-pill">Go Home</RouterLink>
            </div>

            <p class="text-center text-muted mt-auto mb-0">
              © 2014 - {{ currentYear }} INSPINIA — by
              <span class="fw-bold">{{ author }}</span>
            </p>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import { author, currentYear } from '@/helpers'
import { usePageMeta } from '@/composables/usePageMeta'
import img500 from '@/assets/images/svg/500.svg'

usePageMeta('500 Error')
</script>
