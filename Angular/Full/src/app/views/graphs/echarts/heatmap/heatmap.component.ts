import {Component} from '@angular/core';
import {EchartComponent} from '@app/components/echart.component';
import {basicHeatmapChart, heatMapChart, heatMapDataChart} from './data';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';

@Component({
    selector: 'app-heatmap',
    imports: [UiCardComponent, EchartComponent, PageTitleComponent],
    templateUrl: './heatmap.component.html',
    styles: ``
})
export class HeatmapComponent {
    heatMapDataChart = heatMapDataChart
    heatMapChart = heatMapChart
    basicHeatmapChart = basicHeatmapChart
}
