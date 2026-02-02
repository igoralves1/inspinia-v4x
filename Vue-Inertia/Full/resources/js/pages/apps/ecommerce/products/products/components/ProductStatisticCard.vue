<template>
    <BCard no-body class="mb-1">
        <BCardBody>
            <a class="text-muted float-end mt-n1 fs-xl">
                <Icon icon="tabler:external-link" :size="18" />
            </a>

            <h5 :title="stat.title">{{ stat.title }}</h5>

            <div class="d-flex align-items-center gap-2 my-3">
                <div class="avatar-md flex-shrink-0">
                    <span :class="clsx('avatar-title fs-22 rounded-circle', 'text-bg-' + stat.iconBg)">
                        <Icon :icon="stat.icon" :size="22" />
                    </span>
                </div>
                <h3 class="mb-0">{{ stat.value }}</h3>
                <span :class="clsx(`badge-soft-${stat.iconBg}`, 'badge fw-medium ms-2 fs-xs ms-auto')">
                    +{{ stat.newCount }}%
                </span>
            </div>

            <p class="mb-0">
                <span class="d-flex align-items-center justify-content-between gap-1">
                    <div class="d-flex align-items-center gap-1">
                        
                        <span :class="stat.iconColor">
                            <Icon icon="tabler:point-filled" />
                        </span>
                        <span class="text-nowrap text-muted">{{ stat.metric }}</span>
                    </div>
                    <span class="float-end">
                        <b>{{ stat.metricValue }}</b>
                    </span>
                </span>
            </p>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody } from 'bootstrap-vue-next'
import clsx from 'clsx'
import type { StatCard } from './types';
import { Icon } from '@iconify/vue';


defineProps<{
    stat: StatCard
}>()

</script>

<style scoped></style>