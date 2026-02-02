import {Component, Input} from '@angular/core';
import {AnalyticStatsType} from '@/app/views/dashboards/dashboard-3/types';
import {NgIcon} from '@ng-icons/core';
import {CountUpModule} from 'ngx-countup';

@Component({
    selector: 'app-analytic-statistic-widget',
    imports: [ NgIcon,CountUpModule],
    template: `
        <div class="p-3 rounded m-1 {{stat.id===1 ? '' : 'mt-xxl-0'}} border border-dashed">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h3 class="mb-1">
                        {{ stat.count.prefix || '' }}<span [countUp]="stat.count.value" [options]="{duration:2,decimalPlaces:2}">0</span>{{ stat.count.suffix || '' }}
                        <span
                            class="fs-base"
                            [class]="
                                  stat.isPositive ? 'text-success' : 'text-danger'
                                "
                        >
                         {{stat.isPositive ? '+' : '-'}}{{ stat.percentage }}% <ng-icon [name]="stat.percentageIcon"/>
                    </span>
                    </h3>
                    <p class="mb-0 text-muted">{{ stat.title }}</p>
                </div>
                <div class="avatar-xl">
                      <span class="avatar-title text-bg-light rounded-circle">
                        <ng-icon [name]="stat.icon" class="fs-2 text-muted d-flex"/>
                      </span>
                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class AnalyticStatisticWidgetComponent {
    @Input() stat!: AnalyticStatsType;
}
