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

                  <div class="mb-4">
                    <div class="avatar-xxl mx-auto mt-2">
                      <div
                        class="avatar-title bg-light-subtle border border-light border-dashed rounded-circle"
                      >
                        <img :src="deleteImg" alt="inactive" height="64" />
                      </div>
                    </div>
                  </div>

                  <h4 class="fw-bold text-center mb-3">Account Deactivated</h4>
                  <p class="text-muted text-center mb-4">
                    Your account is currently inactive. Reactivate now to regain access to all
                    features and opportunities.
                  </p>

                  <div class="d-grid">
                    <BButton type="button" variant="primary" class="fw-semibold py-2">
                      Reactivate Now
                    </BButton>
                  </div>

                  <p class="text-center text-muted mt-4 mb-0">
                    © 2014 - {{ currentYear }} INSPINIA — by
                    <span class="fw-semibold">{{ author }}</span>
                  </p>
                </div>
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
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import { BButton, BCard, BCol, BContainer, BRow } from 'bootstrap-vue-next'
import { author, currentYear } from '@/helpers'
import AuthLogo from '@/components/AuthLogo.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'

import deleteImg from '@/assets/images/delete.png'

usePageMeta('Delete Account')
</script>
