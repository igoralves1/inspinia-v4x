<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Contacts" subTitle="Apps" />

            <BRow class="mb-3">
                <BCol lg="12">
                    <form class="bg-light-subtle rounded border p-3">

                        <BRow class="gap-3">
                            <BCol lg="4">
                                <div class="app-search">
                                    <input type="text" class="form-control" placeholder="Search contact name...">
                                    <Icon  icon="tabler:search" class="app-search-icon text-muted" />
                                </div>
                            </BCol>
                            <BCol>
                                <div class="d-flex flex-wrap align-items-center gap-2">
                                    <span class="me-2 fw-semibold">Filter By:</span>

                                    <div class="app-search">
                                        <select class="form-select form-control my-1 my-md-0">
                                            <option selected>Designation</option>
                                            <option value="Manager">Manager</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Designer">Designer</option>
                                            <option value="Sales">Sales</option>
                                            <option value="Support">Support</option>
                                        </select>
                                        <Icon  icon="lucide:user-check" class="app-search-icon text-muted" />
                                    </div>

                                    <div class="app-search">
                                        <select class="form-select form-control my-1 my-md-0">
                                            <option selected>Location</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="Germany">Germany</option>
                                            <option value="India">India</option>
                                            <option value="Canada">Canada</option>
                                        </select>
                                        <Icon  icon="lucide:map-pin" class="app-search-icon text-muted" />
                                    </div>

                                    <div class="app-search">
                                        <select class="form-select form-control my-1 my-md-0">
                                            <option selected>Department</option>
                                            <option value="UI/UX">UI/UX</option>
                                            <option value="Engineering">Engineering</option>
                                            <option value="HR">HR</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Finance">Finance</option>
                                        </select>
                                        <Icon  icon="lucide:layers" class="app-search-icon text-muted" />
                                    </div>

                                    <button type="submit" class="btn btn-secondary">Apply</button>

                                    <div role="group" aria-label="Layout toggle button group"
                                        class="ms-auto flex-shrink-0">
                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked>
                                        <label class="btn btn-soft-primary btn-icon me-1" for="btnradio1">
                                            <Icon icon="lucide:layout-grid" class="fs-lg" />
                                        </label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2">
                                        <label class="btn btn-soft-primary btn-icon" for="btnradio2">
                                            <Icon icon="lucide:list" class="fs-lg" />
                                        </label>
                                    </div>

                                </div>
                            </BCol>
                        </BRow>
                    </form>
                </BCol>
            </BRow>

            <BRow>
                <BCol md="6" xxl="3" v-for="(contact, idx) in contacts" :key="idx">
                    <ContactCard :contact="contact" />
                </BCol>
            </BRow>

            <ul class="pagination pagination-rounded pagination-boxed justify-content-center">
                <BPagination first-number last-number hide-ellipsis :total-rows="50" :per-page="10"
                    class="pagination-boxed" />
            </ul>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BPagination, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import ContactCard from './components/ContactCard.vue';
import { contacts } from './data';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

usePageMeta('Contacts')
</script>

<style scoped></style>