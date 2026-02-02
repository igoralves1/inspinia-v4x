<template>
  <div class="auth-box overflow-hidden align-items-center d-flex">
    <BContainer>
      <BRow class="justify-content-center">
        <BCol cols="12" sm="8" md="6" xxl="4">
          <div class="auth-brand text-center mb-4">
            <AuthLogo />
            <h4 class="fw-bold mt-3">Two-Factor Verification ! | IN+</h4>
            <p class="text-muted w-lg-75 mx-auto">
              Let’s get you signed in. Enter your PIN to continue
            </p>
          </div>

          <BCard no-body class="p-4 rounded-4">
            <div class="text-center mb-4">
              <h5 class="text-muted fs-base mb-3">
                We've emailed you a 6-digit verification code we sent to
              </h5>
              <div class="fw-bold fs-3">******6789</div>
            </div>

            <form>
              <label class="form-label"
                >Enter your 6-digit code <span class="text-danger">*</span></label
              >

              <VOtpInput
                v-model:value="otp"
                :num-inputs="6"
                separator=" "
                input-type="tel"
                :is-input-num="true"
                :should-auto-focus="true"
                input-classes="form-control text-center"
              />

              <div class="d-grid mt-3">
                <BButton type="submit" variant="primary" class="fw-semibold py-2 w-100">
                  Confirm
                </BButton>
              </div>
            </form>

            <p class="mt-4 text-muted text-center mb-4">
              Don’t have a code?
              <a href="#" class="text-decoration-underline link-offset-2 fw-semibold">Resend</a>
              or
              <a href="#" class="text-decoration-underline link-offset-2 fw-semibold">Call Us</a>
            </p>
            <p class="text-muted text-center mb-0">
              Return to
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
import { author, currentYear } from '@/helpers'
import VOtpInput from 'vue3-otp-input'
import AuthLogo from '@/components/AuthLogo.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'

const otp = ref('')

usePageMeta('Two Factor')
</script>
