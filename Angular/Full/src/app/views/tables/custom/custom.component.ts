import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {CompleteTableComponent} from '@/app/views/tables/custom/components/complete-table.component';
import {TableWithSearchComponent} from '@/app/views/tables/custom/components/table-with-search.component';
import {TableWithCheckboxComponent} from '@/app/views/tables/custom/components/table-with-checkbox.component';
import {TableWithDeleteButtonComponent} from '@/app/views/tables/custom/components/table-with-delete-button.component';
import {TableWithPaginationComponent} from '@/app/views/tables/custom/components/table-with-pagination.component';
import {
    TableWithPaginationInfoComponent
} from '@/app/views/tables/custom/components/table-with-pagination-info.component';
import {TableWithFiltersComponent} from '@/app/views/tables/custom/components/table-with-filters.component';
import {TableWithSortComponent} from '@/app/views/tables/custom/components/table-with-sort.component';

@Component({
  selector: 'app-custom',
    imports: [
        PageTitleComponent,
        CompleteTableComponent,
        TableWithSearchComponent,
        TableWithCheckboxComponent,
        TableWithDeleteButtonComponent,
        TableWithPaginationComponent,
        TableWithPaginationInfoComponent,
        TableWithFiltersComponent,
        TableWithSortComponent
    ],
  templateUrl: './custom.component.html',
  styles: ``
})
export class CustomComponent {

}
