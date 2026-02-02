<template>
  <div class="auth-box overflow-hidden d-flex align-items-center">
    <BContainer>
      <BRow class="justify-content-center">
        <BCol cols="12" sm="8" md="6" xxl="4">
          <div class="auth-brand text-center mb-4">
            <AuthLogo />
            <h4 class="fw-bold mt-3">Register to IN+</h4>
            <p class="text-muted w-lg-75 mx-auto">
              Let’s get you started. Create your account by entering your details below.
            </p>
          </div>

          <BCard no-body class="p-4 rounded-4">
            <form>
              <div class="mb-3">
                <label for="userName" class="form-label">
                  Name <span class="text-danger">*</span>
                </label>
                <div class="input-group">
                  <BFormInput type="text" id="userName" placeholder="Damian D." required />
                </div>
              </div>

              <div class="mb-3">
                <label for="userEmail" class="form-label">
                  Email address <span class="text-danger">*</span>
                </label>
                <div class="input-group">
                  <BFormInput type="email" id="userEmail" placeholder="you@example.com" required />
                </div>
              </div>

              <div class="mb-3">
                <label for="userPassword" class="form-label">
                  Password <span class="text-danger">*</span>
                </label>
                <div class="input-group">
                  <BFormInput
                    type="password"
                    v-model="password"
                    id="userPassword"
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
                <BButton variant="primary" type="submit" class="fw-semibold py-2"
                  >Create Account
                </BButton>
              </div>
            </form>

            <p class="text-muted text-center mt-4 mb-0">
              Already have an account?
              <RouterLink
                to="/auth-1/sign-in"
                class="text-decoration-underline link-offset-3 fw-semibold"
              >
                Login
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
import { author, currentYear } from '@/helpers'
import { ref } from 'vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'
import AuthLogo from '@/components/AuthLogo.vue'

const password = ref('')

usePageMeta('Sign Up')
</script>
