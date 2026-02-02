import {Component, Input} from '@angular/core';
import {SellerType} from '@/app/views/ecommerce/sellers/types';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';

@Component({
    selector: 'app-seller-contacts',
    imports: [NgbDropdownModule, NgIcon],
    template: `
        <div class="card card-top-sticky">
            <div class="card-body pt-0">
                <article class="card card-out-of-container border-top-0">
                    <div class="position-relative card-side-img overflow-hidden rounded-top"
                         style="height: 180px; background-image: url(assets/images/seller-profile.jpg);">
                        <div
                            class="p-4 card-img-overlay rounded-start-0 auth-overlay d-flex rounded-top align-items-center justify-content-center">

                        </div>
                    </div>

                    <div class="card-body pt-0 position-relative" style="margin-top: -40px;">
                        <div
                            class="d-flex justify-content-between align-items-center rounded border-light p-3 bg-light-subtle border">
                            <div class="d-flex justify-content-start align-items-center gap-3">
                                <div class="avatar avatar-xxl">
                                    <img [src]="seller.image" alt="avatar-2"
                                         class="img-fluid img-thumbnail rounded-circle">
                                </div>
                                <div>
                                    <h4 class="text-nowrap fw-bold mb-1"> {{ seller.name }}</h4>
                                    <p class="text-muted mb-0">Since {{ seller.sinceYear }}</p>
                                </div>
                            </div>
                            <div class="d-flex gap-2" ngbDropdown placement="bottom-end">
                                <button class="btn btn-icon btn-dark drop-arrow-none" ngbDropdownToggle>
                                    <ng-icon name="tablerDots" class="fs-24"/>
                                </button>
                                <ul class="dropdown-menu-end" ngbDropdownMenu>
                                    <li><a ngbDropdownItem >Edit Profile</a></li>
                                    <li><a ngbDropdownItem class="text-danger">Report</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>

                <div class="">
                    <div class="d-flex align-items-center gap-2 mb-2">
                        <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                            <ng-icon name="tablerUser" class="fs-xl text-secondary"></ng-icon>
                        </div>
                        <p class="mb-0 fs-sm">Owner: <span class="fw-semibold">Alex Johnson</span>
                        </p>
                    </div>

                    <div class="d-flex align-items-center gap-2 mb-2">
                        <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                            <ng-icon name="tablerBriefcase" class="fs-xl text-secondary"></ng-icon>
                        </div>
                        <p class="mb-0 fs-sm">Business Type: <span class="fw-semibold">E-commerce Electronics</span>
                        </p>
                    </div>

                    <div class="d-flex align-items-center gap-2 mb-2">
                        <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                            <ng-icon name="tablerCalendarEvent" class="fs-xl text-secondary"></ng-icon>
                        </div>
                        <p class="mb-0 fs-sm">Founded: <span class="fw-semibold">2010</span></p>
                    </div>

                    <div class="d-flex align-items-center gap-2 mb-2">
                        <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                            <ng-icon name="tablerMapPin" class="fs-xl text-secondary"></ng-icon>
                        </div>
                        <p class="mb-0 fs-sm">Location: <span class="fw-semibold">New York, USA</span></p>
                    </div>

                    <div class="d-flex align-items-center gap-2 mb-2">
                        <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                            <ng-icon name="tablerMail" class="fs-xl text-secondary"></ng-icon>
                        </div>
                        <p class="mb-0 fs-sm">Support: <a href="mailto:support@example.com"
                                                          class="text-primary fw-semibold">support&#64;example.com</a>
                        </p>
                    </div>

                    <div class="d-flex align-items-center gap-2 mb-2">
                        <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                            <ng-icon name="tablerLink" class="fs-xl text-secondary"></ng-icon>
                        </div>
                        <p class="mb-0 fs-sm">Website: <a href="https://www.example.com"
                                                          class="text-primary fw-semibold">www.example.com</a>
                        </p>
                    </div>
                </div>
            </div>

            <div class="card-body border-top border-dashed">
                <h5 class="mb-3">Contact Seller</h5>
                <form action="#">
                    <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"
                                      placeholder="Enter your messages..."></textarea>
                    </div>
                    <div class="text-end">
                        <button type="submit" class="btn btn-primary">Send Messages</button>
                    </div>
                </form>
            </div>
        </div>
    `,
    styles: ``
})
export class SellerContactsComponent {
    @Input() seller!: SellerType
}
