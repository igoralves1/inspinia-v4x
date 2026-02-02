import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {bubbleChart, simpleBubbleChart, threedBubbleChart} from './data';

@Component({
    selector: 'app-apex-bubble',
    imports: [UiCardComponent, PageTitleComponent, ApexchartComponent],
    templateUrl: './bubble.component.html',
    styles: ``
})
export class BubbleComponent {
    simpleBubbleChart = simpleBubbleChart;
    threedBubbleChart = threedBubbleChart;
    bubbleChart = bubbleChart;
}
