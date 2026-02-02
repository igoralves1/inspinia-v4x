<template>
    <BCard no-body class="card-h-100">
        <BCardHeader>
            <h4 class="card-title">Expanded Activity Stream</h4>
        </BCardHeader>
        <BCardBody>
            <div class="timeline timeline-icon-bordered">
                <div v-for="(event, idx) in expandedActivities" :key="idx"
                    class="timeline-item d-flex align-items-stretch">
                    <div class="timeline-dot">
                        <Icon :name="event.icon" :class="`fs-xl text-${event.variant}`" />
                    </div>

                    <div class="timeline-content ps-3 pb-3">
                        <div class="d-flex justify-content-between">
                            <h5 class="mb-1">
                                {{ event.title }}
                                <span :class="`badge badge-label badge-soft-${event.variant} ms-2`">
                                    {{ event.label }}
                                </span>
                            </h5>
                            <span class="text-muted fs-xs">{{ event.time }}</span>
                        </div>

                        <p class="mb-1 text-muted">{{ event.description }}</p>

                        <div class="d-flex align-items-center gap-2">
                            <NuxtImg :src="event.avatar" :alt="event.name" class="rounded-circle avatar-xxs" />
                            <NuxtLink :to="event.profileUrl" class="fw-semibold link-reset">
                                {{ event.name }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader } from 'bootstrap-vue-next'
import { expandedActivities } from './data';
</script>
