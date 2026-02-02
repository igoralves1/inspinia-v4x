import {Component} from '@angular/core';
import {wizardSteps} from '@/app/views/forms/wizards/data';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIcon} from '@ng-icons/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wizard-with-progressbar',
    imports: [
        NgIcon,
        ReactiveFormsModule,
        FormsModule,
        UiCardComponent,
        NgbProgressbarModule
    ],
    template: `
        <app-ui-card title="Progressbar Support">
            <span helper-text class="badge badge-soft-success badge-label fs-xxs py-1">Exclusive</span>
            <div class="ins-wizard" card-body>
                <ngb-progressbar
                    class="mb-4"
                    [value]="progressValue"
                    type="primary"
                    height="6px"
                    [striped]="true"
                    [animated]="true">
                </ngb-progressbar>
                <ul class="nav nav-tabs wizard-tabs" role="tablist">
                    @for (step of wizardSteps; track $index; let i = $index) {
                        <li class="nav-item">
                            <a href="javascript:void(0);" [class.active]="i === currentStep" class="nav-link" [class]="i < currentStep ? 'wizard-item-done' : ''"
                              (click)="goToStep(i)">
                                    <span class="d-flex align-items-center">
                                      <ng-icon [name]="step.icon" class='fs-32'/>
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

                <div class="tab-content pt-3">
                    @for (step of wizardSteps; track $index; let i = $index) {
                        <div class="tab-pane fade" [class.show]="currentStep === i" [class.active]="currentStep === i">
                            @switch (i) {
                                @case (0) {
                                    <div class="row">
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">Full Name</label>
                                            <input type="text" class="form-control" placeholder="Enter your full name"
                                                   name="fullname" required>
                                        </div>
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">Email</label>
                                            <input type="email" class="form-control" placeholder="Enter your email"
                                                   name="email" required>
                                        </div>
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">Phone Number</label>
                                            <input type="tel" class="form-control" name="phone"
                                                   placeholder="Enter your phone number" required>
                                        </div>
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">Date of Birth</label>
                                            <input type="text" data-provider="flatpickr" data-date-format="d M, Y"
                                                   placeholder="Select your DOB" class="form-control" name="dob"
                                                   required>
                                        </div>
                                    </div>
                                }
                                @case (1) {
                                    <div class="row">
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">Street Address</label>
                                            <input type="text" class="form-control" name="street"
                                                   placeholder="123 Main St" required>
                                        </div>
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">City</label>
                                            <input type="text" class="form-control" name="city"
                                                   placeholder="e.g., New York" required>
                                        </div>
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">State</label>
                                            <input type="text" class="form-control" name="state"
                                                   placeholder="e.g., California" required>
                                        </div>
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">Zip Code</label>
                                            <input type="text" class="form-control" name="zip" placeholder="e.g., 10001"
                                                   required>
                                        </div>
                                    </div>
                                }
                                @case (2) {
                                    <div class="row">
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">Choose Course</label>
                                            <select class="form-select" name="course" required>
                                                <option value="">Select</option>
                                                <option value="Engineering">Engineering</option>
                                                <option value="Medical">Medical</option>
                                                <option value="Business">Business</option>
                                            </select>
                                        </div>
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">Enrollment Type</label>
                                            <select class="form-select" name="enrollment" required>
                                                <option value="">Select</option>
                                                <option value="Full Time">Full Time</option>
                                                <option value="Part Time">Part Time</option>
                                            </select>
                                        </div>
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">Preferred Batch Time</label>
                                            <select class="form-select" name="batch_time" required>
                                                <option value="">Select Time</option>
                                                <option value="Morning">Morning (8am – 12pm)</option>
                                                <option value="Afternoon">Afternoon (1pm – 5pm)</option>
                                                <option value="Evening">Evening (6pm – 9pm)</option>
                                            </select>
                                        </div>
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">Mode of Study</label>
                                            <select class="form-select" name="mode" required>
                                                <option value="">Select Mode</option>
                                                <option value="Offline">Offline</option>
                                                <option value="Online">Online</option>
                                                <option value="Hybrid">Hybrid</option>
                                            </select>
                                        </div>
                                    </div>
                                }
                                @case (3) {
                                    <div class="row">
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">Parent/Guardian Name</label>
                                            <input type="text" class="form-control" name="parent_name"
                                                   placeholder="e.g., John Doe" required>
                                        </div>
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">Relation</label>
                                            <input type="text" class="form-control" name="relation"
                                                   placeholder="e.g., Father, Mother" required>
                                        </div>
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">Parent Phone</label>
                                            <input type="tel" class="form-control" name="parent_phone"
                                                   placeholder="e.g., +1 555 123 4567" required>
                                        </div>
                                        <div class="col-xl-6 mb-3">
                                            <label class="form-label">Parent Email</label>
                                            <input type="email" class="form-control" name="parent_email"
                                                   placeholder="e.g., parent@example.com" required>
                                        </div>
                                    </div>
                                }
                                @case (4) {
                                    <div class="mb-3">
                                        <label class="form-label">Upload ID Proof</label>
                                        <input type="file" class="form-control" name="id_proof" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Upload Previous Marksheet</label>
                                        <input type="file" class="form-control" name="marksheet" required>
                                    </div>
                                }

                            }

                            <div class="d-flex justify-content-between mt-3">
                                @if (i > 0) {
                                    <button type="button" class="btn btn-secondary" (click)="previousStep()">←
                                        Back:
                                        {{ step.title }}
                                    </button>
                                }
                                @if (i < wizardSteps.length - 1) {
                                    <button type="button" class="btn btn-primary ms-auto" (click)="nextStep()"
                                    >Next: {{ step.title }} →
                                    </button>
                                }
                                @if (i === wizardSteps.length - 1) {
                                    <button type="submit" class="btn btn-success">
                                        Submit Application
                                    </button>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </app-ui-card>
    `,
    styles: ``
})
export class WizardWithProgressbarComponent {
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
    get progressValue(): number {
        const totalSteps = this.wizardSteps.length;
        return ((this.currentStep + 1 ) / totalSteps) * 100;
    }

    protected readonly wizardSteps = wizardSteps;
}
