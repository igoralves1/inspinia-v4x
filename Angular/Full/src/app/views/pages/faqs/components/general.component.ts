import {Component} from '@angular/core';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import type {FaqType} from '../types';


@Component({
    selector: 'app-general',
    imports: [NgbAccordionModule],
    template: `
        <div class="card">
            <div class="card-header d-block">
                <h4 class="card-title mb-1">General</h4>
                <p class="text-muted mb-0">Here are some common questions about our templates.</p>
            </div>

            <div class="card-body">
                <div ngbAccordion [closeOthers]="true" class="accordion-bordered">
                    @for (faq of generalFaqs; track $index) {
                        <div ngbAccordionItem class="border-0">
                            <h2 ngbAccordionHeader id="BorderedheadingOne">
                                <button ngbAccordionButton class="shadow-none bg-light bg-opacity-50"
                                        type="button">
                                    {{ faq.question }}
                                </button>
                            </h2>
                            <div ngbAccordionCollapse>
                                <div ngbAccordionBody>
                                    {{ faq.answer }}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class GeneralComponent {
    generalFaqs: FaqType[] = [
        {
            question: 'What is included in your template purchase?',
            answer:
                'Our templates come with clean source code, comprehensive documentation, SCSS files, and starter project setups for various frameworks (e.g., React, Angular, Laravel).',
        },
        {
            question: 'Do you offer support after purchase?',
            answer:
                'Yes! We provide 6 months of free support for bug fixes, usage questions, and minor updates. You can also extend support if needed.',
        },
        {
            question: 'Can I use the template for multiple projects?',
            answer:
                'The standard license allows use in a single end product. For multiple projects, a separate license is required for each use case.',
        },
        {
            question: 'Are the templates compatible with the latest frameworks?',
            answer:
                'Yes, we regularly update our templates to ensure compatibility with the latest versions of frameworks like Bootstrap, React, Angular, Laravel, and others.',
        },
        {
            question: 'Do you provide Figma or design files?',
            answer:
                'Yes, we include Figma or design source files with selected templates. Please check the product details or contact us if unsure.',
        },
    ];
}
