import {Component, OnInit} from '@angular/core';
import {TableService} from '@core/services/table.service';
import {AsyncPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LucideAngularModule, LucideSearch} from 'lucide-angular';
import {NgIcon} from '@ng-icons/core';
import {NgbPagination, NgbPaginationNext, NgbPaginationPrevious} from '@ng-bootstrap/ng-bootstrap';
import {RatingComponent} from '@app/components/rating.component';
import {RouterLink} from '@angular/router';
import {UiCardComponent} from '@app/components/ui-card.component';
import {Observable} from 'rxjs';
import {ProductType} from '@/app/views/tables/custom/types';
import {products} from '@/app/views/tables/custom/data';
import {currency} from '@/app/constants';
import {toTitleCase} from '@/app/utils/string-utils';

@Component({
    selector: 'app-table-with-pagination-info',
    imports: [
        AsyncPipe,
        FormsModule,
        LucideAngularModule,
        NgIcon,
        NgbPagination,
        NgbPaginationNext,
        NgbPaginationPrevious,
        RatingComponent,
        RouterLink,
        UiCardComponent
    ],
    providers: [TableService],
    template: `
        <app-ui-card title="Custom table with pagination info" bodyClass="p-0">
            <ng-content card-body>
                <div class="card-header border-light justify-content-between">
                    <div class="d-flex gap-2">
                        <div class="app-search">
                            <input [(ngModel)]="tableService.searchTerm" type="search" class="form-control"
                                   placeholder="Search product name...">
                            <lucide-angular [img]="LucideSearch" class="app-search-icon text-muted"/>
                        </div>
                        @if (hasSelection) {
                            <button class="btn btn-danger" (click)="deleteSelected()">Delete</button>
                        }
                    </div>

                    <div>
                        <select [(ngModel)]="tableService.pageSize" class="form-select form-control my-1 my-md-0">
                            <option [ngValue]="5">5</option>
                            <option [ngValue]="10">10</option>
                            <option [ngValue]="15">15</option>
                            <option [ngValue]="20">20</option>
                        </select>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="table table-custom table-centered table-select table-hover w-100 mb-0">
                        <thead class="bg-light align-middle bg-opacity-25 thead-sm">
                        <tr class="text-uppercase fs-xxs">
                            <th class="ps-3" style="width: 1%;">
                                <input
                                    [(ngModel)]="selectAll"
                                    (change)="toggleAllSelection()"
                                    class="form-check-input form-check-input-light fs-14 mt-0"
                                    type="checkbox" value="option">

                            </th>
                            <th>Product</th>
                            <th>SKU</th>
                            <th>
                                Category
                            </th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Orders</th>
                            <th>Rating</th>
                            <th>Status</th>
                            <th>Published
                            </th>
                            <th class="text-center" style="width: 1%;">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            @if ((total$ | async)! > 0) {
                                @for (product of products$ | async; track $index) {
                                    <tr>
                                        <td class="ps-3">
                                            <input [(ngModel)]="product.selected"
                                                   (change)="toggleSingleSelection()"
                                                   class="form-check-input form-check-input-light fs-14 product-item-check mt-0"
                                                   type="checkbox"/>
                                        </td>
                                        <td>
                                            <div class="d-flex">
                                                <div class="avatar-md me-3">
                                                    <img [src]="product.image" alt="Product" class="img-fluid rounded"/>
                                                </div>
                                                <div>
                                                    <h5 class="mb-1">
                                                        <a href="ecommerce-product-details.html"
                                                           class="link-reset">{{ product.name }}</a>
                                                    </h5>
                                                    <p class="text-muted mb-0 fs-xxs">by: {{ product.manufacturer }}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{ product.sku }}</td>
                                        <td>{{ product.category }}</td>
                                        <td><h5 class="fs-base mb-0 fw-medium">{{ product.stock }}</h5></td>
                                        <td>{{ currency }}{{ product.price }}</td>
                                        <td>{{ product.orders }}</td>
                                        <td>
                                <span class="text-warning">
                               <app-rating [rate]="product.rating"/>
                                </span>
                                            <span class="ms-1">
                              <a routerLink="/ecommerce/reviews" class="link-reset fw-semibold">({{ product.reviews }}
                                  )</a>
                            </span>
                                        </td>
                                        <td>
                            <span class="badge fs-xxs"
                                  [class]="product.status === 'published' ? 'badge-soft-success' : product.status === 'pending' ? 'badge-soft-warning' : 'badge-soft-danger'">{{ toTitleCase(product.status) }}</span>
                                        </td>
                                        <td>{{ product.date }} <small class="text-muted">{{ product.time }}</small></td>
                                        <td>
                                            <div class="d-flex justify-content-center gap-1">
                                                <button class="btn btn-light btn-icon btn-sm rounded-circle">
                                                    <ng-icon
                                                        name="tablerEye" class="fs-lg"/>
                                                </button>
                                                <button class="btn btn-light btn-icon btn-sm rounded-circle">
                                                    <ng-icon
                                                        name="tablerEdit" class="fs-lg"/>
                                                </button>
                                                <button class="btn btn-danger btn-icon btn-sm rounded-circle"
                                                        (click)="tableService.deleteItem(product)">
                                                    <ng-icon
                                                        name="tablerTrash" class="fs-lg"/>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                }
                            } @else {
                                <tr class="no-results">
                                    <td colspan="11" class="text-center text-muted py-3">Nothing found.</td>
                                </tr>
                            }
                        </tbody>
                    </table>

                </div>
                <div class="card-footer border-0">
                    @if ((total$ | async)! > 0) {
                        <div class="d-flex justify-content-between pagination-boxed align-items-center">
                            {{ tableService.showingRange }} products
                            <ngb-pagination
                                [collectionSize]="(total$ | async)!"
                                [(page)]="tableService.page"
                                [pageSize]="tableService.pageSize"
                            >
                                <ng-template ngbPaginationPrevious>
                                    <ng-icon name="tablerChevronLeft"/>
                                </ng-template>
                                <ng-template ngbPaginationNext>
                                    <ng-icon name="tablerChevronRight"/>
                                </ng-template>
                            </ngb-pagination>
                        </div>
                    }
                </div>
            </ng-content>
        </app-ui-card>
    `,
    styles: ``
})
export class TableWithPaginationInfoComponent implements OnInit {
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


    products$: Observable<ProductType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<ProductType>) {
        this.products$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }

    ngOnInit(): void {
        this.tableService.setItems(structuredClone(products), 5)
    }

    protected readonly LucideSearch = LucideSearch;
    protected readonly currency = currency;
    protected readonly toTitleCase = toTitleCase;
}
