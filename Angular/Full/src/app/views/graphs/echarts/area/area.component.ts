import { Component } from '@angular/core';
import { EchartComponent } from '@app/components/echart.component';
import { UiCardComponent } from '@app/components/ui-card.component';
import { areaChart, dynamicArea, marker, stackedArrea, stepArea } from './data';
import { PageTitleComponent } from '@app/components/page-title.component';
import {DynamicAreaChartComponent} from '@/app/views/graphs/echarts/area/components/dynamic-area-chart.component';

@Component({
  selector: 'app-area',
    imports: [UiCardComponent, EchartComponent, PageTitleComponent, DynamicAreaChartComponent],
  templateUrl: './area.component.html',
  styles: ``
})
export class AreaComponent {
  areaChart = areaChart
  stackedArrea = stackedArrea
  marker = marker
  dynamicArea = dynamicArea
  stepArea = stepArea

}
