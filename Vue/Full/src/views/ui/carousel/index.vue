<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Carousel" subTitle="UI" />
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
                                A slideshow component for cycling through elements—images or slides of text—like a
                                carousel.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/carousel.html"
                                target="_blank">
                                Carousel on Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol lg="6">
                    <UICard title="Slides Only" isCollapsable>
                        <BCarousel ride="carousel">
                            <BCarouselSlide :img-src="small1" class="img-fluid" />
                            <BCarouselSlide :img-src="small2" class="img-fluid" />
                            <BCarouselSlide :img-src="small3" class="img-fluid" />
                        </BCarousel>
                    </UICard>
                </BCol>

                <BCol lg="6">
                    <UICard title="With Controls" isCollapsable>
                        <BCarousel controls ride="carousel">
                            <BCarouselSlide :img-src="small4" class="img-fluid" />
                            <BCarouselSlide :img-src="small1" class="img-fluid" />
                            <BCarouselSlide :img-src="small2" class="img-fluid" />
                        </BCarousel>
                    </UICard>
                </BCol>

                <BCol lg="6">
                    <UICard title="With Indicators" isCollapsable>
                        <BCarousel controls indicators ride="carousel">
                            <BCarouselSlide :img-src="small3" class="img-fluid" />
                            <BCarouselSlide :img-src="small2" class="img-fluid" />
                            <BCarouselSlide :img-src="small1" class="img-fluid" />
                        </BCarousel>
                    </UICard>
                </BCol>

                <BCol lg="6">
                    <UICard title="With Captions" isCollapsable>
                        <BCarousel id="carouselCaptions" controls ride="carousel">
                            <BCarouselSlide :img-src="small1" caption="First slide label"
                                text="Some representative placeholder content for the first slide." class="img-fluid" />
                            <BCarouselSlide :img-src="small3" caption="Second slide label"
                                text="Some representative placeholder content for the second slide."
                                class="img-fluid" />
                            <BCarouselSlide :img-src="small2" caption="Third slide label"
                                text="Some representative placeholder content for the third slide." class="img-fluid" />
                        </BCarousel>
                    </UICard>
                </BCol>

                <BCol lg="6">
                    <UICard title="Crossfade" isCollapsable>
                        <BCarousel id="carouselCrossfade" controls indicators fade ride="carousel">
                            <BCarouselSlide :img-src="small1" class="img-fluid" />
                            <BCarouselSlide :img-src="small2" class="img-fluid" />
                            <BCarouselSlide :img-src="small3" class="img-fluid" />
                        </BCarousel>
                    </UICard>
                </BCol>

                <BCol lg="6">
                    <UICard title="Interval (Custom speed)" isCollapsable>
                        <BCarousel id="carouselInterval" controls indicators :interval="2000" ride="carousel">
                            <BCarouselSlide :img-src="small4" class="img-fluid" />
                            <BCarouselSlide :img-src="small3" class="img-fluid" />
                            <BCarouselSlide :img-src="small2" class="img-fluid" />
                        </BCarousel>
                    </UICard>
                </BCol>

                <BCol lg="6">
                    <UICard title="Dark Variant" isCollapsable>
                        <BCarousel controls indicators ride="carousel" class="carousel-dark">
                            <BCarouselSlide :img-src="small8" caption="First slide label"
                                text="Dark variant text example." class="img-fluid" />
                            <BCarouselSlide :img-src="small9" caption="Second slide label"
                                text="Dark variant text example." class="img-fluid" />
                            <BCarouselSlide :img-src="small10" caption="Third slide label"
                                text="Dark variant text example." class="img-fluid" />
                        </BCarousel>
                    </UICard>
                </BCol>
            </BRow>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BCard, BCardBody, BCardHeader, BCardTitle, BCarousel, BCarouselSlide, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

import small1 from '@/assets/images/stock/small-1.jpg'
import small2 from '@/assets/images/stock/small-2.jpg'
import small3 from '@/assets/images/stock/small-3.jpg'
import small4 from '@/assets/images/stock/small-4.jpg'
import small8 from '@/assets/images/stock/small-8.jpg'
import small9 from '@/assets/images/stock/small-9.jpg'
import small10 from '@/assets/images/stock/small-10.jpg'
usePageMeta('Carousel')
</script>

<style scoped></style>