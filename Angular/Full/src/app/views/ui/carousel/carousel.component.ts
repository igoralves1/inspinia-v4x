import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {NgbCarouselConfig, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-carousel',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        NgIcon,
        NgbCarouselModule
    ],
    templateUrl: './carousel.component.html',
    styles: ``
})
export class CarouselComponent {
    constructor(config: NgbCarouselConfig) {
        config.showNavigationArrows = true
        config.showNavigationIndicators = true
    }
}
