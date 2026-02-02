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
        <BCard no-body class="auth-box-form border-0 mb-0">
          <BCardBody class="min-vh-100 d-flex flex-column justify-content-center">
            <div class="auth-brand mb-0 text-center">
              <AuthLogo />
            </div>

            <div class="mt-auto text-center">
              <form>
                <div class="mb-4">
                  <div class="avatar-xxl mx-auto mt-2">
                    <div
                      class="avatar-title bg-light-subtle border border-light border-dashed rounded-circle"
                    >
                      <img :src="checkmark" alt="checkmark" height="64" />
                    </div>
                  </div>
                </div>

                <h4 class="fw-bold text-center mb-4">Well Done! Email verified Successfully</h4>

                <div class="d-grid">
                  <BButton variant="primary" type="submit" class="fw-semibold py-2">
                    Back to Dashboard
                  </BButton>
                </div>
              </form>
            </div>

            <p class="text-muted text-center mt-4 mb-0">
              Return to
              <RouterLink
                to="/auth-3/sign-in"
                class="text-decoration-underline link-offset-3 fw-semibold"
              >
                Sign in
              </RouterLink>
            </p>

            <p class="text-center text-muted mt-auto mb-0">
              © 2014 - {{ currentYear }} INSPINIA — by
              <span class="fw-semibold">{{ author }}</span>
            </p>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import { BButton, BCard, BCol, BRow } from 'bootstrap-vue-next'
import { author, currentYear } from '@/helpers'
import checkmark from '@/assets/images/checkmark.png'
import AuthLogo from '@/components/AuthLogo.vue'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta('Success Mail')
</script>
