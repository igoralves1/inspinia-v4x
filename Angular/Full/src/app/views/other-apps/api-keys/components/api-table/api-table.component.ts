import {Component, OnInit} from '@angular/core';
import {TableService} from '@core/services/table.service';
import {ApiClientType} from '@/app/views/other-apps/api-keys/types';
import {apiClients} from '@/app/views/other-apps/api-keys/data';
import {Observable} from 'rxjs';
import {NgIcon} from '@ng-icons/core';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';
import {FormsModule} from '@angular/forms';
import {LucideAngularModule, LucideCircleCheck, LucideGlobe} from 'lucide-angular';
import {NgbPagination, NgbPaginationNext, NgbPaginationPrevious} from '@ng-bootstrap/ng-bootstrap';
import {toTitleCase} from '@/app/utils/string-utils';
import {AsyncPipe} from '@angular/common';

@Component({
    selector: 'app-api-table',
    imports: [NgIcon, NgbdSortableHeader, FormsModule, LucideAngularModule, NgbPagination, NgbPaginationNext, NgbPaginationPrevious, AsyncPipe],
    providers: [TableService],
    templateUrl: './api-table.component.html',
})
export class ApiTableComponent implements OnInit {
    LucideCircleCheck=LucideCircleCheck
    LucideGlobe=LucideGlobe

    filterStatus='All'
    filterByRegion='All'
    selectAll = false;

    records$: Observable<ApiClientType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<ApiClientType>) {
        this.records$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }

    ngOnInit(): void {
        this.tableService.setItems(apiClients, 8)
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

    copyToClipboard(text: string): void {
        navigator.clipboard.writeText(text)
    }

    readonly columns: (keyof ApiClientType)[] = ['name', 'author','apiKey', 'status', 'created', 'expiryDate', 'region']


    protected readonly toTitleCase = toTitleCase;
}
