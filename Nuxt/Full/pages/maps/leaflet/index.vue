<template>
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
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '~/components/PageBreadcrumb.vue';
import BasicMap from './components/BasicMap.client.vue';
import ShapeMapClient from './components/ShapeMap.client.vue';
import DraggableMarkerClient from './components/DraggableMarker.client.vue';
import CustomIconsMapClient from './components/CustomIconsMap.client.vue';
import LayerControlMapClient from './components/LayerControlMap.client.vue';
import ChoroplethMapVue from './components/ChoroplethMap.client.vue';

usePageTitle('Leaflet Maps')
</script>

<style scoped></style>