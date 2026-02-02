import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {currentYear} from '@/app/constants';

@Component({
  selector: 'app-terms-and-conditions',
    imports: [
        PageTitleComponent
    ],
  templateUrl: './terms-and-conditions.component.html',
  styles: ``
})
export class TermsAndConditionsComponent {
currentYear=currentYear
}
