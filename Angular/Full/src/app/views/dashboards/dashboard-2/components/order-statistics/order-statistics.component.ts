import {Component} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {
    NgbNav,
    NgbNavContent,
    NgbNavItem,
    NgbNavLink,
    NgbNavOutlet,
    NgbProgressbar,
    NgbTooltip
} from '@ng-bootstrap/ng-bootstrap';
import {orderStatistics, orderStatisticsChartOptions} from '@/app/views/dashboards/dashboard-2/data';
import {EchartComponent} from '@app/components/echart.component';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-order-statistics',
    imports: [
        NgIcon,
        NgbNav,
        NgbNavItem,
        NgbNavLink,
        NgbNavContent,
        NgbNavOutlet,
        EchartComponent,
        NgbTooltip,
        NgbProgressbar, RouterLink
    ],
    templateUrl: './order-statistics.component.html',
})
export class OrderStatisticsComponent {
    orderStatisticsChartOptions = orderStatisticsChartOptions;
    Math = Math;
    orderStatistics = orderStatistics;
}
