import { Component } from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

type CommentType = {
    name: string;
    avatar: string;
    date: string;
    time: string;
    message: string;
    reply?: CommentType[];
}
@Component({
  selector: 'app-comments',
    imports: [
        NgIcon,
        NgbPaginationModule
    ],
  template: `
      <form action="#" class="mb-3">
          <div class="mb-3">
                   <textarea class="form-control" id="form-control-textarea" rows="4"
                             placeholder="Enter your messages..."></textarea>
          </div>
          <div class="text-end">
              <button type="submit" class="btn btn-secondary btn-sm">Comment
                  <ng-icon
                      name="tablerSend2" class="align-baseline ms-1"/>
              </button>
          </div>
      </form>

      <h4 class="mb-3 fs-md">Comments (15)</h4>

      @for (comment of comments; track $index; let last = $last) {
          <div class="d-flex {{last ? 'mb-3' : 'mb-2'}} border border-dashed rounded p-3">
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
                      <div class="d-flex mt-4">
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

      <ul class="pagination pagination-rounded pagination-boxed justify-content-center mb-0">
          <ngb-pagination [collectionSize]="70" [(page)]="page" [maxSize]="4" [ellipses]="true">
              <ng-template ngbPaginationPrevious>
                  <ng-icon name="tablerChevronLeft"/>
              </ng-template>
              <ng-template ngbPaginationNext>
                  <ng-icon name="tablerChevronRight"/>
              </ng-template>
          </ngb-pagination>
      </ul>
  `,
  styles: ``
})
export class CommentsComponent {
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
