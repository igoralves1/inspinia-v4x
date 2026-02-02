import {Component} from '@angular/core';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-customization',
    imports: [NgbAccordionModule],
    template: `
        <div class="card">
            <div class="card-header d-block">
                <h4 class="card-title mb-1">Customization</h4>
                <p class="text-muted mb-0">Questions about custom development and template modifications.
                </p>
            </div>
            <div class="card-body">
                <div ngbAccordion [closeOthers]="true" class="accordion-bordered">

                    @for (faq of customizationFaqs; track $index) {
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
export class CustomizationComponent {
    customizationFaqs = [
        {
            question: "Do you offer customization services?",
            answer: "Yes, we offer paid customization services based on your requirements. Contact us for a quote."
        },
        {
            question: "Can I modify the template myself?",
            answer: "Absolutely! All templates come with full source code and documentation to help you make your own changes."
        },
        {
            question: "Will customizing the template affect support?",
            answer: "Support is still available, but major custom changes may not be covered under standard support terms."
        }
    ]

}
