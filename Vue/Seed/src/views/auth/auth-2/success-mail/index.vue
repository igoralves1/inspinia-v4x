<template>
  <div class="auth-box d-flex align-items-center">
    <BContainer fluid="xxl">
      <BRow class="align-items-center justify-content-center">
        <BCol xl="10">
          <BCard no-body class="rounded-4">
            <BRow class="justify-content-between g-0">
              <BCol lg="6">
                <div class="card-body">
                  <div class="auth-brand text-center mb-4">
                    <AuthLogo />
                  </div>

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
                      <BButton type="submit" variant="primary" class="fw-semibold py-2">
                        Back to Dashboard
                      </BButton>
                    </div>
                  </form>

                  <p class="text-center text-muted mt-4 mb-0">
                    © 2014 - {{ currentYear }} INSPINIA — by
                    <span class="fw-semibold">{{ author }}</span>
                  </p>
                </div>
              </BCol>

              <BCol lg="6" class="d-none d-lg-block">
                <div class="h-100 position-relative card-side-img rounded-end-4 overflow-hidden">
                  <div
                    class="p-4 card-img-overlay rounded-4 rounded-start-0 auth-overlay d-flex align-items-end justify-content-center"
                  />
                </div>
              </BCol>
            </BRow>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import { BButton, BCard, BCol, BContainer, BRow } from 'bootstrap-vue-next'
import { author, currentYear } from '@/helpers'
import checkmark from '@/assets/images/checkmark.png'
import AuthLogo from '@/components/AuthLogo.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'

usePageMeta('Success Mail')
</script>
