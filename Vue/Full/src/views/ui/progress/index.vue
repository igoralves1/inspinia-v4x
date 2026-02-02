<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Progress" subtitle="UI" />
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
                                Documentation and examples for using Bootstrap custom progress bars featuring support
                                for
                                stacked bars, animated backgrounds, and text labels.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/progress.html"
                                target="_blank">
                                Progress on Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Examples" isCollapsable>
                        <BProgress class="mb-2" :value="0" />
                        <BProgress class="mb-2" :value="25" />
                        <BProgress class="mb-2" :value="50" />
                        <BProgress class="mb-2" :value="75" />
                        <b-progress :value="100" />
                    </UICard>

                    <UICard title="Height" isCollapsable>
                        <BProgress class="mb-2" variant="danger" style="height: 1px;" :value="25" />
                        <BProgress class="mb-2" variant="primary" style="height: 3px;" :value="25" />
                        <BProgress class="mb-2 progress-sm" variant="success" :value="25" />
                        <BProgress class="mb-2 progress-md" variant="info" :value="50" />
                        <BProgress class="mb-2 progress-lg" variant="warning" :value="75" />
                        <BProgress class="mb-2 progress-xl" variant="success" :value="38" />
                    </UICard>

                    <UICard title="Multiple Bars" isCollapsable>
                        <BProgress>
                            <BProgressBar variant="primary" :value="15" />
                            <BProgressBar variant="success" :value="30" />
                            <BProgressBar variant="info" :value="20" />
                        </BProgress>
                    </UICard>

                    <UICard title="Animated Stripes" isCollapsable>
                        <BProgress class="mb-2" variant="primary" striped animated :value="75" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Labels" isCollapsable>
                        <BProgress class="mb-3">
                            <BProgressBar variant="primary" :value="25">
                                25%
                            </BProgressBar>
                        </BProgress>

                        <BProgress>
                            <BProgressBar class="overflow-visible text-dark" variant="primary" :value="10">
                                Long label text for the progress bar, set to a dark color
                            </BProgressBar>
                        </BProgress>
                    </UICard>

                    <UICard title="Backgrounds" isCollapsable>
                        <BProgress class="mb-2" variant="success" :value="25" />
                        <BProgress class="mb-2" variant="info" :value="50" />
                        <BProgress class="mb-2" variant="warning" :value="75" />
                        <BProgress class="mb-2" variant="danger" :value="100" />
                        <BProgress class="mb-2" variant="dark" :value="65" />
                        <BProgress variant="secondary" :value="50" />
                    </UICard>

                    <UICard title="Striped" isCollapsable>
                        <BProgress bg-variant="primary" striped class="mb-2" :value="10" />
                        <BProgress bg-variant="success" striped class="mb-2" :value="25" />
                        <BProgress bg-variant="info" striped class="mb-2" :value="50" />
                        <BProgress bg-variant="warning" striped class="mb-2" :value="75" />
                        <BProgress bg-variant="danger" striped :value="100" />
                    </UICard>

                    <UICard title="Steps" isCollapsable>
                        <div class="position-relative m-4">
                            <BProgress style="height: 2px;">
                                <BProgressBar variant="primary" :value="50" />
                            </BProgress>
                            <BButton type="button" variant="primary" pill
                                class="position-absolute top-0 start-0 translate-middle btn-icon">1</BButton>
                            <BButton type="button" variant="primary" pill
                                class="position-absolute top-0 start-50 translate-middle btn-icon">2</BButton>
                            <BButton type="button" variant="light" pill
                                class="position-absolute top-0 start-100 translate-middle btn-icon">3</BButton>
                        </div>
                    </UICard>
                </BCol>
            </BRow>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BButton, BCard, BCardBody, BCardTitle, BCol, BCollapse, BContainer, BProgress, BProgressBar, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

usePageMeta('Progress')
</script>

<style scoped></style>