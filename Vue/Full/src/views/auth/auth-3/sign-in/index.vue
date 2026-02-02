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
              <h4 class="fw-bold">Welcome to IN+</h4>
              <p class="text-muted auth-sub-text mx-auto">
                Let’s get you signed in. Enter your email and password to continue.
              </p>

              <form class="mt-4">
                <div class="mb-3">
                  <div class="input-group">
                    <BFormInput
                      type="email"
                      class="py-2 px-3 bg-light bg-opacity-40 border-light"
                      placeholder="Enter username or email"
                      required
                    />
                  </div>
                </div>

                <div class="mb-3">
                  <div class="input-group">
                    <BFormInput
                      type="password"
                      class="py-2 px-3 bg-light bg-opacity-40 border-light"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                </div>

                <div class="d-flex justify-content-between align-items-center mb-3">
                  <BFormCheckbox name="keep"> Keep me signed in</BFormCheckbox>

                  <RouterLink
                    to="/auth-3/reset-password"
                    class="text-decoration-underline link-offset-3 text-muted"
                  >
                    Forgot Password?
                  </RouterLink>
                </div>

                <div class="d-grid">
                  <BButton type="submit" class="fw-bold py-2">Sign In</BButton>
                </div>
              </form>
            </div>

            <p class="text-muted text-center mt-4 mb-0">
              New here?
              <RouterLink
                to="/auth-3/sign-up"
                class="text-decoration-underline link-offset-3 fw-semibold"
              >
                Create an account
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
import { BCard, BCol, BRow } from 'bootstrap-vue-next'
import AuthLogo from '@/components/AuthLogo.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'

usePageMeta('Sign In')
</script>
