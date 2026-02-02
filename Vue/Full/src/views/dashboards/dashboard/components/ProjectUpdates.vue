<template>
    <BCard no-body>
        <BCardHeader class="d-flex justify-content-between align-items-center">
            <h5 class="card-title mb-0">Latest Project Updates</h5>
            <BBadge variant="warning" class="fs-xxs p-1">
                8 Notifications
            </BBadge>
        </BCardHeader>

        <BCardBody>
            <div class="timeline timeline-icon-bordered">
                <div v-for="event in timelineEvents" :key="event.id" class="timeline-item d-flex align-items-stretch">
                    <div class="timeline-dot">
                        <Icon :icon="event.icon" :class="`text-${event.iconColor} fs-xl` " />
                    </div>
                    <div class="timeline-content ps-3">
                        <div class="d-flex justify-content-between">
                            <h5 class="mb-1 fs-base">
                                {{ event.title }}
                                <span :class="`badge badge-label badge-soft-${event.tagVariant} ms-2`">
                                    {{ event.tag }}
                                </span>
                            </h5>
                            <span class="text-muted fs-xxs">{{ event.time }}</span>
                        </div>
                        <p class="mb-1 text-muted">{{ event.description }}</p>
                        <div class="d-flex align-items-center gap-2">
                            <img :src="event.userImage" :alt="event.userName" class="rounded-circle avatar-xxs" />
                            <RouterLink :to="event.userLink" class="fw-medium link-reset text-muted">
                                {{ event.userName }}
                            </RouterLink>
                        </div>
                        <hr v-if="event.hasDivider" class="border-dashed" />
                    </div>
                </div>
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BBadge, BCard, BCardBody, BCardHeader } from 'bootstrap-vue-next';
import { timelineEvents } from './data';
import { Icon } from '@iconify/vue';


</script>

<style scoped></style>