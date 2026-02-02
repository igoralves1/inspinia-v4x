import {Component, Input} from '@angular/core';
import {CountUpModule} from 'ngx-countup';

import {StatisticsWidgetType} from '@/app/views/dashboards/dashboard-2/types';
import {EchartComponent} from '@app/components/echart.component';

@Component({
    selector: 'app-statistics-widget',
    imports: [CountUpModule, EchartComponent],
    templateUrl: './statistics-widget.component.html',
})
export class StatisticsWidgetComponent {
    @Input() item!: StatisticsWidgetType
}
