<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Companies" subtitle="Apps" />

            <BRow class="mb-3">
                <BCol lg="12">
                    <BForm class="bg-light-subtle rounded border p-3">
                        <BRow class="gap-3">
                            <BCol>
                                <BRow class="gap-3">
                                    <BCol lg="4">
                                        <div class="app-search">
                                            <BFormInput type="text" placeholder="Search company name..." />
                                            <Icon icon="lucide:search" :size="18" class="app-search-icon text-muted" />
                                        </div>
                                    </BCol>

                                    <BCol class="col-auto">
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="me-2 fw-semibold">Filter By:</span>

                                            <div class="app-search">
                                                <select class="form-select form-control my-1 my-md-0">
                                                    <option>Location</option>
                                                    <option value="USA">USA</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="India">India</option>
                                                    <option value="UK">United Kingdom</option>
                                                </select>
                                                <Icon icon="lucide:map-pin" :size="18"
                                                    class="app-search-icon text-muted" />
                                            </div>

                                            <div class="app-search">
                                                <select class="form-select form-control my-1 my-md-0">
                                                    <option>Category</option>
                                                    <option value="Tech">Tech</option>
                                                    <option value="Finance">Finance</option>
                                                    <option value="eCommerce">eCommerce</option>
                                                    <option value="Healthcare">Healthcare</option>
                                                    <option value="Automotive">Automotive</option>
                                                </select>
                                                <Icon icon="lucide:briefcase" :size="18"
                                                    class="app-search-icon text-muted" />
                                            </div>

                                            <div class="app-search">
                                                <select class="form-select form-control my-1 my-md-0">
                                                    <option>Rating</option>
                                                    <option value="5">5 Stars</option>
                                                    <option value="4">4 Stars & Up</option>
                                                    <option value="3">3 Stars & Up</option>
                                                    <option value="2">2 Stars & Up</option>
                                                    <option value="1">1 Star & Up</option>
                                                </select>
                                                <Icon icon="lucide:star" :size="18"
                                                    class="app-search-icon text-muted" />
                                            </div>

                                            <BButton variant="secondary" type="submit">Apply</BButton>
                                        </div>
                                    </BCol>
                                </BRow>
                            </BCol>

                            <BCol class="col-auto">
                                <div role="group" aria-label="Layout toggle button group">
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked />
                                    <label class="btn btn-soft-primary btn-icon me-1" for="btnradio1">
                                        <Icon icon="lucide:layout-grid" class="fs-lg" />
                                    </label>

                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
                                    <label class="btn btn-soft-primary btn-icon" for="btnradio2">
                                        <Icon icon="lucide:list" class="fs-lg" />
                                    </label>
                                </div>
                            </BCol>
                        </BRow>
                    </BForm>
                </BCol>
            </BRow>

            <BRow>
                <BCol v-for="(company, idx) in companies" :key="idx" xl="4" md="6">
                    <CompanyCard :company="company" />
                </BCol>
            </BRow>

            <BPagination v-model="currentPage" :total-rows="100" :per-page="20" align="center" last-number first-number
                class="pagination-rounded pagination-boxed " />
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BContainer, BRow, BCol, BForm, BFormInput, BButton, BPagination } from 'bootstrap-vue-next'
import { companies } from './data';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import CompanyCard from './components/CompanyCard.vue';
import { ref } from 'vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

const currentPage = ref(1)

usePageMeta('Companies')
</script>

<style scoped></style>