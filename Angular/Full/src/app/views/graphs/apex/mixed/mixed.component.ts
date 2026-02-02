import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {allMixedChart, lineAreaChart, lineColumnChart, multiYAxisChart} from './data';

@Component({
    selector: 'app-apex-mixed',
    imports: [UiCardComponent, PageTitleComponent, ApexchartComponent],
    templateUrl: './mixed.component.html',
    styles: ``
})
export class MixedComponent {
    lineColumnChart = lineColumnChart
    multiYAxisChart = multiYAxisChart
    lineAreaChart = lineAreaChart
    allMixedChart = allMixedChart
}
