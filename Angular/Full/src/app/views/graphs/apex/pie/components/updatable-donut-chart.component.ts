import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {ApexOptions} from 'ng-apexcharts';
import {donutUpdateChart} from '@/app/views/graphs/apex/pie/data';

@Component({
    selector: 'apex-updatable-donut-chart',
    standalone: true,
    imports: [UiCardComponent, ApexchartComponent],
    template: `
        <app-ui-card title="Donut Update">
            <div card-body>
                <app-apexchart [getOptions]="getDonutOptions"/>

                <div class="text-center mt-3">
                    <button class="btn btn-sm btn-primary me-1" (click)="randomizeChart()">RANDOMIZE</button>
                    <button class="btn btn-sm btn-primary me-1" (click)="addData()">ADD</button>
                    <button class="btn btn-sm btn-primary me-1" (click)="removeData()">REMOVE</button>
                    <button class="btn btn-sm btn-primary" (click)="resetChart()">RESET</button>
                </div>
            </div>
        </app-ui-card>
    `,
})
export class UpdatableDonutChartComponent {
    series: number[] = [44, 55, 13, 33];

    getDonutOptions: () => ApexOptions = () => ({
        ...donutUpdateChart(),
        chart: {
            ...(donutUpdateChart().chart || {}),
            id: 'donutUpdateChart',
            type: 'donut'
        },
        series: this.series
    });

    randomizeChart() {
        this.series = Array.from({length: 4}, () => Math.floor(Math.random() * 100));
        this.updateSeries();
    }

    addData() {
        this.series = [...this.series, Math.floor(Math.random() * 100)];
        this.updateSeries();
    }

    removeData() {
        this.series = this.series.slice(0, -1);
        this.updateSeries();
    }

    resetChart() {
        this.series = [44, 55, 13, 33];
        this.updateSeries();
    }

    private updateSeries() {
        ApexCharts.exec('donutUpdateChart', 'updateSeries', this.series);
    }
}
