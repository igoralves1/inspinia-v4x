import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';

type QuickMessageType = {
    avatar?: string;
    name: string;
    message: string;
    time?: string;
    totalMessages?: {
        count: number;
        variant: string
    };
    isOnline?: boolean;

};

@Component({
    selector: 'app-quick-message',
    imports: [RouterLink, NgIcon],
    template: `
        <div class="p-3 border-bottom">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <p class="mb-0 fw-semibold fs-sm">Quick Message</p>
                <p class="fw-semibold text-success mb-0 fs-xs">
                    <ng-icon name="tablerCircleFill"/>
                    Online
                </p>
            </div>
            @for (chat of quickMessages; track $index) {
                <a [routerLink]="[]" class="d-block py-2">
                    @if (chat.totalMessages) {
                        <span
                            class="badge text-bg-{{ chat.totalMessages.variant }} rounded-circle float-end">
                        {{ chat.totalMessages.count }}
                      </span>
                    }
                    @if (chat.time && !chat.totalMessages) {
                        <span class="text-muted float-end fs-10">
                        {{ chat.time }}
                        </span>
                    }

                    <span class="d-flex align-items-center">
            <span class="flex-shrink-0">
                @if (chat.avatar) {
                    <img [src]="chat.avatar" [alt]="chat.name" class="avatar-sm rounded-circle">
                } @else {
                    <span class="avatar avatar-sm d-block">
                <span class="avatar-title bg-info-subtle text-info rounded-circle fw-bold">
                  {{ chat.name.charAt(0) }}
                </span>
              </span>
                }
            </span>
            <span class="flex-grow-1 ms-2 text-truncate">
              <span class="mb-0 lh-base d-block fw-medium text-body fs-base">{{ chat.name }}</span>
              <span [class]="chat.isOnline ?'text-success':  'text-muted'" class="fs-xxs mb-0">
                {{ chat.message }}
              </span>
            </span>
          </span>
                </a>
            }

            <div class="text-center mt-2">
                <a routerLink="/apps/chat"
                   class="link-reset text-decoration-underline fw-semibold link-offset-3 d-flex align-items-center gap-1 justify-content-center">
                    Go to Chat
                    <ng-icon name="tablerMessage"/>
                </a>
            </div>
        </div>
    `,
    styles: ``
})
export class QuickMessageComponent {
    quickMessages: QuickMessageType[] = [
        {
            avatar: 'assets/images/users/user-3.jpg',
            name: 'Lucas Miller',
            message: 'active now',
            totalMessages: {count: 5, variant: 'danger'},
            isOnline: true
        },
        {
            avatar: 'assets/images/users/user-4.jpg',
            name: 'Amelia Green',
            message: 'See you soon!',
            time: '25min ago'
        },
        {
            name: 'Sophia Turner',
            message: 'Good Morning! 👋',
            totalMessages: {count: 1, variant: 'success'}
        },
        {
            avatar: 'assets/images/users/user-6.jpg',
            name: 'Noah Smith',
            message: "Let's catch up later.",
            time: '1h ago'
        },
        {
            avatar: 'assets/images/users/user-7.jpg',
            name: 'Emma Johnson',
            message: 'Sent you the files.',
            time: '3h ago'
        }
    ];
}
