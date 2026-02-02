<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Projects" subTitle="Apps" />

            <BRow class="mb-3">
                <BCol lg="12">
                    <form class="bg-light-subtle rounded border p-3">
                        <BRow class="gap-3">
                            <BCol>
                                <BRow class="gap-3">
                                    <BCol lg="4">
                                        <div class="app-search">
                                            <input type="text" class="form-control"
                                                placeholder="Search project name...">
                                            <Icon icon="lucide:search"  class="app-search-icon text-muted" />
                                        </div>
                                    </BCol>
                                    <div class="col-auto">
                                        <div class="d-flex flex-wrap align-items-center gap-2">
                                            <span class="me-2 fw-semibold">Filter By:</span>


                                            <div class="app-search">
                                                <select class="form-select form-control my-1 my-md-0">
                                                    <option selected>Status</option>
                                                    <option value="On Track">On Track</option>
                                                    <option value="Delayed">Delayed</option>
                                                    <option value="At Risk">At Risk</option>
                                                    <option value="Completed">Completed</option>
                                                </select>
                                                <Icon  icon="lucide:activity"
                                                    class="app-search-icon text-muted" />
                                            </div>


                                            <div class="app-search">
                                                <select class="form-select form-control my-1 my-md-0">
                                                    <option selected>Team</option>
                                                    <option value="Design">Design</option>
                                                    <option value="Development">Development</option>
                                                    <option value="Marketing">Marketing</option>
                                                    <option value="QA">QA</option>
                                                </select>
                                                <Icon  icon="lucide:users"
                                                    class="app-search-icon text-muted" />
                                            </div>


                                            <div class="app-search">
                                                <select class="form-select form-control my-1 my-md-0">
                                                    <option selected>Deadline</option>
                                                    <option value="This Week">This Week</option>
                                                    <option value="This Month">This Month</option>
                                                    <option value="Next Month">Next Month</option>
                                                    <option value="No Deadline">No Deadline</option>
                                                </select>
                                                <Icon  icon="lucide:calendar-clock"
                                                    class="app-search-icon text-muted" />
                                            </div>

                                            <button type="submit" class="btn btn-secondary">Apply</button>
                                        </div>
                                    </div>
                                </BRow>
                            </BCol>

                            <div class="col-auto">
                                <div class="d-flex gap-1">
                                    <RouterLink to="/projects" class="btn btn-primary btn-icon">
                                        <Icon icon="lucide:layout-grid" class="fs-lg" />
                                    </RouterLink>
                                    <RouterLink to="/projects-list" class="btn btn-soft-primary btn-icon">
                                        <Icon icon="lucide:list" class="fs-lg" />
                                    </RouterLink>
                                </div>
                            </div>
                        </BRow>
                    </form>
                </BCol>
            </BRow>

            <BRow>
                <BCol v-for="(project, idx) in projects.slice(0, 4)" :key="idx" md="6" xxl="3">
                    <ProjectCard1 :project="project" />
                </BCol>
                <BCol v-for="(project, idx) in projects.slice(4, 8)" :key="idx" md="6" xxl="3">
                    <ProjectCard2 :project="project" />
                </BCol>
            </BRow>

            <BPagination first-number last-number hide-ellipsis :total-rows="50" :per-page="10"
                class="pagination-rounded pagination-boxed justify-content-center" />

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import { projects } from './data';
import ProjectCard1 from './components/ProjectCard1.vue';
import ProjectCard2 from './components/ProjectCard2.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

usePageMeta('Projects')
</script>

<style scoped></style>