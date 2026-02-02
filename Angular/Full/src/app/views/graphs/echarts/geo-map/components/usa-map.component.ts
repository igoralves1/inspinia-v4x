import {Component, OnDestroy, OnInit} from '@angular/core';
import {EChartsType} from 'echarts/core';
import {EChartsOption, registerMap} from 'echarts';
import {UiCardComponent} from '@app/components/ui-card.component';
import {EchartComponent} from '@app/components/echart.component';
import {getColor} from '@/app/utils/color-utils';

@Component({
    selector: 'echart-usa-map',
    imports: [
        UiCardComponent,
        EchartComponent
    ],
    template: `
        <app-ui-card title="USA Map">
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
export class UsaMapComponent implements OnInit, OnDestroy {
    private chartInstance!: EChartsType;
    ready = false;

    getOptions = (): EChartsOption => ({
        tooltip: {
            trigger: 'item',
            padding: [7, 10],
            backgroundColor: getColor("secondary-bg"),
            borderColor: getColor("border-color"),
            textStyle: {color: getColor("light-text-emphasis")},
            borderWidth: 1,
            transitionDuration: 0,
            formatter: '{b}'
        },
        geo: {
            map: 'USA',
            roam: true,
            zoom: 1.2,
            center: [-98, 37],
            scaleLimit: {min: 1, max: 5},
            itemStyle: {
                borderColor: getColor("border-color"),
                areaColor: getColor("info")
            },
            label: {color: '#fff'},
            emphasis: {
                label: {show: true, color: '#fff'},
                itemStyle: {areaColor: getColor("warning")}
            }
        },
        series: [{
            name: 'USA Map',
            type: 'map',
            map: 'USA',
            geoIndex: 0,
            roam: true,
            zoom: 1.2,
            scaleLimit: {min: 1, max: 5}
        }]
    });

    ngOnInit(): void {
        fetch('assets/data/usa_geo.json')
            .then(res => res.json())
            .then(geoJson => {
                registerMap('USA', geoJson, {
                    Alaska: {left: -131, top: 25, width: 15},
                    Hawaii: {left: -112, top: 25, width: 5},
                    'Puerto Rico': {left: -76, top: 26, width: 2}
                });
                this.ready = true;
            })
            .catch(console.error);
    }

    onChartReady(chart: EChartsType): void {
        this.chartInstance = chart;

        chart.getDom().addEventListener('click', () => {
            chart.dispatchAction({type: 'restore'});
        });
    }

    ngOnDestroy(): void {
        this.chartInstance?.dispose();
    }
}
