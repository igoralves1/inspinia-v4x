import {Component} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {TimelineType} from '@/app/views/pages/timeline/types';

@Component({
    selector: 'app-user-timeline',
    imports: [
        UiCardComponent
    ],
    template: `
        <app-ui-card title="Timeline with Users">
            <div class="timeline timeline-users" card-body>
                @for (item of userTimeline; track $index; let last = $last) {
                    <div class="timeline-item d-flex align-items-stretch">
                        <div class="timeline-dot">
                            <img [src]="item.avatar" alt="avatar" class="img-fluid rounded-circle"/>
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
export class UserTimelineComponent {
    userTimeline: TimelineType[] = [
        {
            id: 1,
            title: 'Dashboard Revamp Completed',
            description: 'The new layout and theme for the analytics dashboard have been deployed.',
            name: 'Emma Carter',
            avatar: 'assets/images/users/user-1.jpg'
        },
        {
            id: 2,
            title: 'Onboarding Guide Published',
            description: 'Uploaded the latest documentation to help new users get started quickly.',
            name: 'Noah Mitchell',
            avatar: 'assets/images/users/user-2.jpg'
        },
        {
            id: 3,
            title: 'Performance Improvements',
            description: 'Reduced page load time by optimizing image assets and scripts.',
            name: 'Ava Morgan',
            avatar: 'assets/images/users/user-3.jpg'
        },
        {
            id: 4,
            title: 'Security Patch Released',
            description: 'Patched a vulnerability related to token expiration in the API.',
            name: 'James Parker',
            avatar: 'assets/images/users/user-4.jpg'
        },
        {
            id: 5,
            title: 'Client Training Session',
            description: 'Hosted a live training session with 30+ clients on the new reporting tools.',
            name: 'Sophia Bennett',
            avatar: 'assets/images/users/user-5.jpg'
        }
    ];
}
