<template>
    <RouterLink :to="''" class="d-block py-2">
        <BBadge v-if="item.badge" variant="danger" pill class="float-end">{{ item.badge }}</BBadge>
        <span v-else-if="item.time" class="text-muted float-end fs-10">{{ item.time }}</span>

        <span class="d-flex align-items-center">
            <span class="flex-shrink-0">
                <img v-if="item.avatar" :src="item.avatar" :alt="item.name" class="avatar-sm rounded-circle" />
                <span v-else class="avatar avatar-sm d-block">
                    <span class="avatar-title rounded-circle fw-bold"
                        :class="[`bg-${item.avatarColor}-subtle`, `text-${item.avatarColor}`]">
                        {{ item.avatarText }}
                    </span>
                </span>
            </span>

            <span class="flex-grow-1 ms-2 text-truncate">
                <span class="mb-0 lh-base d-block fw-medium text-body fs-base">
                    {{ item.name }}
                </span>
                <span class="fs-xxs mb-0" :class="item.status === 'active' ? 'text-success' : 'text-muted'">
                    {{ item.message }}
                </span>
            </span>
        </span>
    </RouterLink>
</template>

<script setup lang="ts">
import { BBadge } from 'bootstrap-vue-next'
import type { ChatItemType } from './types';


defineProps<{
    item: ChatItemType
}>()

</script>