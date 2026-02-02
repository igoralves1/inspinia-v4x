import {Component} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {TimelineType} from '@/app/views/pages/timeline/types';
import {NgIcon} from '@ng-icons/core';

@Component({
  selector: 'app-border-timeline',
    imports: [
        UiCardComponent,NgIcon
    ],
  template: `
      <app-ui-card title="Timeline with Border">
          <div class="timeline timeline-icon-bordered" card-body>
              @for (item of borderTimeline; track $index; let last = $last) {
                  <div class="timeline-item d-flex align-items-stretch">
                      <div class="timeline-time pe-3 text-muted">{{ item.time }}</div>
                      <div class="timeline-dot">
                          <ng-icon [name]="item.icon" class="fs-xl text-muted"/>
                      </div>
                      <div class="timeline-content ps-3 {{!last ? 'pb-4' : '' }}">
                          <h5 class="mb-1">{{ item.title }}</h5>
                          <p class="mb-1 text-muted">{{ item.description }}</p>
                          <span class="text-primary fw-semibold">By {{ item.name }}</span>
                      </div>
                  </div>
              }
          </div>

      </app-ui-card>
  `,
  styles: ``
})
export class BorderTimelineComponent {
    borderTimeline: TimelineType[] = [
        {
            id: 1,
            time: '10 mins ago',
            title: 'New Feature Released',
            description: 'Launched the real-time chat feature across all user accounts.',
            name: 'Natalie Brooks',
            icon: 'tablerRocket'
        },
        {
            id: 2,
            time: 'Today, 11:15 AM',
            title: 'Team Sync-Up',
            description: 'Reviewed sprint progress and discussed remaining tasks.',
            name: 'Oliver Grant',
            icon: 'tablerCalendarEvent'
        },
        {
            id: 3,
            time: 'Yesterday, 2:40 PM',
            title: 'UI Design Review',
            description: 'Refined component spacing and color scheme for better accessibility.',
            name: 'Clara Jensen',
            icon: 'tablerPalette'
        },
        {
            id: 4,
            time: 'Tuesday, 3:30 PM',
            title: 'Database Optimization',
            description: 'Refactored queries to reduce API response times by 35%.',
            name: 'Leo Armstrong',
            icon: 'tablerDatabase'
        },
        {
            id: 5,
            time: 'Last Thursday, 5:00 PM',
            title: 'Compliance Check Passed',
            description: 'Successfully passed GDPR compliance audit with zero violations.',
            name: 'Mia Thompson',
            icon: 'tablerLockCheck'
        }
    ];
}
