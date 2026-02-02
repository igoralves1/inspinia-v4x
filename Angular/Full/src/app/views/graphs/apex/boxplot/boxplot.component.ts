import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {basicBox, horizontalBox, scatterBox} from './data';

@Component({
    selector: 'app-apex-boxplot',
    imports: [PageTitleComponent, UiCardComponent, ApexchartComponent],
    templateUrl: './boxplot.component.html',
    styles: ``
})
export class BoxplotComponent {
    basicBox = basicBox
    scatterBox = scatterBox
    horizontalBox = horizontalBox
}
