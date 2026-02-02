import {Component, OnDestroy, OnInit} from '@angular/core';
import {EchartComponent} from '@app/components/echart.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {EChartsType} from 'echarts/core';
import {EChartsOption} from 'echarts';
import {getColor} from '@/app/utils/color-utils';
import {data, randomData} from '@/app/views/graphs/echarts/line/data';

@Component({
    selector: 'echart-dynamic-area-chart',
    imports: [
        EchartComponent,
        UiCardComponent
    ],
    template: `
        <app-ui-card title="Dynamic Area">
            <div card-body>
                <app-echart
                    [getOptions]="getOptions"
                    (chartInit)="onChartReady($event)"
                    height="300px"
                />
            </div>
        </app-ui-card>`,
})
export class DynamicAreaChartComponent implements OnInit, OnDestroy {
    private chartInstance!: EChartsType;
    private intervalId!: ReturnType<typeof setInterval>;

    getOptions = (): EChartsOption => ({
        color: [getColor('purple')],
        tooltip: {
            trigger: 'axis',
            formatter: function (params: any) {
                params = params[0];
                const date = new Date(params.name);
                const day = date.getDate();
                const month = date.toLocaleString('default', {month: 'long'});
                const year = date.getFullYear();
                return `${day} ${month}, ${year} : ${params.value[1]}`;
            },
            axisPointer: {
                animation: false, type: "none"
            },
            padding: [12, 16],
            backgroundColor: getColor("secondary-bg"),
            borderColor: getColor("border-color"),
            textStyle: {color: getColor("light-text-emphasis")},
            borderWidth: 1,
            transitionDuration: 0.125,
            shadowBlur: 2,
            shadowColor: "rgba(76, 76, 92, 0.15)",
            shadowOffsetX: 0,
            shadowOffsetY: 1
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {color: getColor("tertiary-bg"), type: "solid"}
            },
            axisLabel: {
                color: getColor("body-color"), margin: 15
            },
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            axisLabel: {
                show: true, color: getColor("body-color"), margin: 15
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(133, 141, 152, 0.1)"
                }
            }
        },
        grid: {
            right: "5%", left: "7%", bottom: "10%", top: "5%"
        },
        series: [{
            name: 'Fake Data',
            type: 'line',
            showSymbol: false,
            data: [...data],
            areaStyle: {
                opacity: 0.2, // Adjust opacity as needed
            },
            lineStyle: {width: 3}
        }]
    });

    onChartReady(chart: EChartsType): void {
        this.chartInstance = chart;
    }

    ngOnInit(): void {
        this.intervalId = setInterval(() => {
            for (let i = 0; i < 5; i++) {
                data.shift();
                data.push(randomData());
            }

            if (this.chartInstance) {
                this.chartInstance.setOption({
                    series: [{
                        data: [...data]
                    }]
                });
            }
        }, 1000);
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }
}
