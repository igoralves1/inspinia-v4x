<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Pagination" subtitle="UI" />
        </BContainer>

        <div class="container-xl">
            <BRow>
                <BCol cols="12">
                    <BCard no-body>
                        <BCardHeader>
                            <BCardTitle tag="h4">Examples</BCardTitle>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Documentation and examples for showing pagination to indicate a series of related
                                content
                                exists across multiple pages.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/pagination.html"
                                target="_blank">
                                Pagination on Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Default Pagination" isCollapsable>
                        <BPagination v-model="currentPage" :total-rows="25" :per-page="perPageItem" class="mb-0"
                            first-number last-number prev-text="Previous" next-text="Next" />
                    </UICard>

                    <UICard title="Alignment" isCollapsable>
                        <BPagination v-model="currentPage" :total-rows="15" :per-page="perPageItem" prev-text="Previous"
                            next-text="Next" class="justify-content-center" first-number last-number />
                        <BPagination v-model="currentPage" :total-rows="15" :per-page="perPageItem" prev-text="Previous"
                            next-text="Next" class="justify-content-end mb-0" first-number last-number />
                    </UICard>

                    <UICard title="Custom Color Pagination" isCollapsable>
                        <BPagination v-model="currentPage" :total-rows="25" :per-page="perPageItem"
                            class="pagination-boxed pagination-info" first-number last-number>
                            <template #prev-text>
                                <Icon icon="tabler:chevron-left" class="ti ti-chevron-left" />
                            </template>
                            <template #next-text>
                                <Icon icon="tabler:chevron-right" class="align-middle" />
                            </template>
                        </BPagination>

                        <BPagination v-model="currentPage" :total-rows="25" :per-page="perPageItem"
                            class="pagination-boxed pagination-secondary" first-number last-number>
                            <template #prev-text>
                                <Icon icon="lucide:arrow-left" class="ti ti-chevron-left" />
                            </template>
                            <template #next-text>
                                <Icon icon="lucide:arrow-right" class="align-middle" />
                            </template>
                        </BPagination>
                    </UICard>

                    <UICard title="Disabled and active states" isCollapsable>
                        <BPagination v-model="currentPage" :total-rows="15" :per-page="perPageItem" prev-text="Previous"
                            next-text="Next" first-number last-number />
                    </UICard>

                    <UICard title="Custom Icon Pagination" isCollapsable>
                        <BPagination v-model="currentPage" :total-rows="25" :per-page="perPageItem"
                            class="pagination-boxed" first-number last-number>
                            <template #prev-text>
                                <Icon icon="tabler:chevron-left" class="ti ti-chevron-left" />
                            </template>
                            <template #next-text>
                                <Icon icon="tabler:chevron-right" class="align-middle" />
                            </template>
                        </BPagination>

                        <BPagination v-model="currentPage" :total-rows="25" :per-page="perPageItem"
                            class="pagination-boxed" first-number last-number>
                            <template #prev-text>
                                <Icon icon="lucide:arrow-left" class="ti ti-chevron-left" />
                            </template>
                            <template #next-text>
                                <Icon icon="lucide:arrow-right" class="align-middle" />
                            </template>
                        </BPagination>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Sizing" isCollapsable>
                        <BPagination v-model="currentPage" :total-rows="15" :per-page="perPageItem" size="lg"
                            first-number last-number hide-goto-end-buttons prev-text="«" next-text="»" />
                        <BPagination v-model="currentPage" :total-rows="15" :per-page="perPageItem" size="sm"
                            class="mb-0" first-number last-number prev-text="«" next-text="»" />
                    </UICard>

                    <UICard title="Boxed Pagination" isCollapsable>
                        <BPagination v-model="currentPage" :total-rows="25" :per-page="perPageItem"
                            class="pagination-boxed" first-number last-number prev-text="«" next-text="»" />
                        <BPagination v-model="currentPage" :total-rows="25" :per-page="perPageItem" size="lg"
                            class="pagination-boxed" first-number last-number prev-text="«" next-text="»" />
                        <BPagination v-model="currentPage" :total-rows="25" :per-page="perPageItem" size="sm"
                            class="pagination-boxed mb-0" first-number last-number prev-text="«" next-text="»" />
                    </UICard>

                    <UICard title="Rounded Pagination" isCollapsable>
                        <BPagination v-model="currentPage" :total-rows="25" :per-page="perPageItem"
                            class="pagination-rounded pagination-boxed mb-0" first-number last-number prev-text="«"
                            next-text="»" />
                    </UICard>

                    <UICard title="Soft Pagination" isCollapsable>
                        <BPagination v-model="currentPage" :total-rows="25" :per-page="perPageItem"
                            class="pagination-soft-danger pagination-boxed mb-0" first-number last-number>
                            <template #prev-text>
                                <Icon icon="tabler:chevron-left" />
                            </template>
                            <template #next-text>
                                <Icon icon="tabler:chevron-right" />
                            </template>
                        </BPagination>
                    </UICard>


                </BCol>
            </BRow>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BCard, BCardBody, BCardHeader, BCardTitle, BCol, BContainer, BPagination, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const perPageItem = ref(5);
const currentPage = ref(1);

usePageMeta('Pagination')
</script>

<style scoped></style>