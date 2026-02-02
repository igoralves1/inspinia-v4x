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
              <h4 class="fw-bold">Setup New Password ! | IN++</h4>
              <p class="text-muted auth-sub-text mx-auto mb-4">
                We've emailed you a 6-digit verification code. Please enter it below to confirm your
                Email Address.
              </p>

              <form>
                <div class="mb-3">
                  <div class="input-group">
                    <BFormInput
                      type="email"
                      class="py-2 px-3 bg-light bg-opacity-40 border-light"
                      placeholder="you@example.com"
                      disabled
                    />
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label d-flex">
                    Enter your 6-digit code <span class="text-danger ms-1">*</span>
                  </label>
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

                <div class="mb-3">
                  <div class="input-group">
                    <BFormInput
                      type="password"
                      v-model="password"
                      class="py-2 px-3 bg-light bg-opacity-40 border-light"
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                  <PasswordStrengthBar :password="password" />
                </div>

                <div class="mb-3">
                  <div class="input-group">
                    <BFormInput
                      type="password"
                      class="py-2 px-3 bg-light bg-opacity-40 border-light"
                      placeholder="Confirm New password"
                      required
                    />
                  </div>
                </div>

                <div class="mb-3 d-flex">
                  <BFormCheckbox name="termAndPolicy"> Agree the Terms & Policy</BFormCheckbox>
                </div>

                <div class="d-grid">
                  <BButton variant="primary" type="submit" class="fw-semibold py-2"
                    >Update Password
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
import { BCard, BCol, BRow } from 'bootstrap-vue-next'
import { author, currentYear } from '@/helpers'
import { ref } from 'vue'
import VOtpInput from 'vue3-otp-input'
import AuthLogo from '@/components/AuthLogo.vue'
import PasswordStrengthBar from '@/components/PasswordStrengthBar.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'

const password = ref('')

const otp = ref('')

usePageMeta('New Password')
</script>
