import {Component} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {NgIcon} from '@ng-icons/core';
import type {PricingType} from './types';
import {PricingCardComponent} from "./components/pricing-card.component";

@Component({
    selector: 'app-pricing',
    imports: [PageTitleComponent, NgIcon, PricingCardComponent],
    templateUrl: './pricing.component.html',
    styles: ``
})
export class PricingComponent {
    plans: PricingType[] = [
        {
            name: 'Free Plan',
            description: 'Great for solo developers trying things out',
            price: 0,
            paymentType: 'No credit card required',
            text: 'Free forever',
            features: [
                { icon: 'tablerCheck', name: '1 user license' ,variant:"success"},
                { icon: 'tablerCheck', name: 'Access to basic components' ,variant:"success"},
                { icon: 'tablerCheck', name: 'Community support only' ,variant:"success"},
                { icon: 'tablerCheck', name: 'Limited documentation' ,variant:"success"},
                { icon: 'tablerX', name: 'No commercial use' ,variant:"danger"},
                { icon: 'tablerX', name: 'No Figma/design files',variant:"danger" }
            ],
            buttonText: 'Start Free'
        },
        {
            name: 'Pro Plan',
            description: 'Ideal for freelancers and small teams with commercial needs',
            price: 129,
            paymentType: 'One-time payment',
            text: 'Plus applicable taxes',
            features: [
                { icon: 'tablerCheck', name: '3 user licenses' ,variant:"success"},
                { icon: 'tablerCheck', name: 'Full component access' ,variant:"success"},
                { icon: 'tablerCheck', name: 'Commercial project rights' ,variant:"success"},
                { icon: 'tablerCheck', name: 'Email support' ,variant:"success"},
                { icon: 'tablerCheck', name: 'Lifetime updates' ,variant:"success"},
                { icon: 'tablerCheck', name: 'Figma design files',variant:"success" }
            ],
            buttonText: 'Upgrade Now',
            isPopular: true
        },
        {
            name: 'Enterprise Plan',
            description: 'Best for companies with scaling teams and critical projects',
            price: 499,
            paymentType: 'One-time payment',
            text: 'Includes extended support',
            features: [
                { icon: 'tablerCheck', name: 'Unlimited users' ,variant:"success"},
                { icon: 'tablerCheck', name: 'All premium components & layouts' ,variant:"success"},
                { icon: 'tablerCheck', name: 'Commercial & SaaS usage rights' ,variant:"success"},
                { icon: 'tablerCheck', name: 'Dedicated support & onboarding' ,variant:"success"},
                { icon: 'tablerCheck', name: 'Custom Figma UI kits' ,variant:"success"},
                { icon: 'tablerCheck', name: 'Priority feature requests',variant:"success" }
            ],
            buttonText: 'Contact Sales'
        }
    ];
}
