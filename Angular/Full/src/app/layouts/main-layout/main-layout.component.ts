import {Component} from '@angular/core';
import {VerticalLayoutComponent} from '@layouts/vertical-layout/vertical-layout.component';
import {RouterOutlet} from '@angular/router';
import {HorizontalLayoutComponent} from '@layouts/horizontal-layout/horizontal-layout.component';
import {LayoutStoreService} from '@core/services/layout-store.service';

@Component({
    selector: 'app-main-layout',
    imports: [
        VerticalLayoutComponent,
        RouterOutlet,
        HorizontalLayoutComponent,

    ],
    templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
    constructor(public layout: LayoutStoreService) {
    }
}
