import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-progress',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        NgIcon,
        NgbProgressbarModule,
    ],
    templateUrl: './progress.component.html',
    styles: ``
})
export class ProgressComponent {

}
