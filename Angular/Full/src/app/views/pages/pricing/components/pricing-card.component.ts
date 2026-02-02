import {Component, Input} from '@angular/core';
import type {PricingType} from '../types';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';
import {currency} from '@/app/constants';

@Component({
    selector: 'app-pricing-card',
    imports: [NgIcon,RouterLink],
    template: `
        <div
            class="card h-100 bg-light bg-opacity-30 rounded-4"
            [class]="plan.isPopular ? 'border-success border-2 position-relative':'border-light'">
            <div class="card-body px-lg-4 p-5 pb-2 text-center">
                <h3 class="fw-bold mb-1">{{ plan.name }}</h3>
                <p class="text-muted mb-0">{{ plan.description }}</p>
                <div class="my-4">
                    <h1 class="display-6 fw-bold mb-0">\{{ currency }}{{ plan.price }}</h1>
                    <small

                        class="d-block text-muted fs-base fw-medium">{{ plan.paymentType }}</small
                    >
                    <small class="d-block text-muted fw-medium">{{ plan.text }}</small>
                </div>

                <ul class="list-unstyled text-start fs-sm fw-medium mb-0">
                    @for (feature of plan.features; track $index) {
                        <li class="mb-2">
                            <ng-icon [name]="feature.icon" class="text-{{feature.variant}} me-2 fs-5"/>
                            {{ feature.name }}
                        </li>
                    }
                </ul>
            </div>
            <div class="card-footer bg-transparent border-0 px-5 pb-4">
                <a [routerLink]="[]" class="btn w-100 py-2 fw-semibold rounded-pill"
                   [class]="plan.isPopular ? 'btn-primary' : 'btn-dark'">
                    {{ plan.buttonText }}
                </a>
            </div>

            @if (plan.isPopular) {
                <span
                    class="position-absolute fs-xs top-0 start-50 translate-middle-x badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mt-3"
                >
            Popular Choice
            </span>
            }
        </div>
    `,
    styles: ``
})
export class PricingCardComponent {
    @Input() plan!: PricingType
    currency=currency
}
