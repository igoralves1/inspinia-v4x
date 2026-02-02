import {Component, Input} from '@angular/core';
import {UserRoleType} from '@/app/views/apps/users/roles/types';
import {NgIcon} from '@ng-icons/core';
import {NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-role-card',
    imports: [
        NgIcon,
        NgbDropdownModule,
        NgbTooltipModule
    ],
  template: `
      <div class="card">
          <div class="card-body d-flex flex-column justify-content-between">
              <div class="d-flex align-items-center mb-4">
                  <div class="flex-shrink-0">
                      <div
                          class="avatar-xl rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center">
                          <ng-icon [name]="role.icon" class="fs-24 text-primary"/>
                      </div>
                  </div>
                  <div class="ms-3">
                      <h5 class="mb-2">{{ role.title }}</h5>
                      <p class="text-muted mb-0 fs-base">{{ role.description }}</p>
                  </div>
                  <div class="ms-auto">
                      <div ngbDropdown placement="start-top">
                          <a href="javascript:void(0)" class="text-muted fs-xl drop-arrow-none" ngbDropdownToggle>
                              <ng-icon name="tablerDotsVertical"/>
                          </a>
                          <ul class="dropdown-menu-end" ngbDropdownMenu>
                              <li><a ngbDropdownItem href="#">
                                  <ng-icon name="tablerEye" class="me-2"/>
                                  View</a>
                              </li>
                              <li><a ngbDropdownItem href="#">
                                  <ng-icon name="tablerEdit"
                                           class="me-2"/>
                                  Edit</a></li>
                              <li><a ngbDropdownItem class="text-danger" href="#">
                                  <ng-icon name="tablerTrash"
                                           class="me-2"/>
                                  Remove</a></li>
                          </ul>
                      </div>
                  </div>
              </div>

              <ul class="list-unstyled mb-3">
                  @for (feature of role.features; track $index; let last = $last) {
                      <li class="d-flex align-items-center {{!last ? 'mb-2' : ''}}">
                          <ng-icon name="tablerCheck" class="fs-lg text-success me-2 "/>
                          {{ feature }}
                      </li>
                  }
              </ul>

              <p class="mb-2 text-muted">Total {{ role.totalUsers }} users</p>
              <div class="avatar-group avatar-group-sm mb-3">
                  @for (avatar of role.users; track $index; let i = $index) {
                      @if (i < 4) {
                          <div class="avatar">
                              <img [src]="avatar" alt="" class="rounded-circle avatar-sm">
                          </div>
                      }
                  }
                  @if (role.users.length > 4) {
                      <div class="avatar avatar-sm" [ngbTooltip]="(role.users.length - 4) + ' more'">
                              <span class="avatar-title text-bg-primary rounded-circle fw-bold">
                                +{{ role.users.length - 4 }}
                              </span>
                      </div>
                  }
              </div>

              <div class="d-flex justify-content-between align-items-center">
                  <span class="text-muted fs-xs"><ng-icon name="tablerClock"
                                                          class="me-1"/>Updated {{ role.updatedTime }}</span>
                  <button class="btn btn-sm btn-outline-primary rounded-pill">Details</button>
              </div>
          </div>
      </div>
  `,
  styles: ``
})
export class UserRoleCardComponent {
@Input() role!:UserRoleType
}
