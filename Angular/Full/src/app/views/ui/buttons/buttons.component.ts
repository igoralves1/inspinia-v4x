import {colorVariants} from '@/app/constants';
import {TitleCasePipe} from '@angular/common';
import {Component} from '@angular/core';
import {UiCardComponent} from "@app/components/ui-card.component";
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';
import {PageTitleComponent} from '@app/components/page-title.component';

@Component({
    selector: 'app-buttons',
    imports: [UiCardComponent, TitleCasePipe, NgbDropdownModule, NgIcon, PageTitleComponent],
    templateUrl: './buttons.component.html',
    styles: ``,
})
export class ButtonsComponent {
    colorsVariants = colorVariants
}
