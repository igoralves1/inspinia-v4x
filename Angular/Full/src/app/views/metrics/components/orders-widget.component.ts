import {Component} from '@angular/core';
import {CountUpModule} from 'ngx-countup';
import {getColor} from '@/app/utils/color-utils';
import {EChartsOption, TooltipComponentFormatterCallbackParams} from 'echarts';
import {EchartComponent} from '@app/components/echart.component';

@Component({
    selector: 'app-orders-widget',
    imports: [
        CountUpModule,
        EchartComponent,
    ],
    template: `
        <div class="card">
            <div class="card-body p-0">
                <div class="p-3">
                    <h3 class="mb-3 fw-bold"><span [countUp]="421">0</span><span
                        class="text-muted ms-1 fs-sm">Orders</span></h3>
                    <p class="mb-0">
                        You have received 421 new orders, indicating a healthy sales trend over the past
                        period.
                    </p>
                </div>
                <div  class="donut-chart mb-3">
                <app-echart [getOptions]="orderChartOptions"
                             height="120px"/>
                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class OrdersWidgetComponent {

    orderChartOptions = (): EChartsOption => ({
        legend: {show: false},
        tooltip: {
            borderColor: getColor('border-color'),
            textStyle: {
                color: getColor('light-text-emphasis')
            },
            trigger: 'axis',
            padding: [5, 0],
            backgroundColor: getColor('secondary-bg'),
            borderWidth: 1,
            transitionDuration: 0.125,
            axisPointer: {
                type: 'none'
            },
            shadowBlur: 2,
            shadowColor: 'rgba(76, 76, 92, 0.15)',
            shadowOffsetX: 0,
            shadowOffsetY: 1,
            formatter: (params: TooltipComponentFormatterCallbackParams) => {
                const items = Array.isArray(params) ? params : [params];
                const title = items[0].name;
                let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor('border-color')}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
                items.forEach(item => {
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
        grid: {
            left: '-6%',
            right: '2%',
            bottom: '2%',
            top: '0%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
            axisLine: {show: false},
            axisTick: {show: false}
        },
        yAxis: {
            show: false
        },
        series: [
            {
                name: 'Product A',
                type: 'bar',
                stack: 'total',
                barWidth: '40%',
                itemStyle: {
                    color: getColor('primary')
                },
                data: [120, 132, 101, 134, 98, 145, 160]
            },
            {
                name: 'Product B',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: getColor('secondary')
                },
                data: [220, 182, 191, 234, 210, 198, 176]
            },
            {
                name: 'Product C',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: '#bbcae14d'
                },
                data: [150, 232, 201, 154, 189, 165, 140]
            }
        ]
    })

}
