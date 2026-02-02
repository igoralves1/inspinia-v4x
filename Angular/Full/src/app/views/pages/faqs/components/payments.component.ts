import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import type { FaqType } from '../types';


@Component({
    selector: 'app-payments',
    imports: [NgbAccordionModule],
    template: `
        <div class="card">
            <div class="card-header d-block">
                <h4 class="card-title mb-1">Payments</h4>
                <p class="text-muted mb-0">Here are some common questions related to billing and payment.
                </p>
            </div>

            <div class="card-body">
                <div ngbAccordion [closeOthers]="true" class="accordion-bordered">

                    @for (faq of paymentFaqs; track $index) {
                        <div ngbAccordionItem class="border-0">
                            <h2 ngbAccordionHeader>
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
export class PaymentsComponent {
    paymentFaqs: FaqType[] = [
        {
            question: "What payment methods do you accept?",
            "answer": "We accept all major credit/debit cards, PayPal, and Stripe payments. Some marketplaces may support additional methods."
        },
        {
            question: "Will I receive an invoice after purchase?",
            "answer": "Yes, you will receive an official invoice or receipt via email immediately after your purchase is completed."
        },
        {
            question: "Is there a refund policy?",
            "answer": "Yes, we follow the refund policy of the marketplace where the item was purchased. Please refer to their refund terms or contact us directly if unsure."
        },
        {
            question: "Can I upgrade my license later?",
            "answer": "Absolutely! You can upgrade your license at any time by contacting support or purchasing the extended license separately."
        },
        {
            question: "Why was my payment declined?",
            "answer": "Payment failures may occur due to incorrect card info, insufficient funds, or bank restrictions. Please try another method or contact your provider."
        }
    ]
}
