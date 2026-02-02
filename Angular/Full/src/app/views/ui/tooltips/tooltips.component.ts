import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {toTitleCase} from '@/app/utils/string-utils';

@Component({
    selector: 'app-tooltips',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        NgIcon,
        NgbTooltipModule,
    ],
    templateUrl: './tooltips.component.html',
    styles: ``
})
export class TooltipsComponent {
    tooltipVariants = ['primary', 'danger', 'info', 'success', 'secondary', 'warning', 'dark', 'purple']
    protected readonly toTitleCase = toTitleCase;
}
