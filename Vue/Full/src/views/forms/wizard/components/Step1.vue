<template>
    <BRow>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">Full Name</label>
                <BFormInput type="text"  placeholder="Enter your full name" name="fullname" required/>
            </div>
        </BCol>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">Email</label>
                <BFormInput type="email"  placeholder="Enter your email" name="email" required/>
            </div>
        </BCol>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">Phone Number</label>
                <BFormInput type="tel"  name="phone" placeholder="Enter your phone number" required/>
            </div>
        </BCol>
        <BCol xl="6">
            <div class="mb-3">
                <label class="form-label">Date of Birth</label>
                <FlatPickr class="form-control"  v-model="date" :config="config"  placeholder="Select you DOB"
                     name="dob" required/>
            </div>
        </BCol>
    </BRow>
</template>

<script setup lang="ts">
import { BCol, BFormInput, BRow } from 'bootstrap-vue-next';
import { ref } from 'vue';

const date = ref<string | Date | null>()

const config = ref({
    dateFormat: 'd M, Y',
})

</script>

<style scoped></style>