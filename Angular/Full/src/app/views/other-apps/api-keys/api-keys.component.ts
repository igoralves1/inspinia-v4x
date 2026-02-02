import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {apiStatisticsData} from '@/app/views/other-apps/api-keys/data';
import {ApiStatisticsWidgetComponent} from '@/app/views/other-apps/api-keys/components/api-statistics-widget.component';
import {ApiTableComponent} from '@/app/views/other-apps/api-keys/components/api-table/api-table.component';

@Component({
    selector: 'app-api-keys',
    imports: [
        PageTitleComponent,
        ApiStatisticsWidgetComponent,
        ApiTableComponent
    ],
    templateUrl: './api-keys.component.html',
    styles: ``
})
export class ApiKeysComponent {
    apiStatisticsData = apiStatisticsData;
}
