import {Component, OnDestroy, OnInit} from '@angular/core';
import {EchartComponent} from '@app/components/echart.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {EChartsType} from 'echarts/core';
import {EChartsOption} from 'echarts';
import {getColor} from '@/app/utils/color-utils';

const data: number[] = [];
for (let i = 0; i < 6; ++i) {
    data.push(Math.round(Math.random() * 200));
}

const categories = ["A", "B", "C", "D", "E", "F"];

@Component({
    selector: 'echart-bar-race-chart',
    imports: [
        EchartComponent,
        UiCardComponent
    ],
    template: `
        <app-ui-card title="Bar Race Chart">
            <div card-body>
                <app-echart
                    [getOptions]="getOptions"
                    (chartInit)="onChartReady($event)"
                    height="300px"
                />
            </div>
        </app-ui-card>
    `,
})
export class BarRaceChartComponent implements OnInit, OnDestroy {
    private chartInstance!: EChartsType;
    private intervalId!: ReturnType<typeof setInterval>;

    getOptions = (): EChartsOption => ({
        grid: {right: '10%', left: 5, bottom: 5, top: 5, containLabel: true},
        xAxis: {
            max: 'dataMax',
            axisLine: {lineStyle: {type: 'dashed', color: getColor('light')}},
            axisLabel: {show: true, color: getColor('body-color')},
            splitLine: {lineStyle: {color: "rgba(133, 141, 152, 0.1)", type: 'dashed'}}
        },
        yAxis: {
            type: 'category',
            data: categories,
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 3,
            axisLine: {lineStyle: {type: 'dashed', color: getColor('light')}},
            axisLabel: {show: true, color: getColor('body-color')},
            splitLine: {lineStyle: {color: "rgba(133, 141, 152, 0.1)", type: 'dashed'}}
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        series: [{
            type: 'bar',
            name: 'X',
            realtimeSort: true,
            data: [...data],
            label: {
                show: true,
                position: 'right',
                color: getColor("body-color"),
                fontWeight: 500,
                valueAnimation: true
            },
            itemStyle: {
                color: getColor("secondary"),
            }
        }]
    });

    onChartReady(chart: EChartsType): void {
        this.chartInstance = chart;
    }

    ngOnInit(): void {
        setTimeout(() => this.run(), 0);
        this.intervalId = setInterval(() => this.run(), 3000);
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }

    run(): void {
        for (let i = 0; i < data.length; ++i) {
            data[i] += Math.round(Math.random() * (Math.random() > 0.9 ? 2000 : 200));
        }

        if (this.chartInstance) {
            this.chartInstance.setOption({
                series: [{
                    type: 'bar',
                    data: [...data]
                }]
            });
        }
    }
}
