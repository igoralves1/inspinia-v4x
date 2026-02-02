<template>
    <BCard no-body>
        <BCardHeader class="d-flex border-dashed justify-content-between align-items-center">
            <BCardTitle tag="h5" >{{ item.title }}</BCardTitle>
            <span :class="`badge badge-soft-${item.variant}`">{{ item.label }}</span>
        </BCardHeader>

        <BCardBody>
            <div class="d-flex justify-content-between align-items-center">
                <div class="avatar fs-60 avatar-img-size flex-shrink-0">
                    <span class="avatar-title text-bg-dark rounded-circle fs-32 d-flex">
                        <Icon  v-if="item.icon" :icon="item.icon" class="d-flex" />
                    </span>
                </div>

                <div class="text-end">
                    <h3 class="mb-2 fw-normal">
                        <CountUp :end-val="item.count.value"
                            :options="{ prefix: item.count.prefix ?? '', suffix: item.count.suffix ?? '', scrollSpyOnce: true, enableScrollSpy: true, duration: 1 }" />
                    </h3>
                    <p class="mb-0 text-muted">{{ item.description }}</p>
                </div>
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import CountUp from 'vue-countup-v3'
import type { Widget4Type } from './types';
import { BCard, BCardBody, BCardHeader } from 'bootstrap-vue-next';
import { Icon } from '@iconify/vue';


defineProps<{ item: Widget4Type }>()
</script>