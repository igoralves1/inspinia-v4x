<template>
    <MainLayout>
        <div class="container-fluid">
            <PageBreadcrumb title="Password Meter" subTitle="Miscellaneous" />

            <BRow class="justify-content-center">
                <BCol lg="4">
                    <UICard title="with Progress Bar" is-collapsable>
                        <BFormInput id="userPassword" class="mb-2" v-model="password" type="password"
                            placeholder="••••••••" required />
                        <PasswordStrengthBar :password="password" />
                    </UICard>
                </BCol>
                <BCol lg="4">
                    <UICard title="with Password Condition" is-collapsable>
                        <div>
                            <label class="form-label" for="password-input">Magic Password ✨ (Click Here)</label>
                            <input type="password" class="form-control" placeholder="Enter password" id="password-input"
                                v-model="magicPassword" @focus="showRules = true" @blur="onBlur" />

                            <div class="form-text">
                                Use 8 or more characters with a mix of letters, numbers &amp; symbols.
                            </div>

                            <BCollapse :show="showRules"
                                class="password-box bg-light-subtle border border-light mt-2 rounded">
                                <div class="p-3">
                                    <h5 class="fs-sm mb-2">Password Recipe:</h5>

                                    <p :class="{ valid: isLengthValid, invalid: !isLengthValid }" class="fs-xs mb-2">
                                        Minimum <b>8 characters</b>
                                    </p>
                                    <p :class="{ valid: hasLowercase, invalid: !hasLowercase }" class="fs-xs mb-2">
                                        At least <b>lowercase</b> letter (a-z)
                                    </p>
                                    <p :class="{ valid: hasUppercase, invalid: !hasUppercase }" class="fs-xs mb-2">
                                        At least <b>uppercase</b> letter (A-Z)
                                    </p>
                                    <p :class="{ valid: hasNumber, invalid: !hasNumber }" class="fs-xs mb-0">
                                        At least <b>number</b> (0-9)
                                    </p>
                                </div>
                            </BCollapse>
                        </div>
                    </UICard>
                </BCol>

            </BRow>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BCollapse, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
const password = ref('')

import { ref, computed } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

const magicPassword = ref('')
const showRules = ref(false)

// Validators
const isLengthValid = computed(() => magicPassword.value.length >= 8)
const hasLowercase = computed(() => /[a-z]/.test(magicPassword.value))
const hasUppercase = computed(() => /[A-Z]/.test(magicPassword.value))
const hasNumber = computed(() => /[0-9]/.test(magicPassword.value))

// Handlers
const onBlur = () => {
    if (magicPassword.value.length > 0) {
        showRules.value = true
    } else {
        showRules.value = false
    }
}

usePageMeta('Password Meter')
</script>

<style scoped></style>