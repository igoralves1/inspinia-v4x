import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import {toTitleCase} from '@/app/utils/string-utils';

@Component({
    selector: 'app-popovers',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        NgIcon,
        NgbPopoverModule,
    ],
    templateUrl: './popovers.component.html',
    styles: ``
})
export class PopoversComponent {
    popoverVariants = ["primary", "success", "danger", "info", "dark", 'secondary', 'purple'];
    protected readonly toTitleCase = toTitleCase;
}
