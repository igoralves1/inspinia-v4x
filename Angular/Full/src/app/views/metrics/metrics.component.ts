import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {statistics, statisticsData} from '@/app/views/metrics/data';
import {
    StatisticsWidgetComponent
} from '@/app/views/dashboards/dashboard-2/components/statistics-widget/statistics-widget.component';
import {
    StatisticWidgetChartRightComponent
} from '@/app/views/metrics/components/statistic-widget-chart-right.component';
import {StatisticWidgetChartLeftComponent} from '@/app/views/metrics/components/statistic-widget-chart-left.component';
import {QuarterlyReportsComponent} from '@/app/views/metrics/components/quarterly-reports.component';
import {OrdersWidgetComponent} from '@/app/views/metrics/components/orders-widget.component';
import {ProductsWidgetComponent} from '@/app/views/metrics/components/products-widget.component';
import {ProfitOverviewWidgetComponent} from '@/app/views/metrics/components/profit-overview-widget.component';

@Component({
    selector: 'app-metrics',
    imports: [
        PageTitleComponent,
        StatisticsWidgetComponent,
        StatisticWidgetChartRightComponent,
        StatisticWidgetChartLeftComponent,
        QuarterlyReportsComponent,
        OrdersWidgetComponent,
        ProductsWidgetComponent,
        ProfitOverviewWidgetComponent
    ],
    templateUrl: './metrics.component.html',
    styles: ``
})
export class MetricsComponent {

    protected readonly statistics = statistics;
    protected readonly statisticsData = statisticsData;
}
