<template>
    <BCard no-body class="rounded-0 border shadow-none border-dashed mb-0"
        :class="item.variant ? `bg-opacity-10 bg-${item.variant} border-${item.variant}` : ''">
        <BCardBody>
            <div class="mb-3 d-flex justify-content-between align-items-center">
                <h5 class="fs-xl mb-0">
                    <span v-if="item.count.prefix">{{ item.count.prefix }}</span>
                    {{ item.count.value }}
                    <small v-if="item.count.suffix" class="fs-6">{{ item.count.suffix }}</small>
                </h5>

                <span>
                    {{ item.percentage }}%
                    <Icon v-if="item.percentageIcon" :icon="item.percentageIcon"
                        :class="item.isPositive ? 'text-success' : 'text-danger'" />
                </span>
            </div>

            <p class="text-muted mb-2">
                <span>{{ item.title }}</span>
            </p>

            <BProgress :value="item.percentage" class="progress-sm mb-0" :bg-variant="item.variant || 'primary'" />
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard } from 'bootstrap-vue-next';
import type { Widget2Type } from './types';
import { Icon } from '@iconify/vue';


defineProps<{
    item: Widget2Type
}>()
</script>
