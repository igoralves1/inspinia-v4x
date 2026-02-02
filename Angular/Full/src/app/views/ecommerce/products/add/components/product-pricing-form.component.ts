import { Component } from '@angular/core';
import {LucideAngularModule, LucideDollarSign, LucidePercent, LucideTag} from 'lucide-angular';

@Component({
  selector: 'app-product-pricing-form',
    imports: [LucideAngularModule],
  template: `
      <div class="card">
          <div class="card-header d-block p-3">
              <h4 class="card-title mb-1">Pricing</h4>
              <p class="text-muted mb-0">Set the base price and applicable discount for the
                  product using the options below.</p>
          </div>

          <div class="card-body">
              <div class="mb-3">
                  <label for="basePrice" class="form-label">Base Price <span
                      class="text-danger">*</span></label>
                  <div class="app-search">
                      <input type="number" class="form-control" id="basePrice"
                             placeholder="Enter base price (e.g., 199.99)">
                      <lucide-angular [img]="LucideDollarSign"  class="app-search-icon text-muted"/>
                  </div>
              </div>

              <div class="mb-3">
                  <label for="discount" class="form-label">Discount Type <span class="text-muted">(Optional)</span></label>
                  <div class="app-search">
                      <select class="form-select form-control my-1 my-md-0" id="discount">
                          <option selected>Choose Discount</option>
                          <option value="No Discount">No Discount</option>
                          <option value="Flat Discount">Flat Discount</option>
                          <option value="Percentage Discount">Percentage Discount</option>
                      </select>
                      <lucide-angular [img]="LucidePercent" class="app-search-icon text-muted"/>
                  </div>
              </div>

              <div class="mb-0">
                  <label for="discountValue" class="form-label">Discount Value <span
                      class="text-muted">(Optional)</span></label>
                  <div class="app-search">
                      <input type="number" class="form-control" id="discountValue"
                             placeholder="Enter discount amount or percentage">
                      <lucide-angular [img]="LucideTag" class="app-search-icon text-muted"/>
                  </div>
              </div>
          </div>
      </div>
  `,
  styles: ``
})
export class ProductPricingFormComponent {

    protected readonly LucideDollarSign = LucideDollarSign;
    protected readonly LucidePercent = LucidePercent;
    protected readonly LucideTag = LucideTag;
}
