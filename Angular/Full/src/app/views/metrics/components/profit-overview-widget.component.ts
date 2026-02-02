import {Component} from '@angular/core';
import {currency} from '@/app/constants';
import {CountUpModule} from 'ngx-countup';
import {EchartComponent} from '@app/components/echart.component';
import {EChartsOption} from 'echarts';
import {getColor} from '@/app/utils/color-utils';

@Component({
    selector: 'app-profit-overview-widget',
    imports: [
        CountUpModule,
        EchartComponent
    ],
    template: `
        <div class="card">
            <div class="card-body">
                <h3 class="mb-3 fw-bold">{{ currency }}<span [countUp]="12.50" [options]="{decimalPlaces:2}">0</span>k<span
                    class="text-muted ms-1 fs-sm">Profit</span></h3>
                <p class="mb-3">
                    Your total profit reached $12,500 this month, showing stable and positive business
                    growth.
                </p>
                <app-echart [getOptions]="profitChartOptions"
                            height="120px"/>
            </div>
        </div>
    `,
    styles: ``
})
export class ProfitOverviewWidgetComponent {
    protected readonly currency = currency;

    profitChartOptions = (): EChartsOption => ({
        tooltip: {
            trigger: "axis",
            padding: [5, 0],
            backgroundColor: getColor("secondary-bg"),
            borderColor: getColor("border-color"),
            textStyle: {color: getColor("light-text-emphasis")},
            borderWidth: 1,
            transitionDuration: 0.125,
            axisPointer: {type: "none"},
            shadowBlur: 2,
            shadowColor: "rgba(76, 76, 92, 0.15)",
            shadowOffsetX: 0,
            shadowOffsetY: 1,
            formatter: function (params: any) {
                const title = params[0]?.name || '';
                let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor('border-color')}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
                params.forEach((item: any) => {
                    content += `<div style="margin-top: 4px; padding: 3px 15px;">
                  <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                  ${item.seriesName} : <strong>${item.value}</strong>
                </div>`;
                });
                return content;
            }
        },
        textStyle: {
            fontFamily: getComputedStyle(document.body).fontFamily
        },
        legend: {show: false},
        grid: {left: 0, right: 0, top: 10, bottom: 0, containLabel: false},
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: Array.from({length: 17}, (_, i) => `Day ${i + 1}`),
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {show: false}
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [
            {
                name: 'Data',
                type: 'line',
                data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6],
                smooth: true,
                lineStyle: {
                    color: getColor("primary"),
                    width: 2
                },
                symbol: 'none'
            }
        ]
    })
}
