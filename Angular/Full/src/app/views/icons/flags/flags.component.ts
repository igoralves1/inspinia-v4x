import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {Observable} from 'rxjs';
import {TableService} from '@core/services/table.service';
import {countries, CountryType} from '@/app/views/icons/flags/data';
import {AsyncPipe} from '@angular/common';
import {LucideAngularModule, LucideSearch} from 'lucide-angular';
import {FormsModule} from '@angular/forms';
import {NgIcon} from '@ng-icons/core';
import {NgbPagination, NgbPaginationNext, NgbPaginationPrevious} from '@ng-bootstrap/ng-bootstrap';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';

@Component({
    selector: 'app-flags',
    imports: [
        PageTitleComponent,
        AsyncPipe,
        LucideAngularModule,
        FormsModule,
        NgIcon,
        NgbPagination,
        NgbPaginationNext,
        NgbPaginationPrevious,
        NgbdSortableHeader
    ],
    providers: [TableService],
    templateUrl: './flags.component.html',
    styles: ``
})
export class FlagsComponent implements OnInit {
    countries$: Observable<CountryType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<CountryType>) {
        this.countries$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }

    ngOnInit(): void {
        this.tableService.setItems(countries, 50)
    }

    protected readonly LucideSearch = LucideSearch;
}
