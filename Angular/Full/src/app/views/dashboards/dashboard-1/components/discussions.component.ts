import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {UiCardComponent} from '@app/components/ui-card.component';
import {userMessages} from '@/app/views/dashboards/dashboard-1/data';
import {generateInitials} from '@/app/utils/string-utils';
import {NgIcon} from '@ng-icons/core';

@Component({
  selector: 'app-discussions',
    imports: [
        RouterLink,
        UiCardComponent,
        NgIcon
    ],
  template: `
      <app-ui-card title="Discussions" bodyClass="p-0">
          <span badge-text class="badge bg-primary-subtle text-primary">Pro+</span>
          <a helper-text [routerLink]="[]" class="badge text-bg-light fs-xs fw-semibold p-1">Mark all as read</a>
          <div card-body>
              <div class="card-body bg-light-subtle border-bottom border-dashed">
                  <div class="d-flex gap-2">
                      <div class="me-2 flex-shrink-0">
                          <img src="assets/images/message-mail.png" height="36" alt="message img">
                      </div>
                      <div class="flex-grow-1">
                          <h4 class="fs-sm mb-1">New messages</h4>
                          <p class="fs-xs mb-0 text-body-secondary">
                              You have <span class="text-body fw-semibold">22</span> new messages and
                              <span class="text-body fw-semibold">16</span> waiting in draft folder.
                          </p>
                      </div>
                  </div>
              </div>

              <div class="card-body pt-1">
                  <ul class="list-group list-group-flush mb-3">
                      @for ( user of userMessages; track $index) {
                      <li  class="list-group-item px-0 border-light">
                          <div class="d-flex gap-2">
                              <div class="me-2 flex-shrink-0">
                                  @if (user.avatar) {
                                      <img [src]="user.avatar" [alt]="user.name" class="avatar-md rounded-circle">
                                  } @else {
                                      <div class="avatar avatar-md">
                                        <span class="avatar-title bg-purple-subtle text-purple rounded-circle fw-bold">
                                          {{ generateInitials(user.name) }}
                                        </span>
                                      </div>
                                  }
                              </div>
                              <div class="flex-grow-1 text-muted">
                                  <h6 class="text-body mb-1 fs-base d-flex justify-content-between">
                                      {{ user.name }}
                                      <small class="fs-xs text-body-secondary">{{ user.time }}</small>
                                  </h6>
                                  <p class="mb-1">{{ user.message }}</p>
                                  <a routerLink="/apps/chat" class="badge badge-soft-primary p-1">Reply</a>
                              </div>
                          </div>
                      </li>
                      }
                  </ul>


                  <div class="text-center mt-3">
                      <a routerLink="/apps/chat" class="link-reset text-decoration-underline fw-semibold link-offset-3 d-flex align-items-center justify-content-center gap-1 flex-wrap">
                          Go to Chat Room <ng-icon name="tablerSend2"/>
                      </a>
                  </div>

              </div>
          </div>
      </app-ui-card>

  `,
  styles: ``
})
export class DiscussionsComponent {

    protected readonly userMessages = userMessages;
    protected readonly generateInitials = generateInitials;
}
