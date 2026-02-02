import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {Observable} from 'rxjs';
import {TableService} from '@core/services/table.service';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {generateInitials, toTitleCase} from '@/app/utils/string-utils';
import {currency} from '@/app/constants';
import {LucideAngularModule, LucideCircleCheckBig, LucideSearch} from 'lucide-angular';
import {NgbPagination, NgbPaginationNext, NgbPaginationPrevious} from '@ng-bootstrap/ng-bootstrap';
import {InvoiceType} from '@/app/views/invoices/types';
import {invoices} from '@/app/views/invoices/data';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';
import {AsyncPipe} from '@angular/common';

@Component({
    selector: 'app-invoices',
    imports: [PageTitleComponent, FormsModule, RouterLink, NgIcon, LucideAngularModule, NgbPagination, NgbdSortableHeader, NgbPaginationNext, NgbPaginationPrevious, AsyncPipe],
    templateUrl: './invoices.component.html',
    providers:[TableService],
    styles: ``
})

export class InvoicesComponent implements OnInit{
    filterStatus="All"
    selectAll = false;

    LucideSearch=LucideSearch
    records$: Observable<InvoiceType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<InvoiceType>) {
        this.records$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }

    ngOnInit(): void {
        this.tableService.setItems(invoices, 8)
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

    protected readonly toTitleCase = toTitleCase;
    protected readonly currency = currency;
    protected readonly generateInitials = generateInitials;
    protected readonly LucideCircleCheckBig = LucideCircleCheckBig;
}
