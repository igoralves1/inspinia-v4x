import {Component} from '@angular/core';
import {EchartComponent} from '@app/components/echart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {bubbleChart, quarterChart, scatterChart, singleAxis} from './data ';

@Component({
    selector: 'app-scatter',
    imports: [EchartComponent, UiCardComponent, PageTitleComponent],
    templateUrl: './scatter.component.html',
    styles: ``,
})
export class ScatterComponent {
    scatterChart = scatterChart
    bubbleChart = bubbleChart
    quarterChart = quarterChart
    singleAxis = singleAxis
}
