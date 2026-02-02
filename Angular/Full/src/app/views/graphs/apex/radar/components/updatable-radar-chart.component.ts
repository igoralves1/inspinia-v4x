import { Component } from '@angular/core';
import { UiCardComponent } from '@app/components/ui-card.component';
import { ApexchartComponent } from '@app/components/apexchart.component';
import { ApexOptions } from 'ng-apexcharts';
import { multiRadarChart } from '@/app/views/graphs/apex/radar/data';

@Component({
    selector: 'apex-updatable-radar-chart',
    standalone: true,
    imports: [UiCardComponent, ApexchartComponent],
    template: `
        <app-ui-card title="Radar – Multiple Series">
            <div card-body>
                <app-apexchart [getOptions]="getRadarOptions"/>
                <div class="text-center mt-3">
                    <button class="btn btn-sm btn-primary" (click)="updateSeries()">Update</button>
                </div>
            </div>
        </app-ui-card>
    `
})
export class UpdatableRadarChartComponent {
    series = [
        { name: 'Marketing', data: [85, 70, 65, 90, 60, 75] },
        { name: 'Sales', data: [60, 80, 75, 55, 95, 70] },
        { name: 'IT', data: [78, 65, 80, 40, 60, 85] }
    ];

    getRadarOptions: () => ApexOptions = () => {
        const base = multiRadarChart();
        return {
            ...base,
            chart: {
                ...(base.chart || {}),
                id: 'updatableRadarChart',
                type: 'radar'
            },
            series: this.series
        };
    };

    updateSeries() {
        const randomSeries = (): number[] =>
            Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));

        this.series = [
            { name: 'Marketing', data: randomSeries() },
            { name: 'Sales', data: randomSeries() },
            { name: 'IT', data: randomSeries() }
        ];

        ApexCharts.exec('updatableRadarChart', 'updateSeries', this.series);
    }
}
