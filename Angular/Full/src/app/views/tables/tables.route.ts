import {Routes} from '@angular/router';
import {StaticComponent} from './static/static.component';
import {CustomComponent} from '@/app/views/tables/custom/custom.component';
import {TableWithSearchComponent} from '@/app/views/tables/tanstack/table-with-search/table-with-search.component';
import {
    TableWithDeleteButtonComponent
} from '@/app/views/tables/tanstack/table-with-delete-button/table-with-delete-button.component';
import {
    TableWithPaginationComponent
} from '@/app/views/tables/tanstack/table-with-pagination/table-with-pagination.component';
import {TableWithSortComponent} from '@/app/views/tables/tanstack/table-with-sort/table-with-sort.component';
import {
    TableWithCheckboxComponent
} from '@/app/views/tables/tanstack/table-with-checkbox/table-with-checkbox.component';
import {TableWithFiltersComponent} from '@/app/views/tables/tanstack/table-with-filters/table-with-filters.component';

export const TABLES_ROUTES: Routes = [
    {
        path: 'tables/static',
        component: StaticComponent,
        data: {title: "Static Tables"},
    },
    {
        path: 'tables/custom',
        component: CustomComponent,
        data: {title: "Custom Tables"},
    },
    {
        path: 'tanstack/table-with-search',
        component: TableWithSearchComponent,
        data: {title: "Table With Search"},
    },
    {
        path: 'tanstack/table-with-delete-button',
        component: TableWithDeleteButtonComponent,
        data: {title: "Table With Search"},
    },
    {
        path: 'tanstack/table-with-pagination',
        component: TableWithPaginationComponent,
        data: {title: "Table With Pagination"},
    },
    {
        path: 'tanstack/table-with-sort',
        component: TableWithSortComponent,
        data: {title: "Table With Sort"},
    },
    {
        path: 'tanstack/table-with-checkbox',
        component: TableWithCheckboxComponent,
        data: {title: "Table With Checkbox"},
    },
    {
        path: 'tanstack/table-with-filters',
        component: TableWithFiltersComponent,
        data: {title: "Table With Filters"},
    },
];
