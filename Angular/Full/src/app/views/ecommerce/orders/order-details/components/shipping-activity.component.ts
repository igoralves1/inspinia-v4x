import {Component} from '@angular/core';

type TimelineItemType = {
    date?: string;
    time?: string;
    title: string;
    description: string;
    deliveryBy: string;
    trackingNo: string;
}

@Component({
    selector: 'app-shipping-activity',
    imports: [],
    template: `
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Shipping Activity</h4>
            </div>
            <div class="card-body p-4">
                <div class="timeline">
                    @for (item of orderTimeline; track $index; let last = $last) {
                        <div class="timeline-item d-flex align-items-stretch">
                            <div class="timeline-time pe-3 text-muted"> {{ item.date && item.date + ', ' + item.time }}

                            </div>
                            <div class="timeline-dot {{item.date ? 'bg-success' : 'bg-light'}}"></div>
                            <div class="timeline-content ps-3 {{!last ? 'pb-5' : ''}}">
                                <h5 class="mb-1">{{ item.title }}</h5>
                                <p class="mb-1 text-muted">{{ item.description }}</p>
                                <p class="mb-1 text-muted fs-xxs">Tracking No: <a href="javascript:void(0)"
                                                                                  class="link-primary fw-semibold text-decoration-underline">{{ item.trackingNo }}</a>
                                </p>
                                <span class="fw-semibold fs-xxs">By {{ item.deliveryBy }}</span>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>
    `,
    styles: ``
})
export class ShippingActivityComponent {
    orderTimeline: TimelineItemType[] = [
        {
            title: 'Pending Delivery',
            description: 'The package is out for delivery and will reach you shortly.',
            trackingNo: 'TRK123456789',
            deliveryBy: 'Delivery Agent',
        },
        {
            date: 'Today',
            time: '9:00 AM',
            title: 'Out for Delivery',
            description: 'Courier picked up the package for final delivery.',
            trackingNo: 'TRK123456789',
            deliveryBy: 'Local Courier',
        },
        {
            date: 'Yesterday',
            time: '3:15 PM',
            title: 'Arrived at Local Hub',
            description: 'Shipment arrived at the nearest delivery center.',
            trackingNo: 'TRK123456789',
            deliveryBy: 'Sorting Facility',
        },
        {
            date: 'Monday',
            time: '6:00 PM',
            title: 'Departed Transit Facility',
            description: 'Package left the main transit facility and is en route to the local hub.',
            trackingNo: 'TRK123456789',
            deliveryBy: 'Central Logistics',
        },
        {
            date: 'Monday',
            time: '8:00 AM',
            title: 'Arrived at Transit Facility',
            description: 'Package arrived at the central distribution hub for processing.',
            trackingNo: 'TRK123456789',
            deliveryBy: 'Transit Center',
        },
        {
            date: 'Last Saturday',
            time: '2:00 PM',
            title: 'Dispatched from Warehouse',
            description: 'Package was picked up and dispatched by carrier from warehouse.',
            trackingNo: 'TRK123456789',
            deliveryBy: 'Fulfillment Center',
        },
        {
            date: 'Last Friday',
            time: '5:00 PM',
            title: 'Order Confirmed',
            description: 'The order was successfully placed and is now being processed.',
            trackingNo: 'TRK123456789',
            deliveryBy: 'Order System',
        }
    ];

}
