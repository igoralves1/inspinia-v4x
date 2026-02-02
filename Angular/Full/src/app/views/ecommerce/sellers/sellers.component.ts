import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {RatingComponent} from '@app/components/rating.component';
import {RouterLink} from '@angular/router';
import {currency} from '@/app/constants';
import {sellers} from '@/app/views/ecommerce/sellers/data';
import {Observable} from 'rxjs';
import {TableService} from '@core/services/table.service';
import {SellerType} from '@/app/views/ecommerce/sellers/types';
import {LucideAngularModule, LucideDollarSign, LucideSearch, LucideShoppingCart, LucideStar} from 'lucide-angular';
import {FormsModule} from '@angular/forms';
import {NgIcon} from '@ng-icons/core';
import {NgbPagination, NgbPaginationNext, NgbPaginationPrevious} from '@ng-bootstrap/ng-bootstrap';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {AsyncPipe, DecimalPipe} from '@angular/common';

@Component({
    selector: 'app-sellers',
    imports: [
        PageTitleComponent,
        RatingComponent,
        RouterLink,
        LucideAngularModule,
        FormsModule,
        NgIcon,
        NgbPagination,
        NgbPaginationNext,
        NgbPaginationPrevious,
        NgbdSortableHeader,
        ApexchartComponent,
        DecimalPipe,
        AsyncPipe,
    ],
    providers: [TableService],
    templateUrl: './sellers.component.html',
    styles: ``
})
export class SellersComponent implements OnInit {
    protected readonly currency = currency;
    protected readonly LucideSearch = LucideSearch;
    protected readonly LucideShoppingCart = LucideShoppingCart;
    protected readonly LucideDollarSign = LucideDollarSign;
    protected readonly LucideStar = LucideStar;

    sellers$: Observable<SellerType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<SellerType>) {
        this.sellers$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }

    ngOnInit(): void {
        this.tableService.setItems(sellers, 8)
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

}
