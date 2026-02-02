<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Project Overview" subTitle="Projects" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BRow class="g-0">

                        <BCol xl="9">
                            <BCard no-body class="card-h-100 rounded-0 rounded-start">
                                <BCardHeader class="align-items-start p-4">
                                    <div class="avatar-xxl me-3">
                                        <span class="avatar-title text-bg-light rounded">
                                            <img :src="starbucks" height="48" alt="Brand-img" />
                                        </span>
                                    </div>
                                    <div>
                                        <h3 class="mb-1 d-flex fs-xl align-items-center">Starbucks - AI Analytics
                                            Dashboard
                                        </h3>
                                        <p class="text-muted mb-2 fs-xxs">Updated 5 minutes ago</p>
                                        <span class="badge badge-soft-success fs-xxs badge-label">In Progress</span>
                                    </div>
                                    <div class="ms-auto">
                                        <a href="javascript: void(0);" class="btn btn-light">
                                            <Icon icon="tabler:pencil" class="me-1" /> Edit
                                        </a>
                                    </div>
                                </BCardHeader>
                                <BCardBody class="px-4">
                                    <div class="mb-4">
                                        <h5 class="fs-base mb-2">Project Description:</h5>
                                        <p class="text-muted">This dashboard provides AI-powered insights and analytics
                                            for
                                            Starbucks business data. It includes sales performance, customer behavior,
                                            and
                                            predictive trends to assist in data-driven decision-making.</p>
                                        <p class="text-muted">
                                            Customizable reports and role-based dashboards ensure relevant insights for
                                            marketing teams, financial analysts, and executive decision-makers. The
                                            system
                                            is built with scalability and responsiveness in mind, supporting both
                                            desktop
                                            and mobile views for seamless access.
                                        </p>
                                    </div>
                                    <BRow class="mb-4">
                                        <BCol md="4" xl="3">
                                            <h6 class="mb-1 text-muted text-uppercase">Created Date:</h6>
                                            <p class="fw-medium mb-0">March 15, 2025</p>
                                        </BCol>
                                        <BCol md="4" xl="3">
                                            <h6 class="mb-1 text-muted text-uppercase">Deadline:</h6>
                                            <p class="fw-medium mb-0">June 30, 2025</p>
                                        </BCol>
                                        <BCol md="4" xl="3">
                                            <h6 class="mb-1 text-muted text-uppercase">Created By:</h6>
                                            <p class="fw-medium mb-0">John Smith</p>
                                        </BCol>
                                        <BCol md="4" xl="3">
                                            <h6 class="mb-1 text-muted text-uppercase">Client Name:</h6>
                                            <p class="fw-medium mb-0">Starbucks Corporation</p>
                                        </BCol>
                                    </BRow>


                                    <ProjectTabs />
                                </BCardBody>
                            </BCard>
                        </BCol>


                        <BCol xl="3">
                            <Sidebar />
                        </BCol>
                    </BRow>
                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import ProjectTabs from './components/ProjectTabs.vue';
import Sidebar from './components/Sidebar.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

import starbucks from '@/assets/images/logos/starbucks.svg'
import { Icon } from '@iconify/vue';

usePageMeta('Project Details')
</script>

<style scoped></style>