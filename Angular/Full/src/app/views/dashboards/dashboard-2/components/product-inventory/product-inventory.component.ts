import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {currency} from '@/app/constants';
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';
import {LucideAngularModule} from 'lucide-angular';
import {toTitleCase} from '@/app/utils/string-utils';
import {RatingComponent} from '@app/components/rating.component';
import {products} from '@/app/views/dashboards/dashboard-2/data';

@Component({
    selector: 'app-product-inventory',
    imports: [
        RouterLink,
        NgIcon,
        LucideAngularModule,
        NgbDropdown,
        NgbDropdownToggle,
        NgbDropdownMenu,
        NgbDropdownItem,
        RatingComponent
    ],
    templateUrl: './product-inventory.component.html',
})
export class ProductInventoryComponent {
    products = products
    currency = currency;
    toTitleCase = toTitleCase;
}
