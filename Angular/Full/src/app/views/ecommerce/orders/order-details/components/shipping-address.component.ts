import { Component } from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-shipping-address',
    imports: [
        NgIcon,
        RouterLink
    ],
  template: `
      <div class="card">
          <div class="card-header justify-content-between border-dashed">
              <h4 class="card-title">Shipping Address</h4>
              <a [routerLink]="[]" class="btn btn-default btn-sm btn-icon rounded-circle"><ng-icon
                  name="tablerPencil" class="fs-lg"/></a>
          </div>

          <div class="card-body">
              <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=New+York+University&key=AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4"
                  style="width: 100%; height: 180px; overflow:hidden; border:0;"></iframe>
              <div class="d-flex align-items-start my-3">
                  <div class="flex-grow-1">
                      <h5 class="mb-2">John Doe</h5>
                      <p class="text-muted mb-1">
                          1234 Elm Street,<br>
                          Apt 567,<br>
                          Springfield, IL 62704,<br>
                          United States
                      </p>
                      <p class="mb-0 text-muted">
                          <strong>Phone:</strong> (123) 456-7890<br>
                          <strong>Email:</strong> john.doe&#64;example.com
                      </p>
                  </div>
                  <div class="ms-auto">
                      <span class="badge bg-success-subtle text-success">Primary Address</span>
                  </div>
              </div>

              <div class="alert alert-warning mb-0">
                  <h6 class="mb-2">Delivery Instructions:</h6>
                  <p class="fst-italic mb-0">Please leave the package at the front door if no one is home.
                      Call upon arrival.</p>
              </div>
          </div>
      </div>
  `,
  styles: ``
})
export class ShippingAddressComponent {

}
