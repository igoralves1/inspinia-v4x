import { Component } from '@angular/core';
import {FileUploaderComponent} from '@app/components/file-uploader.component';

@Component({
  selector: 'app-product-image',
    imports: [
        FileUploaderComponent
    ],
  template: `
      <div class="card">
          <div class="card-header d-block p-3">
              <h4 class="card-title mb-1">Product Image</h4>
              <p class="text-muted mb-0">To upload a product image, please use the option below to
                  select and upload the relevant file.</p>
          </div>

          <div class="card-body">
              <div class="row">
                  <div class="col-12">
                      <form action="/" method="post" id="myAwesomeDropzone"
                            data-plugin="dropzone" data-previews-container="#file-previews"
                            data-upload-preview-template="#uploadPreviewTemplate">
                          <FileUploader/>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  `,
  styles: ``
})
export class ProductImageComponent {

}
