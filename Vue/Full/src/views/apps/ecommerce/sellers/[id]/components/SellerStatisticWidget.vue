<template>
    <BCard no-body :class="`border-0 bg-${item.variant} bg-opacity-10`">
        <BCardBody>
            <h5 :title="`Number of Orders`">{{ item.title }}</h5>

            <div class="d-flex align-items-center gap-2 my-3">
                <div class="avatar-md flex-shrink-0">
                    <span :class="`avatar-title text-bg-${item.variant} bg-opacity-90 rounded-circle fs-22`">
                        <Icon :icon="item.icon" />
                    </span>
                </div>
                <h3 class="mb-0">
                    {{ item.count.prefix || '' }}{{ item.count.value }}{{ item.count.suffix || '' }}
                </h3>
            </div>

            <p class="mb-0">
                <span :class="`text-${item.variant}`">
                    <Icon icon="tabler:point-filled" class="me-1" />
                </span>
                <span class="text-nowrap text-muted">{{ item.description }}</span>
                <span class="float-end">
                    <b>{{ item.totalCount }}</b>
                </span>
            </p>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody } from 'bootstrap-vue-next'
import type { Widget1Type } from './types';
import { Icon } from '@iconify/vue';

defineProps<{ item: Widget1Type }>()
</script>
