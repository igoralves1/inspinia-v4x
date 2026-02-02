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
                    <h4 class="fw-bold mt-4">Lock Screen ! | IN+</h4>
                    <p class="text-muted w-lg-75 mx-auto">
                      This screen is locked. Enter your password to continue.
                    </p>
                  </div>

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
                      <label for="userPassword" class="form-label">
                        Password <span class="text-danger">*</span>
                      </label>
                      <div class="input-group">
                        <span class="input-group-text bg-light">
                          <Icon icon="tabler:lock-password" class="fs-xl text-muted" />
                        </span>
                        <BFormInput
                          type="password"
                          id="userPassword"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>

                    <div class="d-grid">
                      <BButton type="submit" variant="primary" class="fw-semibold py-2 w-100">
                        Unlock
                      </BButton>
                    </div>
                  </form>

                  <p class="text-muted text-center mt-4 mb-0">
                    Not you? Return to
                    <RouterLink
                      to="/auth-2/sign-in"
                      class="text-decoration-underline link-offset-3 fw-semibold"
                    >
                      Sign in
                    </RouterLink>
                  </p>

                  <p class="text-center text-muted mt-4 mb-0">
                    © 2014 - {{ currentYear }} INSPINIA — by
                    <span class="fw-semibold">{{ author }}</span>
                  </p>
                </div>
              </BCol>

              <BCol lg="6" class="d-none d-lg-block">
                <div class="h-100 position-relative card-side-img rounded-end-4 overflow-hidden">
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
import { Icon } from '@iconify/vue'

import user1 from '@/assets/images/users/user-1.jpg'

usePageMeta('LockScreen')
</script>
