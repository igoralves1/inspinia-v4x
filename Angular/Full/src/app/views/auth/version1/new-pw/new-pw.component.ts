import {credits, currentYear} from '@/app/constants';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {NgOtpInputComponent} from 'ng-otp-input';
import {PasswordStrengthBarComponent} from "@app/components/password-strength-bar.component";

@Component({
    selector: 'app-new-pw',
    imports: [RouterLink, NgOtpInputComponent, FormsModule, PasswordStrengthBarComponent],
    templateUrl: './new-pw.component.html',
    styles: ``
})
export class NewPwComponent {
    currentYear = currentYear
    credits = credits
    password: string = '';
}
