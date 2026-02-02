<template>
    <BRow>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">Choose Course</label>
                <BFormSelect name="course" required>
                    <option value="">Select</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Medical">Medical</option>
                    <option value="Business">Business</option>
                </BFormSelect>
            </div>
        </BCol>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">Enrollment Type</label>
                <BFormSelect name="enrollment" required>
                    <option value="">Select</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                </BFormSelect>
            </div>
        </BCol>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">Preferred Batch Time</label>
                <BFormSelect name="batch_time" required>
                    <option value="">Select Time</option>
                    <option value="Morning">Morning (8am – 12pm)</option>
                    <option value="Afternoon">Afternoon (1pm – 5pm)</option>
                    <option value="Evening">Evening (6pm – 9pm)</option>
                </BFormSelect>
            </div>
        </BCol>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">Mode of Study</label>
                <BFormSelect name="mode" required>
                    <option value="">Select Mode</option>
                    <option value="Offline">Offline</option>
                    <option value="Online">Online</option>
                    <option value="Hybrid">Hybrid</option>
                </BFormSelect>
            </div>
        </BCol>
    </BRow>
</template>

<script setup lang="ts">
import { BCol, BFormSelect, BRow } from 'bootstrap-vue-next';


</script>

<style scoped></style>