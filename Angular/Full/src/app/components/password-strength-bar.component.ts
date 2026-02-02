import {calculatePasswordStrength} from '@/app/utils/password-utils';
import {Component, Input, type OnChanges, type SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-password-strength-bar',
    imports: [],
    template: `
        <div class="password-bar my-2">
            @for (bar of strengthBars; track i; let i = $index) {
                <div
                    [class]="'strong-bar ' + (i < passwordStrength ? 'bar-active-' + passwordStrength : '')"></div>
            }
        </div>
        <p class="text-muted fs-xs mb-0">
            Use 8+ characters with letters, numbers & symbols.
        </p>`
})
export class PasswordStrengthBarComponent implements OnChanges {
    @Input() password: string = '';
    passwordStrength: number = 0;
    strengthBars = new Array(4);

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['password']) {
            this.passwordStrength = calculatePasswordStrength(this.password);
        }
    }
}
