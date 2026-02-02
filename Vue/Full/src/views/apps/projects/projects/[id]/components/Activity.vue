<template>
    <div>
        <div v-for="(activity, idx) in activities" :key="idx" class="d-flex gap-1 border-bottom border-dashed"
            :class="idx === 0 ? 'pb-3' : 'py-3'">
            <div class="me-2 flex-shrink-0">
                <img :src="activity.avatar" class="avatar-md rounded-circle" :alt="activity.name" />
            </div>

            <div class="flex-grow-1 text-muted position-relative">
                <span class="fw-medium text-body">{{ activity.name }}</span> {{ activity.action }}
                <p class="fs-xs mb-0 text-body-secondary">{{ activity.datetime }}</p>

                <RouterLink v-if="activity.extra?.type === 'button'" :to="activity.extra.url || '#'"
                    class="btn btn-default border px-1 py-0 mt-2">
                    <Icon icon="tabler:link" class="me-1" />
                    {{ activity.extra.label }}
                </RouterLink>

                <div v-else-if="activity.extra?.type === 'message'" class="py-2 px-3 bg-light bg-opacity-50 mt-2">
                    “{{ activity.extra.message }}”
                </div>
            </div>

            <p class="fs-xs flex-shrink-0 text-body-secondary">{{ activity.timeAgo }}</p>
        </div>

        <div class="d-flex align-items-center justify-content-center gap-2 p-3">
            <strong>Loading...</strong>
            <div class="spinner-border spinner-border-sm text-danger" role="status" aria-hidden="true"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { activities } from './data';


</script>
