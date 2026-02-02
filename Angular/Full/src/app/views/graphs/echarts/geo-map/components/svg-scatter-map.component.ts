import {Component, OnDestroy, OnInit} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {EchartComponent} from '@app/components/echart.component';
import {EChartsOption} from 'echarts';
import {getColor} from '@/app/utils/color-utils';
import {EChartsType} from 'echarts/core';
import {echarts} from '@/app/config/echarts-config';

@Component({
    selector: 'echart-svg-scatter-map',
    imports: [
        UiCardComponent,
        EchartComponent
    ],
    template: `
        <app-ui-card title="GEO SVG Scatter">
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
export class SvgScatterMapComponent implements OnInit, OnDestroy {
    ready = false;
    private chart!: EChartsType;

    private readonly scatterData = [
        [488.2358, 459.7091, 100],
        [770.3416, 757.9672, 30],
        [1180.0329, 743.6141, 80],
        [894.0379, 1188.1985, 61],
        [1372.9892, 477.3840, 70],
        [1378.6225, 935.6708, 81]
    ];

    ngOnInit(): void {
        fetch('assets/images/svg/iceland.svg')
            .then(res => res.text())
            .then(svg => {
                echarts.registerMap('iceland', {svg});
                this.ready = true;
            });
    }

    ngOnDestroy(): void {
        this.chart?.dispose();
    }

    onChartReady(chart: EChartsType): void {
        this.chart = chart;

        chart.on('selectchanged', (params: any) => {
            if (!params.selected.length) {
                chart.dispatchAction({type: 'hideTip'});
                chart.dispatchAction({type: 'geoSelect', geoIndex: 0});
            } else {
                const idx = params.selected[0].dataIndex[0];
                const name = this.scatterData[idx][2];
                chart.dispatchAction({
                    type: 'geoSelect',
                    geoIndex: 0,
                    name: name
                });
                chart.dispatchAction({
                    type: 'showTip',
                    geoIndex: 0,
                    name: name
                });
            }
        });
    }

    getOptions = (): EChartsOption => {

        return {
            tooltip: {},
            geo: {
                map: 'iceland',
                layoutCenter: ['50%', '50%'],
                layoutSize: '125%',
                roam: true,
                tooltip: {
                    show: true,
                    backgroundColor: getColor('secondary-bg'),
                    borderColor: getColor('border-color'),
                    textStyle: {color: getColor('light-text-emphasis')}
                }
            },
            series: [{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                geoIndex: 0,
                symbolSize: (params: number[]) => (params[2] / 100) * 15 + 5,
                itemStyle: {
                    color: '#b02a02'
                },
                encode: {
                    tooltip: 2
                },
                data: this.scatterData
            }]
        };
    };
}
