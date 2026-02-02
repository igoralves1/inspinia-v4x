<template>
    <BCard no-body :class="`border-0 bg-${widget.variant} bg-opacity-10 shadow-none mb-0`">
        <BCardBody>
            <h5 :title="`Number of ${widget.title}`">{{ widget.title }}</h5>

            <div class="d-flex align-items-center gap-2 my-3">
                <div class="avatar-md flex-shrink-0">
                    <span :class="`avatar-title text-bg-${widget.variant} bg-opacity-90 rounded-circle fs-22`">
                        <Icon :icon="widget.icon" />
                    </span>
                </div>

                <h3 class="mb-0">
                    <span v-if="widget.count.prefix">{{ widget.count.prefix }}</span>
                    {{ widget.count.value }}
                    <span v-if="widget.count.suffix">{{ widget.count.suffix }}</span>
                </h3>
            </div>

            <p class="mb-0">
                <span :class="`text-${widget.variant}`">
                    <Icon icon="tabler:point-filled" class="me-1" />
                </span>
                <span class="text-nowrap text-muted">{{ widget.description }}</span>
                <span class="float-end">
                    <b>{{ widget.totalCount }}</b>
                </span>
            </p>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { Widget1Type } from './types';


defineProps<{
    widget: Widget1Type
}>()
</script>