import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ForumPostType} from '@/app/views/other-apps/forum-view/types';
import {NgIcon} from '@ng-icons/core';

@Component({
    selector: 'app-forum-post-card',
    imports: [RouterLink, NgIcon],
    template: `
        <div class="card mb-0">
            <div class="card-body">
                <div class="d-flex gap-4 align-items-center">
                    <div class="flex-grow-1">
                        <p class="text-muted text-uppercase mb-2 fw-semibold">{{ post.category }}</p>
                        <h4 class="fs-lg mb-2">
                            <a routerLink="/other-apps/forum-post" class="link-reset">{{post.title}}</a>
                        </h4>
                        <p class="text-muted mb-0">
                            {{post.description}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <p class="d-flex flex-wrap gap-3 text-muted mb-0 align-items-center justify-content-between fs-sm">
                                            <span class="d-flex align-items-center gap-2">
                                                <img [src]="post.avatar" alt="avatar-1"
                                                     class="img-fluid avatar-sm rounded">
                                                <span>
                                                    <a [routerLink]="[]"
                                                       class="link-dark fw-semibold lh-sm d-block">{{ post.author }}</a>
                                                    <span class="text-muted small">{{ post.timeStamp }}</span>
                                                </span>
                                            </span>
                    <span class="d-flex align-items-center gap-1"><ng-icon name="tablerMessageReply" /> <a [routerLink]="[]"
                                                                 class="link-reset">Answers: {{ post.answers }}</a></span>
                    <span class="d-flex align-items-center gap-1"><ng-icon name="tablerClock" /> Ends in: {{ post.timeLeft }}</span>
                    <span class="d-flex align-items-center gap-1"><ng-icon name="tablerUsers" /> Votes: {{ post.votes }}</span>
                    <span class="d-flex align-items-center gap-1"><span class="badge text-bg-{{post.label.variant}}">{{post.label.text}}</span></span>
                </p>
            </div>
        </div>
    `,
    styles: ``
})
export class ForumPostCardComponent {
    @Input() post!: ForumPostType;
}
