<template>
  <div class="auth-box d-flex align-items-center">
    <BContainer fluid="xxl">
      <BRow class="align-items-center justify-content-center">
        <BCol xl="10">
          <BCard no-body class="rounded-4 p-0 border-0">
            <BCardBody class="p-0">
              <BRow class="g-0 justify-content-between">
                <BCol lg="6">
                  <BCard no-body class="mb-0 border-0 rounded-4">
                    <BCardBody>
                      <div class="auth-brand text-center mb-3">
                        <AuthLogo />
                      </div>

                      <div class="p-2 text-center">
                        <div class="error-wave-container justify-content-center gap-1">
                          <span class="error-wave-char">4</span>
                          <span class="error-wave-char">0</span>
                          <span class="error-wave-char">1</span>
                        </div>

                        <h3 class="fw-bold">Unauthorized Access</h3>
                        <p class="text-muted">You don't have permission to view this page.</p>

                        <RouterLink to="/" class="btn btn-primary mt-3 rounded-pill">
                          Back to Safety
                        </RouterLink>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">
                        © 2014 - {{ currentYear }} INSPINIA — by
                        <span class="fw-bold">{{ author }}</span>
                      </p>
                    </BCardBody>
                  </BCard>
                </BCol>

                <BCol lg="6" class="d-none d-lg-block">
                  <div
                    class="h-100 position-relative card-side-img rounded-end-4 rounded-0 overflow-hidden"
                  >
                    <div
                      class="p-4 card-img-overlay rounded-4 rounded-start-0 auth-overlay d-flex align-items-end justify-content-center"
                    ></div>
                  </div>
                </BCol>
              </BRow>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import { author, currentYear } from '@/helpers'
import { usePageMeta } from '@/composables/usePageMeta'
import AuthLogo from '@/components/AuthLogo.vue'

usePageMeta('401 Error')
</script>
