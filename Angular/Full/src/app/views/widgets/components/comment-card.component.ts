import {Component} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {comments} from '@/app/views/widgets/data';
import {abbreviatedNumber} from '@/app/utils/string-utils';

@Component({
    selector: 'app-comment-card',
    imports: [NgIcon],
    template: `
        <div class="card">
            <div class="card-body">
                @for (item of comments; track $index) {
                    <div class="d-flex border border-dashed rounded p-3">
                        <div class="flex-shrink-0">
                            <img [src]="item.avatar" alt="" class="avatar-sm rounded-circle shadow-sm"/>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="mb-1">
                                {{ item.name }}
                                <small class="text-muted">{{ item.date }} · {{ item.time }}</small>
                            </h5>
                            <p class="mb-2">{{ item.message }}</p>

                            <div class="d-flex justify-content-between mt-2 text-muted">
                                <div class="d-flex gap-3">
                            <span class="d-inline-flex align-items-center gap-1">
                              <ng-icon name="tablerEye"/>
                                {{ abbreviatedNumber(item.views) }}
                            </span>
                                    <span class="d-inline-flex align-items-center gap-1">
                               <ng-icon name="tablerHeart"/>
                                        {{ item.likes }}
                            </span>
                                    <span class="d-inline-flex align-items-center gap-1">
                              <ng-icon name="tablerMessageCircle"/>
                                        {{ item.comments }}
                            </span>
                                </div>
                                <a href="javascript:void(0);"
                                   class="link-primary fw-semibold d-inline-flex align-items-center gap-1">
                                    <ng-icon name="tablerArrowBackUp"/>
                                    Reply
                                </a>
                            </div>

                            @for (reply of item.reply; track $index) {
                                <div class="d-flex mt-4">
                                    <div class="flex-shrink-0">
                                        <img [src]="reply.avatar" alt="" class="avatar-sm rounded-circle shadow-sm"/>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <h5 class="mb-1">
                                            {{ reply.name }}
                                            <small class="text-muted">{{ reply.date }} · {{ reply.time }}</small>
                                        </h5>
                                        <p class="mb-2">{{ reply.message }}</p>

                                        <div class="d-flex justify-content-between text-muted">
                                            <div class="d-flex gap-3">
                                    <span class="d-inline-flex align-items-center gap-1">
                                      <ng-icon name="tablerEye"/>
                                        {{ abbreviatedNumber(reply.views) }}
                                    </span>
                                                <span class="d-inline-flex align-items-center gap-1">
                                      <ng-icon name="tablerHeart"/>
                                                    {{ reply.likes }}
                                    </span>
                                                <span class="d-inline-flex align-items-center gap-1">
                                      <ng-icon name="tablerMessageCircle"/>
                                                    {{ reply.comments }}
                                    </span>
                                            </div>
                                            <a href="javascript:void(0);"
                                               class="link-primary fw-semibold d-inline-flex align-items-center gap-1">
                                                <ng-icon name="tablerArrowBackUp"/>
                                                Reply
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    `,
    styles: ``
})
export class CommentCardComponent {
    protected readonly comments = comments;
    protected readonly abbreviatedNumber = abbreviatedNumber;
}
