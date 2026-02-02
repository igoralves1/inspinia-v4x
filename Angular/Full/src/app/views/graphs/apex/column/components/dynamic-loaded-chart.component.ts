import {Component, ElementRef, ViewChild} from '@angular/core';
import {ApexOptions} from 'ng-apexcharts';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'apex-dynamic-loaded-chart',
    imports: [
        ApexchartComponent,
        FormsModule
    ],
    template: `
        <div class="card">
            <div class="card-header justify-content-between border-dashed">
                <h4 class="card-title">Dynamic Loaded Chart</h4>
                <div class="flex-shrink-0">
                    <select id="model" (change)="updateQuarter()" class="form-select form-select-sm w-auto">
                        <option value="iphone5">iPhone 5</option>
                        <option value="iphone6">iPhone 6</option>
                        <option value="iphone7">iPhone 7</option>
                    </select>
                </div>
            </div>
            <div class="card-body pt-3">
                <div class="row">
                    <div class="col-sm-6">
                        <div #yearChartEl [class.active]="isQuarterChartActive">
                            <app-apexchart [getOptions]="yearColumnChart"/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div #quarterChartEl [class.active]="isQuarterChartActive" id="chart-quarter">
                            <app-apexchart [getOptions]="quaterChart"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class DynamicLoadedChartComponent {
    @ViewChild('yearChartEl') yearChartEl!: ElementRef;
    @ViewChild('quarterChartEl') quarterChartEl!: ElementRef;

    isQuarterChartActive = false;

    private ins(token: string): string {
        switch (token) {
            case 'primary':
                return '#727cf5';
            case 'secondary':
                return '#6c757d';
            case 'info':
                return '#39afd1';
            case 'danger':
                return '#fa5c7c';
            case 'warning':
                return '#ffbc00';
            case 'success':
                return '#0acf97';
            case 'border-color':
                return '#e0e0e0';
            default:
                return '#000000';
        }
    }

    arrayData = [
        {
            y: 400,
            quarters: [{x: 'Q1', y: 120}, {x: 'Q2', y: 90}, {x: 'Q3', y: 100}, {x: 'Q4', y: 90}],
            colorToken: 'primary'
        },
        {
            y: 430,
            quarters: [{x: 'Q1', y: 120}, {x: 'Q2', y: 110}, {x: 'Q3', y: 90}, {x: 'Q4', y: 110}],
            colorToken: 'secondary'
        },
        {
            y: 448,
            quarters: [{x: 'Q1', y: 70}, {x: 'Q2', y: 100}, {x: 'Q3', y: 140}, {x: 'Q4', y: 138}],
            colorToken: 'info'
        },
        {
            y: 470,
            quarters: [{x: 'Q1', y: 150}, {x: 'Q2', y: 60}, {x: 'Q3', y: 190}, {x: 'Q4', y: 70}],
            colorToken: 'danger'
        },
        {
            y: 540,
            quarters: [{x: 'Q1', y: 120}, {x: 'Q2', y: 120}, {x: 'Q3', y: 130}, {x: 'Q4', y: 170}],
            colorToken: 'warning'
        },
        {
            y: 580,
            quarters: [{x: 'Q1', y: 170}, {x: 'Q2', y: 130}, {x: 'Q3', y: 120}, {x: 'Q4', y: 160}],
            colorToken: 'success'
        },
    ];

    shuffleArray(array: any[]) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    makeData() {
        const dataSet = this.shuffleArray(this.arrayData);
        return dataSet.map((item, index) => ({
            x: ` ${2019 + index}`,
            y: item.y,
            colorToken: item.colorToken,
            quarters: item.quarters
        }));
    }

    updateQuarterChart(sourceChart: any) {
        let series: any[] = [];
        let seriesIndex = 0;
        let colors: string[] = [];

        const selectedPoints = sourceChart.w.globals.selectedDataPoints;
        if (selectedPoints[0] && selectedPoints[0].length > 0) {
            for (let i = 0; i < selectedPoints[seriesIndex].length; i++) {
                const selectedIndex = selectedPoints[seriesIndex][i];
                const yearSeries = sourceChart.w.config.series[seriesIndex];
                const selectedItem = yearSeries.data[selectedIndex];

                series.push({
                    name: selectedItem.x,
                    data: selectedItem.quarters,
                    color: this.ins(selectedItem.colorToken),
                });

                colors.push(this.ins(selectedItem.colorToken));
            }
        } else {
            series = [{data: []}];
            colors = [];
        }

        ApexCharts.exec('barQuarter', 'updateOptions', {
            series: series,
            colors: colors,
            fill: {colors: colors}
        });
    }

    yearColumnChart: () => ApexOptions = () => {
        const data = this.makeData();
        const resolvedColors = data.map(d => this.ins(d.colorToken)); // Resolve initial colors for the year chart

        return {
            series: [{data: data}],
            chart: {
                id: 'barYear',
                type: 'bar',
                height: 400,
                events: {
                    dataPointSelection: (e, chart, opts) => {
                        const points = opts.selectedDataPoints[0];
                        if (points.length === 1) {
                            this.isQuarterChartActive = true;
                            this.updateQuarterChart(chart);
                        } else if (points.length > 1) {
                            this.updateQuarterChart(chart);
                        } else {
                            this.isQuarterChartActive = false;
                            this.updateQuarterChart(chart);
                        }
                    },
                    updated: (chart) => {
                        if (chart.w.globals.selectedDataPoints[0] && chart.w.globals.selectedDataPoints[0].length > 0) {
                            this.updateQuarterChart(chart);
                            this.isQuarterChartActive = true;
                        } else {
                            this.isQuarterChartActive = false;
                        }
                    }
                }
            },
            plotOptions: {
                bar: {
                    distributed: true,
                    horizontal: true,
                    barHeight: '75%',
                    dataLabels: {position: 'bottom'}
                }
            },
            dataLabels: {
                enabled: true,
                style: {colors: ['#fff']},
                formatter: (val, opt) => opt.w.globals.labels[opt.dataPointIndex],
                offsetX: 10,
                dropShadow: {enabled: true}
            },
            colors: resolvedColors,
            states: {
                normal: {filter: {type: 'desaturate'}},
                active: {
                    allowMultipleDataPointsSelection: true,
                    filter: {type: 'darken', value: 1}
                }
            },
            tooltip: {
                x: {show: false},
                y: {
                    title: {
                        formatter: (val, opts) => opts.w.globals.labels[opts.dataPointIndex]
                    }
                }
            },
            title: {
                text: 'Yearly Results',
                offsetX: 5,
                style: {fontSize: '14px', fontWeight: 700}
            },
            subtitle: {
                text: '(Click on bar to see details)',
                offsetX: 5,
                style: {fontSize: '12px', fontWeight: 500}
            },
            xaxis: {axisBorder: {show: false}},
            yaxis: {labels: {show: false}},
            grid: {
                borderColor: this.ins('border-color'),
                padding: {top: -10, right: 0, bottom: -15, left: 0}
            }
        };
    };

    quaterChart: () => ApexOptions = () => ({
        series: [{data: []}],
        chart: {
            id: 'barQuarter',
            height: 400,
            type: 'bar',
            stacked: true
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
                horizontal: false
            }
        },
        colors: [],
        legend: {show: false},
        grid: {
            yaxis: {lines: {show: false}},
            xaxis: {lines: {show: true}}
        },
        xaxis: {axisBorder: {show: false}},
        yaxis: {labels: {show: false}},
        title: {
            text: 'Quarterly Results',
            offsetX: 10,
            style: {fontSize: '14px', fontWeight: 700}
        },
        tooltip: {
            x: {
                formatter: (val, opts) => opts.w.globals.seriesNames[opts.seriesIndex]
            },
            y: {
                title: {
                    formatter: (val, opts) => opts.w.globals.labels[opts.dataPointIndex]
                }
            }
        }
    });

    updateQuarter() {
        const updatedData = this.makeData();
        ApexCharts.exec('barYear', 'updateSeries', [{data: updatedData}]);
        ApexCharts.exec('barYear', 'toggleDataPointSelection', undefined);
        ApexCharts.exec('barQuarter', 'updateSeries', [{data: []}]);
        this.isQuarterChartActive = false;
    }
}
