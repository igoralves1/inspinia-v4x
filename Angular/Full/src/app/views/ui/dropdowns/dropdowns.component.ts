import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {LucideAngularModule, LucideSquareChevronDown} from 'lucide-angular';
import {toTitleCase} from '@/app/utils/string-utils';

@Component({
    selector: 'app-dropdowns',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        NgIcon,
        NgbDropdownModule,
        LucideAngularModule,
    ],
    templateUrl: './dropdowns.component.html',
    styles: ``
})
export class DropdownsComponent {

    protected readonly LucideSquareChevronDown = LucideSquareChevronDown;

    dropdownVariants = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
    protected readonly toTitleCase = toTitleCase;
}
