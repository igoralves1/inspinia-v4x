import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';

@Component({
  selector: 'app-typography',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        NgIcon
    ],
  templateUrl: './typography.component.html',
  styles: ``
})
export class TypographyComponent {

}
