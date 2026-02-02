<template>

    <Head title="Reset Password" />
    <div class="auth-box overflow-hidden d-flex align-items-center">
        <BContainer>
            <BRow class="justify-content-center">
                <BCol cols="12" sm="8" md="6" xxl="4">
                    <div class="auth-brand text-center mb-4">
                        <AuthLogo />
                        <h4 class="fw-bold mt-3">Forgot Password ? | IN+</h4>
                        <p class="text-muted w-lg-75 mx-auto">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
                    </div>

                    <BCard no-body class="p-4 rounded-4">
                        <p v-if="status" class="text-success mb-3">
                            {{ status }}
                        </p>
                        <form @submit.prevent="submit">
                            <div class="mb-3">
                                <label for="userEmail" class="form-label">
                                    Email address <span class="text-danger">*</span>
                                </label>
                                <div class="input-group">
                                    <BFormInput v-model="form.email" type="email" id="userEmail"
                                        placeholder="you@example.com" required />
                                    <p v-if="form.errors.email" class="text-danger">
                                        {{ form.errors.email }}
                                    </p>
                                </div>
                            </div>

                            <div class="d-grid">
                                <BButton :disabled="form.processing" variant="primary" type="submit"
                                    class="fw-semibold py-2">
                                    Reset Password
                                </BButton>
                            </div>
                        </form>

                        <p class="text-muted text-center mt-4 mb-0">
                            Return to
                            <Link :href="route('login')" class="text-decoration-underline link-offset-3 fw-semibold">
                            Sign in
                            </Link>
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
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'
import { author, currentYear } from '@/helpers'

import AuthLogo from '@/components/AuthLogo.vue'
import { Head, Link, useForm } from '@inertiajs/vue3';


defineProps<{
    status?: string;
}>();

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};

</script>
