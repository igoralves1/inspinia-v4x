<template>

    <Head title="Verify Email" />
    <div class="auth-box overflow-hidden d-flex align-items-center">
        <BContainer>
            <BRow class="justify-content-center">
                <BCol cols="12" sm="8" md="6" xxl="4">
                    <div class="auth-brand text-center mb-4">
                        <AuthLogo />
                        <h4 class="fw-bold mt-3">Verify Email | IN+</h4>
                        <p class="text-muted w-lg-75 mx-auto">
                            Verify your email address
                        </p>
                    </div>

                    <BCard no-body class="p-4 rounded-4">
                        <p v-if="status === 'verification-link-sent'" class="text-success mb-3">
                            A new verification link has been sent to the email address you provided during registration.
                        </p>
                        <form @submit.prevent="submit">

                            <div class="d-grid">
                                <BButton :disabled="form.processing" variant="primary" type="submit"
                                    class="fw-semibold py-2">
                                    Resend verification email
                                </BButton>
                                <Link :href="route('logout')" method="post"  class="fw-semibold py-2 mt-2 btn btn-danger" type="submit"
                                    >
                                  Logout
                                </Link>
                            </div>
                        </form>
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

import AuthLogo from '@/components/AuthLogo.vue';
import { author, currentYear } from '@/helpers';
import { Link, useForm } from '@inertiajs/vue3';


defineProps<{
    status?: string;
}>();

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

</script>
