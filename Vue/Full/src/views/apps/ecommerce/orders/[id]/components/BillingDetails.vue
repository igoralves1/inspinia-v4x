<template>
    <BCard no-body>
        <BCardHeader class="d-flex justify-content-between border-dashed align-items-center">
            <BCardTitle tag="h4">Billing Details</BCardTitle>
            <button class="btn btn-default btn-sm btn-icon rounded-circle">
                <Icon icon="tabler:pencil" class="fs-lg" />
            </button>
        </BCardHeader>

        <BCardBody>
            <div class="d-flex align-items-start mb-0">
                <div class="flex-grow-1">
                    <h5 class="mb-2">John Doe</h5>
                    <p class="text-muted mb-0">
                        5678 Oak Avenue,<br />
                        Suite 101,<br />
                        Chicago, IL 60611,<br />
                        United States
                    </p>
                </div>
                <div class="ms-auto">
                    <span class="badge bg-primary-subtle text-primary">Billing Address</span>
                </div>
            </div>

            <hr />

            <div class="d-flex align-items-center">
                <div class="avatar-sm me-2">
                    <img :src="mastercard" alt="Mastercard" width="32" height="32" class="img-fluid rounded" />
                </div>
                <div>
                    <h5 class="fs-xs mb-1">Mastercard Ending in 4242</h5>
                    <p class="text-muted mb-0 fs-xs">Expiry: 08/26</p>
                </div>
                <div class="ms-auto">
                    <span class="badge bg-success-subtle text-success">Paid</span>
                </div>
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, BCardTitle } from 'bootstrap-vue-next';
import mastercard from '@/assets/images/cards/mastercard.svg';
import { Icon } from '@iconify/vue';
</script>

<style scoped>
</style>
