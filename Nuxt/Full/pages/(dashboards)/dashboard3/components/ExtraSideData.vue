<template>
    <div class="asidebar-button d-xl-none d-flex">
        <button class="btn btn-danger btn-icon rounded-end-0" @click="click">
            <Icon name="tabler:adjustments-horizontal" class="fs-xl" />
        </button>
    </div>

    <BOffcanvas responsive="lg" body-class="p-0 m-0 h-100" placement="end" v-model="show" no-header
        class="asidebar border-start offcanvas-xl offcanvas-end overflow-hidden" tabindex="-1">
        <simplebar class="p-0 w-100 h-100">
            <div class="d-block">
                <div class="p-3 border-bottom">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <p class="mb-0 fw-semibold fs-sm">Quick Message</p>
                        <p class="fw-semibold text-success mb-0 fs-xs"><Icon name="tabler:circle-filled" /> Online
                        </p>
                    </div>
                    <ChatItem v-for="(item, idx) in chatItems" :key="idx" :item="item" />

                    <div class="text-center mt-2">
                        <NuxtLink to="/chat" class="link-reset text-decoration-underline fw-semibold link-offset-3 d-flex align-items-center justify-content-center gap-1">
                            Go to Chat
                            <Icon name="tabler:message" />
                        </NuxtLink>
                    </div>
                </div>

                <div class="border-bottom">
                    <BTabs content-class="p-3" justified nav-class="nav-bordered nav-bordered-secondary mb-0">
                        <BTab active title-link-class="d-flex align-items-center justify-content-center">
                            <template #title>
                                <Icon name="tabler:cards" class="fs-xl me-md-1" />
                                <span class="d-none d-md-inline-block">Posts</span>
                            </template>
                            <h4 class="mb-2">260<span class="text-muted ms-1 fs-sm">Posts</span></h4>
                            <p class="fs-xs mb-0">
                                You have published 260 posts this month, showing strong content activity across
                                all
                                categories.
                            </p>

                            <div class="card-body">
                                <ClientOnly>
                                    <div style="max-width: 209px">
                                        <CustomApexChart :getOptions="getPostsChartOptions"
                                            :series="getPostsChartOptions().series" />
                                    </div>
                                </ClientOnly>
                            </div>
                        </BTab>

                        <BTab title-link-class="d-flex align-items-center justify-content-center">
                            <template #title>
                                <Icon name="tabler:truck-delivery" class="fs-xl me-md-1" />
                                <span class="d-none d-md-inline-block">Orders</span>
                            </template>
                            <h4 class="mb-2">421<span class="text-muted ms-1 fs-sm">Orders</span></h4>
                            <p class="fs-xs mb-0">
                                A total of 421 orders have been placed, reflecting consistent demand for your
                                products.
                            </p>
                            <div class="card-body">
                                <ClientOnly>
                                    <div style="max-width: 205px">
                                        <CustomApexChart :getOptions="getOrdersChartOptions"
                                            :series="getOrdersChartOptions().series" />
                                    </div>
                                </ClientOnly>
                            </div>
                        </BTab>
                    </BTabs>
                </div>

                <div class="p-3">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <p class="mb-0 fw-semibold fs-sm">Today's Schedule </p>
                        <NuxtLink to="#" class="text-muted d-flex align-items-center fs-xs fw-semibold">
                            <Icon name="tabler:calendar" class="me-1" /><span>Invite</span>
                        </NuxtLink>
                    </div>
                    <div class="pb-2 border-bottom border-light border-dashed">
                        <div class="mb-2">
                            <p class="mb-0 text-truncate fs-base fw-medium">Design Review Meeting</p>
                            <span class="text-warning fs-xs">30 minute session with UI/UX team</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="avatar-group avatar-group-xs">
                                <div class="avatar">
                                    <NuxtImg src="/images/users/user-5.jpg" alt="Liam Carter"
                                        class="avatar-xs rounded-circle" />
                                </div>
                                <div class="avatar">
                                    <NuxtImg src="/images/users/user-6.jpg" alt="Zoe Miles"
                                        class="avatar-xs rounded-circle" />
                                </div>
                                <div class="avatar avatar-xs">
                                    <span class="avatar-title bg-primary-subtle text-primary rounded-circle fw-bold">
                                        D
                                    </span>
                                </div>
                            </div>
                            <button type="button" class="btn btn-sm btn-soft-secondary rounded-circle btn-icon">
                                <Icon name="tabler:brand-figma" class="fs-lg" />
                            </button>
                        </div>
                    </div>

                    <div class="py-2 border-bottom border-light border-dashed">
                        <div class="mb-2">
                            <p class="mb-0 text-truncate fs-base fw-medium">Sprint Planning Session</p>
                            <span class="text-success fs-xs">1 hour agile team meeting</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="avatar-group avatar-group-xs">
                                <div class="avatar">
                                    <NuxtImg src="/images/users/user-7.jpg" alt="Ava Lee"
                                        class="avatar-xs rounded-circle" />
                                </div>
                                <div class="avatar">
                                    <NuxtImg src="/images/users/user-8.jpg" alt="Ethan King"
                                        class="avatar-xs rounded-circle" />
                                </div>
                                <div class="avatar">
                                    <NuxtImg src="/images/users/user-9.jpg" alt="Lucas White"
                                        class="avatar-xs rounded-circle" />
                                </div>
                            </div>
                            <button type="button" class="btn btn-sm btn-soft-secondary rounded-circle btn-icon">
                                <Icon name="tabler:calendar-event" class="fs-lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </simplebar>
    </BOffcanvas>
</template>

<script setup lang="ts">
import { BOffcanvas } from 'bootstrap-vue-next'
import simplebar from 'simplebar-vue'
import { ref } from 'vue'
import { chatItems, getOrdersChartOptions, getPostsChartOptions } from './data'
import ChatItem from './ChatItem.vue'

const show = ref(false)

const click = () => { show.value = !show.value }
</script>

<style scoped></style>