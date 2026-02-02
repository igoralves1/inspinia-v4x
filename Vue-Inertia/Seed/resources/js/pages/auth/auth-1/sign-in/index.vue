<template>

    <Head title="Sign In" />
    <div class="auth-box overflow-hidden d-flex align-items-center">
        <BContainer>
            <BRow class="justify-content-center">
                <BCol cols="12" sm="8" md="6" xxl="4">
                    <div class="auth-brand text-center mb-4">
                        <AuthLogo />
                        <h4 class="fw-bold mt-3">Welcome to IN+</h4>
                        <p class="text-muted w-lg-75 mx-auto">
                            Let’s get you signed in. Enter your email and password to continue.
                        </p>
                    </div>

                    <BCard no-body class="rounded-4 p-4">

                        <p v-if="status" class="text-success mb-3">
                            {{ status }}
                        </p>
                        <BForm @submit.prevent="submit">
                            <div v-if="error.length > 0" class="text-danger mb-2">{{ error }}</div>
                            <div class="mb-3">
                                <label for="userEmail" class="form-label">
                                    Email address <span class="text-danger">*</span>
                                </label>
                                <BFormInput id="userEmail" type="email" placeholder="you@example.com"
                                    v-model="form.email" required />
                                <p v-if="form.errors.email" class="text-danger">
                                    {{ form.errors.email }}
                                </p>
                            </div>

                            <div class="mb-3">
                                <label for="userPassword" class="form-label">
                                    Password <span class="text-danger">*</span>
                                </label>
                                <BFormInput id="userPassword" v-model="form.password" type="password"
                                    placeholder="••••••••" required />
                                <p v-if="form.errors.password" class="text-danger">
                                    {{ form.errors.password }}
                                </p>
                            </div>

                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <BFormCheckbox v-model="form.remember" name="keepSignedIn"> Keep me signed in</BFormCheckbox>

                                <Link v-if="canResetPassword" :href="route('password.request')"
                                    class="text-decoration-underline link-offset-3 text-muted">
                                    Forgot Password?
                                </Link>
                            </div>

                            <div class="d-grid">
                                <BButton type="submit" variant="primary" :disabled="form.processing" class="fw-semibold py-2">
                                    Sign In
                                </BButton>
                            </div>
                        </BForm>

                        <p class="text-muted text-center mt-4 mb-0">
                            New here?
                            <Link :href="route('register')"
                                class="text-decoration-underline link-offset-3 fw-semibold">
                                Create an account
                            </Link>
                        </p>
                    </BCard>

                    <p class="text-center text-muted mt-4 mb-0">
                        © 2014 - {{ currentYear }} INSPINIA — by
                        <span class="fw-semibold">{{ author }}</span>
                    </p>
                </BCol>
            </BRow>
        </BContainer>
    </div>
</template>

<script setup lang="ts">
import { author, currentYear } from '@/helpers'
import AuthLogo from '@/components/AuthLogo.vue'
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

defineProps<{
    status?: string;
    canResetPassword: boolean;
}>();

const error = ref('');

const form = useForm({
    email: 'demo@user.com',
    password: 'password',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
}

</script>
