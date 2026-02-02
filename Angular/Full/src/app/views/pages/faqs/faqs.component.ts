import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PageTitleComponent} from "@app/components/page-title.component";
import {GeneralComponent} from "./components/general.component";
import {LucideAngularModule, LucideSearch} from 'lucide-angular';
import {PaymentsComponent} from "./components/payments.component";
import {RefundsComponent} from "./components/refunds.component";
import {CustomizationComponent} from "./components/customization.component";

@Component({
    selector: 'app-faqs',
    imports: [PageTitleComponent, RouterLink, GeneralComponent, LucideAngularModule, PaymentsComponent, RefundsComponent, CustomizationComponent],
    templateUrl: './faqs.component.html',
    styles: ``
})
export class FaqsComponent {
    searchIcon = LucideSearch
    popularSearch = ["Apps", "Developers", "Repair", "Billing"]
}
