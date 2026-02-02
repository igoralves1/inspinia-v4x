import {Component, inject} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {NgIcon} from '@ng-icons/core';
import {ShepherdService} from 'angular-shepherd';
import {RouterLink} from '@angular/router';

type featureType = {
    icon: string;
    title: string;
    description: string;
}

@Component({
    selector: 'app-tour',
    imports: [PageTitleComponent, NgIcon, RouterLink],
    templateUrl: './tour.component.html',
    styles: ``
})
export class TourComponent {
    private shepherdService = inject(ShepherdService)

    features: featureType[] = [
        {
            icon: 'tablerDeviceDesktop',
            title: 'Multiple Frameworks',
            description: 'Support for Bootstrap, Tailwind, React, Vue, Angular, Laravel, and more — use what suits your stack.'
        },
        {
            icon: 'tablerLayout',
            title: 'Multiple Demos',
            description: 'Choose from a variety of pre-built demos to match your use case — from CRM to SaaS dashboards.'
        },
        {
            icon: 'tablerBrush',
            title: 'Customizable UI',
            description: 'Easily tailor colors, layouts, and components to match your branding and requirements.'
        },
        {
            icon: 'tablerRocket',
            title: 'High Performance',
            description: 'Optimized for speed and efficiency, our admin panel ensures a seamless experience for developers and users alike.'
        }
    ];

    startTour() {
        this.shepherdService.defaultStepOptions = {
            scrollTo: true,
            cancelIcon: {
                enabled: true
            },
            classes: 'btn-primary',
            canClickTarget: false,
            modalOverlayOpeningPadding: 8,
            modalOverlayOpeningRadius: 4
        };

        this.shepherdService.modal = true;

        this.shepherdService.addSteps([
            {
                id: 'step-1',
                attachTo: {
                    element: '#exploreFeatures',
                    on: 'bottom'
                },
                title: 'Getting Started',
                text: 'Click here to get started and explore our framework-rich admin panel. 🚀',
                buttons: [
                    {
                        text: 'Next',
                        action: () => this.shepherdService.tourObject?.next()
                    }
                ]
            },
            {
                id: 'step-2',
                attachTo: {
                    element: '#buyNow',
                    on: 'top'
                },
                title: 'Buy Now',
                text: 'Ready to supercharge your project? Click here to purchase the template',
                buttons: [
                    {
                        text: 'Back',
                        action: () => this.shepherdService.tourObject?.back()
                    },
                    {
                        text: 'Next',
                        action: () => this.shepherdService.tourObject?.next()
                    }
                ]
            },
            {
                id: 'step-3',
                attachTo: {
                    element: '#core-features',
                    on: 'top'
                },
                title: 'Core Features',
                text: 'Learn more about the versatile services and modules we provide to enhance development',
                buttons: [
                    {
                        text: 'Back',
                        action: () => this.shepherdService.tourObject?.back()
                    },
                    {
                        text: 'Next',
                        action: () => this.shepherdService.tourObject?.next()
                    }
                ]
            },
            {
                id: 'step-4',
                attachTo: {
                    element: '#thankyou-tour',
                    on: 'top'
                },
                title: 'Documentation',
                text: 'Thanks for exploring! Click here to view documentation.',
                buttons: [
                    {
                        text: 'Back',
                        action: () => this.shepherdService.tourObject?.back()
                    },
                    {
                        text: 'Finish',
                        action: () => this.shepherdService.tourObject?.complete()
                    }
                ]
            }
        ]);
        this.shepherdService.start();
    }
}
