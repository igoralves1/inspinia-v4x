<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Leaflet" subTitle="Maps" />
        </BContainer>

        <BContainer>
            <BRow>
                <BCol lg="12">
                    <BCard no-body>
                        <BCardHeader class="border-0 border-bottom border-dashed">
                            <h4 class="card-title">Examples</h4>
                        </BCardHeader>

                        <BCardBody>
                            <BasicMap />

                            <div class="my-4 border-top border-dashed"></div>

                            <ShapeMapClient />

                            <div class="my-4 border-top border-dashed"></div>
                            <DraggableMarkerClient />

                            <div class="my-4 border-top border-dashed"></div>

                            <CustomIconsMapClient />

                            <div class="my-4 border-top border-dashed"></div>

                            <LayerControlMapClient />

                            <div class="my-4 border-top border-dashed"></div>

                            <ChoroplethMapVue />
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
import BasicMap from './components/BasicMap.vue';
import ShapeMapClient from './components/ShapeMap.vue';
import DraggableMarkerClient from './components/DraggableMarker.vue';
import CustomIconsMapClient from './components/CustomIconsMap.vue';
import LayerControlMapClient from './components/LayerControlMap.vue';
import ChoroplethMapVue from './components/ChoroplethMap.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

usePageMeta('Leaflet Maps')
</script>

<style scoped></style>