<template>
    <BCard no-body>
        <BCardHeader class="d-flex justify-content-between border-dashed align-items-center">
            <BCardTitle tag="h4">Shipping Address</BCardTitle>
            <button class="btn-default btn-sm btn btn-icon rounded-circle">
                <Icon icon="tabler:pencil" class="fs-lg" />
            </button>
        </BCardHeader>

        <BCardBody>
            <iframe
                src="https://www.google.com/maps/embed/v1/place?q=New+York+University&key=AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4"
                style="width: 100%; height: 180px; border: 0; overflow: hidden;"></iframe>

            <div class="d-flex align-items-start my-3">
                <div class="flex-grow-1">
                    <h5 class="mb-2">John Doe</h5>
                    <p class="text-muted mb-1">
                        1234 Elm Street,<br />
                        Apt 567,<br />
                        Springfield, IL 62704,<br />
                        United States
                    </p>
                    <p class="mb-0 text-muted">
                        <strong>Phone:</strong> (123) 456-7890<br />
                        <strong>Email:</strong> john.doe@example.com
                    </p>
                </div>
                <div class="ms-auto">
                    <span class="badge bg-success-subtle text-success">Primary Address</span>
                </div>
            </div>

            <BAlert variant="warning" class="mb-0">
                <h6 class="mb-2">Delivery Instructions:</h6>
                <p class="fst-italic mb-0">
                    Please leave the package at the front door if no one is home. Call upon arrival.
                </p>
            </BAlert>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { BAlert, BCard, BCardBody, BCardHeader, BCardTitle } from 'bootstrap-vue-next';
</script>

<style scoped>
/* optional additional styling */
</style>
