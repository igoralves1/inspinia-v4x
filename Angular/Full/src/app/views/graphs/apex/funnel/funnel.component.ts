import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {basicFunnelChart, pyramidFunnelChart} from './data';

@Component({
    selector: 'app-apex-funnel',
    imports: [UiCardComponent, PageTitleComponent, ApexchartComponent],
    templateUrl: './funnel.component.html',
    styles: ``
})
export class FunnelComponent {
    basicFunnelChart = basicFunnelChart
    pyramidFunnelChart = pyramidFunnelChart
}
