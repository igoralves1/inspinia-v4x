<template>
    <simplebar class="card w-100 h-100 mb-0 rounded-end-0" data-simplebar>
        <BCardBody class="w-100">
            <RouterLink to="/email-compose" class="btn btn-danger fw-medium w-100">
                Compose
            </RouterLink>

            <div class="list-group list-group-flush list-custom mt-3">
                <RouterLink v-for="({ badge, link, label, icon }, idx) in emailSidebarMenu" :key="idx" :to="link"
                    :class="clsx('list-group-item list-group-item-action', { active: idx === 0 })">
                    <Icon :icon='icon' class="me-2 opacity-75 fs-lg align-middle" />
                    <span class="align-middle">{{ label }}</span>
                    <span v-if="badge"
                        :class="`badge align-middle bg-${badge.variant}-subtle fs-xxs text-${badge.variant} float-end`">
                        {{ badge.text }}
                    </span>
                </RouterLink>

                <div class="list-group-item mt-2">
                    <span class="align-middle">Labels</span>
                </div>

                <RouterLink v-for="({ name, variant }, idx) in labels" :key="idx" to=""
                    class="list-group-item list-group-item-action">
                    <Icon icon="tabler:chart-donut-filled" :class="`me-2 align-middle fs-sm text-${variant}`" />
                    <span class="align-middle">{{ name }}</span>
                </RouterLink>
            </div>
        </BCardBody>

        <div class="position-absolute bottom-0 start-0 w-100 overflow-hidden" style="pointer-events: none;">
            <svg viewBox="0 0 600 560" preserveAspectRatio="xMinYMax meet" width="100%" height="100%" fill="none"
                xmlns="http://www.w3.org/2000/svg" style="opacity: 0.05;">

                <circle cx="50" cy="480" r="40" fill="#FF4C3E" />


                <path d="M140 440 C130 470, 100 470, 90 440 S50 410, 40 440" stroke="#089df1" stroke-width="2"
                    fill="none" />


                <path d="M100 360 L50 410 L0 360 Z" fill="#f9bf59" />


                <ellipse cx="80" cy="280" rx="30" ry="50" fill="#7b70ef" />


                <path d="M140 240 Q130 260 110 250 Q90 240 100 220 Q110 200 130 210 Q150 220 140 240 Z"
                    fill="#089df1" />


                <path d="M130 150 C140 170, 110 180, 90 170 C70 160, 60 140, 80 120 C100 100, 120 110, 130 150 Z"
                    fill="#f7577e" />


                <path d="M220 480 L212 460 H190 L208 445 L200 425 L220 437 L240 425 L232 445 L250 460 H228 Z"
                    fill="#7b70ef" />


                <path d="M310 460 C300 470, 290 450, 300 440 C310 430, 330 430, 340 440 C350 450, 350 470, 340 480"
                    stroke="#089df1" stroke-width="2" fill="none" />


                <path d="M280 360 L270 350 L280 330 L300 330 L310 350 Z" fill="#f7577e" />


                <circle cx="140" cy="310" r="20" stroke="#089df1" stroke-width="3" fill="none" />
            </svg>
        </div>
    </simplebar>
</template>

<script setup lang="ts">
import { BCardBody } from 'bootstrap-vue-next';
import simplebar from 'simplebar-vue';
import { emailSidebarMenu } from './data';
import clsx from 'clsx';
import { Icon } from '@iconify/vue';

const labels: { name: string; variant: string }[] = [
    { name: 'Business', variant: 'primary' },
    { name: 'Personal', variant: 'purple' },
    { name: 'Friends', variant: 'info' },
    { name: 'Family', variant: 'warning' },
]

</script>

<style lang="scss" scoped></style>