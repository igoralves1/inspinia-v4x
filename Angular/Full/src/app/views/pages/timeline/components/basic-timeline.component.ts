import {Component} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {TimelineType} from '@/app/views/pages/timeline/types';

@Component({
    selector: 'app-basic-timeline',
    imports: [
        UiCardComponent
    ],
    template: `
        <app-ui-card title="Basic Timeline">
            <div class="timeline" card-body>
                @for (item of basicTimeline; track $index; let last = $last) {
                    <div class="timeline-item d-flex align-items-stretch">
                        <div class="timeline-time pe-3 text-muted">{{ item.time }}</div>
                        <div class="timeline-dot" [class]="'bg-' + item.variant"></div>
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
export class BasicTimelineComponent {
    basicTimeline: TimelineType[] = [
        {
            id: 1,
            time: 'Just Now',
            title: 'Weekly Stand-Up Meeting',
            description: 'Team members shared updates, discussed blockers, and aligned on weekly goals.',
            name: 'Olivia Rodriguez',
            variant: 'primary'
        },
        {
            id: 2,
            time: '10:00 AM, Tuesday',
            title: 'Project Kickoff',
            description: 'Introduced project scope, goals, and assigned initial roles to team members.',
            name: 'Isabella Cooper',
            variant: 'danger'
        },
        {
            id: 3,
            time: 'Yesterday, 3:15 PM',
            title: 'Design Review',
            description: 'Reviewed initial UI mockups and gathered feedback for the next design iteration.',
            name: 'Ethan Murphy',
            variant: 'warning'
        },
        {
            id: 4,
            time: 'Monday, 1:00 PM',
            title: 'Client Feedback Session',
            description: 'Discussed client feedback and agreed on key changes for the next sprint.',
            name: 'Liam Chen',
            variant: 'info'
        },
        {
            id: 5,
            time: 'Last Friday, 4:30 PM',
            title: 'Code Deployment',
            description: 'Successfully deployed the latest build to the staging environment.',
            name: 'Ava Thompson',
            variant: 'purple'
        }
    ];
}
