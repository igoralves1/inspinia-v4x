import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {
    barWithMarkersChart,
    basicBarChart,
    dataLabelsBarChart,
    fullStackedBarChart,
    groupedBarChart,
    groupedStackedBarChart,
    imageFillBarChart,
    negativeBarChart,
    patternBarChart,
    reversedBarChart,
    stackedBarChart
} from './data';

@Component({
    selector: 'app-apex-bar',
    imports: [UiCardComponent, PageTitleComponent, ApexchartComponent],
    templateUrl: './bar.component.html',
    styles: ``
})
export class BarComponent {
    basicBarChart = basicBarChart;
    groupedBarChart = groupedBarChart;
    stackedBarChart = stackedBarChart;
    fullStackedBarChart = fullStackedBarChart;
    groupedStackedBarChart = groupedStackedBarChart;
    negativeBarChart = negativeBarChart;
    reversedBarChart = reversedBarChart;
    imageFillBarChart = imageFillBarChart;
    dataLabelsBarChart = dataLabelsBarChart;
    patternBarChart = patternBarChart;
    barWithMarkersChart = barWithMarkersChart
}
