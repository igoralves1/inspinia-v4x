import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {
    basicRadialBar,
    customAngleCircle,
    gradientCircle,
    imageFillCircle,
    multipleRadialBars,
    semiCircleGauge,
    strokedGauge
} from './data';

@Component({
    selector: 'app-apex-radialbar',
    imports: [UiCardComponent, PageTitleComponent, ApexchartComponent],
    templateUrl: './radialbar.component.html',
    styles: ``
})
export class RadialbarComponent {
    basicRadialBar = basicRadialBar
    multipleRadialBars = multipleRadialBars
    customAngleCircle = customAngleCircle
    imageFillCircle = imageFillCircle
    strokedGauge = strokedGauge
    gradientCircle = gradientCircle
    semiCircleGauge = semiCircleGauge
}
