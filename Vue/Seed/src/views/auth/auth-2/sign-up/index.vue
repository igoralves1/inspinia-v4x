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
                    <h4 class="fw-bold mt-4">Register to IN+</h4>
                    <p class="text-muted w-lg-75 mx-auto">
                      Let’s get you started. Create your account by entering your details below.
                    </p>
                  </div>

                  <form>
                    <div class="mb-3">
                      <label for="userName" class="form-label">
                        Name <span class="text-danger">*</span>
                      </label>
                      <div class="input-group">
                        <span class="input-group-text bg-light">
                          <Icon icon="tabler:user" class="text-muted fs-xl" />
                        </span>
                        <BFormInput type="text" id="userName" placeholder="Damian D." required />
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="userEmail" class="form-label">
                        Email address <span class="text-danger">*</span>
                      </label>
                      <div class="input-group">
                        <span class="input-group-text bg-light">
                          <Icon icon="tabler:mail" class="text-muted fs-xl" />
                        </span>
                        <BFormInput
                          type="email"
                          id="userEmail"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="userPassword" class="form-label">
                        Password <span class="text-danger">*</span>
                      </label>
                      <div class="input-group">
                        <span class="input-group-text bg-light">
                          <Icon icon="tabler:lock-password" class="text-muted fs-xl" />
                        </span>
                        <BFormInput
                          id="userPassword"
                          v-model="password"
                          type="password"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                      <PasswordStrengthBar :password="password" />
                    </div>

                    <div class="mb-3">
                      <BFormCheckbox name="termAndPolicy"> Agree the Terms & Policy</BFormCheckbox>
                    </div>

                    <div class="d-grid">
                      <BButton type="submit" variant="primary" class="fw-semibold py-2">
                        Create Account
                      </BButton>
                    </div>
                  </form>

                  <p class="text-muted text-center mt-4 mb-0">
                    Already have an account?
                    <RouterLink
                      to="/auth-2/sign-in"
                      class="text-decoration-underline link-offset-3 fw-semibold"
                    >
                      Login
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
                  />
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
import { author, currentYear } from '@/helpers'
import { BButton, BCard, BCol, BContainer, BRow } from 'bootstrap-vue-next'
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'
import AuthLogo from '@/components/AuthLogo.vue'
import PasswordStrengthBar from '@/components/PasswordStrengthBar.vue'

const password = ref('')

usePageMeta('Sign Up')
</script>
