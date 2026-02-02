import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {basicRadarChart, polygonRadarChart} from './data';
import {ApexOptions} from 'ng-apexcharts';
import {getColor} from '@/app/utils/color-utils';
import {UpdatableRadarChartComponent} from '@/app/views/graphs/apex/radar/components/updatable-radar-chart.component';



@Component({
    selector: 'app-apex-radar',
    imports: [PageTitleComponent, UiCardComponent, ApexchartComponent, UpdatableRadarChartComponent],
    templateUrl: './radar.component.html',
    styles: ``
})
export class RadarComponent {
    basicRadarChart = basicRadarChart
    polygonRadarChart = polygonRadarChart

}
