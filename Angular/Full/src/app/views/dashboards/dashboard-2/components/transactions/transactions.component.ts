import {Component} from '@angular/core';
import {transactions, worldTransactionMapOptions} from '@/app/views/dashboards/dashboard-2/data';
import {RouterLink} from '@angular/router';
import {currency} from '@/app/constants';
import {NgIcon} from '@ng-icons/core';
import {toTitleCase} from '@/app/utils/string-utils';
import {VectorMapComponent} from '@app/components/vector-map.component';

import 'jsvectormap/dist/maps/world.js';
import {UiCardComponent} from '@app/components/ui-card.component';

@Component({
    selector: 'app-transactions',
    imports: [RouterLink, NgIcon, VectorMapComponent, UiCardComponent],
    templateUrl: './transactions.component.html',
})
export class TransactionsComponent {
    transactions = transactions;
    currency = currency;
    toTitleCase = toTitleCase;
    worldTransactionMapOptions = worldTransactionMapOptions;
}
