import {Component, Input} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {OrderStatisticsType} from '@/app/views/ecommerce/orders/types';

@Component({
    selector: 'app-statistics-widget',
    imports: [
        NgIcon
    ],
    template: `
        <div class="card mb-1">
            <div class="card-body">
                <div class="d-flex align-items-center gap-2 mb-3">
                    <div class="avatar-md flex-shrink-0">
                            <span class="avatar-title text-bg-{{item.variant}} rounded-circle fs-22">
                                <ng-icon [name]="item.icon" />
                            </span>
                    </div>
                    <h3 class="mb-0">{{ item.count }}</h3>
                </div>
                <p class="mb-0">
                    {{item.title}}
                    <span class="float-end badge badge-soft-{{item.variant}}">{{ item.change }}%</span>
                </p>
            </div>
        </div>
    `,
    styles: ``
})
export class StatisticsWidgetComponent {
    @Input() item!: OrderStatisticsType
}
