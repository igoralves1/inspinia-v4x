import { Component } from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-colors',
    imports: [
        UiCardComponent,
        PageTitleComponent,
        NgIcon,
        RouterLink
    ],
  templateUrl: './colors.component.html',
  styles: ``
})
export class ColorsComponent {

}
