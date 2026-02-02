import {Component} from '@angular/core';
import {NgbPagination, NgbPaginationNext, NgbPaginationPrevious} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';

type CommentType = {
    name: string;
    avatar: string;
    date: string;
    time: string;
    message: string;
    reply?: CommentType[];
}

@Component({
    selector: 'app-forum-post-details',
    imports: [
        NgbPagination,
        NgIcon,
        RouterLink,
        NgbPaginationNext,
        NgbPaginationPrevious
    ],
    template: `
        <div class="card">
            <div class="card-body">
                <div class="d-flex gap-4 align-items-center">
                    <div class="flex-grow-1">
                        <div class="text-center">

                            <p class="text-muted text-uppercase my-2 fw-semibold">
                                #Development Talk
                            </p>

                            <h4 class="fs-xxl mb-3">
                                What's the best JavaScript framework in 2025?
                            </h4>
                        </div>
                        <div class="fs-sm">
                            <p>With the ever-evolving front-end landscape, JavaScript frameworks are at the
                                heart of most web development stacks. In 2025, options like React, Vue 3,
                                Angular, Svelte, SolidJS, and even newer players continue to battle for
                                dominance in terms of performance, developer experience, ecosystem, and
                                community support.</p>
                            <p>React remains a popular choice due to its strong community, wide adoption,
                                and extensive tooling, while Vue 3 continues to grow thanks to its
                                approachable syntax and composition API. On the other hand, Svelte and
                                SolidJS are gaining attention for their compile-time optimization and
                                ultra-fast runtime performance.</p>
                            <p>We'd love to hear your experience: Which framework do you use and why? Are
                                you prioritizing performance, learning curve, community support, or
                                integration capabilities? Share your insights, real-world comparisons, and
                                predictions for the future!</p>
                        </div>
                    </div>
                </div>


                <p class="d-flex flex-wrap gap-3 text-muted mt-3 mb-0 pb-3 align-items-center justify-content-between fs-sm">
                                            <span class="d-flex align-items-center gap-2">
                                                <img src="assets/images/users/user-5.jpg" alt="avatar-5"
                                                     class="img-fluid avatar-sm rounded">
                                                <span class="text-body">
                                                    <a href="javascript:void(0);"
                                                       class="link-reset fw-semibold lh-sm d-block">James Milton</a>
                                                    <span class="text-muted small">1 hour ago</span>
                                                </span>
                                            </span>
                    <span class="d-flex align-items-center gap-1"><ng-icon name="tablerMessageReply"/> <a [routerLink]="[]"
                                                                                                          class="link-reset">Answers: 45</a></span>
                    <span class="d-flex align-items-center gap-1"><ng-icon name="tablerClock"/> Ends in: 3 days</span>
                    <span class="d-flex align-items-center gap-1"><ng-icon name="tablerUsers"/> Votes: 732</span>
                </p>

                <div class="border-bottom border-dashed mb-3"></div>

                <form action="#" class="mb-3">
                    <div class="mb-3">
                                    <textarea class="form-control bg-light-subtle" id="form-control-textarea" rows="4"
                                              placeholder="Enter your messages..."></textarea>
                    </div>
                    <div class="text-end">
                        <button type="submit" class="btn btn-secondary">Submit
                            <ng-icon name="tablerSend2" class="align-baseline ms-1"/>
                        </button>
                    </div>
                </form>

                <h4>Replies(15)</h4>

                <div class="border-bottom border-dashed my-3"></div>

                @for (comment of comments; track $index) {
                    <div class="d-flex mb-2 border border-dashed rounded p-3">
                        <div class="flex-shrink-0">
                            <img [src]="comment.avatar" alt=""
                                 class="avatar-sm rounded-circle shadow-sm">
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="mb-1">{{ comment.name }} <small class="text-muted">{{ comment.date }}
                                · {{ comment.time }}</small>
                            </h5>
                            <p class="mb-2">{{ comment.message }}</p>
                            <a href="javascript:void(0);"
                               class="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                                <ng-icon name="tablerArrowBackUp" class="fs-lg"/>
                                Reply
                            </a>

                            @for (reply of comment.reply; track $index) {
                                <div  class="d-flex mt-4">
                                    <div class="flex-shrink-0">
                                        <img [src]="reply.avatar" alt=""
                                             class="avatar-sm rounded-circle shadow-sm">
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <h5 class="mb-1">{{ reply.name }} <small class="text-muted">{{ reply.date }} ·
                                            {{ reply.time }}</small></h5>
                                        <p class="mb-2">{{ reply.message }}</p>
                                        <a href="javascript:void(0);"
                                           class="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                                            <ng-icon name="tablerArrowBackUp" class="fs-lg"/>
                                            Reply
                                        </a>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }

                <ul class="pagination pagination-rounded pagination-boxed justify-content-center mt-3 mb-0">
                    <ngb-pagination [collectionSize]="70" [(page)]="page" [maxSize]="4" [ellipses]="true">
                        <ng-template ngbPaginationPrevious>
                            <ng-icon name="tablerChevronLeft"/>
                        </ng-template>
                        <ng-template ngbPaginationNext>
                            <ng-icon name="tablerChevronRight"/>
                        </ng-template>
                    </ngb-pagination>
                </ul>

            </div>
        </div>
    `,
    styles: ``
})
export class ForumPostDetailsComponent {
    page = 1
    comments: CommentType[] = [
        {
            name: "Liam Carter",
            avatar: "assets/images/users/user-8.jpg",
            date: "15 Apr 2025",
            time: "09:20AM",
            message: "Customers are reporting that the checkout page freezes after submitting their payment information.",
            reply: [
                {
                    name: "Nina Bryant",
                    avatar: "assets/images/users/user-10.jpg",
                    date: "15 Apr 2025",
                    time: "11:47AM",
                    message: "That might be caused by the third-party payment gateway. I recommend testing in incognito mode and checking for any JS errors in the console."
                },
                {
                    name: "Sophie Allen",
                    avatar: "assets/images/users/user-3.jpg",
                    date: "16 Apr 2025",
                    time: "10:15AM",
                    message: "We’ve noticed this issue before when the CDN cache hasn't been cleared properly. Try purging the cache and reloading the page."
                }
            ]
        },
        {
            name: "Daniel West",
            avatar: "assets/images/users/user-6.jpg",
            date: "14 Apr 2025",
            time: "04:15PM",
            message: "You can also clear the browser cache or try a different browser. We had a similar issue with Chrome extensions interfering before."
        },
        {
            name: "Nina Bryant",
            avatar: "assets/images/users/user-10.jpg",
            date: "16 Apr 2025",
            time: "08:04AM",
            message: "The System Status Page has been updated. We're actively monitoring and will release a patch within 24 hours.",
            reply: [
                {
                    name: "Daniel West",
                    avatar: "assets/images/users/user-6.jpg",
                    date: "16 Apr 2025",
                    time: "08:30AM",
                    message: "Thanks for the update! We'll notify the customers and let them know the issue is being resolved."
                }
            ]
        }
    ];
}
