import {Component, Input} from '@angular/core';
import {StatisticsWithChartType} from '@/app/views/metrics/types';
import {CountUpModule} from 'ngx-countup';
import {EchartComponent} from '@app/components/echart.component';

@Component({
    selector: 'app-statistic-widget-chart-right',
    imports: [
        CountUpModule,
        EchartComponent
    ],
    template: `
        <div class="card">
            <div class="card-header d-flex border-0 justify-content-between align-items-center">
                <h5 class="card-title">{{ item.title }}</h5>
                @if (item.badge) {
                    <span class="badge badge-soft-{{item.badge.variant}}"> {{ item.badge.text }}</span>
                }
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h3 class="mb-1 fw-normal">{{ item.count.prefix }}<span [countUp]="item.count.value"
                        >0</span>{{ item.count.suffix }}</h3>
                        <p class="mb-0 text-muted"><span>{{ item.description }}</span></p>
                    </div>
                    @if (item.chartOptions()) {
                        <app-echart [getOptions]="item.chartOptions"
                                    [height]="item.chartHeight"
                                    [width]="item.chartWidth"/>
                    }
                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class StatisticWidgetChartRightComponent {
    @Input() item!: StatisticsWithChartType;
}
