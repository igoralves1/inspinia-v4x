<template>
  <div class="auth-box overflow-hidden align-items-center d-flex">
    <BContainer>
      <BRow class="justify-content-center">
        <BCol cols="12" sm="8" md="6" xxl="4">
          <div class="auth-brand text-center mb-4">
            <AuthLogo />
            <h4 class="fw-bold mt-3">Welcome to IN+</h4>
            <p class="text-muted w-lg-75 mx-auto">
              Awesome! You’ve read the important message like a pro.
            </p>
          </div>

          <BCard no-body class="p-4 rounded-4">
            <form>
              <div class="mb-4">
                <div class="avatar-xxl mx-auto mt-2">
                  <div
                    class="avatar-title bg-light-subtle border border-light border-dashed rounded-circle"
                  >
                    <img :src="checkmark" alt="success" height="64" />
                  </div>
                </div>
              </div>

              <h4 class="fw-bold text-center mb-4">Well Done! Email verified Successfully</h4>

              <div class="d-grid">
                <BButton type="submit" variant="primary" class="fw-semibold py-2 w-100">
                  Back to Dashboard
                </BButton>
              </div>
            </form>
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
import { BButton, BCard, BCol, BContainer, BRow } from 'bootstrap-vue-next'
import { author, currentYear } from '@/helpers'

import checkmark from '@/assets/images/checkmark.png'
import AuthLogo from '@/components/AuthLogo.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'

usePageMeta('Success Mail')
</script>
