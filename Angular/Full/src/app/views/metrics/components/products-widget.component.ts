import {Component} from '@angular/core';
import {CountUpModule} from 'ngx-countup';
import {EchartComponent} from '@app/components/echart.component';
import {EChartsOption, TooltipComponentFormatterCallbackParams} from 'echarts';
import {getColor} from '@/app/utils/color-utils';

@Component({
    selector: 'app-products-widget',
    imports: [
        CountUpModule,
        EchartComponent
    ],
    template: `
        <div class="card text-bg-secondary border-0">
            <div class="card-body p-0">
                <div class="p-3 mb-3">
                    <h3 class="mb-3 fw-bold"><span [countUp]="185">0</span><span
                        class="text-white-50 ms-1 fs-sm">Products</span></h3>
                    <p class="mb-0 text-white-50">
                        You currently have 185 active products available across your store inventory.
                    </p>
                </div>
                    <app-echart [getOptions]="productsChartOptions"
                                height="120px"/>
            </div>
        </div>
    `,
    styles: ``
})
export class ProductsWidgetComponent {
    productsChartOptions = (): EChartsOption => ({
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
            formatter: (params: TooltipComponentFormatterCallbackParams) => {
                const items = Array.isArray(params) ? params : [params];
                const title = items[0]?.name ?? '';
                let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor('border-color')}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;

                for (const item of items) {
                    content += `<div style="margin-top: 4px; padding: 3px 15px;">
          <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
          ${item.seriesName} : <strong>${item.value}</strong>
        </div>`;
                }

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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                name: 'Data 1',
                type: 'line',
                data: [120, 132, 101, 134, 90, 230, 210],
                smooth: true,
                areaStyle: {color: getColor("white-rgb", 0.5)},
                lineStyle: {width: 0},
                symbol: 'none'
            },
            {
                name: 'Data 2',
                type: 'line',
                data: [220, 182, 191, 234, 290, 330, 310],
                smooth: true,
                areaStyle: {color: getColor("white-rgb", 0.5)},
                lineStyle: {width: 0},
                symbol: 'none'
            }
        ]
    })
}
