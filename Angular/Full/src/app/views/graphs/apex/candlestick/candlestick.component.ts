import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {
    candlestickWithLineChart,
    simpleCandlestickChart,
    xAxisCandlestickChart
} from './data';
import {
    ComboCandlestickChartComponent
} from '@/app/views/graphs/apex/candlestick/components/combo-candlestick-chart.component';

@Component({
    selector: 'app-apex-candlestick',
    imports: [UiCardComponent, PageTitleComponent, ApexchartComponent, ComboCandlestickChartComponent],
    templateUrl: './candlestick.component.html',
    styles: ``
})
export class CandlestickComponent {
    simpleCandlestickChart = simpleCandlestickChart
    xAxisCandlestickChart = xAxisCandlestickChart
    candlestickWithLineChart = candlestickWithLineChart
}
