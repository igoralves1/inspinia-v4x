<template>
    <BCard no-body>
        <BCardBody>
            <RouterLink to="#" class="text-muted float-end mt-n1 fs-xl">
                <Icon icon="tabler:external-link"/>
            </RouterLink>

            <h5 :title="item.title">{{ item.title }}</h5>

            <div class="d-flex align-items-center gap-2 my-3">
                <div class="avatar-md flex-shrink-0">
                    <span
                        :class="`avatar-title text-bg-${item.variant} rounded-circle fs-22 d-flex align-items-center justify-content-center`">
                        <Icon v-if="item.icon" :icon="item.icon" class="d-flex align-items-center" />
                    </span>
                </div>

                <h3 class="mb-0">
                    
                        <CountUp :end-val="item.count.value"
                            :options="{ prefix: item.count.prefix ?? '', suffix: item.count.suffix ?? '', scrollSpyOnce: true, enableScrollSpy: true, duration: 1 }" />
                    
                </h3>

                <span :class="`badge badge-soft-${item.variant} fw-medium ms-2 fs-xs ms-auto`">
                    {{ item.label }}
                </span>
            </div>

            <p class="d-flex align-items-center gap-1 mb-0">
                <Icon icon="tabler:point-filled" :class="`text-${item.variant}`" />
                <span class="text-nowrap text-muted">{{ item.description }}</span>
                <span class="ms-auto">
                    <b>{{ item.totalCount }}</b>
                </span>
            </p>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody } from 'bootstrap-vue-next'
import type { Widget3Type } from './types';
import CountUp from 'vue-countup-v3'
import { Icon } from '@iconify/vue';

defineProps<{ item: Widget3Type }>()
</script>