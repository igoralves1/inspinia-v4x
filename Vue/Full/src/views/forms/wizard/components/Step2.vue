<template>
    <BRow>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">Street Address</label>
                <BFormInput type="text"  name="street" placeholder="123 Main St" required/>
            </div>
        </BCol>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">City</label>
                <BFormInput type="text"  name="city" placeholder="e.g., New York" required/>
            </div>
        </BCol>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">State</label>
                <BFormInput type="text"  name="state" placeholder="e.g., California" required/>
            </div>
        </BCol>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">Zip Code</label>
                <BFormInput type="text"  name="zip" placeholder="e.g., 10001" required/>
            </div>
        </BCol>
    </BRow>
</template>

<script setup lang="ts">
import { BCol, BFormInput, BRow } from 'bootstrap-vue-next';


</script>

<style scoped></style>