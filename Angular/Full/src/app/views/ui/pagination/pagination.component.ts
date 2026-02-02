import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        NgIcon,
        NgbPaginationModule
    ],
  templateUrl: './pagination.component.html',
  styles: ``
})
export class PaginationComponent {

}
