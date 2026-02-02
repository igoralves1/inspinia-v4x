import { Component } from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-billing-details',
    imports: [
        NgIcon,
        RouterLink
    ],
  template: `
      <div class="card">
          <div class="card-header justify-content-between border-dashed">
              <h4 class="card-title">Billing Details</h4>
              <a [routerLink]="[]" class="btn btn-default btn-sm btn-icon rounded-circle"><ng-icon
                  name="tablerPencil" class="fs-lg"/></a>
          </div>

          <div class="card-body">
              <div class="d-flex align-items-start mb-0">
                  <div class="flex-grow-1">
                      <h5 class="mb-2">John Doe</h5>
                      <p class="text-muted mb-0">
                          5678 Oak Avenue,<br>
                          Suite 101,<br>
                          Chicago, IL 60611,<br>
                          United States
                      </p>
                  </div>
                  <div class="ms-auto">
                      <span class="badge bg-primary-subtle text-primary">Billing Address</span>
                  </div>
              </div>
              <hr>
              <div class="d-flex align-items-center">
                  <div class="avatar-sm me-2">
                      <img src="assets/images/cards/mastercard.svg" alt="Mastercard"
                           class="img-fluid rounded">
                  </div>
                  <div>
                      <h5 class="fs-xs mb-1">Mastercard Ending in 4242</h5>
                      <p class="text-muted mb-0 fs-xs">Expiry: 08/26</p>
                  </div>
                  <div class="ms-auto">
                      <span class="badge bg-success-subtle text-success">Paid</span>
                  </div>
              </div>
          </div>
      </div>
  `,
  styles: ``
})
export class BillingDetailsComponent {

}
