import {Component} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {UiCardComponent} from "../../../../components/ui-card.component";

type SocialFeedType = {
    avatar: string;
    name: string;
    text?: string;
    actionIcons?: {
        name: string,
        variant: string,
    }[];
    time?: string;
    badge?: {
        variant: string,
        text: string;
    };
}

@Component({
    selector: 'app-social-feed',
    imports: [ NgIcon, UiCardComponent],
    template: `
        <app-ui-card title="My Social Feed">
            <div card-body>
                @for (feed of socialFeedData; track $index; let last = $last;let first = $first) {
                    <div
                        class="d-flex justify-content-between align-items-center {{!last && 'border-bottom'}} {{first ? 'pb-2' : 'py-2'}}">
                        <div class="d-flex align-items-center gap-2">
                            <div class="avatar avatar-sm">
                                <img [src]="feed.avatar" [alt]="feed.name" class="img-fluid rounded"/>
                            </div>
                            <div>
                                <h5 class="fs-sm mb-0 lh-base">{{ feed.name }}</h5>
                                @if (feed.text) {
                                    <p class="text-muted fs-xs mb-0">{{ feed.text }}</p>
                                }
                            </div>
                            @if (feed.badge) {
                                <div class="ms-2">
                                <span class="badge"
                                      [class]="'badge-soft-' + feed.badge.variant">{{ feed.badge.text }}</span>
                                </div>
                            }
                        </div>

                        <div class="d-flex gap-1">
                            @for (icon of feed.actionIcons; track $index) {
                                <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                                   [class]="'btn-' + icon.variant">
                                    <ng-icon [name]="icon.name"/>
                                </a>
                            }
                        </div>
                        @if (feed.time) {
                            <small class="text-muted fs-xxs">{{ feed.time }}</small>
                        }
                    </div>
                }
            </div>
        </app-ui-card>

    `,
    styles: ``
})
export class SocialFeedComponent {
    socialFeedData: SocialFeedType[] = [
        {
            avatar: 'assets/images/users/user-3.jpg',
            name: 'Ava Brooks',
            text: 'ava@pixelsuite.io',
            actionIcons: [{ name: 'tablerMessage', variant: 'primary' }]
        },
        {
            avatar: 'assets/images/users/user-4.jpg',
            name: 'Leo Martin',
            text: 'leo@designbyte.com',
            badge: { variant: 'success', text: 'New Request' },
            actionIcons: [
                { name: 'tablerCheck', variant: 'outline-primary' },
                { name: 'tablerX', variant: 'danger' }
            ]
        },
        {
            avatar: 'assets/images/users/user-5.jpg',
            name: 'Sophie Moore',
            text: 'Liked your post',
            time: '2m ago'
        },
        {
            avatar: 'assets/images/users/user-6.jpg',
            name: 'Liam Johnson',
            text: 'Commented on your photo',
            actionIcons: [{ name: 'tablerEye', variant: 'outline-secondary' }]
        },
        {
            avatar: 'assets/images/users/user-7.jpg',
            name: 'Mia Collins',
            text: 'Invited you to join "Design Ninjas"',
            actionIcons: [{ name: 'tablerUserPlus', variant: 'outline-primary' }]
        },
        {
            avatar: 'assets/images/users/user-8.jpg',
            name: 'Ethan Green',
            text: 'Mentioned you in a comment',
            actionIcons: [{ name: 'tablerBell', variant: 'outline-info' }]
        },
        {
            avatar: 'assets/images/users/user-9.jpg',
            name: 'Emma King',
            text: 'Tagged you in a photo',
            actionIcons: [{ name: 'tablerCamera', variant: 'outline-secondary' }]
        },
        {
            avatar: 'assets/images/users/user-10.jpg',
            name: 'Jack Wilson',
            text: 'Started following you',
            actionIcons: [{ name: 'tablerUserCheck', variant: 'outline-primary' }]
        },
        {
            avatar: 'assets/images/users/user-1.jpg',
            name: 'Isabella Lee',
            text: 'Reacted to your story',
            time: '15m ago'
        },
        {
            avatar: 'assets/images/users/user-2.jpg',
            name: 'Benjamin Gray',
            text: 'Shared your post',
            actionIcons: [{ name: 'tablerShare', variant: 'outline-success' }]
        }
    ];
}
