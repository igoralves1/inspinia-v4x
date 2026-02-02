import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIcon } from '@ng-icons/core';

@Component({
    selector: 'app-user-card',
    imports: [NgIcon, NgbDropdownModule],
    template: `
        <article class="card card-out-of-container border-top-0">
    <div class="position-relative card-side-img overflow-hidden"
        style="height: 250px; background-image: url(assets/images/profile-bg.jpg);">
        <div class="p-4 card-img-overlay rounded-start-0 auth-overlay d-flex align-items-center justify-content-center">
            <h3 class="text-white mb-0 fst-italic">"Designing the future, one template
                at a time"</h3>
        </div>
    </div>

    <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-start align-items-center gap-3">
                <div class="avatar avatar-xxl">
                    <img src="assets/images/users/user-2.jpg" alt="avatar-2"
                        class="img-fluid img-thumbnail rounded-circle">
                </div>
                <div>
                    <h4 class="text-nowrap fw-bold mb-1"> Damian D. </h4>
                    <p class="text-muted mb-1">Product Designer</p>
                    <span class="badge badge-soft-primary fw-medium ms-2 fs-xs ms-auto">Author</span>
                </div>
            </div>
            <div ngbDropdown class="d-flex gap-2">
                <a class="btn btn-outline-primary" href="javascript:void(0)">Follow</a>
                <a class="btn btn-primary" href="javascript:void(0)">Message</a>
                <button ngbDropdownToggle class="btn btn-icon btn-dark drop-arrow-none" data-bs-toggle="dropdown">
                    <ng-icon name="tablerDots" class="fs-24"></ng-icon>
                </button>
                <ul ngbDropdownMenu>
                    <li><a ngbDropdownItem href="javascript:void(0)">Edit Profile</a></li>
                    <li><a ngbDropdownItem class="text-danger" href="javascript:void(0)">Report</a></li>
                </ul>
            </div>
        </div>
    </div>
</article>
 `,
    styles: ``
})
export class UserCardComponent {

}
