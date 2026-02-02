import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-detail',
    imports: [
        RouterLink,
        NgIcon,
        NgbDropdownModule
    ],
  template: `
      <div class="card">
          <div class="card-header justify-content-between border-dashed">
              <h4 class="card-title">Customer Details</h4>
              <a [routerLink]="[]" class="btn btn-default btn-sm btn-icon rounded-circle">
                  <ng-icon name="tablerPencil"
                           class="fs-lg"/>
              </a>
          </div>

          <div class="card-body">
              <div class="d-flex align-items-center mb-4">
                  <div class="me-2">
                      <img src="assets/images/users/user-5.jpg" alt="avatar"
                           class="rounded-circle avatar-lg">
                  </div>
                  <div>
                      <h5 class="mb-1 d-flex align-items-center">
                          <a routerLink="/pages/profile" class="link-reset">Sophia Carter</a>
                          <img src="assets/images/flags/gb.svg" alt="UK" class="ms-2 rounded-circle"
                               height="16">
                      </h5>
                      <p class="text-muted mb-0">Since 2020</p>
                  </div>
                  <div class="ms-auto">
                      <div ngbDropdown placement="bottom-end">
                          <a href="javascript:void(0);" class="btn btn-icon btn-ghost-light text-muted drop-arrow-none"
                             ngbDropdownToggle>
                              <ng-icon name="tablerDotsVertical" class="fs-xl"/>
                          </a>
                          <ul class="dropdown-menu-end" ngbDropdownMenu>
                              <li><a ngbDropdownItem>
                                  <ng-icon name="tablerShare" class="me-2"/>
                                  Share</a>
                              </li>
                              <li><a ngbDropdownItem>
                                  <ng-icon name="tablerEdit"
                                           class="me-2"/>
                                  Edit</a></li>
                              <li><a ngbDropdownItem>
                                  <ng-icon name="tablerBan"
                                           class="me-2"/>
                                  Block</a></li>
                              <li><a class="text-danger" ngbDropdownItem>
                                  <ng-icon
                                      name="tablerTrash" class="me-2"/>
                                  Delete</a></li>
                          </ul>
                      </div>
                  </div>
              </div>

              <ul class="list-unstyled text-muted mb-0">
                  <li class="mb-2">
                      <div class="d-flex align-items-center gap-2">
                          <div class="avatar-xs avatar-img-size fs-24">
                                                        <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                                            <ng-icon name="tablerMail" />
                                                        </span>
                          </div>
                          <h5 class="fs-base mb-0 fw-medium"><a [routerLink]="[]"
                                                                class="link-reset">sophia&#64;designhub
                              .com</a></h5>
                      </div>
                  </li>
                  <li class="mb-2">
                      <div class="d-flex align-items-center gap-2">
                          <div class="avatar-xs avatar-img-size fs-24">
                                                        <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                                            <ng-icon name="tablerPhone" />
                                                        </span>
                          </div>
                          <h5 class="fs-base mb-0 fw-medium"><a [routerLink]="[]" class="link-reset">+44 7911
                              123456</a></h5>
                      </div>
                  </li>
                  <li>
                      <div class="d-flex align-items-center gap-2">
                          <div class="avatar-xs avatar-img-size fs-24">
                                                        <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                                            <ng-icon name="tablerMapPin" />
                                                        </span>
                          </div>
                          <h5 class="fs-base mb-0 fw-medium">London, UK</h5>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  `,
  styles: ``
})
export class CustomerDetailComponent {

}
