import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';

@Component({
  selector: 'app-placeholders',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        NgIcon
    ],
  templateUrl: './placeholders.component.html',
  styles: ``
})
export class PlaceholdersComponent {

}
