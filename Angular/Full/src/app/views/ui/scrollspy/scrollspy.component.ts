import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {NgbDropdownModule, NgbScrollSpyModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scrollspy',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        NgIcon,
        NgbScrollSpyModule,
        NgbDropdownModule
    ],
  templateUrl: './scrollspy.component.html',
  styles: ``
})
export class ScrollspyComponent {

}
