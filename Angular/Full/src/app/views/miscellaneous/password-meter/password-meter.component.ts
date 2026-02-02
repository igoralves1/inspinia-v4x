import {Component} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {UiCardComponent} from "@app/components/ui-card.component";
import {PasswordStrengthBarComponent} from "@app/components/password-strength-bar.component";
import {FormsModule} from '@angular/forms';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-password-meter',
  imports: [PageTitleComponent, UiCardComponent, PasswordStrengthBarComponent,FormsModule,NgbCollapseModule],
  templateUrl: './password-meter.component.html',
  styles: ``
})
export class PasswordMeterComponent {
 password: string = '';

  magicPassword = '';
  showRules = false;

  get isLengthValid() {
    return this.magicPassword.length >= 8;
  }
  get hasLowercase() {
    return /[a-z]/.test(this.magicPassword);
  }
  get hasUppercase() {
    return /[A-Z]/.test(this.magicPassword);
  }
  get hasNumber() {
    return /[0-9]/.test(this.magicPassword);
  }

  onBlur() {
    if (this.magicPassword.length > 0) {
      this.showRules = true;
    } else {
      this.showRules = false;
    }
  }

}
