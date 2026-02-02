<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Cards" subTitle="UI" />

            <BCard no-body>
                <BCardHeader>
                    <BCardTitle tag="h4">Examples</BCardTitle>
                </BCardHeader>

                <BCardBody>
                    <p class="text-muted mb-2">
                        Bootstrap’s cards provide a flexible and extensible content container with multiple variants and
                        options.
                    </p>

                    <a class="btn btn-link p-0 fw-semibold"
                        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/card.html"
                        target="_blank">
                        Cards on vue Bootstrap
                        <Icon icon="tabler:chevron-right" class="ms-1" />
                    </a>
                </BCardBody>
            </BCard>

            <BRow>
                <BCol sm="6" lg="3">
                    <BCard>
                        <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                            Some quick example text to build on the card title and make up.
                        </p>
                        <BButton size="sm" variant="primary">Button</BButton>
                    </BCard>
                </BCol>

                <BCol sm="6" lg="3">
                    <BCard>
                        <h5 class="card-title mb-2">Basic Card with Title</h5>
                        <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                            Some quick example text to build on the card title and make up.
                        </p>
                        <BButton size="sm" variant="primary">Button</BButton>
                    </BCard>
                </BCol>

                <BCol sm="6" lg="3">
                    <BCard class="text-bg-primary border-0">
                        <h5 class="card-title mb-2">Card with Background Color</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content. Some quick example text to build on the card title and make up.</p>
                        <BButton size="sm" variant="light">Button</BButton>
                    </BCard>
                </BCol>

                <BCol sm="6" lg="3">
                    <BCard class="text-bg-purple bg-gradient">
                        <h5 class="card-title mb-2">Card with Background Gradient</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content. Some quick example text to build on the card title and make up.</p>
                        <BButton size="sm" variant="light">Button</BButton>
                    </BCard>
                </BCol>
            </BRow>

            <BRow>
                <BCol md="4">
                    <BCard no-body>
                        <template #header>
                            <h5>Card with Header</h5>
                        </template>
                        <BCardBody>
                            <h5 class="card-title mb-2">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <BButton size="sm" variant="primary">Go somewhere</BButton>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol md="4">
                    <BCard no-body>
                        <template #header>
                            <div class="d-block">
                                <h5 class="card-title mb-1">Card with Sub Header</h5>
                                <h6 class="card-subtitle text-body-secondary">Card subtitle</h6>
                            </div>
                        </template>
                        <BCardBody>
                            <blockquote class="card-bodyquote mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                </p>
                                <footer class="mb-0">Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol md="4">
                    <BCard no-body>
                        <template #header>
                            <div class="bg-light-subtle">Featured Card Title</div>
                        </template>
                        <BCardBody>
                            <BButton size="sm" variant="primary">Go somewhere</BButton>
                        </BCardBody>
                        <template #footer>
                            <div class="border-light text-muted">2 days ago</div>
                        </template>
                    </BCard>
                </BCol>
            </BRow>

            <BRow>
                <BCol md="4">
                    <UICard title="Card with Action Tools" isCollapsable isReloadable isCloseable>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <BButton size="sm" variant="primary">Go somewhere</BButton>
                    </UICard>
                </BCol>

                <BCol md="4">
                    <UICard class="text-bg-primary border-0" title="Card with Tools & BG" isCollapsable isReloadable
                        isCloseable cl>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <BButton size="sm" variant="light">Go somewhere</BButton>
                    </UICard>
                </BCol>

                <BCol md="4">
                    <UICard title="Card with Action Tools" isCollapsable isReloadable isCloseable>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <BButton size="sm" variant="primary">Go somewhere</BButton>
                    </UICard>
                </BCol>
            </BRow>

            <BRow>
                <BCol md="4">
                    <BCard class="border-primary" no-body>
                        <BCardBody>
                            <h5 class="card-title mb-2">Card with Colored Border</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <BButton size="sm" variant="primary">Button</BButton>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol md="4">
                    <BCard class="border-primary border border-dashed" no-body>
                        <BCardBody>
                            <h5 class="card-title mb-2 text-primary">Card with Simple Border</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <BButton size="sm" variant="primary">Button</BButton>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol md="4">
                    <BCard class="border-primary border-2" no-body>
                        <BCardBody>
                            <h5 class="card-title mb-2 text-primary">Card with Double Border</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <BButton size="sm" variant="primary">Button</BButton>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol md="4">
                    <BCard class="card-bordered">
                        <BCardTitle tag="h5" class="mb-2">Card with Start Border</BCardTitle>
                        <p class="card-text">With supporting text below as a natural lead-in to
                            additional content.</p>
                        <RouterLink to="#" class="btn btn-dark btn-sm">Button</RouterLink>
                    </BCard>
                </BCol>
                <BCol md="4">
                    <BCard class="card-bordered border-primary">
                        <BCardTitle tag="h5" class="mb-2 text-primary">Card with Colored Border</BCardTitle>
                        <p class="card-text">With supporting text below as a natural lead-in to
                            additional content.</p>
                        <RouterLink to="#" class="btn btn-primary btn-sm">Button</RouterLink>
                    </BCard>
                </BCol>
                <BCol md="4">
                    <BCard class="card-bordered border-info">
                        <BCardTitle tag="h5" class="mb-2">Card with Colored Border</BCardTitle>
                        <p class="card-text">With supporting text below as a natural lead-in to
                            additional content.</p>
                        <RouterLink to="#" class="btn btn-info btn-sm">Button</RouterLink>
                    </BCard>
                </BCol>
            </BRow>

            <BRow>
                <BCol cols="12">
                    <h4 class="mb-4 mt-3">Horizontal Card</h4>
                </BCol>
            </BRow>
            <BRow>
                <BCol lg="6">
                    <BCard no-body>
                        <BRow class="g-0 align-items-center">
                            <BCol md="4">
                                <img :src="small1" class="img-fluid rounded-start" />
                            </BCol>
                            <BCol md="8">
                                <BCardBody>
                                    <h5 class="card-title mb-3">Card with Horizontal Mode</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural
                                        lead-in.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </BCardBody>
                            </BCol>
                        </BRow>
                    </BCard>
                </BCol>

                <BCol lg="6">
                    <BCard no-body>
                        <BRow class="g-0 align-items-center">
                            <BCol md="8">
                                <BCardBody>
                                    <h5 class="card-title mb-3">Card with Horizontal Mode</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural
                                        lead-in.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </BCardBody>
                            </BCol>
                            <BCol md="4">
                                <img :src="small2" class="img-fluid rounded-end" />
                            </BCol>
                        </BRow>
                    </BCard>
                </BCol>
            </BRow>

            <BRow>
                <BCol cols='12'>
                    <h4 class="mb-4 mt-3">Stretched Link</h4>
                </BCol>
            </BRow>
            <BRow>
                <BCol sm="6" lg="3" v-for="(image, idx) in images" :key="idx">
                    <BCard no-body>
                        <img :src="image" class="card-img-top" />
                        <BCardBody>
                            <h5 class="card-title mb-2">Card with stretched link</h5>
                            <BButton variant="primary" class="mt-2 stretched-link">Go somewhere</BButton>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>

            <BRow>
                <BCol cols="12">
                    <h4 class="mb-4 mt-3">Card Group</h4>
                </BCol>
            </BRow>
            <BRow>
                <BCol>
                    <BCardGroup class="mb-3">
                        <BCard v-for="(image, idx) in groupImages" :key="idx" no-body>
                            <img :src="image" class="card-img-top" />
                            <BCardBody>
                                <h5 class="card-title mb-2">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to
                                    additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </BCardBody>
                        </BCard>
                    </BCardGroup>

                    <BCardGroup>
                        <BCard v-for="i in 3" :key="i" no-body>
                            <BCardBody>
                                <BCardTitle class="mb-2">Card title</BCardTitle>
                                <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to
                                    additional content. This card has even longer content than the first to show that
                                    equal height
                                    action.</p>
                            </BCardBody>
                            <template #footer>
                                <small class="text-body-secondary">Last updated 3 mins ago</small>
                            </template>
                        </BCard>
                    </BCardGroup>
                </BCol>
            </BRow>

            <BRow>
                <BCol cols="12">
                    <h4 class="my-4">Navigation with Card</h4>
                </BCol>
            </BRow>
            <BRow>
                <BCol xl="6">
                    <BCard no-body class="text-center">
                        <template #header>
                            <BNav tabs card-header>
                                <BNavItem active>Active</BNavItem>
                                <BNavItem>Link</BNavItem>
                                <BNavItem disabled>Disabled</BNavItem>
                            </BNav>
                        </template>
                        <BCardBody>
                            <h5 class="card-title mb-2">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <BButton variant="primary">Go somewhere</BButton>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="6">
                    <BCard no-body class="text-center">
                        <template #header>
                            <BNav pills card-header>
                                <BNavItem active>Active</BNavItem>
                                <BNavItem>Link</BNavItem>
                                <BNavItem disabled>Disabled</BNavItem>
                            </BNav>
                        </template>
                        <BCardBody>
                            <h5 class="card-title mb-2">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <BButton variant="primary">Go somewhere</BButton>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BCard, BCardBody, BCardHeader, BCardTitle, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

import small1 from '@/assets/images/stock/small-1.jpg'
import small2 from '@/assets/images/stock/small-2.jpg'
import small3 from '@/assets/images/stock/small-3.jpg'
import small4 from '@/assets/images/stock/small-4.jpg'
import small5 from '@/assets/images/stock/small-5.jpg'
import small7 from '@/assets/images/stock/small-7.jpg'
import small8 from '@/assets/images/stock/small-8.jpg'
import small9 from '@/assets/images/stock/small-9.jpg'

const images = [small2, small3, small4, small5]
const groupImages = [small7, small8, small9]

usePageMeta('Cards')
</script>

<style scoped></style>