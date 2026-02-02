import {Component} from '@angular/core';
import {analyticChartOptions, analyticsData} from '@/app/views/dashboards/dashboard-3/data';
import {
    AnalyticStatisticWidgetComponent
} from '@/app/views/dashboards/dashboard-3/components/analytic-statistic-widget.component';
import {NgIcon} from '@ng-icons/core';
import {ApexchartComponent} from '@app/components/apexchart.component';

@Component({
    selector: 'app-analytics-overview',
    imports: [ AnalyticStatisticWidgetComponent, NgIcon, ApexchartComponent],
    template: `
        <div class="card">
            <div class="card-body p-0">
                <div class="row g-0">
                    <div class="col-xxl-3 order-2 order-xxl-1">
                        <div class="row g-0">
                            @for (item of analyticsData; track $index) {
                                <div class="col-lg-6 col-xl-6 col-xxl-12">
                                    <app-analytic-statistic-widget [stat]="item"/>
                                </div>
                            }
                        </div>
                    </div>

                    <div class="col-xxl-9 order-1 order-xxl-2 border-start border-dashed">
                        <div class="card-header justify-content-between border-dashed">
                            <h4 class="card-title mb-0">Analytics Overview</h4>
                            <div class="d-flex flex-wrap gap-1">
                                <a href="javascript:void(0);" class="btn btn-sm btn-primary">
                                    <ng-icon name="tablerDownload" class="me-1"/>
                                    Export CSV
                                </a>
                            </div>
                        </div>
                        <div class="card-body">
                            <div dir="ltr">
                                <app-apexchart [getOptions]="analyticChartOptions"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class AnalyticsOverviewComponent {

    protected readonly analyticsData = analyticsData;
    protected readonly analyticChartOptions = analyticChartOptions;
}
