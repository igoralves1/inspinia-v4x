import { Component } from '@angular/core';
import { UiCardComponent } from "@app/components/ui-card.component";
import { NgIcon } from "@ng-icons/core";
import {PageTitleComponent} from '@app/components/page-title.component';

@Component({
    selector: 'app-breadcrumb',
    imports: [UiCardComponent, NgIcon, PageTitleComponent],
    templateUrl: './breadcrumb.component.html',
    styles: ``,
})
export class BreadcrumbComponent {

}
