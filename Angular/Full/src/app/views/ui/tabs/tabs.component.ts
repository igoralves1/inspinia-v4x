import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabs',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        NgIcon,
        NgbNavModule
    ],
  templateUrl: './tabs.component.html',
  styles: ``
})
export class TabsComponent {
}
