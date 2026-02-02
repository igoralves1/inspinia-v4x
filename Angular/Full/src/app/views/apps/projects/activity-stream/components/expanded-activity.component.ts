import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';

type TimelineEventType = {
    icon: string;
    title: string;
    label: string;
    variant: string
    time: string;
    description: string;
    avatar: string;
    name: string;
    profileUrl: string;
}

@Component({
    selector: 'app-expanded-activity',
    imports: [RouterLink, NgIcon],
    template: `
        <div class="card card-h-100">
            <div class="card-header">
                <h4 class="card-title">Expanded Activity Stream</h4>
            </div>
            <div class="card-body">
                <div class="timeline timeline-icon-bordered">
                    @for (event of events; track i; let i = $index; let last = $last) {
                        <div
                            class="timeline-item d-flex align-items-stretch"
                        >
                            <div class="timeline-dot">
                                <ng-icon [name]="event.icon" class="fs-xl text-{{ event.variant }}"/>
                            </div>
                            <div class="timeline-content ps-3 {{!last ? 'pb-3' : ''}}">
                                <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">
                                        {{ event.title }}
                                        <span
                                            class="badge badge-label badge-soft-{{ event.variant }} ms-2"
                                        >{{ event.label }}</span
                                        >
                                    </h5>
                                    <span class="text-muted fs-xs">{{ event.time }}</span>
                                </div>
                                <p class="mb-1 text-muted">{{ event.description }}</p>
                                <div class="d-flex align-items-center gap-2">
                                    <img
                                        [src]="event.avatar"
                                        [alt]="event.name"
                                        class="rounded-circle avatar-xxs"
                                    />
                                    <a
                                        [routerLink]="event.profileUrl"
                                        class="fw-semibold link-reset"
                                    >{{ event.name }}</a
                                    >
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>

    `,
    styles: ``
})
export class ExpandedActivityComponent {
    events: TimelineEventType[] = [
        {
            icon: 'tablerRocket',
            title: 'New Feature Released',
            variant: 'info',
            label: 'Deploy',
            time: 'Today at 3:45 PM',
            description: 'Launched the real-time chat feature across all user accounts.',
            avatar: 'assets/images/users/user-6.jpg',
            name: 'Natalie Brooks',
            profileUrl: '/pages/profile',
        },
        {
            icon: 'tablerCalendarEvent',
            title: 'Team Sync-Up',
            variant: 'secondary',
            label: 'Meeting',
            time: 'Today at 2:00 PM',
            description: 'Reviewed sprint progress and discussed remaining tasks with the dev team.',
            avatar: 'assets/images/users/user-4.jpg',
            name: 'Oliver Grant',
            profileUrl: '/pages/profile',
        },
        {
            icon: 'tablerPalette',
            title: 'UI Design Review',
            label: 'Design',
            variant: 'success',
            time: 'Today at 1:15 PM',
            description: 'Updated component spacing and colors for improved accessibility.',
            avatar: 'assets/images/users/user-9.jpg',
            name: 'Clara Jensen',
            profileUrl: '/pages/profile',
        },
        {
            icon: 'tablerDatabase',
            title: 'Database Optimization',
            variant: 'danger',
            label: 'Backend',
            time: 'Today at 12:30 PM',
            description: 'Improved DB query performance, reducing load time by 35%.',
            avatar: 'assets/images/users/user-10.jpg',
            name: 'Leo Armstrong',
            profileUrl: '/pages/profile',
        },
        {
            icon: 'tablerShieldCheck',
            title: 'Security Audit Completed',
            variant: 'warning',
            label: 'Audit',
            time: 'Today at 11:00 AM',
            description: 'Completed internal security audit with no critical issues found.',
            avatar: 'assets/images/users/user-8.jpg',
            name: 'Liam Carter',
            profileUrl: '/pages/profile',
        },
        {
            icon: 'tablerUserPlus',
            title: 'New Team Member Joined',
            variant: 'primary',
            label: 'Onboarding',
            time: 'Today at 10:15 AM',
            description: 'Michael Lee has joined the development team as a Frontend Engineer.',
            avatar: 'assets/images/users/user-7.jpg',
            name: 'Emma Davis',
            profileUrl: '/pages/profile',
        },
        {
            icon: 'tablerPencil',
            title: 'Documentation Updated',
            variant: 'secondary',
            label: 'Docs',
            time: 'Yesterday at 5:20 PM',
            description: 'Refreshed developer documentation with updated APIs and workflows.',
            avatar: 'assets/images/users/user-7.jpg',
            name: 'Sophia Reed',
            profileUrl: '/pages/profile',
        },
        {
            icon: 'tablerCheck',
            title: 'Task Completed',
            variant: 'success',
            label: 'Done',
            time: 'Yesterday at 3:10 PM',
            description: 'Finished implementation of the email notification system.',
            avatar: 'assets/images/users/user-5.jpg',
            name: 'Daniel Chen',
            profileUrl: '/pages/profile',
        },
    ];
}
