import {Component, inject, TemplateRef} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {LucideAngularModule, LucideLayoutGrid, LucideList, LucidePlus} from 'lucide-angular';
import {
    ProductFilterSidebarComponent
} from '@/app/views/ecommerce/products/grid/components/product-filter-sidebar.component';
import {NgbOffcanvas, NgbPagination, NgbPaginationNext, NgbPaginationPrevious} from '@ng-bootstrap/ng-bootstrap';
import {SimplebarAngularModule} from 'simplebar-angular';
import {ProductCardComponent} from '@/app/views/ecommerce/products/grid/components/product-card.component';
import {products} from '@/app/views/ecommerce/products/data';

@Component({
    selector: 'app-grid',
    imports: [
        PageTitleComponent,
        RouterLink,
        NgIcon,
        LucideAngularModule,
        ProductFilterSidebarComponent,
        SimplebarAngularModule,
        ProductCardComponent,
        NgbPagination,
        NgbPaginationNext,
        NgbPaginationPrevious
    ],
    templateUrl: './grid.component.html',
    styles: ``
})
export class GridComponent {
    protected readonly LucideLayoutGrid = LucideLayoutGrid;
    protected readonly LucideList = LucideList;
    protected readonly LucidePlus = LucidePlus;

    private offcanvasService = inject(NgbOffcanvas);

    open(content: TemplateRef<any>) {
        this.offcanvasService.open(content, {position: 'start'});
    }

    protected readonly products = products;
}
