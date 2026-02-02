import { Component } from '@angular/core';
import {QuillEditorComponent} from 'ngx-quill';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-information-form',
    imports: [
        QuillEditorComponent,
        FormsModule
    ],
  template: `
      <div class="card">
          <div class="card-header d-block p-3">
              <h4 class="card-title mb-1">Product Information</h4>
              <p class="text-muted mb-0">To add a new product, please provide the necessary
                  details in the fields below.</p>
          </div>

          <div class="card-body">
              <div class="row">
                  <div class="col-12">
                      <div class="mb-3">
                          <label for="productName" class="form-label">Product Name <span
                              class="text-danger">*</span></label>
                          <input type="text" class="form-control" id="productName"
                                 placeholder="Enter product name" required="">
                      </div>
                  </div>

                  <div class="col-lg-6">
                      <div class="mb-3">
                          <label for="skuId" class="form-label">SKU <span
                              class="text-danger">*</span></label>
                          <input type="text" class="form-control" id="skuId"
                                 placeholder="SOFA-10058" required="">
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="mb-3">
                          <label for="stockNumber" class="form-label">Stock <span
                              class="text-danger">*</span></label>
                          <input type="number" class="form-control" id="stockNumber"
                                 placeholder="250">
                      </div>
                  </div>

                  <div class="col-12">
                      <div>
                          <label class="form-label">Product Description <span class="text-muted">(Optional)</span></label>
                          <quill-editor [(ngModel)]="editorContent" theme="snow" [modules]="editorConfig"
                                        class="w-100"/>

                      </div>
                  </div>
              </div>
          </div>
      </div>
  `,
  styles: ``
})
export class ProductInformationFormComponent {
    editorContent: string = `
   <p>Introducing the <strong><em>Azure Comfort Single
                                  Sofa</em></strong>, a perfect blend of modern design and
                                  luxurious comfort.</p>

                              <p>This premium blue single sofa is designed to elevate any living
                                  space with its sleek profile and rich, durable fabric. It’s the
                                  perfect seating option for your living room, lounge area, or
                                  cozy reading nook.</p>

                              <ul>
                                  <li>Crafted with a solid mahogany frame for enhanced
                                      durability.
                                  </li>
                                  <li>Upholstered in a high-quality blue fabric that offers both
                                      style and comfort.
                                  </li>
                              </ul>`

    editorConfig= {
        toolbar: [['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', {'list': 'bullet'}, 'link', 'image']]
    }
}
