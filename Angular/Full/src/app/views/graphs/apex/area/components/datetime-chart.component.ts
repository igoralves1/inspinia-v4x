import {Component} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import ApexCharts from 'apexcharts';
import {datetimeAreaChart} from '@/app/views/graphs/apex/area/data';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {ApexOptions} from 'ng-apexcharts';

@Component({
    selector: 'apex-datetime-chart',
    imports: [
        UiCardComponent,
        ApexchartComponent
    ],
    template: `
        <app-ui-card title="Area Chart - Datetime X-axis">
            <div card-body>
                <div class="toolbar apex-toolbar">
                    @for (range of ['1M', '6M', '1Y', 'YTD', 'ALL']; track $index) {
                        <button class="btn btn-sm btn-light me-1"
                                [class.active]="selectedRange === range" (click)="updateChart(range)">
                            {{ range }}
                        </button>
                    }
                </div>
                <app-apexchart [getOptions]="getDatetimeChartOptions"/>
            </div>
        </app-ui-card>
    `,
})
export class DatetimeChartComponent {
    selectedRange: string = 'ALL';
    fullData: [number, number][] = [];

    // Store initial chart setup
    getDatetimeChartOptions = (): ApexOptions => {
        const options = datetimeAreaChart();

        const series = options.series?.[0];
        if (series && Array.isArray((series as any).data)) {
            this.fullData = (series as { data: [number, number][] }).data;
        }

        return {
            ...options,
            chart: {
                ...(options.chart || {}),
                id: 'datetimeAreaChart',
                type: 'area',
                animations: {enabled: true},
            },
        };
    };

    updateChart(range: string): void {
        this.selectedRange = range;

        const now = this.fullData[this.fullData.length - 1][0];
        const nowDate = new Date(now);
        let fromDate: Date;

        switch (range) {
            case '1M':
                fromDate = new Date(nowDate);
                fromDate.setMonth(nowDate.getMonth() - 1);
                break;
            case '6M':
                fromDate = new Date(nowDate);
                fromDate.setMonth(nowDate.getMonth() - 6);
                break;
            case '1Y':
                fromDate = new Date(nowDate);
                fromDate.setFullYear(nowDate.getFullYear() - 1);
                break;
            case 'YTD':
                fromDate = new Date(nowDate.getFullYear(), 0, 1);
                break;
            case 'ALL':
            default:
                fromDate = new Date(this.fullData[0][0]);
        }

        const filteredData = this.fullData.filter(([timestamp]) => {
            return timestamp >= fromDate.getTime();
        });

        ApexCharts.exec('datetimeAreaChart', 'updateSeries', [
            {
                name: 'Inspinia',
                data: filteredData,
            },
        ]);
    }

}
