import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {SimplebarAngularModule} from 'simplebar-angular';

type EmailSidebarItem = {
    label: string;
    icon: string;
    link: string;
    badge?: {
        variant: string;
        text: string;
    }
}

@Component({
    selector: 'app-email-sidebar',
    imports: [
        RouterLink,
        NgIcon,
        SimplebarAngularModule,
    ],
    template: `
        <ngx-simplebar style="height: 100%">
            <div class="card  mb-0 rounded-end-0" style="height:740px">
                <div class="card-body w-100">
                    <a routerLink="/apps/email/compose" class="btn btn-danger fw-medium w-100">Compose</a>

                    <div class="list-group list-group-flush list-custom mt-3">
                        @for (item of emailSidebarMenu; track i; let i = $index; let first = $first) {
                            <a [routerLink]="item.link ? item.link : []"
                               class="list-group-item list-group-item-action" [class.active]="first">
                                <ng-icon [name]="item.icon" class="me-2 opacity-75 fs-lg align-middle d-inline-flex"/>
                                <span class="align-middle">{{ item.label }}</span>
                                @if (item.badge) {
                                    <span
                                        class="badge align-middle bg-{{item.badge.variant}}-subtle fs-xxs text-{{item.badge.variant}} float-end">{{ item.badge.text }}</span>
                                }
                            </a>
                        }

                        <div class="list-group-item mt-2">
                            <span class="align-middle">Labels</span>
                        </div>
                        @for (item of labels; track i; let i = $index; ) {
                            <a [routerLink]="[]"
                               class="list-group-item list-group-item-action d-flex align-items-center gap-1">
                                <ng-icon name="tablerChartDonutFill" class="me-1 fs-sm text-{{item.variant}}"/>
                                <span class="align-middle">{{ item.name }}</span>
                            </a>
                        }
                    </div>

                </div>

                <div class="position-absolute bottom-0 start-0 w-100 overflow-hidden"
                     style="pointer-events: none;">
                    <svg viewBox="0 0 600 560" preserveAspectRatio="xMinYMax meet" width="100%" height="100%"
                         fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity: 0.05;">
                        <circle cx="50" cy="480" r="40" fill="#FF4C3E"/>

                        <path d="M140 440 C130 470, 100 470, 90 440 S50 410, 40 440" stroke="#089df1"
                              stroke-width="2" fill="none"/>

                        <path d="M100 360 L50 410 L0 360 Z" fill="#f9bf59"/>

                        <ellipse cx="80" cy="280" rx="30" ry="50" fill="#7b70ef"/>

                        <path d="M140 240 Q130 260 110 250 Q90 240 100 220 Q110 200 130 210 Q150 220 140 240 Z"
                              fill="#089df1"/>

                        <path
                            d="M130 150 C140 170, 110 180, 90 170 C70 160, 60 140, 80 120 C100 100, 120 110, 130 150 Z"
                            fill="#f7577e"/>

                        <path
                            d="M220 480 L212 460 H190 L208 445 L200 425 L220 437 L240 425 L232 445 L250 460 H228 Z"
                            fill="#7b70ef"/>

                        <path
                            d="M310 460 C300 470, 290 450, 300 440 C310 430, 330 430, 340 440 C350 450, 350 470, 340 480"
                            stroke="#089df1" stroke-width="2" fill="none"/>

                        <path d="M280 360 L270 350 L280 330 L300 330 L310 350 Z" fill="#f7577e"/>

                        <circle cx="140" cy="310" r="20" stroke="#089df1" stroke-width="3" fill="none"/>
                    </svg>
                </div>
            </div>
        </ngx-simplebar>
    `,
    styles: ``
})
export class EmailSidebarComponent {
    labels = [{name: "Business", variant: "primary"}, {name: "Personal", variant: "purple"}, {
        name: "Friends",
        variant: "info"
    }, {name: "Family", variant: "warning"}];
    emailSidebarMenu: EmailSidebarItem[] = [
        {
            label: 'Inbox',
            icon: 'tablerInbox',
            link: '/apps/email/inbox',
            badge: {variant: 'danger', text: '21'}
        },
        {
            label: 'Sent',
            icon: 'tablerSend',
            link: ''
        },
        {
            label: 'Starred',
            icon: 'tablerStar',
            link: ''
        },
        {
            label: 'Scheduled',
            icon: 'tablerClock',
            link: ''
        },
        {
            label: 'Drafts',
            icon: 'tablerPencil',
            link: '',
            badge: {variant: 'purple', text: '9'}
        },
        {
            label: 'Important',
            icon: 'tablerAlertCircle',
            link: ''
        },
        {
            label: 'Spam',
            icon: 'tablerBan',
            link: ''
        },
        {
            label: 'Trash',
            icon: 'tablerTrash',
            link: ''
        },

    ]
}
