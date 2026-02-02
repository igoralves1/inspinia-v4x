import {Component} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {TimelineType} from '@/app/views/pages/timeline/types';
import {NgIcon} from '@ng-icons/core';

@Component({
  selector: 'app-icon-timeline',
    imports: [
        UiCardComponent,NgIcon
    ],
  template: `
      <app-ui-card title="Timeline with Icons">
          <div class="timeline timeline-icon-based" card-body>
              @for (item of iconTimelineData; track $index; let last = $last; let i = $index) {
                  <div
                      class="timeline-item d-flex align-items-stretch"

                  >
                      <div class="timeline-time pe-3 text-muted">{{ item.time }}</div>
                      <div class="timeline-dot"
                           [class]="i % 2 != 0 ? 'bg-' + item.variant + '-subtle' : 'text-bg-' + item.variant">
                          @if (item.icon) {
                              <ng-icon [name]="item.icon"
                                       [class]="i % 2 != 0 ? 'text-' + item.variant : ''" class="fs-xl"></ng-icon>
                          }
                          @if (item.avatar) {
                              <img  [src]="item.avatar" alt="Avatar" class="rounded-circle" width="24"/>
                          }
                      </div>
                      <div class="timeline-content ps-3 {{!last ? 'pb-4' : ''}}">
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
export class IconTimelineComponent {
    iconTimelineData: TimelineType[] = [
        {
            id: 1,
            time: '5 mins ago',
            title: 'Bug Fix Deployed',
            description: 'Resolved a critical login issue affecting mobile users.',
            name: 'Marcus Bell',
            variant: 'primary',
            icon: 'tablerBug'
        },
        {
            id: 2,
            time: 'Today, 9:00 AM',
            title: 'Marketing Strategy Call',
            description: 'Outlined Q2 goals and content plan for the product launch campaign.',
            name: 'Emily Davis',
            variant: 'danger',
            icon: 'tablerPhoneCall'
        },
        {
            id: 3,
            time: 'Yesterday, 4:45 PM',
            title: 'Feature Planning Session',
            description: 'Prioritized new features for the upcoming release based on user feedback.',
            name: 'Daniel Kim',
            variant: 'warning',
            icon: 'tablerLayersSubtract'
        },
        {
            id: 4,
            time: 'Tuesday, 11:30 AM',
            title: 'UI Enhancements Pushed',
            description: 'Improved dashboard responsiveness and added dark mode support.',
            name: 'Sofia Martinez',
            variant: 'info',
            icon: 'tablerLayoutDashboard'
        },
        {
            id: 5,
            time: 'Last Thursday, 2:20 PM',
            title: 'Security Audit Completed',
            description: 'Reviewed backend API endpoints and applied new encryption standards.',
            name: 'Jonathan Lee',
            variant: 'purple',
            icon: 'tablerShieldLock'
        }
    ];
}
