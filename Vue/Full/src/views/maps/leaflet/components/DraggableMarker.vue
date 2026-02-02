<template>
  <BRow class="g-3">
    <BCol lg="4">
      <h5 class="mb-1">Draggable Marker with Popup</h5>
      <p class="text-muted mb-0">Allows dragging a marker with a popup that displays dynamic content.</p>
    </BCol>

    <BCol lg="8">
      <LMap ref="map" :zoom="zoom" :center="[48.817152, 2.455]" style="height: 300px; width: 100%">
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        />
        <LMarker :lat-lng="markerLatLng" :icon="customIcon" draggable @update:lat-lng="onMarkerDrag">
          <LPopup>
            <b>You're here!</b>
          </LPopup>
        </LMarker>
      </LMap>
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { icon, type Icon, type LatLng, type LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import Vue components
import { LMap, LMarker, LPopup, LTileLayer } from '@vue-leaflet/vue-leaflet';

// Import assets directly to ensure correct paths
import markerIconUrl from '@/assets/images/leaflet/marker-icon.png';
import markerShadowUrl from '@/assets/images/leaflet/marker-shadow.png';

const zoom = ref(12);
const markerLatLng = ref<LatLngTuple>([48.817152, 2.455]);

// --- FIX 1: Create the icon synchronously ---
// This eliminates the need for onMounted, v-if, and potential null values.
const customIcon: Icon = icon({
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
});

// --- FIX 2: Use the correct event payload type ---
// The event provides a full LatLng object, not just { lat, lng }.
function onMarkerDrag(newLatLng: LatLng) {
  console.log('Marker dragged to:', newLatLng);
  markerLatLng.value = [newLatLng.lat, newLatLng.lng];
}
</script>
