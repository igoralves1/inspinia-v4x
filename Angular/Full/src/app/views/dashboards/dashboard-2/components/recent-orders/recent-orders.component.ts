import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {currency} from '@/app/constants';
import {NgIcon} from '@ng-icons/core';
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';
import {toTitleCase} from '@/app/utils/string-utils';
import {orders} from '@/app/views/dashboards/dashboard-2/data';

@Component({
    selector: 'app-recent-orders',
    imports: [ RouterLink, NgIcon, NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle],
    templateUrl: './recent-orders.component.html'
})
export class RecentOrdersComponent {
    orders = orders
    currency = currency;
    toTitleCase = toTitleCase;
}
