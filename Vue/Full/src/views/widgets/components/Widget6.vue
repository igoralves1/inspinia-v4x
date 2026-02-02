<template>
    <BCard no-body>
        <BCardBody>
            <div>
                <RouterLink to="" class="link-reset text-uppercase fw-semibold">
                    {{ item.title }}
                </RouterLink>

                <div class="py-2">
                    <span class="fs-xl fw-bold me-2">{{ item.progress }}%</span>
                    <span class="fw-semibold text-muted fs-7">{{ toPascalCase(item.status) }}</span>
                </div>
            </div>

            <BProgress :value="item.progress" bg-variant="success" class="progress-md bg-opacity-25" />

            <div class="mt-2 text-muted">
                {{ item.description }}
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BProgress } from 'bootstrap-vue-next'
import type { Widget6Type } from './types';
import { toPascalCase } from '@/helpers/casing';

defineProps<{ item: Widget6Type }>()
</script>
