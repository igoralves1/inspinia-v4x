<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Google" subTitle="Maps" />
        </BContainer>

        <BContainer>
            <BRow>
                <BCol xs="12">
                    <BCard no-body>
                        <BCardHeader>
                            <div class="flex-grow-1">
                                <h4 class="card-title">Examples</h4>
                            </div>
                        </BCardHeader>

                        <BCardBody>
                            <BRow class="g-3">
                                <BCol lg="4">
                                    <h5 class="mb-1">Basic Google Map</h5>
                                    <p class="text-muted mb-0">Displays a basic embedded Google Map.</p>
                                </BCol>
                                <BCol lg="8">
                                    <iframe
                                        src="https://www.google.com/maps/embed/v1/place?q=Eiffel+Tower&key=AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4"
                                        style="width: 100%; height: 360px; overflow:hidden; border:0;"></iframe>
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-3">
                                <BCol lg="4">
                                    <h5 class="mb-1">Street View Google Map</h5>
                                    <p class="text-muted mb-0">Displays a satellite-styled view of the map.</p>
                                </BCol>
                                <BCol lg="8">
                                    <iframe
                                        src="https://www.google.com/maps/embed/v1/place?q=Statue+of+Liberty&key=AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4&zoom=18&maptype=satellite"
                                        style="width: 100%; height: 360px; overflow:hidden; border:0;"></iframe>
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-3">
                                <BCol lg="4">
                                    <h5 class="mb-1">Dark Google Map</h5>
                                    <p class="text-muted mb-0">A dark-mode styled map using CSS filters.</p>
                                </BCol>
                                <BCol lg="8">
                                    <iframe
                                        src="https://www.google.com/maps/embed/v1/place?q=Sydney+Opera+House&key=AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4"
                                        style="width: 100%; height: 360px; overflow:hidden; border:0;filter: invert(100%) hue-rotate(180deg);"></iframe>
                                </BCol>
                            </BRow>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Google Maps')
</script>

<style scoped></style>