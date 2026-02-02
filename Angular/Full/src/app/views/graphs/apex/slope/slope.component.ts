import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {basicSlopeChart, multiSlopeChart} from './data';

@Component({
    selector: 'app-apex-slope',
    imports: [UiCardComponent, PageTitleComponent, ApexchartComponent],
    templateUrl: './slope.component.html',
    styles: ``
})
export class SlopeComponent {
    basicSlopeChart = basicSlopeChart
    multiSlopeChart = multiSlopeChart
}
