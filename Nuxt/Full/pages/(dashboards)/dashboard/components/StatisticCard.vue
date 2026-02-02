<template>
    <BCard no-body>
        <BCardBody>
            <NuxtLink to="#" class="text-muted float-end mt-n1 fs-xl">
                <Icon name="tabler:external-link" />
            </NuxtLink>
            <h5 :title="item.title">{{ item.title }}</h5>
            <div class="d-flex align-items-center gap-2 my-3">
                <div class="avatar-md flex-shrink-0">
                    <span class="avatar-title text-bg-light rounded-circle fs-22">
                        <Icon :name="item.icon" />
                    </span>
                </div>
                <h3 class="mb-0">
                    <ClientOnly>
                        <CountUp :end-val="item.value"
                            :options="{ prefix: item.prefix || '', suffix: item.suffix || '', enableScrollSpy: true, scrollSpyOnce: true }" />
                    </ClientOnly>
                </h3>
                <span class="fw-medium ms-2 fs-xs ms-auto" :class="[
                    item.badgeVariant === 'light'
                        ? 'text-bg-light'
                        : `badge-soft-${item.badgeVariant}`,
                    'badge',
                ]">
                    {{ item.badgeText }}
                </span>
            </div>
            <p class="mb-0">
                <span class="d-inline-flex align-items-center gap-1">
                    <span :class="`text-${item.pointColor}`">
                        <Icon name="tabler:point-filled" />
                    </span>
                    <span class="text-nowrap text-muted">{{ item.description }}</span>
                </span>
                <span class="float-end">
                    <b>{{ item.total }}</b>
                </span>
            </p>
        </BCardBody>
    </Bcard>
</template>

<script setup lang="ts">
import { BCard, BCardBody } from 'bootstrap-vue-next';
import type { StatCard } from './types';
import CountUp from 'vue-countup-v3'

defineProps<{
    item: StatCard
}>()
</script>

<style scoped></style>