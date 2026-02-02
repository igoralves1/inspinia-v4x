import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {StatisticWidget1Type} from '@/app/types';
import {StatisticWidget1Component} from '@app/components/widgets/statistic-widget1.component';
import {
    LucideAngularModule,
    LucideBox,
    LucideLayoutGrid,
    LucideList,
    LucidePlus,
    LucideSearch,
    LucideStar,
    LucideTag
} from 'lucide-angular';
import {RouterLink} from '@angular/router';
import {Observable} from 'rxjs';
import {TableService} from '@core/services/table.service';

import {currency} from '@/app/constants';
import {NgIcon} from '@ng-icons/core';
import {toTitleCase} from '@/app/utils/string-utils';
import {RatingComponent} from '@app/components/rating.component';
import {FormsModule} from '@angular/forms';
import {NgbPagination, NgbPaginationNext, NgbPaginationPrevious} from '@ng-bootstrap/ng-bootstrap';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';
import {ProductType} from '@/app/views/ecommerce/products/types';
import {products} from '@/app/views/ecommerce/products/data';
import {AsyncPipe} from '@angular/common';

@Component({
    selector: 'app-products',
    imports: [
        PageTitleComponent,
        StatisticWidget1Component,
        LucideAngularModule,
        RouterLink,
        NgIcon,
        RatingComponent,
        FormsModule,
        NgbPagination,
        NgbdSortableHeader,
        NgbPaginationNext,
        NgbPaginationPrevious,
        AsyncPipe,
    ],
    templateUrl: './products.component.html',
    styles: ``,
    providers:[TableService],
})
export class ProductsComponent implements OnInit {
    protected readonly LucideSearch = LucideSearch;
    protected readonly LucideLayoutGrid = LucideLayoutGrid;
    protected readonly LucideList = LucideList;
    protected readonly LucidePlus = LucidePlus;

    protected readonly currency = currency;
    protected readonly toTitleCase = toTitleCase;

    categoryFilter = "All"
    statusFilter = "All"
    ratingFilter = "All"
    selectAll = false;

    products$: Observable<ProductType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<ProductType>) {
        this.products$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }

    ngOnInit(): void {
        this.tableService.setItems(products, 8)
    }

    protected readonly LucideTag = LucideTag;
    protected readonly LucideBox = LucideBox;
    protected readonly LucideStar = LucideStar;

    truncateText(text: string, limit: number = 21): string {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    }


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

    widgets: StatisticWidget1Type[] = [
        {
            title: 'Products',
            description: 'Active Listings',
            label: '+24 New',
            icon: 'tablerPackage',
            count: {value: 1240},
            variant: 'primary',
            totalCount: {value: 980}
        },
        {
            title: 'Orders',
            description: 'Total Orders',
            label: '+120 New',
            icon: 'tablerShoppingCart',
            count: {value: 8540},
            variant: 'secondary',
            totalCount: {suffix: 'K', value: 105}
        },
        {
            title: 'Sales',
            description: "Today's Sales",
            label: '+8.2%',
            icon: 'tablerCurrencyDollar',
            count: {prefix: '$', value: 9860},
            variant: 'success',
            totalCount: {prefix: '$', suffix: 'K', value: 156}
        },
        {
            title: 'Customers',
            description: 'Total Customers',
            label: '+36 New',
            icon: 'tablerUsers',
            count: {value: 2945},
            variant: 'info',
            totalCount: {value: 58320}
        },
        {
            title: 'Revenue',
            description: 'Total Customers',
            label: '+4.5 %',
            icon: 'tablerChartBar',
            count: {value: 1.2, prefix: '$', suffix: 'M'},
            variant: 'warning',
            totalCount: {value: 12.8, prefix: '$', suffix: 'M'},
        },
    ];


}
