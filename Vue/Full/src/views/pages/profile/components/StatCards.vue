<template>
    <BRow class="row-cols-xxl-4 row-cols-md-2 row-cols-1 align-items-center">
        <BCol v-for="card in statCards" :key="card.id" :lg="card.id === 5 ? true : undefined"
            :md="card.id === 5 ? 'auto' : undefined">
            <BCard no-body>
                <BCardBody>
                    <BLink to="" class="text-muted float-end mt-n1 fs-xl">
                        <Icon icon="tabler:external-link" />
                    </BLink>

                    <h5 :title="card.title">{{ card.title }}</h5>

                    <div class="d-flex align-items-center gap-2 my-3">
                        <div class="avatar-md flex-shrink-0">
                            <span :class="`avatar-title text-bg-${card.badgeVariant} rounded-circle fs-22`">
                                <Icon :icon="card.icon" />
                            </span>
                        </div>

                        <h3 class="mb-0">
                            <CountUp :end-val="typeof card.value === 'number' ? card.value : 0"
                                :options="{ prefix: card.prefix || '', suffix: card.suffix || '', enableScrollSpy: true, scrollSpyOnce: true }" />
                        </h3>

                        <BBadge :variant="null" :class="[
                            card.badgeVariant === 'light'
                                ? 'text-bg-light'
                                : `badge-soft-${card.badgeVariant}`,
                            'fw-medium ms-2 fs-xs ms-auto'
                        ]">
                            {{ card.badgeText }}
                        </BBadge>
                    </div>

                <p class="mb-0">
                    <span class="d-inline-flex align-items-center gap-1">
                        <span :class="`text-${card.pointColor}`">
                            <Icon icon="tabler:point-filled" />
                        </span>
                        <span class="text-nowrap text-muted">{{ card.description }}</span>
                    </span>
                    <span class="float-end">
                        <b>{{ card.total }}</b>
                    </span>
                </p>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
</template>

<script setup lang="ts">
import { BRow, BCol, BCard, BCardBody, BLink, BBadge } from 'bootstrap-vue-next'
import { statCards } from './data';
import CountUp from 'vue-countup-v3'
import { Icon } from '@iconify/vue';
</script>