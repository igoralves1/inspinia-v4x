<template>
    <div class="mb-3">
        <label class="form-label">Upload ID Proof</label>
        <input class="form-control" type="file" name="id_proof" required />
    </div>
    <div class="mb-3">
        <label class="form-label">Upload Previous Marksheet</label>
        <input class="form-control" type="file" name="marksheet" required />
    </div>
</template>

<script setup lang="ts">
import { BFormInput } from 'bootstrap-vue-next';


</script>

<style scoped></style>