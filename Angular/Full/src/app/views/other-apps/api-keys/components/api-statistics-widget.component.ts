import {Component, Input} from '@angular/core';
import {NgApexchartsModule} from 'ng-apexcharts';
import {ApiStatisticsWidgetType} from '@/app/views/other-apps/api-keys/types';
import {NgIcon} from '@ng-icons/core';
import {ApexchartComponent} from '@app/components/apexchart.component';

@Component({
    selector: 'app-api-statistics-widget',
    imports: [NgApexchartsModule, NgIcon, ApexchartComponent],
    template: `
        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-center gap-3">
                    <div
                        class="avatar-xl bg-light text-{{item.variant}} rounded-circle d-flex align-items-center justify-content-center">
                        <ng-icon [name]="item.icon" class="avatar-title fs-xxl"></ng-icon>
                    </div>
                    <div class="flex-grow-1">
                        <h6 class="mb-2 text-muted text-uppercase fs-xs">{{ item.title }}</h6>
                        <h4 class="mb-0 fw-bold">{{ item.count }}</h4>
                    </div>
                </div>
                @if (item.chartOptions) {
                    <div class="mt-3">
                        <app-apexchart [getOptions]="item.chartOptions"/>
                    </div>
                }
            </div>
        </div>
    `,
    styles: ``
})
export class ApiStatisticsWidgetComponent {
    @Input() item!: ApiStatisticsWidgetType;

}
