<template>
  <div class="auth-box p-0 w-100">
    <BRow class="w-100 g-0">
      <BCol>
        <div class="h-100 position-relative card-side-img rounded-0 overflow-hidden">
          <div
            class="p-4 card-img-overlay auth-overlay d-flex align-items-end justify-content-center"
          ></div>
        </div>
      </BCol>

      <BCol xl="auto">
        <BCard no-body class="auth-box-form border-0 mb-0">
          <BCardBody class="min-vh-100 d-flex flex-column justify-content-center">
            <div class="auth-brand mb-0 text-center">
              <AuthLogo />
            </div>

            <div class="mt-auto text-center">
              <h4 class="fw-bold">Two-Factor Verification ! | IN+</h4>
              <p class="text-muted mx-auto mb-5">
                Let’s get you signed in. Enter your PIN to continue
              </p>

              <div class="text-center mb-4">
                <h5 class="text-muted fs-base mb-3">
                  We've emailed you a 6-digit verification code we sent to
                </h5>
                <div class="fw-bold fs-3">******6789</div>
              </div>

              <form>
                <label class="form-label d-flex"
                  >Enter your 6-digit code <span class="text-danger">*</span></label
                >
                <div class="mb-3 two-factor">
                  <VOtpInput
                    v-model:value="otp"
                    :num-inputs="6"
                    input-classes="form-control py-2 bg-light bg-opacity-40 border-light text-center"
                    input-type="tel"
                    :is-input-num="true"
                    :should-auto-focus="true"
                    separator=" "
                  />
                </div>

                <div class="d-grid">
                  <BButton variant="primary" type="submit" class="fw-semibold py-2"
                    >Confirm
                  </BButton>
                </div>
              </form>

              <p class="mt-4 text-muted text-center mb-4">
                Don’t have a code?
                <a
                  href="javascript:void(0)"
                  class="text-decoration-underline link-offset-2 fw-semibold"
                  >Resend</a
                >
                or
                <a
                  href="javascript:void(0)"
                  class="text-decoration-underline link-offset-2 fw-semibold"
                  >Call Us</a
                >
              </p>
            </div>

            <p class="text-muted text-center mt-4 mb-0">
              Return to
              <RouterLink
                to="/auth-3/sign-in"
                class="text-decoration-underline link-offset-3 fw-semibold"
                >Sign in
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
import { ref } from 'vue'
import { BButton, BCard, BCardBody, BCol, BRow } from 'bootstrap-vue-next'
import { author, currentYear } from '@/helpers'
import VOtpInput from 'vue3-otp-input'
import AuthLogo from '@/components/AuthLogo.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'

const otp = ref('')

usePageMeta('Two Factor')
</script>
