<template>
    <BCard no-body>
        <BCardHeader>
            <div class="flex-grow-1">
                <h4 class="card-title">Input Touchspin</h4>
            </div>
            <span class="badge badge-soft-success badge-label py-1 fs-xxs">Exclusive</span>
        </BCardHeader>

        <BCardBody>
            <BRow class="g-3">
                <BCol lg="6">
                    <h5>Default</h5>
                </BCol>
                <BCol lg="6">
                    <TouchSpinInput v-model="value" />
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">Sizes</h5>
                </BCol>
                <BCol lg="6">
                    <TouchSpinInput v-model="value" size="sm" />

                    <TouchSpinInput v-model="value" size="lg" class="mt-2" />
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">Colors</h5>
                </BCol>
                <BCol lg="6">
                    <div v-for="(color, idx) in variants" :key="idx">
                        <TouchSpinInput v-model="value" :variant="color" class="mt-2" />
                    </div>
                    <TouchSpinInput v-model="value" button-class-name="btn-soft-primary" class="mt-2" />
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">Readonly</h5>
                </BCol>
                <BCol lg="6">
                    <TouchSpinInput v-model="value" readonly />
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">Disabled</h5>
                </BCol>
                <BCol lg="6">
                    <TouchSpinInput v-model="value" disabled />
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">Style</h5>
                </BCol>
                <BCol lg="6">
                    <TouchSpinInput v-model="value" variant="primary" button-class-name="rounded-circle" />

                    <TouchSpinInput v-model="value" variant="primary" button-class-name="rounded-circle"
                        class="rounded-pill mt-2" />
                </BCol>
            </BRow>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, type BaseButtonVariant, type BaseColorVariant } from 'bootstrap-vue-next';
import { ref } from 'vue'
import TouchSpinInput from '@/components/TouchSpinInput.vue';

const value = ref(50)

const variants: any[] = [
    'primary', 'secondary', 'info', 'success',
    'warning', 'danger', 'dark', 'purple'
]

</script>

<style scoped></style>