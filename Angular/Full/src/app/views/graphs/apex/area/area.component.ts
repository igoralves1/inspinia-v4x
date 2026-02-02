import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {
    basicAreaChart,
    githubAreaChart,
    githubAreaChart2,
    negativeAreaChart,
    nullValueAreaChart,
    splineAreaChart,
    stackedAreaChart,
    timeSeriesAreaChart
} from './data';
import {DatetimeChartComponent} from '@/app/views/graphs/apex/area/components/datetime-chart.component';


@Component({
    selector: 'app-apex-area',
    imports: [UiCardComponent, PageTitleComponent, ApexchartComponent, DatetimeChartComponent],
    templateUrl: './area.component.html',
    styles: ``
})
export class AreaComponent {
    basicAreaChart = basicAreaChart;
    splineAreaChart = splineAreaChart;
    negativeAreaChart = negativeAreaChart;
    githubAreaChart = githubAreaChart;
    githubAreaChart2 = githubAreaChart2;
    stackedAreaChart = stackedAreaChart;
    timeSeriesAreaChart = timeSeriesAreaChart;
    nullValueAreaChart = nullValueAreaChart;
}
