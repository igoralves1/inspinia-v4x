import {Component} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {countries} from '@/app/views/widgets/data';

@Component({
    selector: 'app-top-countries',
    imports: [
        UiCardComponent,
        RouterLink,
        NgIcon,
    ],
    template: `
        <app-ui-card title="Top 10 Countries" [isCloseable]="true" [isTogglable]="true" [isReloadable]="true">
            <div card-body>
                @for (country of countries; let last = $last; let i = $index; track $index) {
                    <div class="d-flex align-items-center gap-2 {{!last ? 'mb-3' : '' }}">
                        <span class="fs-sm fw-medium fst-italic text-muted">{{ (i + 1).toString().padStart(2, '0') }}
                            .</span>
                        <img [src]="country.flag" alt="Germany" class="avatar-xxs rounded">
                        <h5 class="mb-0 fw-medium"><a [routerLink]="[]" class="link-reset">{{ country.name }}</a></h5>
                        <div class="ms-auto">
                            <div class="d-flex align-items-center gap-3">
                                <p class="mb-0 fw-medium">{{ country.count }}</p>
                                <p class="badge badge-label fs-xxs badge-soft-{{country.variant}} mb-0">
                                    {{ country.variant === 'danger' ? '-' : country.variant === 'success' ? '+' : '' }}{{ country.change }}
                                    %</p>
                            </div>
                        </div>
                    </div>
                }
                <div class="text-center mt-2">
                    <a routerLink="/apps/chat"
                       class="link-reset text-decoration-underline fw-semibold link-offset-3 d-flex align-items-center gap-1 justify-content-center">
                        View all Countries
                        <ng-icon name="tablerWorld"/>
                    </a>
                </div>
            </div>
        </app-ui-card>
    `,
})
export class TopCountriesComponent {
    protected readonly countries = countries;
}
