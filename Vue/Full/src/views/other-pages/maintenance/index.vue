<template>
  <div class="auth-box d-flex align-items-center">
    <div class="container-xxl">
      <BRow align-h="center" align-v="center">
        <BCol xl="6">
          <BCard no-body class="mb-0 rounded-4">
            <BCardBody>
              <div class="auth-brand text-center mb-0">
                <AuthLogo />
              </div>

              <div class="p-2 text-center">
                <div class="w-md-50 mx-auto">
                  <img :src="maintenance" alt="Maintenance" class="img-fluid" />
                </div>

                <h3 class="fw-bold text-uppercase">Site Under Maintenance</h3>
                <p class="text-muted">
                  We’re currently performing scheduled maintenance.
                  <br />Please check back soon.
                </p>

                <BButton variant="primary" class="mt-3 rounded-pill me-1">Call Now</BButton>
                <BButton variant="info" class="mt-3 rounded-pill">Email Us</BButton>
              </div>

              <p class="text-center text-muted mt-5 mb-0">
                © 2014 - {{ currentYear }} INSPINIA — by
                <span class="fw-bold">{{ author }}</span>
              </p>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>
    </div>
  </div>
</template>

<script setup lang="ts">
import { author, currentYear } from '@/helpers'
import AuthLogo from '@/components/AuthLogo.vue'
import maintenance from '@/assets/images/svg/maintenance.svg'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta('Maintenance')
</script>
