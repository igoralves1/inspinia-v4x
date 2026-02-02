<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Search Results" subtitle="Pages" />

            <BRow>
                <BCol cols="12">
                    <BCard no-body>
                        <BCardHeader class="d-block">
                            <div class="text-center w-md-75 w-xl-50 mx-auto py-3">
                                <div class="app-search app-search-pill input-group mb-3 rounded-pill">
                                    <input type="text"
                                        class="form-control bg-light-subtle border-light py-2 fw-semibold"
                                        value="React Dashboard" placeholder="Search templates..." />
                                    <Icon icon="lucide:search"  class="app-search-icon text-muted" />
                                    <BButton variant="secondary" type="button">Explore</BButton>
                                </div>

                                <div class="d-flex justify-content-center align-items-center gap-1">
                                    <h5 class="text-muted mb-0">Popular Searches :</h5>
                                    <RouterLink v-for="(item, idx) in ['Analytics', 'SaaS', 'Ecommerce', 'CRM']" :key="idx"
                                        to="#" class="badge bg-primary-subtle text-primary rounded-pill px-2 py-1 fs-6">
                                        {{ item }}
                                    </RouterLink>
                                </div>
                            </div>
                        </BCardHeader>

                        <BCardHeader class="border-light justify-content-between d-flex">
                            <h4 class="fst-italic text-muted mb-0">
                                Found <span class="fw-bold badge badge-soft-danger">89</span> results for
                                <span class="text-dark">"React Dashboard"</span>
                            </h4>

                            <div class="d-flex flex-wrap align-items-center gap-3">
                                <span class="fw-semibold">Filter By:</span>

                                <div class="app-search">
                                    <select class="form-select form-control my-1 my-md-0">
                                        <option>Template Type</option>
                                        <option value="admin">Admin</option>
                                        <option value="landing">Landing Page</option>
                                        <option value="dashboard">Dashboard</option>
                                        <option value="ecommerce">eCommerce</option>
                                        <option value="email">Email Template</option>
                                    </select>
                                    <Icon icon="lucide:layers"  class="app-search-icon text-muted" />
                                </div>

                                <div class="app-search">
                                    <select class="form-select form-control my-1 my-md-0">
                                        <option>Pricing</option>
                                        <option value="free">Free</option>
                                        <option value="premium">Premium</option>
                                        <option value="subscription">Subscription</option>
                                    </select>
                                    <Icon icon="lucide:circle-dollar-sign" 
                                        class="app-search-icon text-muted" />
                                </div>
                            </div>
                        </BCardHeader>

                        <BCardBody class="p-0">
                            <div v-for="(item, idx) in searchResults" :key="idx"
                                class="border-bottom border-dashed px-4 py-3">
                                <h4 class="fs-md mb-1">
                                    <RouterLink :to="item.url" target="_blank" class="text-reset">
                                        {{ item.title }}
                                    </RouterLink>
                                </h4>
                                <p class="text-success mb-2">{{ item.url }}</p>
                                <p class="text-muted mb-2">{{ item.description }}</p>

                                <p class="d-flex flex-wrap gap-3 text-muted mb-1 align-items-center fs-base">
                                    <span class="d-flex align-items-center gap-1">
                                        <img :src="item.image" height="24" width="24" alt=""
                                            class="img-fluid avatar-xs rounded-circle" />
                                        <RouterLink to="#" class="link-reset fw-semibold">{{ item.author }}</RouterLink>
                                    </span>

                                    <span class="d-flex align-items-center gap-1">
                                        <Icon icon="tabler:calendar" />
                                        <span>Published on: {{ item.publishedDate }}</span>
                                    </span>

                                    <span class="d-flex align-items-center gap-1">
                                        <Icon icon="tabler:shopping-cart" />
                                        <span>Sales: {{ item.sales }}</span>
                                    </span>

                                    <span class="d-flex align-items-center gap-1">
                                        <Icon icon="tabler:message-circle" />
                                        <RouterLink to="#" class="link-reset">Comments: {{ item.comments }}</RouterLink>
                                    </span>

                                    <span class="d-flex align-items-center gap-1">
                                        <Icon icon="tabler:thumb-up" />
                                        <span>Likes: {{ item.likes }}</span>
                                    </span>
                                </p>
                            </div>

                            <div class="border-bottom border-dashed px-4 py-3">
                                <h4 class="fs-md mb-3">Found some users:</h4>
                                <div class="d-flex gap-2">
                                    <div v-for="(img, idx) in users" :key="idx" class="avatar">
                                        <img :src="img" alt="" height="48" width="48" class="rounded avatar-xl" />
                                    </div>
                                </div>
                            </div>

                            <div class="border-bottom border-dashed px-4 py-3">
                                <h4 class="fs-md mb-3">People also search for:</h4>
                                <div class="d-flex gap-2 flex-wrap">
                                    <div v-for="(item, idx) in [
                                        'Minimal Admin Templates',
                                        'Bootstrap 5 Admin Panels',
                                        'SaaS Dashboard UI Kits',
                                        'Dark Mode Admin Themes'
                                    ]" :key="idx" class="px-3 py-2 bg-light bg-opacity-50 rounded">
                                        <RouterLink to="#" class="text-reset fs-md fw-semibold">
                                            {{ item }}
                                            <Icon icon="tabler:search" class="ms-2" />
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>

                            <BPagination class="pagination-rounded pagination-boxed justify-content-center mb-0 py-3"
                                v-model="page" :total-rows="80" :per-page="10" last-number first-number>
                                <template #prev-text>
                                    <Icon icon="tabler:chevron-left" />
                                </template>
                                <template #next-text>
                                    <Icon icon="tabler:chevron-right" />
                                </template>
                            </BPagination>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BContainer, BRow, BCol, BCard, BCardHeader, BCardBody, BPagination, BButton } from 'bootstrap-vue-next'
import { searchResults, users } from './data';
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { Icon } from '@iconify/vue';

const page = ref(1)

usePageMeta('Search Results')
</script>
