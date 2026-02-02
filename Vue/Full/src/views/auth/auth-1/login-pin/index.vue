<template>
  <div class="auth-box overflow-hidden align-items-center d-flex">
    <BContainer>
      <BRow class="justify-content-center">
        <BCol cols="12" sm="8" md="6" xxl="4">
          <div class="auth-brand text-center mb-4">
            <AuthLogo />
            <h4 class="fw-bold mt-3">Login with PIN! | IN+</h4>
            <p class="text-muted w-lg-75 mx-auto">
              This screen is locked. Enter your PIN to continue.
            </p>
          </div>

          <BCard no-body class="p-4 rounded-4">
            <div class="text-center mb-4">
              <img
                :src="user1"
                class="rounded-circle img-thumbnail avatar-xxl mb-2"
                alt="thumbnail"
              />
              <h5 class="fs-md">Damian D.</h5>
            </div>

            <form>
              <label class="form-label"
                >Enter your 6-digit code <span class="text-danger">*</span></label
              >
              <VOtpInput
                v-model:value="otp"
                :num-inputs="6"
                input-classes="form-control text-center"
                input-type="tel"
                :is-input-num="true"
                :should-auto-focus="true"
                separator=" "
              />

              <div class="d-grid mt-3">
                <BButton type="submit" variant="primary" class="fw-semibold py-2 w-100">
                  Confirm
                </BButton>
              </div>
            </form>

            <p class="text-muted text-center mt-4 mb-0">
              Not you? Return to
              <RouterLink
                to="/auth-1/sign-in"
                class="text-decoration-underline link-offset-3 fw-semibold"
              >
                Sign in
              </RouterLink>
            </p>
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
import { ref } from 'vue'
import VOtpInput from 'vue3-otp-input'
import { BButton, BCard, BCol, BContainer, BRow } from 'bootstrap-vue-next'
import { author, currentYear } from '@/helpers'
import AuthLogo from '@/components/AuthLogo.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'

import user1 from '@/assets/images/users/user-1.jpg'

const otp = ref('')

usePageMeta('Login With PIN')
</script>
