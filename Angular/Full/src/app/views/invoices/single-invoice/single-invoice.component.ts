import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {NgIcon} from '@ng-icons/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {DecimalPipe} from '@angular/common';
import {currency} from '@/app/constants';
import {invoices} from '@/app/views/invoices/data';
import {InvoiceType} from '@/app/views/invoices/types';

type InvoiceItem = {
    id: number;
    title: string;
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
}

@Component({
    selector: 'app-single-invoice',
    imports: [PageTitleComponent, NgIcon, RouterLink, DecimalPipe],
    templateUrl: './single-invoice.component.html',
    styles: ``
})
export class SingleInvoiceComponent implements OnInit {
    invoiceId!: InvoiceType['id'];
    invoice!: InvoiceType

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (!id) {
            this.router.navigate(['/error/404']);
            return;
        }

        const matchedInvoice = invoices.find(i => i.id === id);
        this.invoice = matchedInvoice as InvoiceType;
        if (matchedInvoice) {
            this.invoiceId = matchedInvoice.id;
        } else {
            this.router.navigate(['/error/404']);
        }
    }

    invoices: InvoiceItem[] = [
        {
            id: 1,
            title: 'Figma Design System',
            description: 'Desktop & Mobile UI Kit',
            quantity: 1,
            unitPrice: 350,
            total: 350,
        },
        {
            id: 2,
            title: 'Node.js API Development',
            description: 'User auth, dashboard APIs',
            quantity: 12,
            unitPrice: 50,
            total: 600,
        },
        {
            id: 3,
            title: 'Bootstrap UI Setup',
            description: 'Homepage, blog layout',
            quantity: 1,
            unitPrice: 220,
            total: 220,
        },
        {
            id: 4,
            title: 'Firebase Setup',
            description: 'Hosting & config',
            quantity: 1,
            unitPrice: 100,
            total: 100,
        },
    ];
    protected readonly currency = currency;
}
