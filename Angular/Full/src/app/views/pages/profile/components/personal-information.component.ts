import {Component} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {UiCardComponent} from "@app/components/ui-card.component";

@Component({
    selector: 'app-personal-information',
    imports: [NgIcon, NgIcon, UiCardComponent],
    template: `
        <app-ui-card title="Personal Information">
            <div card-body>
                <div class="d-flex align-items-center gap-2 mb-2">
                    <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                        <ng-icon name="tablerBriefcase" class="fs-xl text-secondary"></ng-icon>
                    </div>
                    <p class="mb-0 fs-sm">UI/UX Designer & Full-Stack Developer</p>
                </div>
                <div class="d-flex align-items-center gap-2 mb-2">
                    <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                        <ng-icon name="tablerSchool" class="fs-xl text-secondary"></ng-icon>
                    </div>
                    <p class="mb-0 fs-sm">Studied at <span class="text-dark fw-semibold">Stanford
                    University</span>
                    </p>
                </div>
                <div class="d-flex align-items-center gap-2 mb-2">
                    <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                        <ng-icon name="tablerMapPin" class="fs-xl text-secondary"/>
                    </div>
                    <p class="mb-0 fs-sm">Lives in <span class="text-dark fw-semibold">San Francisco, CA</span>
                    </p>
                </div>
                <div class="d-flex align-items-center gap-2 mb-2">
                    <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                        <ng-icon name="tablerUsers" class="fs-xl text-secondary"/>
                    </div>
                    <p class="mb-0 fs-sm">Followed by <span class="text-dark fw-semibold">25.3k People</span>
                    </p>
                </div>
                <div class="d-flex align-items-center gap-2 mb-2">
                    <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                        <ng-icon name="tablerMail" class="fs-xl text-secondary"/>
                    </div>
                    <p class="mb-0 fs-sm">Email <a href="mailto:hello&#64;example.com"
                                                   class="text-primary fw-semibold">hello&#64;example.com</a>
                    </p>
                </div>
                <div class="d-flex align-items-center gap-2 mb-2">
                    <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                        <ng-icon name="tablerLink" class="fs-xl text-secondary"/>
                    </div>
                    <p class="mb-0 fs-sm">Website <a href="https://www.example.dev"
                                                     class="text-primary fw-semibold">www.example.dev</a>
                    </p>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                        <ng-icon name="tablerWorld" class="fs-xl text-secondary"></ng-icon>
                    </div>
                    <p class="mb-0 fs-sm">Languages <span class="text-dark fw-semibold">English, Hindi,
                    Japanese</span>
                    </p>
                </div>

                <div class="d-flex justify-content-center gap-2 mt-4 mb-2">
                    @for (link of socialLinks; track $index) {
                        <a href="javascript:void(0)" class="btn btn-icon rounded-circle"
                           [class]="'btn-' + link.variant">
                            <ng-icon [name]="link.icon" class="fs-xl"></ng-icon>
                        </a>
                    }
                </div>
            </div>
        </app-ui-card>
    `,
    styles: ``
})
export class PersonalInformationComponent {
    socialLinks = [
        { variant: 'purple', icon: 'tablerBrandFacebook', },
        { variant: 'info', icon: 'tablerBrandX', },
        { variant: 'danger', icon: 'tablerBrandInstagram', },
        { variant: 'success', icon: 'tablerBrandDribbble', },
        { variant: 'secondary', icon: 'tablerBrandLinkedin', },
        { variant: 'danger', icon: 'tablerBrandYoutube', }
    ];
}
