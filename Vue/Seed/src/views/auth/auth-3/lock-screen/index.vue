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

      <BCol xl="auto">
        <BCard no-body class="auth-box-form border-0 mb-0">
          <BCardBody class="min-vh-100 d-flex flex-column justify-content-center">
            <div class="auth-brand mb-0 text-center">
              <AuthLogo />
            </div>

            <div class="mt-auto text-center">
              <h4 class="fw-bold">Lock Screen ! | IN+</h4>
              <p class="text-muted mx-auto mb-5">
                Let’s get you signed in. Enter your PIN to continue
              </p>

              <div class="text-center mb-4">
                <img
                  :src="user1"
                  class="rounded-circle img-thumbnail avatar-xxl mb-2"
                  alt="thumbnail"
                />
                <h5 class="fs-md">Damian D.</h5>
              </div>

              <form>
                <div class="mb-3">
                  <div class="input-group">
                    <BFormInput
                      type="password"
                      class="py-2 px-3 bg-light bg-opacity-40 border-light"
                      id="userPassword"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                </div>

                <div class="d-grid">
                  <BButton variant="primary" type="submit" class="fw-semibold py-2">Unlock</BButton>
                </div>
              </form>

              <p class="mt-4 text-muted text-center mb-4">
                Not you? Return to
                <RouterLink
                  to="/auth-3/sign-in"
                  class="text-decoration-underline link-offset-3 fw-semibold"
                >
                  Sign in
                </RouterLink>
              </p>
            </div>

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
import AuthLogo from '@/components/AuthLogo.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'

import user1 from '@/assets/images/users/user-1.jpg'

usePageMeta('LockScreen')
</script>
