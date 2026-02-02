<template>
  <div class="auth-box p-0 w-100">
    <BRow class="w-100 g-0">
      <BCol>
        <div class="h-100 position-relative card-side-img rounded-0 overflow-hidden">
          <div
            class="p-4 card-img-overlay auth-overlay d-flex align-items-end justify-content-center"
          />
        </div>
      </BCol>

      <BCol xl="auto">
        <BCard no-body class="card auth-box-form border-0 mb-0">
          <div class="card-body min-vh-100 d-flex flex-column justify-content-center">
            <div class="auth-brand text-center">
              <AuthLogo />
            </div>

            <div class="mt-auto text-center">
              <div class="mb-4">
                <div class="avatar-xxl mx-auto mt-2">
                  <div
                    class="avatar-title bg-light-subtle border border-light border-dashed rounded-circle"
                  >
                    <img :src="deleteImg" alt="icon" height="64" />
                  </div>
                </div>
              </div>

              <h4 class="fw-bold text-center mb-3">Account Deactivated</h4>
              <p class="text-muted text-center mb-4">
                Your account is currently inactive. Reactivate now to regain access to all features
                and opportunities.
              </p>

              <div class="d-grid">
                <BButton variant="primary" type="submit" class="fw-semibold py-2"
                  >Reactivate Now
                </BButton>
              </div>
            </div>

            <p class="text-center text-muted mt-auto mb-0">
              © 2014 - {{ currentYear }} INSPINIA — by
              <span class="fw-semibold">{{ author }}</span>
            </p>
          </div>
        </BCard>
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import { BCol, BRow } from 'bootstrap-vue-next'
import { author, currentYear } from '@/helpers'
import AuthLogo from '@/components/AuthLogo.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'
import deleteImg from '@/assets/images/delete.png'

usePageMeta('Delete Account')
</script>
