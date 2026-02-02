import {Component} from '@angular/core';
import {MessagesComponent} from '@/app/views/dashboards/dashboard-1/components/messages.component';
import {RevenueChartComponent} from '@/app/views/dashboards/dashboard-1/components/revenue-chart.component';
import {
    ProjectProgressChartComponent
} from '@/app/views/dashboards/dashboard-1/components/project-progress-chart.component';
import {statisticWidgets} from '@/app/views/dashboards/dashboard-1/data';
import {StatisticWidget1Component} from '@app/components/widgets/statistic-widget1.component';
import {QuarterlyReportsComponent} from '@/app/views/dashboards/dashboard-1/components/quarterly-reports.component';
import {ProjectPerformanceComponent} from '@/app/views/dashboards/dashboard-1/components/project-performance.component';
import {ProjectUpdatesComponent} from '@/app/views/dashboards/dashboard-1/components/project-updates.component';
import {DiscussionsComponent} from '@/app/views/dashboards/dashboard-1/components/discussions.component';

@Component({
    selector: 'app-dashboard-1',
    imports: [MessagesComponent, RevenueChartComponent, ProjectProgressChartComponent, StatisticWidget1Component, QuarterlyReportsComponent, ProjectPerformanceComponent, ProjectUpdatesComponent, DiscussionsComponent],
    templateUrl: './dashboard-1.component.html'
})
export class Dashboard1Component {


    protected readonly statisticWidgets = statisticWidgets;
}
