import {Component, Input} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {StatisticWidgetType} from '@/app/types';


@Component({
    selector: 'app-seller-statistic-widget',
    imports: [
        NgIcon
    ],
    template: `
        <div class="card border-0 bg-{{item.variant}} bg-opacity-10">
            <div class="card-body">
                <h5 title="Number of Orders">{{ item.title }}</h5>
                <div class="d-flex align-items-center gap-2 my-3">
                    <div class="avatar-md flex-shrink-0">
                       <span
                           class="avatar-title text-bg-{{item.variant}} bg-opacity-90 rounded-circle fs-22">
                              <ng-icon [name]="item.icon"/>
                         </span>
                    </div>
                    <h3 class="mb-0">{{ item.count.prefix }}{{ item.count.value }}{{ item.count.suffix }}</h3>
                </div>
                <p class="mb-0 d-flex align-items-center gap-1">
                    <ng-icon name="tablerPointFill" class="text-{{item.variant}}"/>
                    <span class="text-nowrap text-muted">{{ item.subTitle }}</span>
                    <span class="ms-auto"><b>{{ item.totalCount.prefix }}{{ item.totalCount.value }}{{ item.totalCount.suffix }}</b></span>
                </p>
            </div>
        </div>
    `,
    styles: ``
})
export class SellerStatisticWidgetComponent {
    @Input() item !: StatisticWidgetType
}
