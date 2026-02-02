import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {basicRangeArea, rangeAreaWithLine} from './data';

@Component({
    selector: 'app-apex-range',
    imports: [UiCardComponent, PageTitleComponent, ApexchartComponent],
    templateUrl: './range.component.html',
    styles: ``
})
export class RangeComponent {
    basicRangeArea = basicRangeArea
    rangeAreaWithLine = rangeAreaWithLine
}
