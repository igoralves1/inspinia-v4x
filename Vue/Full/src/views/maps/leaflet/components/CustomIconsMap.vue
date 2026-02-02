<template>
  <BRow class="g-3">
    <BCol lg="4">
      <h5 class="mb-1">Custom Icons</h5>
      <p class="text-muted mb-0">
        Demonstrates using custom image icons for Leaflet map markers.
      </p>
    </BCol>

    <BCol lg="8">
      <LMap
        v-if="isReady"
        ref="map"
        :zoom="zoom"
        :center="[51.5, -0.09]"
        style="height: 300px; width: 100%"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
        />

        <LMarker
          v-for="marker in markers"
          :key="marker.id"
          :lat-lng="marker.latLng"
          :icon="marker.icon"
        />
      </LMap>

      <div v-else>
        <p>Loading map assets...</p>
      </div>
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import L from "leaflet"; 
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

const zoom = ref(10);
const isReady = ref(false);
const markers = ref<any[]>([]);

onMounted(() => {
  const createLeafIcon = (color: "green" | "red" | "orange") => {
    return L.icon({
      iconUrl: `/images/leaflet/leaf-${color}.png`,
      shadowUrl: "/images/leaflet/leaf-shadow.png",
      iconSize: [38, 95],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    });
  };

  markers.value = [
    { id: 1, latLng: [51.5, -0.09], icon: createLeafIcon("red") },
    { id: 2, latLng: [51.4, -0.51], icon: createLeafIcon("green") },
    { id: 3, latLng: [51.49, -0.45], icon: createLeafIcon("orange") },
  ];

  isReady.value = true;
});
</script>

<style>

</style>
