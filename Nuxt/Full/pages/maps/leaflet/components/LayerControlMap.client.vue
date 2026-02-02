<template>
    <BRow class="g-3">
        <BCol lg="4">
            <h5 class="mb-1">Draggable Marker with Popup</h5>
            <p class="text-muted mb-0">
                Allows dragging a marker with a popup that displays dynamic content.
            </p>
        </BCol>

        <BCol lg="8">
            <LMap v-if="isReady" ref="map" :zoom="zoom" :center="center" style="height: 300px; width: 100%">
                <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors" layer-type="base" name="Street Map" />
                <LTileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
                    attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    layer-type="base" name="Watercolor" />

                <LLayerGroup layer-type="overlay" name="Cities">
                    <LMarker :lat-lng="[39.61, -105.02]" :icon="customIcon">
                        <LPopup>This is Littleton, CO.</LPopup>
                    </LMarker>
                    <LMarker :lat-lng="[39.74, -104.99]" :icon="customIcon">
                        <LPopup>This is Denver, CO.</LPopup>
                    </LMarker>
                    <LMarker :lat-lng="[39.73, -104.8]" :icon="customIcon">
                        <LPopup>This is Aurora, CO.</LPopup>
                    </LMarker>
                    <LMarker :lat-lng="[39.77, -105.23]" :icon="customIcon">
                        <LPopup>This is Golden, CO.</LPopup>
                    </LMarker>
                </LLayerGroup>

                <LControlLayers />
            </LMap>
            <div v-else>
                <p>Loading map assets...</p>
            </div>
        </BCol>
    </BRow>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Icon as LeafletIcon, LatLngExpression } from 'leaflet'

// Import assets
import markerIcon from '/images/leaflet/marker-icon.png'
import markerShadow from '/images/leaflet/marker-shadow.png'

// Import Vue components
import {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LControlLayers,
    LLayerGroup,
} from '@vue-leaflet/vue-leaflet'

const nuxtApp = useNuxtApp()

const zoom = ref(10)
const center = ref<LatLngExpression>([39.73, -104.99])
const customIcon = ref<LeafletIcon | null>(null)
const isReady = ref(false)

onMounted(() => {
    const L = nuxtApp.$L

    if (L) {

        customIcon.value = L.icon({
            iconUrl: markerIcon,
            shadowUrl: markerShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            shadowSize: [41, 41],
            shadowAnchor: [12, 41],
        })

        isReady.value = true
    }
})
</script>
