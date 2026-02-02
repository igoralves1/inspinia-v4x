import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {
    statisticCards1,
    statisticCards3,
    statisticCards4,
    statisticCards5,
    statisticCards6,
    statisticWidgets
} from '@/app/views/widgets/data';
import {StatisticCard1Component} from '@/app/views/widgets/components/statistic-card1.component';
import {SalesPerformanceOverviewComponent} from '@/app/views/widgets/components/sales-performance-overview.component';
import {TrafficSourcesComponent} from '@/app/views/widgets/components/traffic-sources.component';
import {TopCountriesComponent} from '@/app/views/widgets/components/top-countries.component';
import {ProfileCardComponent} from '@/app/views/widgets/components/profile-card.component';
import {CommentCardComponent} from '@/app/views/widgets/components/comment-card.component';
import {ChatCardComponent} from '@/app/views/widgets/components/chat-card.component';
import {NgIcon} from '@ng-icons/core';
import {FileManageCardComponent} from '@/app/views/widgets/components/file-manage-card.component';
import {TodayScheduleComponent} from '@/app/views/widgets/components/today-schedule.component';
import {StatisticWidget1Component} from '@app/components/widgets/statistic-widget1.component';
import {StatisticCard3Component} from '@/app/views/widgets/components/statistic-card3.component';
import {StatisticCard4Component} from '@/app/views/widgets/components/statistic-card4.component';
import {StatisticCard5Component} from '@/app/views/widgets/components/statistic-card5.component';
import {StatisticCard6Component} from '@/app/views/widgets/components/statistic-card6.component';

@Component({
    selector: 'app-widgets',
    imports: [
        PageTitleComponent,
        StatisticCard1Component,
        SalesPerformanceOverviewComponent,
        TrafficSourcesComponent,
        TopCountriesComponent,
        ProfileCardComponent,
        CommentCardComponent,
        ChatCardComponent,
        NgIcon,
        FileManageCardComponent,
        TodayScheduleComponent,
        StatisticWidget1Component,
        StatisticCard3Component,
        StatisticCard4Component,
        StatisticCard5Component,
        StatisticCard6Component
    ],
    templateUrl: './widgets.component.html',
    styles: ``
})
export class WidgetsComponent {

    protected readonly statistic1Cards = statisticCards1;
    protected readonly statisticWidgets = statisticWidgets
    protected readonly statisticCards3 = statisticCards3
    protected readonly statisticCards4 = statisticCards4;
    protected readonly statisticCards5 = statisticCards5;
    protected readonly statisticCards6 = statisticCards6;
}
