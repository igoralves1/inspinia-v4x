import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {RatingComponent} from '@app/components/rating.component';
import {currency} from '@/app/constants';
import {NgIcon} from '@ng-icons/core';
import {ProductType} from '@/app/views/ecommerce/products/types';

@Component({
  selector: 'app-product-card',
    imports: [
        RouterLink,
        RatingComponent,
        NgIcon
    ],
  template: `
      <article class="card h-100 mb-2">
          <div
              class="badge text-bg-{{product.discount > 20 ? 'success' : 'danger'}} badge-label fs-base rounded position-absolute top-0 start-0 m-3">
              {{ product.discount }}% OFF
          </div>

          <div class="card-body">
              <div class="bg-light-subtle p-3 mb-3 border border-light rounded">
                  <img [src]="product.image" alt="funky-shoes" class="img-fluid">
              </div>
              <h6 class="card-title fs-sm lh-base mb-2">
                  <a routerLink="/ecommerce/products/{{product.sku}}" class="link-reset">{{product.name}}</a>
              </h6>

              <div>
                  <app-rating [rate]="product.rating"/>
                  <span class="ms-1"><a routerLink="/ecommerce/reviews"
                                        class="link-reset fw-semibold">({{ product.reviews }})</a></span>
              </div>
          </div>

          <div class="card-footer bg-transparent d-flex justify-content-between">
              <div class="d-flex justify-content-start align-items-center gap-2">
                  <h4 class="text-{{product.discount > 20 ? 'success' : 'danger'}} d-flex align-items-center gap-2 mb-0">
                      <span
                          class="text-muted text-decoration-line-through">{{ currency }}{{ product.price }}</span> {{ currency }}{{ product.sellPrice }}
                  </h4>
              </div>
              <a class="btn btn-sm btn-icon btn-primary" [routerLink]="[]"><ng-icon name="tablerBasket" class="fs-lg"/></a>
          </div>
      </article>
  `,
  styles: ``
})
export class ProductCardComponent {
@Input() product!: ProductType;
    protected readonly currency = currency;
}
