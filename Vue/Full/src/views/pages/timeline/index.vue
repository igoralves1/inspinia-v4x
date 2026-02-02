<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Timeline" subtitle="Pages" />

            <BRow>
                <BCol xxl="6">
                    <UICard title="Basic Timeline">
                        <div class="timeline">
                            <div v-for="(item, idx) in timelineItems1" :key="idx"
                                class="timeline-item d-flex align-items-stretch">
                                <div v-if="item.time" class="timeline-time pe-3 text-muted">
                                    {{ item.time }}
                                </div>
                                <div v-if="item.variant" :class="`timeline-dot bg-${item.variant}`"></div>

                                <div :class="[
                                    'timeline-content ps-3',
                                    idx !== timelineItems1.length - 1 ? 'pb-4' : ''
                                ]">
                                    <h5 class="mb-1">{{ item.title }}</h5>
                                    <p class="mb-1 text-muted">{{ item.description }}</p>
                                    <span class="text-primary fw-semibold">By {{ item.author }}</span>
                                </div>
                            </div>
                        </div>
                    </UICard>
                </BCol>

                <BCol xxl="6">
                    <UICard title="Timeline with Icons">
                        <div class="timeline timeline-icon-based">
                            <div v-for="(item, idx) in timelineItems2" :key="idx"
                                class="timeline-item d-flex align-items-stretch">
                                <div v-if="item.time" class="timeline-time pe-3 text-muted">
                                    {{ item.time }}
                                </div>

                                <div v-if="item.variant && item.icon" :class="`timeline-dot text-bg-${item.variant}`">
                                    <Icon :icon="item.icon" class="fs-xl" />
                                </div>

                                <div :class="[
                                    'timeline-content ps-3',
                                    idx !== timelineItems2.length - 1 ? 'pb-4' : ''
                                ]">
                                    <h5 class="mb-1">{{ item.title }}</h5>
                                    <p class="mb-1 text-muted">{{ item.description }}</p>
                                    <span class="text-primary fw-semibold">By {{ item.author }}</span>
                                </div>
                            </div>
                        </div>
                    </UICard>
                </BCol>
            </BRow>

            <BRow>
                <BCol xxl="6">
                    <UICard title="Timeline with Border">
                        <div class="timeline timeline-icon-bordered">
                            <div v-for="(item, idx) in timelineItems3" :key="idx"
                                class="timeline-item d-flex align-items-stretch">
                                <div v-if="item.time" class="timeline-time pe-3 text-muted">
                                    {{ item.time }}
                                </div>

                                <div v-if="item.icon" class="timeline-dot">
                                    <Icon :icon="item.icon" class="fs-xl text-muted" />
                                </div>

                                <div :class="[
                                    'timeline-content ps-3',
                                    idx !== timelineItems3.length - 1 ? 'pb-4' : ''
                                ]">
                                    <h5 class="mb-1">{{ item.title }}</h5>
                                    <p class="mb-1 text-muted">{{ item.description }}</p>
                                    <span class="text-primary fw-semibold">By {{ item.author }}</span>
                                </div>
                            </div>
                        </div>
                    </UICard>
                </BCol>

                <BCol xxl="6">
                    <UICard title="Timeline with Users">
                        <div class="timeline timeline-users">
                            <div v-for="(item, idx) in timelineItems4" :key="idx"
                                class="timeline-item d-flex align-items-stretch">
                                <div v-if="item.image" class="timeline-dot">
                                    <img :src="item.image" width="30" height="30" alt="avatar"
                                        class="img-fluid rounded-circle" />
                                </div>

                                <div :class="[
                                    'timeline-content ps-3',
                                    idx !== timelineItems4.length - 1 ? 'pb-4' : ''
                                ]">
                                    <h5 class="mb-1">{{ item.title }}</h5>
                                    <p class="mb-1 text-muted">{{ item.description }}</p>
                                    <span class="text-primary fw-semibold">By {{ item.author }}</span>
                                </div>
                            </div>
                        </div>
                    </UICard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import UICard from '@/components/UICard.vue';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';

import { timelineItems1, timelineItems2, timelineItems3, timelineItems4 } from './data'
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { Icon } from '@iconify/vue';

usePageMeta('Timeline')
</script>