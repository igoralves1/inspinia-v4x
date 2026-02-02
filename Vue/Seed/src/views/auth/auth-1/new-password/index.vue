<template>
  <div class="auth-box overflow-hidden d-flex align-items-center">
    <BContainer>
      <BRow class="justify-content-center">
        <BCol cols="12" sm="8" md="6" xxl="4">
          <div class="auth-brand text-center mb-4">
            <AuthLogo />
            <h4 class="fw-bold mt-3">Setup New Password ! | IN+</h4>
            <p class="text-muted w-lg-75 mx-auto">
              We've emailed you a 6-digit verification code. Please enter it below to confirm your
              email address
            </p>
          </div>

          <BCard no-body class="p-4 rounded-4">
            <form>
              <div class="mb-3">
                <label for="userEmail" class="form-label"
                  >Email address <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <BFormInput type="email" id="userEmail" placeholder="you@example.com" disabled />
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label"
                  >Enter your 6-digit code <span class="text-danger">*</span></label
                >
                <VOtpInput
                  v-model:value="otp"
                  :num-inputs="6"
                  separator=" "
                  input-classes="form-control text-center "
                  :should-auto-focus="true"
                  :is-input-num="true"
                />
              </div>

              <div class="mb-3">
                <label for="userPassword" class="form-label">
                  Password <span class="text-danger">*</span>
                </label>
                <BFormInput
                  id="userPassword"
                  v-model="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
                <PasswordStrengthBar :password="password" />
              </div>

              <div class="mb-3">
                <label for="userNewPassword" class="form-label"
                  >Confirm New Password <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <BFormInput
                    type="password"
                    id="userNewPassword"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div class="mb-3">
                <BFormCheckbox name="agree"> Agree the Terms & Policy</BFormCheckbox>
              </div>

              <BButton type="submit" variant="primary" class="fw-semibold py-2 w-100">
                Update Password
              </BButton>
            </form>

            <p class="mt-4 text-muted text-center mb-4">
              Don’t have a code?
              <a href="#" class="text-decoration-underline link-offset-2 fw-semibold">Resend</a> or
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
            © 2014 - {{ currentYear }} INSPINIA — by
            <span class="fw-semibold">{{ author }}</span>
          </p>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import { author, currentYear } from '@/helpers'
import { ref } from 'vue'
import VOtpInput from 'vue3-otp-input'
import AuthLogo from '@/components/AuthLogo.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'

const password = ref('')

const otp = ref('')

usePageMeta('New Password')
</script>
