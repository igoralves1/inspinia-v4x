<template>
    <BRow class="g-3">
        <BCol lg="4">
            <h5 class="mb-1">Basic Map</h5>
            <p class="text-muted mb-0">
                A simple Leaflet map centered with default tile layer and controls.
            </p>
        </BCol>

        <BCol lg="8">
            <LMap v-if="loaded" :zoom="zoom" :center="center" style="height: 300px; width: 100%"
                :scrollWheelZoom="false">
                <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
            </LMap>
        </BCol>
    </BRow>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { BCol, BRow } from 'bootstrap-vue-next'

import 'leaflet/dist/leaflet.css'

const center: [number, number] = [42.35, -71.08]
const zoom = 10
const loaded = ref(false)

// Lazy-load Vue-Leaflet components only on client
let LMap: any, LTileLayer: any
onMounted(async () => {
    const leaflet = await import('@vue-leaflet/vue-leaflet')
    LMap = leaflet.LMap
    LTileLayer = leaflet.LTileLayer
    loaded.value = true

    // Fix default Leaflet marker icons (TypeScript safe)
    const L = (await import('leaflet')).default
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: (await import('leaflet/dist/images/marker-icon-2x.png')).default,
        iconUrl: (await import('leaflet/dist/images/marker-icon.png')).default,
        shadowUrl: (await import('leaflet/dist/images/marker-shadow.png')).default,
    })
})

</script>
