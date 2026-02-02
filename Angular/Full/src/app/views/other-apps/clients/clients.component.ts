import {Component, inject, OnInit, QueryList, ViewChildren} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';
import {TableService} from '@core/services/table.service';
import {AsyncPipe, DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {clients} from '@/app/views/other-apps/clients/data';
import {LucideAngularModule, LucideGlobe, LucideLayout, LucideSearch} from 'lucide-angular';
import {toTitleCase} from '@/app/utils/string-utils';


type ClientType = {
    name: string;
    email: string;
    avatar: string;
    phone: string;
    countryName: string;
    flag: string;
    enrollDate: string;
    type: string;
    title: string;
    status: "active" | "inactive" | "pending",
    selected?: boolean;
}


@Component({
    selector: 'app-clients',
    imports: [
        PageTitleComponent,
        FormsModule,
        NgIcon,
        RouterLink,
        NgbPaginationModule,
        NgbdSortableHeader,
        LucideAngularModule,
        AsyncPipe
    ],
    providers: [TableService],
    templateUrl: './clients.component.html',
    styles: ``
})
export class ClientsComponent implements OnInit {
    filterProjectType='All'
    filterByCountry='All'
    selectAll = false;

    LucideGlobe=LucideGlobe
    LucideLayout=LucideLayout
    LucideSearch=LucideSearch


    sortCountries = clients.slice(0, 5)
    records$: Observable<ClientType[]>
    total$: Observable<number>;

    @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader<ClientType>>;
    public tableService = inject(TableService<ClientType>)

    constructor(public pipe: DecimalPipe) {
        this.records$ = this.tableService.items$
        this.total$ = this.tableService.total$

    }

    ngOnInit(): void {
        this.tableService.setItems(clients, 8)
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
}
