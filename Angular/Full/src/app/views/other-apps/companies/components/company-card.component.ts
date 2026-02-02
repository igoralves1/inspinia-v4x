import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CompanyType} from '@/app/views/other-apps/companies/types';
import {NgIcon} from '@ng-icons/core';
import {RatingComponent} from '@app/components/rating.component';

@Component({
    selector: 'app-company-card',
    imports: [RouterLink, NgIcon, RatingComponent],
    template: `
        <div class="card d-flex flex-row p-3">
            <img [src]="company.logo" alt="Amazon Logo" class="avatar-xl me-3">

            <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h4 class="mb-1 fw-bold">{{ company.name }}</h4>
                        <a [href]="company.url" class="text-muted text-decoration-none">{{ getDomain(company.url) }}</a>
                    </div>
                    <a [routerLink]="[]" class="btn btn-sm btn-outline-danger rounded-pill">
                        <ng-icon name="tablerHeart" class="me-1"/>
                        Follow
                    </a>
                </div>

                <div class="mt-2 mb-3 d-flex flex-wrap gap-2">
                    @for (tag of company.tags; track $index) {
                        <span class="badge bg-light text-primary p-1 fs-xxs"><ng-icon
                            [name]="tag.icon" class="me-1"/>
                            {{ tag.name }}
                        </span>
                    }
                </div>

                <p class="text-muted mb-3">
                    {{ company.description }}
                </p>

                <div class="d-flex justify-content-between flex-wrap mt-2 gap-3">
                    @for (stat of company.stats; track $index) {
                        <div>
                            <h6 class="text-muted">{{ stat.name }}</h6>
                            <span class="fw-semibold fs-lg">{{ stat.prefix }}{{ stat.count }}{{ stat.suffix }}</span>
                        </div>
                    }

                    <div class="text-warning align-self-center fs-lg">
                        <app-rating [rate]="company.rating" [readonly]="true" size="16"/>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class CompanyCardComponent {
    @Input() company!: CompanyType

    getDomain(url: string): string {
        try {
            return new URL(url).host;
        } catch {
            return url;
        }
    }
}
