import {Component, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {LucideAngularModule, LucidePlus, LucideSearch} from 'lucide-angular';
import {currency} from '@/app/constants';
import {toTitleCase} from '@/app/utils/string-utils';
import {NgIcon} from '@ng-icons/core';
import {Observable} from 'rxjs';
import {TableService} from '@core/services/table.service';
import {NgbPagination, NgbPaginationNext, NgbPaginationPrevious} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';

type SellerProductType = {
    id: number;
    name: string;
    image: string;
    category: string;
    stock: number;
    price: number;
    orders: number;
    status: "published" | "pending" | "out-of-stock";
    selected?: boolean;
};

@Component({
    selector: 'app-seller-products',
    imports: [RouterLink, LucideAngularModule, NgIcon, NgbPagination, NgbPaginationNext, NgbPaginationPrevious, FormsModule, NgbdSortableHeader, AsyncPipe],
    providers: [TableService],
    template: `
        <div class="card">
            <div class="card-header border-light justify-content-between">

                <div class="d-flex gap-2">
                    <div class="app-search">
                        <input data-table-search type="search" class="form-control"
                               placeholder="Search product name...">
                        <lucide-angular [img]="LucideSearch" class="app-search-icon text-muted"/>
                    </div>
                    @if (hasSelection) {
                        <button class="btn btn-danger" (click)="deleteSelected()">Delete</button>
                    }
                </div>

                <div class="d-flex gap-1">
                    <div>
                        <select [(ngModel)]="tableService.pageSize" class="form-select form-control my-1 my-md-0">
                            <option [ngValue]="5">5</option>
                            <option [ngValue]="8">8</option>
                            <option [ngValue]="10">10</option>
                            <option [ngValue]="15">15</option>
                            <option [ngValue]="20">20</option>
                        </select>
                    </div>

                    <a routerLink="/ecommerce/products/add" class="btn btn-danger ms-1">
                        <ng-icon  name="tablerPlus" class="fs-sm me-2"/>
                        Add Product
                    </a>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-custom table-centered table-select table-hover w-100 mb-0">
                    <thead class="bg-light align-middle bg-opacity-25 thead-sm">
                    <tr class="text-uppercase fs-xxs">
                        <th class="ps-3" style="width: 1%;">
                            <input [(ngModel)]="selectAll" (change)="toggleAllSelection()"
                                   class="form-check-input form-check-input-light fs-14 mt-0"
                                   type="checkbox" id="select-all-products" value="option">
                        </th>
                        <th sortable="name" (sort)="tableService.setSort($event.column, $event.direction)">Product</th>
                        <th sortable="category" (sort)="tableService.setSort($event.column, $event.direction)">
                            Category
                        </th>
                        <th sortable="stock" (sort)="tableService.setSort($event.column, $event.direction)">Stock</th>
                        <th sortable="price" (sort)="tableService.setSort($event.column, $event.direction)">Price</th>
                        <th sortable="orders" (sort)="tableService.setSort($event.column, $event.direction)">Orders</th>
                        <th sortable="status" (sort)="tableService.setSort($event.column, $event.direction)">Status</th>
                        <th class="text-center" style="width: 1%;">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        @if ((total$ | async)! > 0) {
                            @for (product of sellerProducts$ | async; track $index; ) {
                                <tr>
                                    <td class="ps-3">
                                        <input
                                            class="form-check-input form-check-input-light fs-14 product-item-check mt-0"
                                            type="checkbox" value="option" [(ngModel)]="product.selected"
                                            (change)="toggleSingleSelection()">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar-md me-3">
                                                <img [src]="product.image" alt="{{ product.name }}"
                                                     class="img-fluid rounded"/>
                                            </div>
                                            <div>
                                                <h5 class="mb-0">
                                                    <a routerLink="/ecommerce/products/WB-10245"
                                                       class="link-reset">{{ product.name }}</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{{ product.category }}</td>
                                    <td><h5 class="fs-base mb-0 fw-medium">{{ product.stock }}</h5></td>
                                    <td>{{ currency }}{{ product.price && product.price.toFixed(2) }}</td>
                                    <td>{{ product.orders }}</td>
                                    <td>
                        <span
                            class="badge  fs-xxs"
                            [class]="
                              product.status === 'pending' ? 'badge-soft-warning' :
                              product.status === 'out-of-stock' ? 'badge-soft-danger' :
                              'badge-soft-success'
                            "
                        >
                          {{ toTitleCase(product.status) }}
                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex justify-content-center gap-1">
                                            <button class="btn btn-light btn-icon btn-sm rounded-circle">
                                                <ng-icon name="tablerEye" class="fs-lg"/>
                                            </button>
                                            <button class="btn btn-light btn-icon btn-sm rounded-circle">
                                                <ng-icon name="tablerEdit" class="fs-lg"/>
                                            </button>
                                            <button class="btn btn-light btn-icon btn-sm rounded-circle"
                                                    (click)="tableService.deleteItem(product)">
                                                <ng-icon name="tablerTrash" class="fs-lg"/>
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
                    <div
                        class="d-flex justify-content-between pagination-boxed align-items-center">
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
        </div>
    `,
    styles: ``
})
export class SellerProductsComponent implements OnInit{

    sellerProducts$: Observable<SellerProductType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<SellerProductType>) {
        this.sellerProducts$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }

    ngOnInit(): void {
        this.tableService.setItems(this.sellerProducts, 8)
    }

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

    sellerProducts: SellerProductType[] = [
        {
            id: 1,
            name: 'Gaming Laptop Pro',
            image: 'assets/images/products/1.png',
            category: 'Computers',
            stock: 15,
            price: 1299.00,
            orders: 45,
            status: 'published'
        },
        {
            id: 2,
            name: 'Vintage Leather Wallet',
            image: 'assets/images/products/2.png',
            category: 'Accessories',
            stock: 78,
            price: 49.95,
            orders: 210,
            status: 'pending'
        },
        {
            id: 3,
            name: "Men's Running Shoes",
            image: 'assets/images/products/3.png',
            category: 'Fashion',
            stock: 120,
            price: 89.00,
            orders: 231,
            status: 'published'
        },
        {
            id: 4,
            name: 'Fitness Tracker Watch',
            image: 'assets/images/products/4.png',
            category: 'Fitness',
            stock: 78,
            price: 49.95,
            orders: 198,
            status: 'published'
        },
        {
            id: 5,
            name: 'Gaming Mouse RGB',
            image: 'assets/images/products/5.png',
            category: 'Gaming',
            stock: 120,
            price: 29.99,
            orders: 243,
            status: 'published'
        },
        {
            id: 6,
            name: 'Modern Lounge Chair',
            image: 'assets/images/products/6.png',
            category: 'Furniture',
            stock: 24,
            price: 199.00,
            orders: 38,
            status: 'out-of-stock'
        },
        {
            id: 7,
            name: 'Plush Toy Bear',
            image: 'assets/images/products/7.png',
            category: 'Toys',
            stock: 150,
            price: 15.99,
            orders: 305,
            status: 'published'
        },
        {
            id: 8,
            name: '55" Ultra HD Smart TV',
            image: 'assets/images/products/8.png',
            category: 'Electronics',
            stock: 64,
            price: 499.00,
            orders: 142,
            status: 'published'
        },
        {
            id: 9,
            name: 'Apple iMac 24" M3',
            image: 'assets/images/products/9.png',
            category: 'Computers',
            stock: 18,
            price: 1399.00,
            orders: 29,
            status: 'pending'
        },
        {
            id: 10,
            name: 'Smart Watch Pro X2',
            image: 'assets/images/products/10.png',
            category: 'Wearables',
            stock: 85,
            price: 149.50,
            orders: 197,
            status: 'published'
        }
    ];

    protected readonly currency = currency;
    protected readonly toTitleCase = toTitleCase;
    protected readonly LucideSearch = LucideSearch;
    protected readonly LucidePlus = LucidePlus;
}
