import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';

@Component({
    selector: 'app-cards',
    imports: [PageTitleComponent, UiCardComponent, NgIcon],
    templateUrl: './cards.component.html',
    styles: ``
})
export class CardsComponent {

}
