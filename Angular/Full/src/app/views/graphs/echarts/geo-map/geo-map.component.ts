import {Component} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {UsaMapComponent} from '@/app/views/graphs/echarts/geo-map/components/usa-map.component';
import {MorphingMapBarComponent} from '@/app/views/graphs/echarts/geo-map/components/morphing-map-bar.component';
import {PieChartWithMapComponent} from '@/app/views/graphs/echarts/geo-map/components/pie-chart-with-map.component';
import {SvgScatterMapComponent} from '@/app/views/graphs/echarts/geo-map/components/svg-scatter-map.component';

@Component({
    selector: 'app-geo-map',
    imports: [
        PageTitleComponent,
        UsaMapComponent,
        MorphingMapBarComponent,
        PieChartWithMapComponent,
        SvgScatterMapComponent
    ],
    templateUrl: './geo-map.component.html',
    styles: ``
})
export class GeoMapComponent {

}
