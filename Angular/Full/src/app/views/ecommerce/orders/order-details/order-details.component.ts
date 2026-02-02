import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {OrderSummaryComponent} from '@/app/views/ecommerce/orders/order-details/components/order-summary.component';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderType} from '@/app/views/ecommerce/orders/types';
import {orders} from '@/app/views/ecommerce/orders/data';
import {
    ShippingActivityComponent
} from '@/app/views/ecommerce/orders/order-details/components/shipping-activity.component';
import {CustomerDetailComponent} from '@/app/views/ecommerce/orders/order-details/components/customer-detail.component';
import {
    ShippingAddressComponent
} from '@/app/views/ecommerce/orders/order-details/components/shipping-address.component';
import {BillingDetailsComponent} from '@/app/views/ecommerce/orders/order-details/components/billing-details.component';

@Component({
  selector: 'app-order-details',
    imports: [
        PageTitleComponent,
        OrderSummaryComponent,
        ShippingActivityComponent,
        CustomerDetailComponent,
        ShippingAddressComponent,
        BillingDetailsComponent
    ],
  templateUrl: './order-details.component.html',
  styles: ``
})
export class OrderDetailsComponent implements OnInit {

    orderId!: OrderType['id'];
    order!: OrderType

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (!id) {
            this.router.navigate(['/error/404']);
            return;
        }

        const matchedOrder = orders.find(i => i.id === id);
        this.order = matchedOrder as OrderType;
        if (matchedOrder) {
            this.orderId = matchedOrder?.id;
        } else {
            this.router.navigate(['/error/404']);
        }
    }

}
