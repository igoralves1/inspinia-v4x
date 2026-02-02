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
                    <h4 class="fw-bold mt-4">Welcome to IN+</h4>
                    <p class="text-muted w-lg-75 mx-auto">
                      This screen is locked. Enter your PIN to continue.
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
                    <label class="form-label"
                      >Enter your 6-digit code <span class="text-danger">*</span></label
                    >

                    <div class="mb-3 two-factor">
                      <VOtpInput
                        v-model:value="otp"
                        :num-inputs="6"
                        input-classes="form-control text-center"
                        input-type="tel"
                        :is-input-num="true"
                        :should-auto-focus="true"
                        separator=" "
                      />
                    </div>

                    <div class="d-grid">
                      <BButton type="submit" variant="primary" class="fw-semibold py-2 w-100">
                        Confirm
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
                <div
                  class="h-100 position-relative card-side-img rounded-end-4 rounded-0 overflow-hidden"
                >
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
import { ref } from 'vue'
import VOtpInput from 'vue3-otp-input'
import { BButton, BCard, BCol, BContainer, BRow } from 'bootstrap-vue-next'
import { author, currentYear } from '@/helpers'
import { usePageMeta } from '@/composables/usePageMeta.ts'
import AuthLogo from '@/components/AuthLogo.vue'

import user1 from '@/assets/images/users/user-1.jpg'

const otp = ref('')

usePageMeta('Login With PIN')
</script>
