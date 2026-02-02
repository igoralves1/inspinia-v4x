import {Component, Input} from '@angular/core';
import {EchartComponent} from '@app/components/echart.component';
import {CountUpModule} from 'ngx-countup';
import {StatisticsWithChartType} from '@/app/views/metrics/types';

@Component({
    selector: 'app-statistic-widget-chart-left',
    imports: [
        EchartComponent,
        CountUpModule
    ],
    template: `
        <div class="card">
            <div class="card-header d-flex border-0 justify-content-between align-items-center">
                <h5 class="card-title">{{ item.title }}</h5>
                @if (item.badge) {
                    <span
                        class="badge badge-soft-{{item.badge.variant}}"> {{ item.badge.text }}</span>
                }
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    @if(item.chartOptions()) {
                        <app-echart [getOptions]="item.chartOptions"
                                    [height]="item.chartHeight"
                                    [width]="item.chartWidth"/>
                    }
                    <div class="text-end">
                        <h3 class="mb-1 fw-normal">{{ item.count.prefix }}<span [countUp]="item.count.value"
                        >0</span>{{ item.count.suffix }}</h3>
                        <p class="mb-0 text-muted"><span>{{ item.description }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class StatisticWidgetChartLeftComponent {
    @Input() item!: StatisticsWithChartType;
}
