import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {
    advancedTimelineOptions,
    basicTimelineOptions,
    distributedTimelineOptions,
    groupRowsTimelineOptions,
    multiSeriesTimelineOptions
} from './data';

@Component({
    selector: 'app-apex-timeline',
    imports: [PageTitleComponent, ApexchartComponent, UiCardComponent],
    templateUrl: './timeline.component.html',
    styles: ``
})
export class TimelineComponent {
    basicTimelineOptions = basicTimelineOptions
    distributedTimelineOptions = distributedTimelineOptions
    multiSeriesTimelineOptions = multiSeriesTimelineOptions
    advancedTimelineOptions = advancedTimelineOptions
    groupRowsTimelineOptions = groupRowsTimelineOptions
}
