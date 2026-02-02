<template>
  <div class="auth-box overflow-hidden d-flex align-items-center">
    <BContainer>
      <BRow class="justify-content-center">
        <BCol cols="12" sm="8" md="6" xxl="4">
          <div class="auth-brand text-center mb-4">
            <AuthLogo />
          </div>

          <BCard no-body class="p-4 rounded-4">
            <div class="mb-4">
              <div class="avatar-xxl mx-auto mt-2">
                <div
                  class="avatar-title bg-light-subtle border border-light border-dashed rounded-circle"
                >
                  <img :src="deleteImage" alt="deactivated" height="64" />
                </div>
              </div>
            </div>

            <h4 class="fw-bold text-center mb-3">Account Deactivated</h4>
            <p class="text-muted text-center mb-4">
              Your account is currently inactive. Reactivate now to regain access to all features
              and opportunities.
            </p>

            <div class="d-grid">
              <BButton variant="primary" class="fw-semibold py-2">Reactivate Now</BButton>
            </div>
          </BCard>

          <p class="text-center text-muted mt-4 mb-0">
            © 2014 - {{ currentYear }} INSPINIA — by <span class="fw-semibold">{{ author }}</span>
          </p>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import { author, currentYear } from '@/helpers'
import deleteImage from '@/assets/images/delete.png'
import AuthLogo from '@/components/AuthLogo.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'

usePageMeta('Delete Account')
</script>
