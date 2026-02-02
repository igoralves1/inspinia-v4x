import {Component} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-profile-card',
    imports: [
        NgIcon,
        NgbDropdownModule,
        RouterLink
    ],
    template: `
        <div class="card border-top-0">
            <div class="position-relative card-side-img overflow-hidden rounded-top"
                 style="height: 180px; background-image: url(assets/images/profile-bg.jpg);">
                <div
                    class="p-4 card-img-overlay rounded-start-0 auth-overlay d-flex rounded-top align-items-center justify-content-center">
                    <h5 class="text-white m-0 fst-italic">"Welcome!"</h5>
                </div>
            </div>

            <div class="card-body position-relative">
                <div class="d-flex justify-content-start gap-3" ngbDropdown placement="bottom-end">
                    <div class="avatar avatar-xxl" style="margin-top: -60px;">
                        <a routerLink="/pages/profile">
                            <img src="assets/images/users/user-2.jpg" alt="User Profile"
                                 class="img-fluid img-thumbnail rounded-circle">
                        </a>
                    </div>
                    <div>
                        <h4 class="text-nowrap fw-bold mb-1">
                            <a routerLink="/pages/profile" class="text-reset text-decoration-none">Damian D.</a>
                        </h4>
                        <p class="text-muted mb-0">Member since Jan 2021</p>
                    </div>
                    <button class="btn btn-icon btn-primary rounded-circle ms-auto drop-arrow-none" ngbDropdownToggle
                            style="margin-top: -40px;">
                        <ng-icon name="tablerDots" class="fs-24"/>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end" ngbDropdownMenu>
                        <li><a ngbDropdownItem href="javascript:void(0);">Edit Profile</a></li>
                        <li><a class="text-danger" href="javascript:void(0);" ngbDropdownItem>Report</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `,
})
export class ProfileCardComponent {

}
