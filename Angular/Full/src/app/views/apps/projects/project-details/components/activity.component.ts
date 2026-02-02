import {Component} from '@angular/core';
import {NgIcon} from '@ng-icons/core';

type ActivityType = {
    name: string;
    avatar: string;
    action: string;
    datetime: string;
    timeAgo: string;
    extra?: {
        type: "button" | "message";
        label?: string;
        icon?: string;
        url?: string;
        message?: string;
    };
}

@Component({
    selector: 'app-activity',
    imports: [NgIcon],
    template: `
        @for ( activity of activities; track $index;let first = $first) {
        <div  class="d-flex gap-1 border-bottom {{first ? 'pb-3' : 'py-3'}} border-dashed">
            <div class="me-2 flex-shrink-0">
                <img [src]="activity.avatar" class="avatar-md rounded-circle" alt="">
            </div>
            <div class="flex-grow-1 text-muted position-relative">
                <span class="fw-medium text-body">{{ activity.name }}</span> {{ activity.action }}
                <p class="fs-xs mb-0 text-body-secondary">{{ activity.datetime }}</p>
                @if (activity.extra?.type === 'button') {
                <a [href]="activity.extra?.url" class="btn btn-default border px-1 py-0 mt-2">
                    <ng-icon [name]="activity.extra?.icon" class="me-1"/> {{ activity.extra?.label }}
                </a>
                }
                @if (activity.extra?.type === 'message') {
                <div  class="py-2 px-3 bg-light bg-opacity-50 mt-2">
                    "{{ activity.extra?.message }}"
                </div>
                }
            </div>
            <p class="fs-xs flex-shrink-0 text-body-secondary">{{ activity.timeAgo }}</p>
        </div>
        }

        <div class="d-flex align-items-center justify-content-center gap-2 p-3">
            <strong>Loading...</strong>
            <div class="spinner-border spinner-border-sm text-danger" role="status"
                 aria-hidden="true"></div>
        </div>
    `,
    styles: ``
})
export class ActivityComponent {
    activities: ActivityType[] = [
        {
            avatar: "assets/images/users/user-1.jpg",
            name: "Daniel Martinez",
            action: "uploaded a revised contract file.",
            datetime: "Today 10:15 am - 24 Apr, 2025",
            timeAgo: "5m ago"
        },
        {
            avatar: "assets/images/users/user-2.jpg",
            name: "Nina Patel",
            action: "commented on your design update.",
            datetime: "Today 8:00 am - 24 Apr, 2025",
            timeAgo: "2h ago"
        },
        {
            avatar: "assets/images/users/user-3.jpg",
            name: "Jason Lee",
            action: "completed the feedback review.",
            datetime: "Yesterday 6:10 pm - 23 Apr, 2025",
            timeAgo: "16h ago"
        },
        {
            avatar: "assets/images/users/user-4.jpg",
            name: "Emma Davis",
            action: "shared a link in the marketing group chat.",
            datetime: "Yesterday 3:25 pm - 23 Apr, 2025",
            timeAgo: "19h ago",
            extra: {
                type: "button",
                label: "View",
                icon: "tablerLink",
                url: "",
            }
        },
        {
            avatar: "assets/images/users/user-5.jpg",
            name: "Leo Zhang",
            action: "sent you a private message.",
            datetime: "2 days ago 11:45 am - 22 Apr, 2025",
            timeAgo: "30h ago",
            extra: {
                type: "message",
                message: "Let’s sync up on the product roadmap tomorrow afternoon, does 2 PM work for you?"
            }
        }
    ];
}
