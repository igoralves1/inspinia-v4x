import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {statistics} from '@/app/views/dashboards/dashboard-2/data';
import {
    StatisticsWidgetComponent
} from '@/app/views/dashboards/dashboard-2/components/statistics-widget/statistics-widget.component';
import {
    OrderStatisticsComponent
} from '@/app/views/dashboards/dashboard-2/components/order-statistics/order-statistics.component';
import {
    ProductInventoryComponent
} from '@/app/views/dashboards/dashboard-2/components/product-inventory/product-inventory.component';
import {
    RecentOrdersComponent
} from '@/app/views/dashboards/dashboard-2/components/recent-orders/recent-orders.component';
import {TransactionsComponent} from '@/app/views/dashboards/dashboard-2/components/transactions/transactions.component';

@Component({
    selector: 'app-dashboard-2',
    imports: [
        PageTitleComponent,
        StatisticsWidgetComponent,
        OrderStatisticsComponent,
        ProductInventoryComponent,
        RecentOrdersComponent,
        TransactionsComponent
    ],
    templateUrl: './dashboard-2.component.html',
})
export class Dashboard2Component {
    statistics = statistics;
}
