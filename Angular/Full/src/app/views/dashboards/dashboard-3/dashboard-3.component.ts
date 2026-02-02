import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {AnalyticsOverviewComponent} from '@/app/views/dashboards/dashboard-3/components/analytics-overview.component';
import {DeviceSessionsComponent} from '@/app/views/dashboards/dashboard-3/components/device-sessions.component';
import {TrafficSourcesComponent} from '@/app/views/dashboards/dashboard-3/components/traffic-sources.component';
import {TopCountriesComponent} from '@/app/views/dashboards/dashboard-3/components/top-countries.component';
import {
    CampaignPerformanceComponent
} from '@/app/views/dashboards/dashboard-3/components/campaign-performance.component';
import {SidebarComponent} from '@/app/views/dashboards/dashboard-3/components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard-3',
    imports: [
        PageTitleComponent,
        AnalyticsOverviewComponent,
        DeviceSessionsComponent,
        TrafficSourcesComponent,
        TopCountriesComponent,
        CampaignPerformanceComponent,
        SidebarComponent
    ],
  templateUrl: './dashboard-3.component.html',
  styles: ``
})
export class Dashboard3Component {

}
