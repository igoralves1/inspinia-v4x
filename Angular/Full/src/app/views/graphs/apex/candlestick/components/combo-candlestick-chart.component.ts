import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { ApexchartComponent } from '@app/components/apexchart.component';
import { UiCardComponent } from '@app/components/ui-card.component';
import { getColor } from '@/app/utils/color-utils';
import { seriesData, seriesDataLinear } from '@/app/views/graphs/apex/candlestick/data';

@Component({
    selector: 'apex-combo-candlestick-chart',
    standalone: true,
    imports: [ApexchartComponent, UiCardComponent],
    template: `
        <app-ui-card title="Combo Candlestick Charts">
            <div card-body>
                <app-apexchart [getOptions]="comboCandlestickChart" />
                <app-apexchart [getOptions]="comboBarCandlestickChart" class="mt-4" />
            </div>
        </app-ui-card>
    `
})
export class ComboCandlestickChartComponent {
    comboCandlestickChart: () => ApexOptions = () => ({
        chart: {
            id: 'candlestickChart',
            height: 200,
            type: 'candlestick',
            toolbar: { show: false },
            zoom: { enabled: false }
        },
        series: [{
            name: 'Price',
            data: seriesData
        }],
        plotOptions: {
            candlestick: {
                colors: {
                    upward: getColor('success'),
                    downward: getColor('danger')
                }
            }
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        },
        grid: {
            borderColor: getColor('border-color'),
            padding: {
                top: -10,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    });

    comboBarCandlestickChart: () => ApexOptions = () => ({
        chart: {
            id: 'barSelectorChart',
            height: 150,
            type: 'bar',
            brush: {
                target: 'candlestickChart',
                enabled: true
            },
            selection: {
                enabled: true,
                xaxis: {
                    min: new Date('01 Jan 2017').getTime(),
                    max: new Date('31 Dec 2017').getTime()
                },
                fill: {
                    color: getColor('primary'),
                    opacity: 0.2
                },
                stroke: {
                    color: getColor('primary'),
                    width: 1,
                    dashArray: 3
                }
            },
            toolbar: { show: false }
        },
        series: [{
            name: 'Volume',
            data: seriesDataLinear
        }],
        xaxis: {
            type: 'datetime',
            axisBorder: { offsetX: 13 }
        },
        yaxis: {
            labels: { show: false }
        },
        grid: {
            borderColor: getColor('border-color')
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                columnWidth: '80%',
                colors: {
                    ranges: [
                        { from: -1000, to: 0, color: getColor('success') },
                        { from: 1, to: 10000, color: getColor('info') }
                    ]
                }
            }
        }
    });
}
