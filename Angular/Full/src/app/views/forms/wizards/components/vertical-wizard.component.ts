import {Component} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {wizardSteps} from '@/app/views/forms/wizards/data';
import {NgIcon} from '@ng-icons/core';

@Component({
  selector: 'app-vertical-wizard',
    imports: [
        UiCardComponent,
        FormsModule,
        ReactiveFormsModule,
        NgIcon
    ],
  template: `
      <app-ui-card title="Vertical Wizard">
          <span helper-text class="badge badge-soft-success badge-label fs-xxs py-1">Exclusive</span>

          <form card-body>
              <div class="ins-wizard">
                  <div class="row">
                      <div class="col-md-4">
                          <ul class="nav flex-column wizard-bordered wizard-tabs nav-pills" role="tablist">
                              @for (step of wizardSteps; track $index; let i = $index) {
                                  <li class="nav-item">
                                      <a href="javascript:void(0);" class="nav-link"
                                         [class]="i < currentStep ? 'wizard-item-done' :i === currentStep ? 'active' :''"
                                         (click)="goToStep(i)">
                                    <span class="d-flex align-items-center">
                                      <ng-icon [name]="step.icon" class=' fs-32'/>
                                      <span class="flex-grow-1 ms-2 text-truncate">
                                        <span
                                            class="mb-0 lh-base d-block fw-semibold text-body fs-base">{{ step.title }}</span>
                                        <span class="fs-xxs mb-0">{{ step.subtitle }}</span>
                                      </span>
                                    </span>
                                      </a>
                                  </li>
                              }
                          </ul>
                      </div>

                      <div class="col-md-8">
                          <div class="tab-content border border-dashed rounded p-4">
                              @for (step of wizardSteps; track $index; let i = $index) {
                                  <div class="tab-pane fade" [class.show]="currentStep === i"
                                       [class.active]="currentStep === i">
                                      @switch (i) {
                                          @case (0) {
                                              <div class="row">
                                                  <div class="col-xl-6 mb-3">
                                                      <label class="form-label">Full Name</label>
                                                      <input type="text" class="form-control"
                                                             placeholder="Enter full name" name="fullname"/>
                                                  </div>
                                                  <div class="col-xl-6 mb-3">
                                                      <label class="form-label">Email</label>
                                                      <input type="email" class="form-control"
                                                             placeholder="Enter email address" name="email"/>
                                                  </div>
                                                  <div class="col-xl-6 mb-3">
                                                      <label class="form-label">Phone Number</label>
                                                      <input type="tel" class="form-control" name="phone"
                                                             placeholder="+1 234 567 8901"/>
                                                  </div>
                                                  <div class="col-xl-6 mb-3">
                                                      <label class="form-label">Date of Birth</label>
                                                      <input type="text" class="form-control" name="dob"
                                                             placeholder="Select birth date"/>
                                                  </div>
                                              </div>
                                          }
                                          @case (1) {
                                              <div class="row">
                                                  <div class="col-xl-6 mb-3">
                                                      <label class="form-label">Street Address</label>
                                                      <input type="text" class="form-control" name="street"
                                                             placeholder="123 Main St"/>
                                                  </div>
                                                  <div class="col-xl-6 mb-3">
                                                      <label class="form-label">City</label>
                                                      <input type="text" class="form-control" name="city"
                                                             placeholder="New York"/>
                                                  </div>
                                                  <div class="col-xl-6 mb-3">
                                                      <label class="form-label">State</label>
                                                      <input type="text" class="form-control" name="state"
                                                             placeholder="California"/>
                                                  </div>
                                                  <div class="col-xl-6 mb-3">
                                                      <label class="form-label">Zip Code</label>
                                                      <input type="text" class="form-control" name="zip"
                                                             placeholder="10001"/>
                                                  </div>
                                              </div>
                                          }
                                          @case (2) {
                                              <div class="row">
                                                  <div class="col-xl-6 mb-3">
                                                      <label class="form-label">Choose Course</label>
                                                      <select class="form-select" name="course">
                                                          <option value="">Select</option>
                                                          <option value="Engineering">Engineering</option>
                                                          <option value="Medical">Medical</option>
                                                          <option value="Business">Business</option>
                                                      </select>
                                                  </div>
                                                  <div class="col-xl-6 mb-3">
                                                      <label class="form-label">Enrollment Type</label>
                                                      <select class="form-select" name="enrollment">
                                                          <option value="">Select</option>
                                                          <option value="Full Time">Full Time</option>
                                                          <option value="Part Time">Part Time</option>
                                                      </select>
                                                  </div>
                                                  <div class="col-xl-6">
                                                      <div class="mb-3">
                                                          <label class="form-label">Preferred Batch Time</label>
                                                          <select class="form-select" name="batch_time" required>
                                                              <option value="">Select Time</option>
                                                              <option value="Morning">Morning</option>
                                                              <option value="Afternoon">Afternoon</option>
                                                              <option value="Evening">Evening</option>
                                                          </select>
                                                      </div>
                                                  </div>
                                                  <div class="col-xl-6">
                                                      <div class="mb-3">
                                                          <label class="form-label">Mode of Study</label>
                                                          <select class="form-select" name="mode" required>
                                                              <option value="">Select Mode</option>
                                                              <option value="Offline">Offline</option>
                                                              <option value="Online">Online</option>
                                                              <option value="Hybrid">Hybrid</option>
                                                          </select>
                                                      </div>
                                                  </div>
                                              </div>
                                          }
                                          @case (3) {
                                              <div class="row">
                                                  <div class="col-xl-6 mb-3">
                                                      <label class="form-label">Parent/Guardian Name</label>
                                                      <input type="text" class="form-control" name="parent_name"
                                                             placeholder="e.g., John Doe" required/>
                                                  </div>
                                                  <div class="col-xl-6 mb-3">
                                                      <label class="form-label">Relation</label>
                                                      <input type="text" class="form-control" name="relation"
                                                             placeholder="e.g., Father, Mother" required/>
                                                  </div>
                                                  <div class="col-xl-6">
                                                      <div class="mb-3">
                                                          <label class="form-label">Parent Phone</label>
                                                          <input type="tel" class="form-control" name="parent_phone"
                                                                 placeholder="e.g., +1 555 123 4567" required>
                                                      </div>
                                                  </div>
                                                  <div class="col-xl-6">
                                                      <div class="mb-3">
                                                          <label class="form-label">Parent Email</label>
                                                          <input type="email" class="form-control" name="parent_email"
                                                                 placeholder="e.g., parent@example.com">
                                                      </div>
                                                  </div>
                                              </div>
                                          }
                                          @case (4) {
                                              <div class="mb-3">
                                                  <label class="form-label">Upload ID Proof</label>
                                                  <input type="file" class="form-control" name="id_proof"/>
                                              </div>
                                              <div class="mb-3">
                                                  <label class="form-label">Upload Marksheet</label>
                                                  <input type="file" class="form-control" name="marksheet"/>
                                              </div>
                                          }
                                      }
                                      <div class="d-flex justify-content-between mt-3">
                                          @if (i > 0) {
                                              <button type="button" class="btn btn-secondary" (click)="previousStep()"
                                              >← Back
                                              </button>
                                          }
                                          @if (i < wizardSteps.length - 1) {
                                              <button type="button" class="btn btn-primary ms-auto" (click)="nextStep()"
                                              >Next: {{ step.title }} →
                                              </button>
                                          }
                                          @if (i === wizardSteps.length - 1) {
                                              <button type="submit" class="btn btn-success">Submit
                                              </button>
                                          }
                                      </div>
                                  </div>
                              }
                          </div>
                      </div>
                  </div>
              </div>
          </form>
      </app-ui-card>
  `,
  styles: ``
})
export class VerticalWizardComponent {
    currentStep = 0;


    nextStep() {
        if (this.currentStep < wizardSteps.length - 1) this.currentStep++;
    }

    previousStep() {
        if (this.currentStep > 0) this.currentStep--;
    }

    goToStep(index: number) {
        this.currentStep = index;
    }

    protected readonly wizardSteps = wizardSteps;
}
