import {Component, Input} from '@angular/core';
import {ContactType} from '@/app/views/apps/users/contacts/types';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {generateInitials} from '@/app/utils/string-utils';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-contact-card',
    imports: [
        RouterLink,
        NgIcon,
        NgbDropdownModule
    ],
    template: `
        <div class="card card-h-100">
            <div class="card-body">
                <div class="d-flex align-items-center mb-4">
                    <div class="me-3 position-relative">
                        @if (contact.avatar) {
                            <img [src]="contact.avatar" [alt]="contact.name" class="rounded-circle" width="72"
                                 height="72">
                        } @else {
                            <div class="avatar rounded-circle flex-shrink-0" style="height: 72px; width: 72px;">
                                <span class="avatar-title text-bg-primary fw-semibold rounded-circle fs-22">
                                        {{ generateInitials(contact.name) }}
                                 </span>
                            </div>
                        }
                        <span
                            class="position-absolute bottom-0 end-0 badge bg-{{contact.variant}} rounded-circle p-1 shadow-sm"
                        >
                                            <ng-icon name="tablerStar" class="text-white"/>
                        </span>
                    </div>
                    <div>
                        <h5 class="mb-1 d-flex align-items-center">
                            <a routerLink="/pages/profile" class="link-reset">{{ contact.name }}</a>
                            <img [src]="contact.flag" alt="US" class="ms-2 rounded-circle" height="16">
                        </h5>
                        <p class="text-muted mb-1">{{ contact.position }}</p>
                        <span class="badge text-bg-light badge-label">{{ contact.role }}</span>
                    </div>
                    <div class="ms-auto">
                        <div ngbDropdown placement="start-top">
                            <a href="javascript:void(0)" class="btn drop-arrow-none btn-icon btn-ghost-light text-muted"
                               ngbDropdownToggle>
                                <ng-icon name="tablerDotsVertical" class="fs-xl"/>
                            </a>
                            <ul class="dropdown-menu-end" ngbDropdownMenu>
                                <li><a ngbDropdownItem href="javascript:void(0)">
                                    <ng-icon name="tablerShare" class="me-2"/>
                                    Share</a></li>
                                <li><a ngbDropdownItem href="javascript:void(0)">
                                    <ng-icon name="tablerEdit" class="me-2"/>
                                    Edit</a></li>
                                <li><a ngbDropdownItem href="javascript:void(0)">
                                    <ng-icon name="tablerBan" class="ban me-2"/>
                                    Block</a></li>
                                <li><a ngbDropdownItem class="text-danger" href="javascript:void(0)">
                                    <ng-icon name="tablerTrash" class="me-2"/>
                                    Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <ul class="list-unstyled text-muted mb-4">
                    <li class="mb-2">
                        <div class="d-flex align-items-center gap-2">
                            <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                              <ng-icon name="tablerMail"/>
                            </span>
                            </div>
                            <h5 class="fs-base mb-0 fw-medium">
                                <a href="mailto:{{ contact.email }}" class="link-reset">{{ contact.email }}</a>
                            </h5>
                        </div>
                    </li>
                    <li class="mb-2">
                        <div class="d-flex align-items-center gap-2">
                            <div class="avatar-xs avatar-img-size fs-24">
                                <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                  <ng-icon name="tablerPhone"/>
                                </span>
                            </div>
                            <h5 class="fs-base mb-0 fw-medium">
                                <a href="tel:{{ contact.mobileNo }}" class="link-reset">{{ contact.mobileNo }}</a>
                            </h5>
                        </div>
                    </li>
                    <li class="mb-2">
                        <div class="d-flex align-items-center gap-2">
                            <div class="avatar-xs avatar-img-size fs-24">
                                <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                  <ng-icon name="tablerMapPin"/>
                                </span>
                            </div>
                            <h5 class="fs-base mb-0 fw-medium">{{ contact.location }}</h5>
                        </div>
                    </li>
                    <li>
                        <div class="d-flex align-items-center gap-2">
                            <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                              <ng-icon name="tablerLink"/>
                            </span>
                            </div>
                            <h5 class="fs-base mb-0 fw-medium">
                                <a [routerLink]="[]" rel="noopener"
                                >{{ contact.url }}</a>
                            </h5>
                        </div>
                    </li>
                </ul>

                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-muted fs-xs"><ng-icon name="tablerRefresh" class="me-1"/>
                        {{ contact.updatedTime }}</span>
                    <a routerLink="/pages/profile" class="btn btn-soft-primary btn-sm rounded-pill">View Profile</a>
                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class ContactCardComponent {
    @Input() contact!: ContactType
    protected readonly generateInitials = generateInitials;
}
