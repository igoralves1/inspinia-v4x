import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {EchartComponent} from '@app/components/echart.component';
import {
    gaugeChart,
    multiGauge,
    multiRing,
    ringGauge,
    stageChart,
    temperature
} from '@/app/views/graphs/echarts/gauge/data';
import {MultiGaugeChartComponent} from '@/app/views/graphs/echarts/gauge/components/multi-gauge-chart.component';

@Component({
    selector: 'app-gauge',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        EchartComponent,
        MultiGaugeChartComponent
    ],
    templateUrl: './gauge.component.html',
})
export class GaugeComponent {
    gaugeChart = gaugeChart
    stageChart = stageChart
    ringGauge = ringGauge
    temperature = temperature
    multiRing = multiRing
    multiGauge = multiGauge
}
