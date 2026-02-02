import { Component } from '@angular/core';
import {LucideAngularModule, LucideGrid, LucideLayers, LucideList, LucideTag, LucideToggleLeft} from 'lucide-angular';

@Component({
  selector: 'app-product-organize-form',
    imports: [
        LucideAngularModule
    ],
  template: `
      <div class="card">
          <div class="card-header d-block p-3">
              <h4 class="card-title mb-1">Organize</h4>
              <p class="text-muted mb-0">Organize your product by selecting the appropriate brand,
                  category, sub-category, status, and tags.</p>
          </div>

          <div class="card-body">
              <div class="mb-3">
                  <label for="brand" class="form-label">Brand</label>
                  <div class="app-search">
                      <input type="text" class="form-control" id="brand"
                             placeholder="Enter brand name">
                      <lucide-angular [img]="LucideLayers"  class="app-search-icon text-muted"/>
                  </div>
              </div>

              <div class="mb-3">
                  <label for="category" class="form-label">Category <span
                      class="text-danger">*</span></label>
                  <div class="app-search">
                      <select class="form-select form-control my-1 my-md-0" id="category">
                          <option selected>Choose Category</option>
                          <option value="Furniture">Furniture</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Fashion">Fashion</option>
                      </select>
                      <lucide-angular [img]="LucideGrid" class="app-search-icon text-muted"/>
                  </div>
              </div>

              <div class="mb-3">
                  <label for="subCategory" class="form-label">Sub Category <span
                      class="text-danger">*</span></label>
                  <div class="app-search">
                      <select class="form-select form-control my-1 my-md-0" id="subCategory">
                          <option selected>Choose Sub Category</option>
                          <option value="Chairs">Chairs</option>
                          <option value="Sofas">Sofas</option>
                          <option value="Tables">Tables</option>
                      </select>
                      <lucide-angular [img]="LucideList" class="app-search-icon text-muted"/>
                  </div>
              </div>

              <div class="mb-3">
                  <label for="statusOne" class="form-label">Status <span
                      class="text-danger">*</span></label>
                  <div class="app-search">
                      <select class="form-select form-control my-1 my-md-0" id="statusOne">
                          <option selected>Choose Status</option>
                          <option value="Published">Published</option>
                          <option value="Inactive">Inactive</option>
                          <option value="Schedule">Schedule</option>
                          <option value="Draft">Draft</option>
                      </select>
                      <lucide-angular [img]="LucideToggleLeft"  class="app-search-icon text-muted"/>
                  </div>
              </div>

              <div class="mb-0">
                  <label for="tags" class="form-label">Tags</label>
                  <div class="app-search">
                      <input type="text" class="form-control" id="tags"
                             placeholder="Enter tags separated by commas">
                      <lucide-angular [img]="LucideTag" class="app-search-icon text-muted"/>
                  </div>
              </div>
          </div>
      </div>
  `,
  styles: ``
})
export class ProductOrganizeFormComponent {

    protected readonly LucideLayers = LucideLayers;
    protected readonly LucideGrid = LucideGrid;
    protected readonly LucideList = LucideList;
    protected readonly LucideToggleLeft = LucideToggleLeft;
    protected readonly LucideTag = LucideTag;
}
