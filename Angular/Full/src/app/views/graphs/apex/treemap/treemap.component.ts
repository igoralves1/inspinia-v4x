import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {
    basicTreemapOptions,
    colorRangeTreemapOptions,
    distributedTreemapOptions,
    multipleSeriesTreemapOptions
} from './data';

@Component({
    selector: 'app-apex-treemap',
    imports: [PageTitleComponent, UiCardComponent, ApexchartComponent],
    templateUrl: './treemap.component.html',
    styles: ``
})
export class TreemapComponent {
    basicTreemapOptions = basicTreemapOptions
    multipleSeriesTreemapOptions = multipleSeriesTreemapOptions
    distributedTreemapOptions = distributedTreemapOptions
    colorRangeTreemapOptions = colorRangeTreemapOptions
}
