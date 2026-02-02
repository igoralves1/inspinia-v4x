import {Routes} from '@angular/router';
import {InvoicesComponent} from '@/app/views/invoices/invoices/invoices.component';
import {SingleInvoiceComponent} from '@/app/views/invoices/single-invoice/single-invoice.component';
import {NewInvoiceComponent} from '@/app/views/invoices/new-invoice/new-invoice.component';

export const INVOICES_ROUTES: Routes = [
    {
        path: 'invoices',
        component: InvoicesComponent,
        data: {title: "Invoices"},
    },
    {
        path: 'invoice/:id',
        component: SingleInvoiceComponent,
        data: {title: "Invoices Single"},
    },
    {
        path: 'invoices/new',
        component: NewInvoiceComponent,
        data: {title: "New Invoice"},
    },
]
