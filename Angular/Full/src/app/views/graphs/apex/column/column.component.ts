import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {
    basicColumnChart,
    columnWithGroupLabelChart,
    columnWithMarkersChart,
    datalabelsColumnChart,
    distributedColumnChart,
    dumbbellChart,
    fullStackedColumnChart,
    groupedStackedColumnChart,
    negativeValueColumnChart,
    rangeColumnChart,
    rotateLabelsColumnChart,
    stackedColumnChart
} from './data';
import {DynamicLoadedChartComponent} from '@/app/views/graphs/apex/column/components/dynamic-loaded-chart.component';

@Component({
    selector: 'app-apex-column',
    imports: [PageTitleComponent, UiCardComponent, FormsModule, ApexchartComponent, DynamicLoadedChartComponent],
    templateUrl: './column.component.html',
    styles: ``
})
export class ColumnComponent {
    basicColumnChart = basicColumnChart
    datalabelsColumnChart = datalabelsColumnChart
    stackedColumnChart = stackedColumnChart
    fullStackedColumnChart = fullStackedColumnChart
    groupedStackedColumnChart = groupedStackedColumnChart
    dumbbellChart = dumbbellChart
    columnWithMarkersChart = columnWithMarkersChart
    columnWithGroupLabelChart = columnWithGroupLabelChart
    rotateLabelsColumnChart = rotateLabelsColumnChart
    negativeValueColumnChart = negativeValueColumnChart
    distributedColumnChart = distributedColumnChart
    rangeColumnChart = rangeColumnChart
}
