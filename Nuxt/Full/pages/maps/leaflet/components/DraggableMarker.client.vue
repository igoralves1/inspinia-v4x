<template>
    <BRow class="g-3">
        <BCol lg="4">
            <h5 class="mb-1">Draggable Marker with Popup</h5>
            <p class="text-muted mb-0">
                Allows dragging a marker with a popup that displays dynamic content.
            </p>
        </BCol>

        <BCol lg="8">
            <LMap v-if="customIcon" ref="map" :zoom="zoom" :center="[48.817152, 2.455]" style="height: 300px; width: 100%">
                <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors" />
                <LMarker :lat-lng="markerLatLng" :icon="customIcon" draggable @update:lat-lng="onMarkerDrag">
                    <LPopup>
                        <b>You're here!</b>
                    </LPopup>
                </LMarker>
            </LMap>
            <div v-else>
                <p>Loading map assets...</p>
            </div>

        </BCol>
    </BRow>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Icon, LatLngExpression } from 'leaflet'

import markerIconUrl from '/images/leaflet/marker-icon.png'
import markerShadowUrl from '/images/leaflet/marker-shadow.png'

import {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
} from '@vue-leaflet/vue-leaflet'

const nuxtApp = useNuxtApp()

const zoom = ref(12)
const markerLatLng = ref<LatLngExpression>([48.817152, 2.455])
const customIcon = ref<Icon | null>(null)

onMounted(() => {
    const L = nuxtApp.$L

    if (L) {
        customIcon.value = L.icon({
            iconUrl: markerIconUrl,
            shadowUrl: markerShadowUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            shadowSize: [41, 41],
            shadowAnchor: [12, 41],
        })
    }
})

function onMarkerDrag(newLatLng: { lat: number; lng: number }) {
    console.log('Marker dragged to:', newLatLng)
    markerLatLng.value = [newLatLng.lat, newLatLng.lng]
}
</script>
