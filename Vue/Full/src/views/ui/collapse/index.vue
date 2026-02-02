<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Collapse" subtitle="UI" />
        </BContainer>

        <div class="container-xl">
            <BRow>
                <BCol xl="12">
                    <BCard no-body>
                        <BCardHeader>
                            <BCardTitle tag="h4">Examples</BCardTitle>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Toggle the visibility of content across your project with a few classes and our
                                JavaScript
                                plugins.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/collapse.html"
                                target="_blank">
                                Collapse on vue Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>
                </BCOl>

                <BCol xl="6">
                    <UICard title="Collapse" isCollapsable>
                        <p>
                            <a class="btn btn-primary" v-b-toggle.collapseExample href="#collapseExample"
                                aria-expanded="false" aria-controls="collapseExample">
                                Link with href
                            </a>
                            <button class="btn btn-primary ms-1" type="button" v-b-toggle.collapseExample
                                aria-expanded="false" aria-controls="collapseExample">
                                Button with data-bs-target
                            </button>
                        </p>
                        <BCollapse show id="collapseExample">
                            <div class="card card-body mb-0">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry
                                richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes
                                anderson cred nesciunt sapiente ea proident.
                            </div>
                        </BCollapse>
                    </UICard>

                    <UICard title="Multiple Targets" isCollapsable>

                        <div class="d-flex flex-wrap gap-2 mb-3">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1"
                                role="button" aria-expanded="false" aria-controls="multiCollapseExample1"
                                v-b-toggle.multiCollapseExample1>Toggle first
                                element</a>
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                                v-b-toggle.multiCollapseExample2 aria-expanded="false"
                                aria-controls="multiCollapseExample2">Toggle second element</button>
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                                v-b-toggle="['multiCollapseExample1', 'multiCollapseExample2']" aria-expanded="false"
                                aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both
                                elements</button>
                        </div>

                        <BRow>
                            <BCol>
                                <BCollapse class="multi-collapse" id="multiCollapseExample1">
                                    <div class="card card-body mb-0">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                                        anderson cred nesciunt sapiente ea proident.
                                    </div>
                                </BCollapse>
                            </BCol>
                            <BCol>
                                <BCollapse class="multi-collapse" id="multiCollapseExample2">
                                    <div class="card card-body mb-0">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                                        anderson cred nesciunt sapiente ea proident.
                                    </div>
                                </BCollapse>
                            </BCol>
                        </BRow>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Collapse Horizontal" isCollapsable>
                        <p>
                            <button class="btn btn-primary" type="button" v-b-toggle.collapseWidthExample
                                aria-expanded="false" aria-controls="collapseWidthExample">
                                Toggle width collapse
                            </button>
                        </p>
                        <div style="height: 100px;">
                            <BCollapse horizontal class="collapse-horizontal" id="collapseWidthExample">
                                <div class="card card-body mb-0" style="width: 300px;">
                                    This is some placeholder content for a horizontal collapse. It's hidden by default
                                    and shown when triggered.
                                </div>
                            </BCollapse>
                        </div>
                    </UICard>

                </BCol>
            </BRow>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BCard, BCardBody, BCardHeader, BCardTitle, BCol, BCollapse, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

usePageMeta('Collapse')
</script>

<style scoped></style>