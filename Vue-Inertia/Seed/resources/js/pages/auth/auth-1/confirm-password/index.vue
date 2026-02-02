<template>

    <Head title="Confirm Password" />
    <div class="auth-box overflow-hidden d-flex align-items-center">
        <BContainer>
            <BRow class="justify-content-center">
                <BCol cols="12" sm="8" md="6" xxl="4">
                    <div class="auth-brand text-center mb-4">
                        <AuthLogo />
                        <h4 class="fw-bold mt-3">Confirm Password | IN+</h4>
                    </div>

                    <BCard no-body class="p-4 rounded-4">
                      
                        <form @submit.prevent="submit">
                            <div class="mb-3">
                                <label for="userEmail" class="form-label">
                                    Confirm password <span class="text-danger">*</span>
                                </label>
                                <div class="input-group">
                                    <BFormInput v-model="form.password" type="password" id="userPassword"
                                        placeholder="Enter your password" required />
                                </div>
                                    <p v-if="form.errors.password" class="text-danger">
                                        {{ form.errors.password }}
                                    </p>
                            </div>

                            <div class="d-grid">
                                <BButton :disabled="form.processing" variant="primary" type="submit"
                                    class="fw-semibold py-2">
                                    Confirm Password
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
    password: '',
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => {
            form.reset();
        },
    });
};

</script>
