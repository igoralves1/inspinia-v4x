import {Component, OnDestroy, OnInit} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {EchartComponent} from '@app/components/echart.component';
import {EChartsType} from 'echarts/core';
import {EChartsOption, registerMap} from 'echarts';
import {getColor} from '@/app/utils/color-utils';

@Component({
    selector: 'echart-morphing-map-bar',
    imports: [
        UiCardComponent,
        EchartComponent
    ],
    template: `
        <app-ui-card title="Morphing between Map and Bar Chart">
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
    `,
})
export class MorphingMapBarComponent implements OnInit, OnDestroy {
    private chartInstance!: EChartsType;
    private intervalId!: ReturnType<typeof setInterval>;
    ready = false;
    current: 'map' | 'bar' = 'map';

    data = [
        {name: 'Alabama', value: 4822023}, {name: 'Alaska', value: 731449},
        {name: 'Arizona', value: 6553255}, {name: 'Arkansas', value: 2949131},
        {name: 'California', value: 38041430}, {name: 'Colorado', value: 5187582},
        {name: 'Connecticut', value: 3590347}, {name: 'Delaware', value: 917092},
        {name: 'District of Columbia', value: 632323}, {name: 'Florida', value: 19317568},
        {name: 'Georgia', value: 9919945}, {name: 'Hawaii', value: 1392313},
        {name: 'Idaho', value: 1595728}, {name: 'Illinois', value: 12875255},
        {name: 'Indiana', value: 6537334}, {name: 'Iowa', value: 3074186},
        {name: 'Kansas', value: 2885905}, {name: 'Kentucky', value: 4380415},
        {name: 'Louisiana', value: 4601893}, {name: 'Maine', value: 1329192},
        {name: 'Maryland', value: 5884563}, {name: 'Massachusetts', value: 6646144},
        {name: 'Michigan', value: 9883360}, {name: 'Minnesota', value: 5379139},
        {name: 'Mississippi', value: 2984926}, {name: 'Missouri', value: 6021988},
        {name: 'Montana', value: 1005141}, {name: 'Nebraska', value: 1855525},
        {name: 'Nevada', value: 2758931}, {name: 'New Hampshire', value: 1320718},
        {name: 'New Jersey', value: 8864590}, {name: 'New Mexico', value: 2085538},
        {name: 'New York', value: 19570261}, {name: 'North Carolina', value: 9752073},
        {name: 'North Dakota', value: 699628}, {name: 'Ohio', value: 11544225},
        {name: 'Oklahoma', value: 3814820}, {name: 'Oregon', value: 3899353},
        {name: 'Pennsylvania', value: 12763536}, {name: 'Rhode Island', value: 1050292},
        {name: 'South Carolina', value: 4723723}, {name: 'South Dakota', value: 833354},
        {name: 'Tennessee', value: 6456243}, {name: 'Texas', value: 26059203},
        {name: 'Utah', value: 2855287}, {name: 'Vermont', value: 626011},
        {name: 'Virginia', value: 8185867}, {name: 'Washington', value: 6897012},
        {name: 'West Virginia', value: 1855413}, {name: 'Wisconsin', value: 5726398},
        {name: 'Wyoming', value: 576412}, {name: 'Puerto Rico', value: 3667084}
    ];

    ngOnInit(): void {
        this.data.sort((a, b) => a.value - b.value);

        fetch('assets/data/usa_geo.json')
            .then(res => res.json())
            .then(usaGeo => {
                registerMap('USA', usaGeo, {
                    Alaska: {left: -131, top: 25, width: 15},
                    Hawaii: {left: -112, top: 25, width: 5},
                    'Puerto Rico': {left: -76, top: 26, width: 2}
                });
                this.ready = true;

                this.intervalId = setInterval(() => {
                    this.current = this.current === 'map' ? 'bar' : 'map';
                    this.chartInstance?.setOption(this.getOptions(), true);
                }, 3000);
            });
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
        this.chartInstance?.dispose();
    }

    onChartReady(chart: EChartsType): void {
        this.chartInstance = chart;
    }

    getOptions = (): EChartsOption => {
        const colorRamp = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'];

        return this.current === 'map'
            ? {
                tooltip: {
                    trigger: 'item',
                    padding: [7, 10],
                    backgroundColor: getColor("secondary-bg"),
                    borderColor: getColor("border-color"),
                    textStyle: {color: getColor("light-text-emphasis")},
                    borderWidth: 1,
                    transitionDuration: 0,
                    formatter: ((p: any) =>
                        p.value != null ? `<strong>${p.name}</strong><br/>Population: ${p.value.toLocaleString()}` : `<strong>${p.name}</strong><br/>No data`) as echarts.TooltipComponentOption['formatter']
                },
                visualMap: {
                    left: 'right',
                    min: 500000,
                    max: 38000000,
                    inRange: {color: colorRamp},
                    text: ['High', 'Low'],
                    calculable: true,
                    textStyle: {color: getColor('light-text-emphasis')}
                },
                series: [{
                    id: 'population',
                    type: 'map',
                    roam: true,
                    map: 'USA',
                    animationDurationUpdate: 1000,
                    universalTransition: true,
                    data: this.data,
                    label: {show: false},
                    emphasis: {label: {show: false}}
                }]
            }
            : {
                tooltip: {
                    trigger: 'axis',
                    padding: [5, 0],
                    backgroundColor: getColor("secondary-bg"),
                    borderColor: getColor("border-color"),
                    textStyle: {color: getColor("light-text-emphasis")},
                    borderWidth: 1,
                    transitionDuration: 0.125,
                    axisPointer: {type: 'none'},
                    shadowBlur: 2,
                    shadowColor: 'rgba(76, 76, 92, 0.15)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 1,
                    formatter: ((params: any[]) => {
                        const title = params[0].name;
                        let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor("border-color")}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
                        params.forEach(item => {
                            content += `<div style="margin-top: 4px; padding: 3px 15px;">
                                <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                                <strong>${item.value.toLocaleString()}</strong>
                            </div>`;
                        });
                        return content;
                    }) as echarts.TooltipComponentOption['formatter']
                },
                xAxis: {
                    type: 'value',
                    axisLabel: {color: getColor('body-color'), margin: 15},
                    splitLine: {show: true, lineStyle: {color: getColor('light')}}
                },
                yAxis: {
                    type: 'category',
                    axisLabel: {rotate: 30, color: getColor('body-color'), margin: 15},
                    data: this.data.map(d => d.name)
                },
                grid: {right: '5%', left: '13%', bottom: '10%', top: '5%'},
                animationDurationUpdate: 1000,
                series: [{
                    id: 'population',
                    type: 'bar',
                    data: this.data.map(d => d.value),
                    universalTransition: true
                }]
            };
    };
}
