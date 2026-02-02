import {Component} from '@angular/core';
import {LucideAngularModule, LucideSearch} from 'lucide-angular';
import {SimplebarAngularModule} from 'simplebar-angular';
import {RatingComponent} from '@app/components/rating.component';
import {NouisliderComponent} from 'ng2-nouislider';
import {FormsModule} from '@angular/forms';
import {currency} from '@/app/constants';

@Component({
    selector: 'app-product-filter-sidebar',
    imports: [LucideAngularModule, SimplebarAngularModule, RatingComponent, NouisliderComponent,FormsModule],
    template: `
        <ngx-simplebar style="height: 100%">
            <div class="card h-100">
                <div class="card-body w-100 p-0">
                    <div class="p-3 border-bottom border-dashed">
                        <div class="app-search">
                            <input type="search" class="form-control" placeholder="Search product name...">
                            <lucide-angular [img]="LucideSearch" class="app-search-icon text-muted"/>
                        </div>
                    </div>

                    <div class="p-3 border-bottom border-dashed">
                        <div class="d-flex mb-2 justify-content-between align-items-center">
                            <h5 class="mb-0">Category:</h5>
                            <a href="javascript: void(0);" class="btn btn-link btn-sm px-0 fw-semibold">View All</a>
                        </div>

                        @for (category of categories; track $index) {
                            <div class="d-flex align-items-center gap-2 text-muted py-1">
                                <div class="form-check flex-grow-1">
                                    <input type="checkbox" [id]="category.id" class="form-check-input">
                                    <label [for]="category.id"
                                           class="form-check-label mb-0">{{ category.label }}</label>
                                </div>
                                <div class="flex-shrink-0"><span
                                    class="badge text-bg-light">{{ category.count && category.count }}</span></div>
                            </div>
                        }
                    </div>

                    <div class="p-3 border-bottom border-dashed">
                        <div class="d-flex mb-2 justify-content-between align-items-center">
                            <h5 class="mb-0">Brands:</h5>
                            <a href="javascript: void(0);" class="btn btn-link btn-sm px-0 fw-semibold">View All</a>
                        </div>

                        @for (brand of brands; track $index) {
                            <div class="d-flex align-items-center gap-2 text-muted py-1">
                                <div class="form-check flex-grow-1">
                                    <input type="checkbox" [id]="brand.id" class="form-check-input">
                                    <label [for]="brand.id" class="form-check-label mb-0">{{ brand.label }}</label>
                                </div>
                                <div class="flex-shrink-0"><span
                                    class="badge text-bg-light">{{ brand.count && brand.count }}</span></div>
                            </div>
                        }

                    </div>

                    <div class="p-3 border-bottom border-dashed">
                        <h5 class="mb-3">Price:</h5>

                        <div id="price-filter" class="slider-size-sm">
                            <nouislider [connect]="true" [min]="1" [max]="9999" [(ngModel)]="productRange"/>
                        </div>

                        <div class="d-flex gap-2 align-items-center mt-3">
                            <div
                                class="form-control form-control-sm text-center">{{ currency }}{{ productRange[0].toFixed(0) }}
                            </div>
                            <span class="fw-semibold text-muted">to</span>
                            <div
                                class="form-control form-control-sm text-center">{{ currency }}{{ productRange[1].toFixed(0) }}
                            </div>
                        </div>
                    </div>

                    <div class="p-3">
                        <div class="d-flex mb-3 justify-content-between align-items-center">
                            <h5 class="mb-0">Ratings:</h5>
                        </div>

                        @for (review of reviews; track $index; let i = $index) {
                            <div class="form-check py-1">
                                <input class="form-check-input" type="checkbox" id="{{reviews.length - i}}-star-rating">
                                <label for="{{reviews.length - i}}-star-rating" class="form-check-label d-block">
                                         <span class="d-flex align-items-center">
                                          <span class="flex-grow-1 d-inline-flex align-items-center">
                                         <app-rating [rate]="reviews.length - i"/>
                                        <span class="text-muted ms-1">{{ reviews.length - i }}
                                            Stars & Up</span>
                                          </span>
                                      <span class="flex-shrink-0"><span
                                          class="badge text-bg-light">{{ review }}</span></span>
                               </span>
                                </label>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </ngx-simplebar>
    `,
    styles: ``
})
export class ProductFilterSidebarComponent {

    protected readonly LucideSearch = LucideSearch;
    productRange = [1000, 2500]
    categories = [
        {id: 'cat-electronics', label: 'Electronics', count: 8},
        {id: 'cat-computers', label: 'Computers', count: 5},
        {id: 'cat-home-office', label: 'Home & Office', count: 6},
        {id: 'cat-accessories', label: 'Accessories',},
        {id: 'cat-gaming', label: 'Gaming', count: 9},
        {id: 'cat-mobile', label: 'Mobile Phones', count: 12},
        {id: 'cat-appliances', label: 'Appliances'}
    ];

    brands = [
        {id: 'brand-apple', label: 'Apple', count: 14},
        {id: 'brand-samsung', label: 'Samsung', count: 20},
        {id: 'brand-sony', label: 'Sony',},
        {id: 'brand-dell', label: 'Dell', count: 7},
        {id: 'brand-hp', label: 'HP',}
    ];

    reviews = [120, 210, 325, 145, 158]
    protected readonly currency = currency;
}
