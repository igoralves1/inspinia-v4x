import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {basicScatter, datetimeScatter, scatterImages} from './data';

@Component({
    selector: 'app-apex-scatter',
    imports: [UiCardComponent, PageTitleComponent, ApexchartComponent],
    templateUrl: './scatter.component.html',
    styles: ``
})
export class ScatterComponent {
    basicScatter = basicScatter
    datetimeScatter = datetimeScatter
    scatterImages = scatterImages
}
