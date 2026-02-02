<template>
    <BCard no-body>
        <BCardHeader>
            <BCardTitle as="h4">Shipping Activity</BCardTitle>
        </BCardHeader>
        <BCardBody class="p-4">
            <div class="timeline">
                <div v-for="(item, idx) in shippingTimeline" :key="idx"
                    class="timeline-item d-flex align-items-stretch">
                    <div class="timeline-time pe-3 text-muted">{{ item.time ?? '' }}</div>
                    <div :class="`timeline-dot bg-${item.variant}`" />
                    <div :class="`timeline-content ps-3 ${idx !== shippingTimeline.length - 1 ? 'pb-5' : ''}`">
                        <h5 class="mb-1">{{ item.title }}</h5>
                        <p class="mb-1 text-muted">{{ item.description }}</p>
                        <p class="mb-1 text-muted fs-xxs">
                            Tracking No:
                            <RouterLink to="" class="link-primary fw-semibold text-decoration-underline">
                                {{ item.trackingNo }}
                            </RouterLink>
                        </p>
                        <span class="fw-semibold fs-xxs">By {{ item.by }}</span>
                    </div>
                </div>
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardHeader, BCardBody, BCardTitle } from "bootstrap-vue-next";

type TimelineEvent = {
    time: string | null
    title: string
    description: string
    trackingNo: string
    by: string
    variant: string
}


const shippingTimeline: TimelineEvent[] = [
    {
        time: null,
        title: 'Pending Delivery',
        description: 'The package is out for delivery and will reach you shortly.',
        trackingNo: 'TRK123456789',
        by: 'Delivery Agent',
        variant: 'light',
    },
    {
        time: 'Today, 9:00 AM',
        title: 'Out for Delivery',
        description: 'Courier picked up the package for final delivery.',
        trackingNo: 'TRK123456789',
        by: 'Local Courier',
        variant: 'success',
    },
    {
        time: 'Yesterday, 3:15 PM',
        title: 'Arrived at Local Hub',
        description: 'Shipment arrived at the nearest delivery center.',
        trackingNo: 'TRK123456789',
        by: 'Sorting Facility',
        variant: 'success',
    },
    {
        time: 'Monday, 6:00 PM',
        title: 'Departed Transit Facility',
        description: 'Package left the main transit facility and is en route to the local hub.',
        trackingNo: 'TRK123456789',
        by: 'Central Logistics',
        variant: 'success',
    },
    {
        time: 'Monday, 8:00 AM',
        title: 'Arrived at Transit Facility',
        description: 'Package arrived at the central distribution hub for processing.',
        trackingNo: 'TRK123456789',
        by: 'Transit Center',
        variant: 'success',
    },
    {
        time: 'Last Saturday, 2:00 PM',
        title: 'Dispatched from Warehouse',
        description: 'Package was picked up and dispatched by carrier from warehouse.',
        trackingNo: 'TRK123456789',
        by: 'Fulfillment Center',
        variant: 'success',
    },
    {
        time: 'Last Friday, 5:00 PM',
        title: 'Order Confirmed',
        description: 'The order was successfully placed and is now being processed.',
        trackingNo: 'TRK123456789',
        by: 'Order System',
        variant: 'success',
    },
]



</script>
