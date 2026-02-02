import {Component} from '@angular/core';
import {EchartComponent} from '@app/components/echart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {
    barChart,
    barGradiant,
    horizontalBar,
    horizontalStacked,
    mixedBar,
    negative,
    progressBar,
    stacked,
    timelineBar,
    twoBar,
    withSeries
} from './data';
import {BarRaceChartComponent} from '@/app/views/graphs/echarts/bar/components/bar-race-chart.component';

@Component({
    selector: 'app-bar',
    imports: [UiCardComponent, PageTitleComponent, EchartComponent, BarRaceChartComponent],
    templateUrl: './bar.component.html',
    styles: ``
})
export class BarComponent {
    barChart = barChart
    twoBar = twoBar
    progressBar = progressBar
    horizontalBar = horizontalBar
    negative = negative
    withSeries = withSeries
    stacked = stacked
    horizontalStacked = horizontalStacked
    barGradiant = barGradiant
    mixedBar = mixedBar
    timelineBar = timelineBar
}

