<template>

    <Head title="New Password" />
    <div class="auth-box overflow-hidden d-flex align-items-center">
        <BContainer>
            <BRow class="justify-content-center">
                <BCol cols="12" sm="8" md="6" xxl="4">
                    <div class="auth-brand text-center mb-4">
                        <AuthLogo />
                        <h4 class="fw-bold mt-3">Setup New Password ! | IN+</h4>
                        <p class="text-muted w-lg-75 mx-auto">
                            We've emailed you a 6-digit verification code. Please enter it below to confirm your
                            email address
                        </p>
                    </div>

                    <BCard no-body class="p-4 rounded-4">
                        <form @submit.prevent="submit">
                            <div class="mb-3">
                                <label for="userEmail" class="form-label">Email address <span
                                        class="text-danger">*</span></label>
                                <div class="input-group">
                                    <BFormInput v-model="form.email" type="email" id="userEmail"
                                        placeholder="you@example.com" required />
                                </div>
                                    <p v-if="form.errors.email" class="text-danger">
                                        {{ form.errors.email }}
                                    </p>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Enter your 6-digit code <span
                                        class="text-danger">*</span></label>
                                <VOtpInput v-model:value="otp" :num-inputs="6" separator=" "
                                    input-classes="form-control text-center " :should-auto-focus="true"
                                    :is-input-num="true" />
                            </div>

                            <div class="mb-3">
                                <label for="userPassword" class="form-label">
                                    Password <span class="text-danger">*</span>
                                </label>
                                <BFormInput id="userPassword" v-model="form.password" type="password"
                                    placeholder="••••••••" required />
                                <PasswordStrengthBar :password="form.password" />
                                  <p v-if="form.errors.password" class="text-danger mt-1">
                                    {{ form.errors.password }}
                                </p>
                            </div>

                            <div class="mb-3">
                                <label for="userNewPassword" class="form-label">Confirm New Password <span
                                        class="text-danger">*</span></label>
                                <div class="input-group">
                                    <BFormInput type="password" id="userNewPassword"
                                        v-model="form.password_confirmation" placeholder="••••••••" required />
                                </div>
                            </div>


                            <BButton :disabled="form.processing" type="submit" variant="primary" class="fw-semibold py-2 w-100">
                               Create New Password
                            </BButton>
                        </form>


                        <p class="text-muted mt-3 text-center mb-0">
                            Return to
                            <Link :href="route('login')"
                                class="text-decoration-underline link-offset-3 fw-semibold">
                                Sign in
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
import { ref } from 'vue'
import VOtpInput from 'vue3-otp-input'
import AuthLogo from '@/components/AuthLogo.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'


interface Props {
    token: string;
    email: string;
}

const props = defineProps<Props>();

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};

const otp = ref('')

</script>
