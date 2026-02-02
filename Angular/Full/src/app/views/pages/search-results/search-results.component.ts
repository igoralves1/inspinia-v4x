import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {LucideAngularModule, LucideCircleDollarSign, LucideLayers, LucideSearch} from 'lucide-angular';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {NgbPagination, NgbPaginationNext, NgbPaginationPrevious} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-search-results',
    imports: [
        PageTitleComponent, LucideAngularModule, RouterLink, NgIcon, NgbPagination, NgbPaginationNext, NgbPaginationPrevious
    ],
    templateUrl: './search-results.component.html',
    styles: ``
})
export class SearchResultsComponent {
    searchIcon = LucideSearch
    layerIcon=LucideLayers
    dollarIcon=LucideCircleDollarSign
}
