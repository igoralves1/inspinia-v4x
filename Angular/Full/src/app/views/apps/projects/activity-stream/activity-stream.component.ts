import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {BasicActivityComponent} from '@/app/views/apps/projects/activity-stream/components/basic-activity.component';
import {
    ExpandedActivityComponent
} from '@/app/views/apps/projects/activity-stream/components/expanded-activity.component';

@Component({
  selector: 'app-activity-stream',
    imports: [
        PageTitleComponent,
        BasicActivityComponent,
        ExpandedActivityComponent
    ],
  templateUrl: './activity-stream.component.html',
  styles: ``
})
export class ActivityStreamComponent {

}
