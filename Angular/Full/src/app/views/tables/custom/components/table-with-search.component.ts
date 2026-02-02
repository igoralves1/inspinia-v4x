import {Component, OnInit} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {LucideAngularModule, LucideSearch} from 'lucide-angular';
import {AsyncPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgIcon} from '@ng-icons/core';
import {RatingComponent} from '@app/components/rating.component';
import {RouterLink} from '@angular/router';
import {currency} from '@/app/constants';
import {Observable} from 'rxjs';
import {ProductType} from '@/app/views/tables/custom/types';
import {TableService} from '@core/services/table.service';
import {products} from '@/app/views/tables/custom/data';
import {toTitleCase} from '@/app/utils/string-utils';

@Component({
    selector: 'app-table-with-search',
    imports: [
        UiCardComponent,
        LucideAngularModule,
        AsyncPipe,
        FormsModule,
        NgIcon,
        RatingComponent,
        RouterLink
    ],
    providers: [TableService],
    template: `
        <app-ui-card title="Custom Table with Search" bodyClass="p-0">
            <ng-content card-body>
                <div class="card-header">
                    <div class="app-search">
                        <input [(ngModel)]="tableService.searchTerm" type="search" class="form-control"
                               placeholder="Search product name...">
                        <lucide-angular [img]="LucideSearch" class="app-search-icon text-muted"/>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="table table-custom table-centered table-select table-hover w-100 mb-0">
                        <thead class="bg-light align-middle bg-opacity-25 thead-sm">
                        <tr class="text-uppercase fs-xxs">
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
                                        <td>
                                            <div class="d-flex">
                                                <div class="avatar-md me-3">
                                                    <img [src]="product.image" alt="Product"
                                                         class="img-fluid rounded"/>
                                                </div>
                                                <div>
                                                    <h5 class="mb-1">
                                                        <a href="#"
                                                           class="link-reset">{{ product.name }}</a>
                                                    </h5>
                                                    <p class="text-muted mb-0 fs-xxs">
                                                        by: {{ product.manufacturer }}</p>
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
                          <a routerLink="/ecommerce/reviews" class="link-reset fw-semibold">({{ product.reviews }})</a>
                        </span>
                                        </td>
                                        <td>
                        <span class="badge fs-xxs"
                              [class]="product.status === 'published' ? 'badge-soft-success' : product.status === 'pending' ? 'badge-soft-warning' : 'badge-soft-danger'">{{ toTitleCase(product.status) }}</span>
                                        </td>
                                        <td>{{ product.date }} <small class="text-muted">{{ product.time }}</small>
                                        </td>
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
                                                <button class="btn btn-light btn-icon btn-sm rounded-circle"
                                                >
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
            </ng-content>
        </app-ui-card>
    `,
    styles: ``
})
export class TableWithSearchComponent implements OnInit {

    protected readonly LucideSearch = LucideSearch;
    protected readonly currency = currency;

    products$: Observable<ProductType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<ProductType>) {
        this.products$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }

    ngOnInit(): void {
        this.tableService.setItems(products, 5)
    }

    protected readonly toTitleCase = toTitleCase;
}
