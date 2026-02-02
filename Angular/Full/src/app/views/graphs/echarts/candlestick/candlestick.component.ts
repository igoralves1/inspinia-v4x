import {Component} from '@angular/core';
import {EchartComponent} from '@app/components/echart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {basicCandle, mixedCandle} from './data';

@Component({
    selector: 'app-candlestick',
    imports: [EchartComponent, UiCardComponent, PageTitleComponent],
    templateUrl: './candlestick.component.html',
    styles: ``
})
export class CandlestickComponent {
    basicCandle = basicCandle
    mixedCandle = mixedCandle
}
