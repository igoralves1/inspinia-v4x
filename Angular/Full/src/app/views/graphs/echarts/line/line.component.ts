import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {EchartComponent} from '@app/components/echart.component';
import {lineCategory, lineCharts, lineMarker, lineStacked, stepLine} from '@/app/views/graphs/echarts/line/data';
import {DynamicLineChartComponent} from '@/app/views/graphs/echarts/line/components/dynamic-line-chart.component';

@Component({
    selector: 'app-line',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        EchartComponent,
        DynamicLineChartComponent
    ],
    templateUrl: './line.component.html',
    styles: ``
})
export class LineComponent {
    lineCharts = lineCharts
    lineStacked = lineStacked
    lineMarker = lineMarker
    stepLine = stepLine
    lineCategory = lineCategory
}
