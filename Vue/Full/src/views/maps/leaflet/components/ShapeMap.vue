<template>
  <BRow class="g-3">
    <BCol lg="4">
      <h5 class="mb-1">Marker, Circle & Polygon</h5>
      <p class="text-muted mb-0">A simple Leaflet map centered with default tile layer and controls.</p>
    </BCol>

    <BCol lg="8">
      <LMap ref="map" :zoom="zoom" :center="[51.5, -0.09]" style="height: 300px; width: 100%">
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        />
        <LMarker :lat-lng="[51.5, -0.09]" :icon="customIcon" />
        <LCircle :lat-lng="[51.508, -0.11]" :radius="500" color="red" fill-color="#f03" :fill-opacity="0.5" />
        <LPolygon :lat-lngs="polygonCoordinates" />
      </LMap>
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { icon, type LatLngExpression, type Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import Vue components
import { LMap, LTileLayer, LMarker, LCircle, LPolygon } from '@vue-leaflet/vue-leaflet';

import markerIcon from '@/assets/images/leaflet/marker-icon.png';
import markerShadow from '@/assets/images/leaflet/marker-shadow.png';

const zoom = ref(12);
const polygonCoordinates = ref<LatLngExpression[]>([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]);

const customIcon: Icon = icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
});
</script>
