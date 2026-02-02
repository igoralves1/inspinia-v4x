import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {
    brushChartMain,
    brushChartOverview,
    dashedLineChart,
    gradientLineChart,
    lineChart,
    lineWithAnnotationsChart,
    lineWithDataLabelChart,
    missingDataLineChart,
    stepLineChart,
    syncChartPrimary,
    syncChartSecondary,
    zoomableLineChart
} from './data';

@Component({
    selector: 'app-apex-line',
    imports: [UiCardComponent, PageTitleComponent, ApexchartComponent],
    templateUrl: './line.component.html',
    styles: ``
})
export class LineComponent {
    lineChart = lineChart
    lineWithDataLabelChart = lineWithDataLabelChart
    zoomableLineChart = zoomableLineChart
    lineWithAnnotationsChart = lineWithAnnotationsChart
    syncChartPrimary = syncChartPrimary
    syncChartSecondary = syncChartSecondary
    gradientLineChart = gradientLineChart
    missingDataLineChart = missingDataLineChart
    dashedLineChart = dashedLineChart
    stepLineChart = stepLineChart
    brushChartMain = brushChartMain
    brushChartOverview = brushChartOverview
}
