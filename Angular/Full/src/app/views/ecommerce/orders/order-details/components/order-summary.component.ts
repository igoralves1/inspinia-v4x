import {Component, Input} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {OrderType} from '@/app/views/ecommerce/orders/types';
import {toTitleCase} from '@/app/utils/string-utils';
import {currency} from '@/app/constants';
import {RouterLink} from '@angular/router';

type OrderItemType = {
    image: string;
    name: string;
    vendor: string;
    price: number;
    quantity: number;
    total: number;
}

@Component({
    selector: 'app-order-summary',
    imports: [
        NgIcon,
        RouterLink
    ],
    template: `
        <div class="card">
            <div class="card-header align-items-start p-4">
                <div>
                    <h3 class="mb-1 d-flex fs-xl align-items-center">Order #{{ order.id }}</h3>
                    <p class="text-muted mb-3">
                        <ng-icon name="tablerCalendar"/>
                        {{ order.date }}
                        <small class="text-muted">{{ order.time }}</small></p>
                    <span
                        class="badge badge-soft-success fs-xxs badge-label me-1 d-inline-flex gap-1 flex-wrap align-items-center"
                        [class]="
                              order.paymentStatus === 'pending' ? 'badge-soft-warning' :
                              order.paymentStatus === 'failed' ? 'badge-soft-danger' :
                              'badge-soft-success'
                            "
                    ><ng-icon
                        name="tablerPointFill" class=" fs-sm"/>
                        {{ toTitleCase(order.paymentStatus) }}</span>
                    <span class="badge o fs-xxs badge-label d-inline-flex gap-1 flex-wrap align-items-center"
                          [class]="
                          order.orderStatus === 'processing' ? 'badge-soft-warning' :
                          order.orderStatus === 'cancelled' ? 'badge-soft-danger' :
                          order.orderStatus === 'shipped' ? 'badge-soft-info' :
                          'badge-soft-success'
                        "
                    ><ng-icon
                        name="tablerTruck" class=" fs-sm"/>
                        {{ toTitleCase(order.orderStatus) }}
                    </span>
                </div>
                <div class="ms-auto">
                    <a href="javascript: void(0);" class="btn btn-light me-1">
                        <ng-icon name="tablerPencil" class="me-1"/>
                        Modify</a>
                    <a href="javascript: void(0);" class="btn btn-danger">
                        <ng-icon name="tablerTrash" class="me-1"/>
                        Delete</a>
                </div>
            </div>
            <div class="card-body px-4">
                <h4 class="fs-sm mb-3">Order Summary</h4>
                <div class="table-responsive">
                    <table class="table table-bordered table-custom table-nowrap align-middle mb-1">
                        <thead class="bg-light align-middle bg-opacity-25 thead-sm">
                        <tr class="text-uppercase fs-xxs">
                            <th>Product</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th class="text-end">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                            @for (item of orderItems; track $index) {
                                <tr>
                                    <td>
                                        <div class="d-flex">
                                            <div class="avatar-md me-3">
                                                <img [src]="item.image" [alt]="item.name" class="img-fluid rounded"/>
                                            </div>
                                            <div>
                                                <h5 class="mb-1">
                                                    <a routerLink="/ecommerce/products/WB-10245"
                                                       class="link-reset">{{ item.name }}</a>
                                                </h5>
                                                <p class="text-muted mb-0 fs-xxs">by: {{ item.vendor }}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{{ currency }}{{ item.price.toFixed(2) }}</td>
                                    <td>{{ item.quantity }}</td>
                                    <td class="text-end">{{ currency }}{{ item.total.toFixed(2) }}</td>
                                </tr>
                            }


                        <tr class="border-top">
                            <td colspan="3" class="text-end fw-semibold">Subtotal</td>
                            <td class="text-end">{{ currency }}507.48</td>
                        </tr>

                        <tr>
                            <td colspan="3" class="text-end fw-semibold">Tax (10%)</td>
                            <td class="text-end">{{ currency }}50.75</td>
                        </tr>

                        <tr>
                            <td colspan="3" class="text-end fw-semibold">Discount (5%)</td>
                            <td class="text-end text-danger fw-semibold">-{{ currency }}25.37</td>
                        </tr>

                        <tr>
                            <td colspan="3" class="text-end fw-semibold">Shipping fee</td>
                            <td class="text-end">{{ currency }}10.00</td>
                        </tr>

                        <tr class="border-top">
                            <td colspan="3" class="text-end fw-bold text-uppercase">Grand Total</td>
                            <td class="fw-bold text-end table-active">{{ currency }}543.86</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class OrderSummaryComponent {
    @Input() order!: OrderType
    protected readonly toTitleCase = toTitleCase;
    protected readonly currency = currency;

    orderItems: OrderItemType[] = [
        {
            image: 'assets/images/products/1.png',
            name: 'Wireless Earbuds',
            vendor: 'My Furniture',
            price: 79.99,
            quantity: 2,
            total: 159.98
        },
        {
            image: 'assets/images/products/2.png',
            name: 'Smart Watch',
            vendor: 'Tech World',
            price: 199.00,
            quantity: 1,
            total: 199.00
        },
        {
            image: 'assets/images/products/3.png',
            name: 'Gaming Mouse',
            vendor: 'Pro Gamerz',
            price: 49.50,
            quantity: 3,
            total: 148.50
        }
    ];
}
