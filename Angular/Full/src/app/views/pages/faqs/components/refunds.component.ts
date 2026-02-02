import {Component} from '@angular/core';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-refunds',
    imports: [NgbAccordionModule],
    template: `
        <div class="card">
            <div class="card-header d-block">
                <h4 class="card-title mb-1">Refunds</h4>
                <p class="text-muted mb-0">Find answers related to our refund policy and conditions.</p>
            </div>
            <div class="card-body">
                <div ngbAccordion [closeOthers]="true" class="accordion-bordered">
                    @for (faq of refundFaqs; track $index) {
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
export class RefundsComponent {
    refundFaqs = [
        {
            question: "What is your refund policy?",
            answer: "We offer refunds within 14 days of purchase if the template is faulty or not as described. Please review the full policy or reach out for clarification."
        },
        {
            question: "How do I request a refund?",
            answer: "You can request a refund by contacting our support team with your order ID and a brief reason for the request."
        },
        {
            question: "Are there any non-refundable purchases?",
            answer: "Custom services, extended licenses, and downloadable assets with confirmed usage typically aren’t refundable."
        }
    ]

}
