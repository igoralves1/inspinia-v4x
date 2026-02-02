import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collapse',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        NgIcon,
        NgbCollapseModule
    ],
  templateUrl: './collapse.component.html',
  styles: ``
})
export class CollapseComponent {
    isCollapsed = true
    isHorizontal = true
    isFirstToggle = true
    isSecondToggle = true
}
