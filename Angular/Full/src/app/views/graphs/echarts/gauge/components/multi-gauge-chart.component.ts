import {Component, OnDestroy, OnInit} from '@angular/core';
import {EchartComponent} from '@app/components/echart.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {EChartsType} from 'echarts/core';
import {EChartsOption} from 'echarts';
import {getColor} from '@/app/utils/color-utils';

const gaugeData = [
    {
        value: 20,
        name: 'Good',
        title: {offsetCenter: ['-40%', '80%']},
        detail: {offsetCenter: ['-40%', '95%']}
    },
    {
        value: 40,
        name: 'Better',
        title: {offsetCenter: ['0%', '80%']},
        detail: {offsetCenter: ['0%', '95%']}
    },
    {
        value: 60,
        name: 'Perfect',
        title: {offsetCenter: ['40%', '80%']},
        detail: {offsetCenter: ['40%', '95%']}
    }
];

@Component({
    selector: 'echart-multi-gauge-chart',
    imports: [
        EchartComponent,
        UiCardComponent
    ],
    template: `
        <app-ui-card title="Multi Gauge Chart">
            <div card-body>
                <app-echart
                    [getOptions]="getOptions"
                    (chartInit)="onChartReady($event)"
                    height="300px"
                />
            </div>
        </app-ui-card>
    `
})
export class MultiGaugeChartComponent implements OnInit, OnDestroy {
    private chartInstance!: EChartsType;
    private intervalId!: ReturnType<typeof setInterval>;

    getOptions = (): EChartsOption => ({
        series: [{
            type: 'gauge',
            radius: '95%',
            anchor: {
                show: true,
                showAbove: true,
                size: 18,
                itemStyle: {color: '#FAC858'}
            },
            pointer: {
                icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                width: 8,
                length: '70%',
                offsetCenter: [0, '8%']
            },
            progress: {
                show: true,
                overlap: true,
                roundCap: true
            },
            axisLine: {
                roundCap: true,
                lineStyle: {color: [[1, getColor("light")]]}
            },
            axisLabel: {
                color: getColor("tertiary-color"),
                fontSize: 12
            },
            data: gaugeData,
            title: {
                fontSize: 14,
                color: getColor("body-color")
            },
            detail: {
                width: 30,
                height: 14,
                fontSize: 12,
                color: '#fff',
                backgroundColor: 'inherit',
                borderRadius: 3,
                formatter: '{value}%'
            }
        }],
        textStyle: {
            fontFamily: getComputedStyle(document.body).fontFamily
        }
    });

    onChartReady(chart: EChartsType): void {
        this.chartInstance = chart;
    }

    ngOnInit(): void {
        this.intervalId = setInterval(() => {
            gaugeData[0].value = +(Math.random() * 100).toFixed(2);
            gaugeData[1].value = +(Math.random() * 100).toFixed(2);
            gaugeData[2].value = +(Math.random() * 100).toFixed(2);

            if (this.chartInstance) {
                this.chartInstance.setOption({
                    series: [{
                        data: [...gaugeData]
                    }]
                });
            }
        }, 2000);
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }
}
