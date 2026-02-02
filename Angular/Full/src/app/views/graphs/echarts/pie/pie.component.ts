import {Component} from '@angular/core';
import {EchartComponent} from '@app/components/echart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {doughnutPie, edgeAlign, labelAlign, multiplePie, nightingaleMap, pieChart, roundedPie} from './data';

@Component({
    selector: 'app-pie',
    imports: [EchartComponent, UiCardComponent, PageTitleComponent],
    templateUrl: './pie.component.html',
    styles: ``
})
export class PieComponent {
    pieChart = pieChart
    doughnutPie = doughnutPie
    roundedPie = roundedPie
    multiplePie = multiplePie
    labelAlign = labelAlign
    nightingaleMap = nightingaleMap
    edgeAlign = edgeAlign
}
