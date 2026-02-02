<template>
  <div class="auth-box overflow-hidden align-items-center d-flex">
    <BContainer>
      <BRow class="justify-content-center">
        <BCol cols="12" sm="8" md="6" xxl="4">
          <div class="auth-brand text-center mb-4">
            <AuthLogo/>
            <h4 class="fw-bold mt-3">Lock Screen! | IN+</h4>
            <p class="text-muted w-lg-75 mx-auto">
              This screen is locked. Enter your password to continue
            </p>
          </div>

          <BCard no-body class="p-4 rounded-4">
            <div class="text-center mb-4">
              <NuxtImg
                  src="/images/users/user-1.jpg"
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
              Not you?
              Return to
              <NuxtLink to="/auth-1/sign-in" class="text-decoration-underline link-offset-3 fw-semibold">
                Sign in
              </NuxtLink>
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
import {BContainer, BRow, BCol, BCard, BButton} from 'bootstrap-vue-next'
import {author, currentYear} from "~/helpers";

definePageMeta({layout: 'base'})
usePageTitle('LockScreen')

</script>

<style lang="scss" scoped>

</style>