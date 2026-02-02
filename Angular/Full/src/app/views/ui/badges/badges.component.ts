import { Component } from '@angular/core';
import { UiCardComponent } from "../../../components/ui-card.component";
import {PageTitleComponent} from '@app/components/page-title.component';
import {NgIcon} from '@ng-icons/core';

@Component({
  selector: 'app-badges',
    imports: [UiCardComponent, PageTitleComponent, NgIcon],
  templateUrl: './badges.component.html',
  styles: ``
})
export class BadgesComponent {

}
