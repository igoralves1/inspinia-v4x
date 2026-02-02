<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Spinners" subtitle="UI" />
        </BContainer>

        <div class="container-xl">
            <BRow>
                <BCol cols="12">
                    <BCard no-body>
                        <BCardHeader>
                            <BCardHeader>Examples</BCardHeader>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Indicate the loading state of a component or page with Bootstrap spinners, built
                                entirely
                                with HTML, CSS, and no JavaScript.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/spinner.html"
                                target="_blank">
                                Spinners on Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Border Spinner" isCollapsable>
                        <p class="text-muted">Use border spinners as lightweight loading indicators.</p>
                        <BSpinner class="m-2" />
                    </UICard>

                    <UICard title="Colors" isCollapsable>
                        <BSpinner variant="primary" class="m-2" />
                        <BSpinner variant="secondary" class="m-2" />
                        <BSpinner variant="success" class="m-2" />
                        <BSpinner variant="danger" class="m-2" />
                        <BSpinner variant="warning" class="m-2" />
                        <BSpinner variant="info" class="m-2" />
                        <BSpinner variant="light" class="m-2" />
                        <BSpinner variant="dark" class="m-2" />
                        <BSpinner  class="m-2 spinner-border-purple" />
                    </UICard>

                    <UICard title="Alignment" isCollapsable>
                        <div class="d-flex justify-content-center">
                            <strong>Loading...</strong>
                            <BSpinner class="ms-auto" />
                        </div>
                        <div class="d-flex justify-content-center mt-3">
                            <BSpinner />
                        </div>
                    </UICard>

                    <UICard title="Buttons Spinner" isCollapsable>
                        <BRow>
                            <BCol lg="6">
                                <div class="d-flex flex-wrap gap-2">
                                    <BButton variant="primary" class="btn-icon" type="button" disabled>
                                        <BSpinner small />
                                    </BButton>
                                    <BButton variant="primary" class="rounded-circle btn-icon" type="button" disabled>
                                        <BSpinner small />
                                    </BButton>
                                    <BButton variant="primary" type="button" disabled>
                                        <BSpinner small />
                                    </BButton>
                                    <BButton variant="primary" type="button" disabled>
                                        <BSpinner small class="me-1" />
                                        Loading...
                                    </BButton>
                                </div>
                            </BCol>
                            <BCol lg="6">
                                <div class="d-flex flex-wrap gap-2">
                                    <BButton variant="primary" class="btn-icon" type="button" disabled>
                                        <BSpinner small type="grow" />
                                    </BButton>
                                    <BButton variant="primary" class="btn-icon rounded-circle" type="button" disabled>
                                        <BSpinner small type="grow" />
                                    </BButton>
                                    <BButton variant="primary" type="button" disabled>
                                        <BSpinner small type="grow" />
                                    </BButton>
                                    <BButton variant="primary" type="button" disabled>
                                        <BSpinner small class="me-1" type="grow" />
                                        Loading...
                                    </BButton>
                                </div>
                            </BCol>
                        </BRow>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Growing Spinner" isCollapsable>
                        <BSpinner class="m-2" type="grow" />
                    </UICard>

                    <UICard title="Color Growing Spinner" isCollapsable>
                        <BSpinner variant="primary" class="m-2" type="grow" />
                        <BSpinner variant="secondary" class="m-2" type="grow" />
                        <BSpinner variant="success" class="m-2" type="grow" />
                        <BSpinner variant="danger" class="m-2" type="grow" />
                        <BSpinner variant="warning" class="m-2" type="grow" />
                        <BSpinner variant="info" class="m-2" type="grow" />
                        <BSpinner variant="light" class="m-2" type="grow" />
                        <BSpinner variant="dark" class="m-2" type="grow" />
                    </UICard>

                    <UICard title="Size" isCollapsable>
                        <b-row>
                            <b-col lg="6">
                                <BSpinner variant="primary" class="avatar-lg m-2" />
                                <BSpinner variant="secondary" class="avatar-lg m-2" type="grow" />
                            </b-col>

                            <b-col lg="6">
                                <BSpinner variant="primary" class="avatar-md m-2" />
                                <BSpinner variant="secondary" class="avatar-md m-2" type="grow" />
                            </b-col>

                            <b-col lg="6">
                                <BSpinner variant="primary" class="avatar-sm m-2" />
                                <BSpinner variant="secondary" class="avatar-sm m-2" type="grow" />
                            </b-col>

                            <b-col lg="6">
                                <BSpinner small class="m-2" />
                                <BSpinner small class="m-2" type="grow" />
                            </b-col>
                        </b-row>
                    </UICard>
                </BCol>

                <BCol cols="12">
                    <UICard title="SpinKit" isCollapsable>
                        <template #header-extra-text>
                            <span class="badge badge-soft-warning">CSS Based
                                Plugin</span>
                        </template>
                        <BRow class="mb-5">
                            <BCol>
                                <!-- Plane -->
                                <div class="sk-plane mx-auto"></div>
                            </BCol>
                            <BCol>
                                <!-- Chase -->
                                <div class="sk-chase mx-auto">
                                    <div class="sk-chase-dot"></div>
                                    <div class="sk-chase-dot"></div>
                                    <div class="sk-chase-dot"></div>
                                    <div class="sk-chase-dot"></div>
                                    <div class="sk-chase-dot"></div>
                                    <div class="sk-chase-dot"></div>
                                </div>
                            </BCol>
                            <BCol>
                                <!-- Bounce -->
                                <div class="sk-bounce mx-auto">
                                    <div class="sk-bounce-dot"></div>
                                    <div class="sk-bounce-dot"></div>
                                </div>
                            </BCol>
                            <BCol>
                                <!-- Wave -->
                                <div class="sk-wave mx-auto">
                                    <div class="sk-wave-rect"></div>
                                    <div class="sk-wave-rect"></div>
                                    <div class="sk-wave-rect"></div>
                                    <div class="sk-wave-rect"></div>
                                    <div class="sk-wave-rect"></div>
                                </div>
                            </BCol>
                        </BRow>

                        <div class="row mb-5">
                            <BCol>
                                <!-- Pluse -->
                                <div class="sk-pulse mx-auto"></div>
                            </BCol>
                            <BCol>
                                <!-- Swing -->
                                <div class="sk-swing mx-auto">
                                    <div class="sk-swing-dot"></div>
                                    <div class="sk-swing-dot"></div>
                                </div>
                            </BCol>
                            <BCol>
                                <!-- Circle -->
                                <div class="sk-circle mx-auto">
                                    <div class="sk-circle-dot"></div>
                                    <div class="sk-circle-dot"></div>
                                    <div class="sk-circle-dot"></div>
                                    <div class="sk-circle-dot"></div>
                                    <div class="sk-circle-dot"></div>
                                    <div class="sk-circle-dot"></div>
                                    <div class="sk-circle-dot"></div>
                                    <div class="sk-circle-dot"></div>
                                    <div class="sk-circle-dot"></div>
                                    <div class="sk-circle-dot"></div>
                                    <div class="sk-circle-dot"></div>
                                    <div class="sk-circle-dot"></div>
                                </div>
                            </BCol>
                            <BCol>
                                <!-- Circle Fade -->
                                <div class="sk-circle-fade mx-auto">
                                    <div class="sk-circle-fade-dot"></div>
                                    <div class="sk-circle-fade-dot"></div>
                                    <div class="sk-circle-fade-dot"></div>
                                    <div class="sk-circle-fade-dot"></div>
                                    <div class="sk-circle-fade-dot"></div>
                                    <div class="sk-circle-fade-dot"></div>
                                    <div class="sk-circle-fade-dot"></div>
                                    <div class="sk-circle-fade-dot"></div>
                                    <div class="sk-circle-fade-dot"></div>
                                    <div class="sk-circle-fade-dot"></div>
                                    <div class="sk-circle-fade-dot"></div>
                                    <div class="sk-circle-fade-dot"></div>
                                </div>
                            </BCol>
                        </div>

                        <BRow>
                            <BCol cols="3">
                                <!-- Grid -->
                                <div class="sk-grid mx-auto">
                                    <div class="sk-grid-cube"></div>
                                    <div class="sk-grid-cube"></div>
                                    <div class="sk-grid-cube"></div>
                                    <div class="sk-grid-cube"></div>
                                    <div class="sk-grid-cube"></div>
                                    <div class="sk-grid-cube"></div>
                                    <div class="sk-grid-cube"></div>
                                    <div class="sk-grid-cube"></div>
                                    <div class="sk-grid-cube"></div>
                                </div>
                            </BCol>
                            <BCol cols="3">
                                <!-- Fold -->
                                <div class="sk-fold mx-auto">
                                    <div class="sk-fold-cube"></div>
                                    <div class="sk-fold-cube"></div>
                                    <div class="sk-fold-cube"></div>
                                    <div class="sk-fold-cube"></div>
                                </div>
                            </BCol>
                        </BRow>
                    </UICard>
                </BCol>
            </BRow>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BButton, BCard, BCardBody, BCardHeader, BCol, BContainer, BRow, BSpinner } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

usePageMeta('Spinners')
</script>

<style scoped></style>