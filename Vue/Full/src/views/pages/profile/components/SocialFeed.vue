<template>
    <UICard title="My Social Feed">
        <div v-for="(item, idx) in socialFeed" :key="idx" class="d-flex justify-content-between align-items-center"
            :class="[
                idx !== socialFeed.length - 1 ? 'border-bottom py-2' : 'pt-2',
                idx === 0 ? 'pt-0' : ''
            ]">
            <div class="d-flex align-items-center gap-2">
                <div class="avatar avatar-sm">
                    <img :src="item.image" alt="user" height="32" width="32" class="img-fluid rounded" />
                </div>
                <div>
                    <h5 class="text-nowrap fs-sm mb-0 lh-base">{{ item.name }}</h5>
                    <p class="text-muted fs-xs mb-0">
                        {{ item.email ? item.email : item.action }}
                    </p>
                </div>
                <div v-if="item.badge">
                    <span class="badge badge-soft-success">{{ item.badge }}</span>
                </div>
            </div>

            <div>
                <template v-if="item.isRequest">
                    <button class="btn btn-sm btn-icon btn-outline-primary me-1">
                        <Icon :icon="icons.check" />
                    </button>
                    <button class="btn btn-sm btn-icon btn-danger">
                        <Icon :icon="icons.x" />
                    </button>
                </template>

                <template v-else>
                    <small v-if="item.time" class="text-muted fs-xxs">
                        {{ item.time }}
                    </small>
                    <button v-else class="btn btn-sm btn-icon" :class="`btn-outline-${item.variant ?? 'primary'}`">
                        <Icon :icon="item.icon ? item.icon : icons.message" />
                    </button>
                </template>
            </div>
        </div>
    </UICard>
</template>

<script setup lang="ts">
import UICard from '@/components/UICard.vue';
import { socialFeed } from './data';
import { Icon } from '@iconify/vue';

// Icon mapping (React icons → Iconify)
const icons: Record<string, string> = {
    check: 'tabler:check',
    x: 'tabler:x',
    message: 'tabler:message',
}
</script>
