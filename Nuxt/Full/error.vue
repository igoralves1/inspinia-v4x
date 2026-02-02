<template>
    <div class="auth-box overflow-hidden align-items-center d-flex">
        <BContainer>
            <BRow class="justify-content-center">
                <BCol cols="12" sm="8" md="6" xxl="4">
                    <div class="auth-brand text-center mb-3">
                        <AuthLogo />
                    </div>

                    <div class="p-2 text-center" v-if="error">
                        <NuxtImg :src="`/images/svg/${error.statusCode}.svg`" :alt="error.statusCode" class="img-fluid" />
                        <h3 class="fw-bold text-uppercase">{{error.message}}</h3>
                        <p class="text-muted">The page you’re looking for doesn’t exist or has been moved.</p>

                        <NuxtLink to="/" class="btn btn-primary mt-3 rounded-pill">
                            Go Home
                        </NuxtLink>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                        © 2014 - {{ currentYear }} INSPINIA — by <span class="fw-bold">{{ author }}</span>
                    </p>
                </BCol>
            </BRow>
        </BContainer>
    </div>
</template>

<script setup lang="ts">
import { author, currentYear } from "~/helpers";
import type { NuxtError } from '#app'

definePageMeta({ layout: 'base' })

defineProps({
    error: Object as () => NuxtError
})
</script>

<style scoped></style>