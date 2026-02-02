import {Component} from '@angular/core';
import {EchartComponent} from '@app/components/echart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {dottedChart, pieChart, subburstChart} from './data';

@Component({
    selector: 'app-other',
    imports: [UiCardComponent, EchartComponent, PageTitleComponent],
    templateUrl: './other.component.html',
    styles: ``
})
export class OtherComponent {
    dottedChart = dottedChart
    subburstChart = subburstChart
    pieChart = pieChart
}
