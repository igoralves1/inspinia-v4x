<template>
    <BRow class="g-3">
        <BCol lg="4">
            <h5 class="mb-1">Custom Icons</h5>
            <p class="text-muted mb-0">
                Demonstrates using custom image icons for Leaflet map markers.
            </p>
        </BCol>

        <BCol lg="8">
            <LMap v-if="geojson" ref="map" :zoom="zoom" :center="center" style="height: 300px; width: 100%">
                <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors" />

                <LGeoJson :geojson="geojson" :options-style="styleFunction" />
            </LMap>
            <div v-else>
                <p>Loading map data...</p>
            </div>
        </BCol>
    </BRow>
</template>

<script setup lang="ts">
import type { PointExpression } from 'leaflet'
import { onMounted, ref } from 'vue'

// Import only the Vue components

// --- Refs for map and data ---
const zoom = ref(3)
const center = ref<PointExpression>([44.2669, -72.576])
const geojson = ref<any>(null) // Will hold the loaded GeoJSON data

// --- Load GeoJSON Data ---
onMounted(async () => {
    try {
        const response = await fetch('/data/leaflet.json') // Fetches from the /public directory
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        geojson.value = await response.json()
    } catch (error) {
        console.error('Failed to fetch GeoJSON data:', error)
    }
})

// --- Styling Logic ---
const getColor = (density: number) => {
    return density > 1000 ? '#800026' :
        density > 500 ? '#BD0026' :
            density > 200 ? '#E31A1C' :
                density > 100 ? '#FC4E2A' :
                    density > 50 ? '#FD8D3C' :
                        density > 20 ? '#FEB24C' :
                            density > 10 ? '#FED976' :
                                '#FFEDA0'
}

const styleFunction = (feature: any) => {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
    }
}
</script>
