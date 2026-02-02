import {Component, OnInit} from '@angular/core';
import {EchartComponent} from '@app/components/echart.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {echarts} from '@/app/config/echarts-config';
import {EChartsOption, PieSeriesOption, registerMap} from 'echarts';
import {EChartsType} from 'echarts/core';
import {getColor} from '@/app/utils/color-utils';

@Component({
    selector: 'echart-pie-chart-with-map',
    imports: [
        EchartComponent,
        UiCardComponent
    ],
    template: `
        <app-ui-card title="Pie Chart on Geo Map">
            <div card-body>
                @if (ready) {
                    <app-echart
                        [getOptions]="getOptions"
                        (chartInit)="onChartReady($event)"
                        height="400px"
                    />
                }
            </div>
        </app-ui-card>
    `
})
export class PieChartWithMapComponent implements OnInit {
    ready = false;
    private chart!: EChartsType;

    ngOnInit(): void {
        fetch('assets/data/usa_geo.json')
            .then(res => res.json())
            .then(usaGeoJson => {
                registerMap('USA', usaGeoJson, {
                    Alaska: {left: -131, top: 25, width: 15},
                    Hawaii: {left: -112, top: 25, width: 5},
                    'Puerto Rico': {left: -76, top: 26, width: 2}
                });
                this.ready = true;
            });
    }

    onChartReady(chart: EChartsType): void {
        this.chart = chart;
    }

    getOptions = (): EChartsOption => {

        const randomPieSeries = (center: any, radius: number): PieSeriesOption => {
            const data = ['A', 'B', 'C', 'D'].map(t => ({
                value: Math.round(Math.random() * 100),
                name: 'Category ' + t
            }));
            return {
                type: 'pie',
                coordinateSystem: 'geo',
                tooltip: {
                    formatter: '{b}: {c} ({d}%)',
                    backgroundColor: getColor('secondary-bg'),
                    borderColor: getColor('border-color'),
                    textStyle: {color: getColor('light-text-emphasis')}
                },
                label: {show: false},
                labelLine: {show: false},
                animationDuration: 0,
                radius,
                center,
                data
            };
        };

        const version = +echarts.version.split('.').slice(0, 3).join('');
        const centerMaine = version > 540 ? 'Maine' : [-69, 45.5];

        return {
            geo: {
                map: 'USA',
                roam: true,
                itemStyle: {
                    borderColor: getColor('border-color'),
                    areaColor: getColor('secondary')
                },
                label: {color: '#fff'},
                emphasis: {
                    label: {show: true, color: '#fff'},
                    itemStyle: {areaColor: getColor('warning')}
                }
            },
            tooltip: {
                backgroundColor: getColor('secondary-bg'),
                borderColor: getColor('border-color'),
                textStyle: {color: getColor('light-text-emphasis')}
            },
            legend: {
                textStyle: {color: '#858d98'}
            },
            series: [
                randomPieSeries([-86.753504, 33.01077], 15),
                randomPieSeries([-116.853504, 39.8], 25),
                randomPieSeries([-99, 31.5], 30),
                randomPieSeries(centerMaine, 12)
            ] as PieSeriesOption[]
        };
    };
}
