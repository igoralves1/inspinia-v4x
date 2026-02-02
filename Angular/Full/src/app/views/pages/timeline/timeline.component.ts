import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {BasicTimelineComponent} from '@/app/views/pages/timeline/components/basic-timeline.component';
import {IconTimelineComponent} from '@/app/views/pages/timeline/components/icon-timeline.component';
import {BorderTimelineComponent} from '@/app/views/pages/timeline/components/border-timeline.component';
import {UserTimelineComponent} from '@/app/views/pages/timeline/components/user-timeline.component';

@Component({
  selector: 'app-timeline',
    imports: [
        PageTitleComponent,
        BasicTimelineComponent,
        IconTimelineComponent,
        BorderTimelineComponent,
        UserTimelineComponent
    ],
  templateUrl: './timeline.component.html',
  styles: ``
})
export class TimelineComponent {

}
