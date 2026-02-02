import {Component} from '@angular/core';
import {EchartComponent} from '@app/components/echart.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {browserChart, customizeChart, multipleChart, RadarChart} from './data';
import {PageTitleComponent} from '@app/components/page-title.component';

@Component({
    selector: 'app-radar',
    imports: [UiCardComponent, EchartComponent, PageTitleComponent],
    templateUrl: './radar.component.html',
    styles: ``
})
export class RadarComponent {
    radarChart = RadarChart
    browserChart = browserChart
    customizeChart = customizeChart
    multipleChart = multipleChart
}
