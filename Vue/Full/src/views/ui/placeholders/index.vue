<template>
    <MainLayout>
        <div class="container-fluid">
            <PageBreadcrumb title="Placeholders" subtitle="UI" />
        </div>


        <div class="container-xl">
            <BRow>
                <BCol cols="12">
                    <BCard no-body>
                        <BCardHeader>
                            <BCardTitle tag="h4">Examples</BCardTitle>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Use loading placeholders for your components or pages to indicate something may still be
                                loading.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/placeholder.html"
                                target="_blank">
                                Placeholders on Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>

                    <UICard title="Placeholders" isCollapsable>
                        <p class="text-muted">
                            In the example below, we take a typical card component and recreate it with placeholders
                            applied to create a “loading card”. Size and proportions are the same between the two.
                        </p>

                        <BRow>
                            <BCol xl="3" md="6">
                                <BCard no-body class="border shadow-none mb-md-0">

                                    <img :src="small1" class="card-img-top" alt="..." />

                                    <BCardBody>
                                        <BCardTitle class="mb-2">Card Title</BCardTitle>
                                        <p class="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's
                                            content.</p>
                                        <BButton variant="primary">Go somewhere</BButton>
                                    </BCardBody>
                                </BCard>
                            </BCol>

                            <BCol xl="3" md="6">
                                <BCard no-body class="border shadow-none mb-0" aria-hidden="true">
                                    <svg class="card-img-top" width="100%" style="aspect-ratio: 16 / 10;"
                                        xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder"
                                        preserveAspectRatio="xMidYMid slice" viewBox="0 0 16 10">
                                        <title>Placeholder</title>
                                        <rect width="16" height="10" fill="#20c997"></rect>
                                    </svg>

                                    <BCardBody>
                                        <h5 class="card-title mb-2 placeholder-glow">
                                            <span class="placeholder col-6">&nbsp;</span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                            <BPlaceholder cols="7" />
                                            <BPlaceholder cols="4" />
                                            <BPlaceholder cols="4" />
                                            <BPlaceholder cols="6" />
                                            <BPlaceholder cols="3" />
                                        </p>
                                        <BButton variant="primary" class="disabled placeholder col-6"
                                            aria-disabled="true">
                                            <span class="invisible">Read Only</span>
                                        </BButton>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                        </BRow>
                    </UICard>

                    <UICard title="Color" isCollapsable>
                        <p class="text-muted">
                            By default, the <code>placeholder</code> uses <code>currentColor</code>. This can be
                            overriden with a custom color or utility class.
                        </p>

                        <BPlaceholder cols="12" />
                        <BPlaceholder cols="12" variant="primary" />
                        <BPlaceholder cols="12" variant="secondary" />
                        <BPlaceholder cols="12" variant="success" />
                        <BPlaceholder cols="12" variant="danger" />
                        <BPlaceholder cols="12" variant="warning" />
                        <BPlaceholder cols="12" variant="info" />
                        <BPlaceholder cols="12" variant="light" />
                        <BPlaceholder cols="12" variant="dark" />
                    </UICard>

                    <UICard title="Width" isCollapsable>
                        <p class="text-muted">
                            You can change the <code>width</code> through grid column classes, width utilities, or
                            inline styles.
                        </p>

                        <BPlaceholder cols="6" />
                        <BPlaceholder class="w-75" /> <br />
                        <BPlaceholder width="25%" class="me-1" />
                        <BPlaceholder width="10%" />
                    </UICard>

                    <UICard title="Sizing" isCollapsable>
                        <p class="text-muted">
                            The size of <code>.placeholder</code>s are based on the typographic style of the parent
                            element. Customize them with sizing modifiers: <code>.placeholder-lg</code>,
                            <code>.placeholder-sm</code>, or <code>.placeholder-xs</code>.
                        </p>
                        <BPlaceholder cols="12" size="lg" />
                        <BPlaceholder cols="12" />
                        <BPlaceholder cols="12" size="sm" />
                        <BPlaceholder cols="12" size="xs" />
                    </UICard>

                    <UICard title="How it works" isCollapsable>
                        <p class="text-muted">
                            Create placeholders with the <code>.placeholder</code> class and a grid column class (e.g.,
                            <code>.col-6</code>) to set the <code>width</code>. They can replace the text inside an
                            element or as be added as a modifier class to an existing component.
                        </p>
                        <p aria-hidden="true">
                            <BPlaceholder cols="6" />
                        </p>

                        <BPlaceholder cols="4" tag="a" href="#" class="btn btn-primary disabled" aria-hidden="true" />
                    </UICard>

                    <UICard title="Animation" isCollapsable>
                        <p class="text-muted">
                            Animate placehodlers with <code>.placeholder-glow</code> or <code>.placeholder-wave</code>
                            to better convey the perception of something being <em>actively</em> loaded.
                        </p>
                        <BPlaceholder animation="glow" cols="12" class="mb-3" />
                        <BPlaceholder animation="wave" cols="12" class="mb-0" />
                    </UICard>
                </BCol>
            </BRow>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BButton, BCard, BCardBody, BCardHeader, BCardTitle, BCol, BPlaceholder, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';

import small1 from '@/assets/images/stock/small-1.jpg'
import { Icon } from '@iconify/vue';
import MainLayout from '@/layouts/MainLayout.vue';

usePageMeta('Placeholders')
</script>

<style scoped></style>