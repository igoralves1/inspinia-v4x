import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {OrderStatisticsType, OrderType} from '@/app/views/ecommerce/orders/types';
import {StatisticsWidgetComponent} from '@/app/views/ecommerce/orders/components/statistics-widget.component';
import {toTitleCase} from '@/app/utils/string-utils';
import {NgIcon} from '@ng-icons/core';
import {Observable} from 'rxjs';
import {TableService} from '@core/services/table.service';
import {
    LucideAngularModule,
    LucideCalendar,
    LucideCreditCard,
    LucidePlus,
    LucideSearch,
    LucideTruck
} from 'lucide-angular';
import {FormsModule} from '@angular/forms';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';
import {RouterLink} from '@angular/router';
import {currency} from '@/app/constants';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {orders} from '@/app/views/ecommerce/orders/data';
import {AsyncPipe} from '@angular/common';


@Component({
    selector: 'app-orders',
    imports: [
        PageTitleComponent,
        StatisticsWidgetComponent,
        NgIcon,
        LucideAngularModule,
        FormsModule,
        NgbdSortableHeader,
        RouterLink,
        NgbPaginationModule,
        AsyncPipe
    ],
    providers: [TableService],
    templateUrl: './orders.component.html',
    styles: ``
})
export class OrdersComponent implements OnInit {
    protected readonly toTitleCase = toTitleCase;
    protected readonly LucideCreditCard = LucideCreditCard;
    protected readonly LucideTruck = LucideTruck;
    protected readonly LucideCalendar = LucideCalendar;
    protected readonly LucideSearch = LucideSearch;
    protected readonly LucidePlus = LucidePlus;
    protected readonly currency = currency;

    filterPaymentStatus="All"
    filterOrderStatus="All"

    orders$: Observable<OrderType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<OrderType>) {
        this.orders$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }

    ngOnInit(): void {
        this.tableService.setItems(orders, 8)
    }

    selectAll = false;

    toggleAllSelection() {
        this.tableService.setAllSelection(this.selectAll);
    }

    toggleSingleSelection() {
        this.tableService.items$.subscribe(items => {
            this.selectAll = items.every((item: any) => item.selected);
        }).unsubscribe();
    }

    deleteSelected() {
        this.tableService.deleteSelectedItems();
        this.selectAll = false;
    }

    get hasSelection(): boolean {
        return this.tableService.hasSelectedItems();
    }

    orderStats: OrderStatisticsType[] = [
        {
            id: 1,
            title: 'Completed Orders',
            count: 1240,
            change: "+3.34",
            icon: 'tablerCheck',
            variant: 'success'
        },
        {
            id: 2,
            title: 'Pending Orders',
            count: 320,
            change: "-1.12",
            icon: 'tablerHourglass',
            variant: 'warning'
        },
        {
            id: 3,
            title: 'Canceled Orders',
            count: 87,
            change: "-0.75",
            icon: 'tablerX',
            variant: 'danger'
        },
        {
            id: 4,
            title: 'New Orders',
            count: 540,
            change: "+4.22",
            icon: 'tablerShoppingCart',
            variant: 'info'
        },
        {
            id: 5,
            title: 'Returned Orders',
            count: 120,
            change: "+0.56",
            icon: 'tablerRepeat',
            variant: 'primary'
        }
    ];

}
