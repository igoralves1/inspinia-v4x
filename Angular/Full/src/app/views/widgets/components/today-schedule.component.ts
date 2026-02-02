import {Component} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {UiCardComponent} from '@app/components/ui-card.component';

type MeetingType = {
    title: string;
    subtitle: string;
    variant: string;
    avatars: {
        name: string;
        src?: string;
    }[];
    icon: string;
}

@Component({
    selector: 'app-today-schedule',
    imports: [
        NgIcon,
        UiCardComponent
    ],
    template: `
        <app-ui-card title="Today's Schedule">
            <a helper-text href="javascript: void(0);" class="link-primary fw-semibold">
                <ng-icon
                    name="tablerCalendar" class="me-1"/>
                <span>Invite</span></a>
            <div card-body>
                @for (meeting of meetings; let last = $last; track $index) {
                    <div class="{{last ? 'py-2' : 'pb-2'}} border-bottom border-light border-dashed">
                        <div class="mb-2">
                            <p class="mb-1 text-truncate fs-sm fw-medium">{{ meeting.title }}</p>
                            <span [class]="'text-' + meeting.variant + ' fs-xs'">{{ meeting.subtitle }}</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="avatar-group avatar-group-xs">
                                @for (avatar of meeting.avatars; track $index) {
                                    <div class="avatar avatar-xs">
                                        @if (avatar.src) {
                                            <img [src]="avatar.src" [alt]="avatar.name"
                                                 class="avatar-xs rounded-circle">
                                        }
                                        @if (!avatar.src) {
                                            <span
                                                class="avatar-title bg-success-subtle text-success rounded-circle fw-bold">
                                                 {{ avatar.name }}
                                            </span>
                                        }
                                    </div>
                                }
                            </div>
                            <button type="button" class="btn btn-sm btn-soft-secondary rounded-circle btn-icon">
                                <ng-icon [name]="meeting.icon" class="fs-lg"/>
                            </button>
                        </div>
                    </div>
                }
            </div>
        </app-ui-card>
    `,
})
export class TodayScheduleComponent {
    meetings: MeetingType[] = [
        {
            title: 'Design Review Meeting',
            subtitle: '30 minute session with UI/UX team',
            variant: 'warning',
            avatars: [
                {name: 'Liam Carter', src: 'assets/images/users/user-5.jpg'},
                {name: 'Zoe Miles', src: 'assets/images/users/user-6.jpg'},
                {name: 'D'}
            ],
            icon: 'tablerBrandFigma'
        },
        {
            title: 'Sprint Planning Session',
            subtitle: '1 hour agile team meeting',
            variant: 'success',
            avatars: [
                {name: 'Ava Lee', src: 'assets/images/users/user-7.jpg'},
                {name: 'Ethan King', src: 'assets/images/users/user-8.jpg'},
                {name: 'Lucas White', src: 'assets/images/users/user-9.jpg'}
            ],
            icon: 'tablerCalendarEvent'
        }
    ];
}
