<template>
    <BRow>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">Parent/Guardian Name</label>
                <BFormInput type="text"  name="parent_name" placeholder="e.g., John Doe" required/>
            </div>
        </BCol>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">Relation</label>
                <BFormInput type="text"  name="relation" placeholder="e.g., Father, Mother" required/>
            </div>
        </BCol>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">Parent Phone</label>
                <BFormInput type="tel" name="parent_phone" placeholder="e.g., +1 555 123 4567" required/>
            </div>
        </BCol>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">Parent Email</label>
                <BFormInput type="email" name="parent_email" placeholder="e.g., parent@example.com"
                    required/>
            </div>
        </BCol>
    </BRow>
</template>

<script setup lang="ts">
import { BCol, BFormInput, BRow } from 'bootstrap-vue-next';


</script>

<style scoped></style>