import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {
    colorRangeHeatmapChart,
    multipleSeriesHeatmapChart,
    rangeWithoutShadesHeatmapChart,
    singleSeriesHeatmapChart
} from './data';

@Component({
    selector: 'app-apex-heatmap',
    imports: [UiCardComponent, PageTitleComponent, ApexchartComponent],
    templateUrl: './heatmap.component.html',
    styles: ``
})
export class HeatmapComponent {
    singleSeriesHeatmapChart = singleSeriesHeatmapChart
    multipleSeriesHeatmapChart = multipleSeriesHeatmapChart
    colorRangeHeatmapChart = colorRangeHeatmapChart
    rangeWithoutShadesHeatmapChart = rangeWithoutShadesHeatmapChart
}
