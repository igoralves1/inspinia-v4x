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

      <BCol md="auto">
        <BCard no-body class="auth-box-form border-0 mb-0">
          <BCardBody class="min-vh-100 d-flex flex-column justify-content-center">
            <div class="auth-brand mb-0 text-center">
              <AuthLogo />
            </div>

            <div class="mt-auto text-center">
              <h4 class="fw-bold">Register to IN+</h4>
              <p class="text-muted auth-sub-text mx-auto">
                Let’s get you Sign Up. Enter your email and password to continue.
              </p>

              <form class="mt-4">
                <div class="mb-3">
                  <div class="input-group">
                    <BFormInput
                      type="text"
                      class="py-2 px-3 bg-light bg-opacity-40 border-light"
                      placeholder="Enter name"
                      required
                    />
                  </div>
                </div>

                <div class="mb-3">
                  <div class="input-group">
                    <BFormInput
                      type="email"
                      class="py-2 px-3 bg-light bg-opacity-40 border-light"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                </div>

                <div class="mb-3">
                  <div class="input-group">
                    <BFormInput
                      v-model="password"
                      type="password"
                      class="py-2 px-3 bg-light bg-opacity-40 border-light"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <PasswordStrengthBar :password="password" />
                </div>

                <div class="d-flex justify-content-between align-items-center mb-3">
                  <BFormCheckbox name="termAndPolicy"> Agree the Terms & Policy</BFormCheckbox>
                </div>

                <div class="d-grid">
                  <BButton variant="primary" type="submit" class="fw-semibold py-2">
                    Create Account
                  </BButton>
                </div>
              </form>
            </div>

            <p class="text-muted text-center mt-4 mb-0">
              Already have an account?
              <RouterLink
                to="/auth-3/sign-in"
                class="text-decoration-underline link-offset-3 fw-semibold"
              >
                Login
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
import { author, currentYear } from '@/helpers'
import { BButton, BCard, BCol, BRow } from 'bootstrap-vue-next'
import { ref } from 'vue'
import AuthLogo from '@/components/AuthLogo.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'
import PasswordStrengthBar from '@/components/PasswordStrengthBar.vue'

const password = ref('')

usePageMeta('Sign Up')
</script>
