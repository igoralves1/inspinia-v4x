import {Component} from '@angular/core';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';
import {ApexOptions, NgApexchartsModule} from 'ng-apexcharts';

@Component({
    selector: 'app-post-and-orders',
    imports: [NgbNavModule, NgIcon, NgApexchartsModule],
    template: `
        <div class="border-bottom">
            <ul ngbNav #nav="ngbNav" [(activeId)]="active"
                class="nav nav-tabs nav-justified nav-bordered nav-bordered-secondary mb-0">
                <li [ngbNavItem]="1">
                    <a href="javascript:void(0);" ngbNavLink>
                        <p class="d-inline-flex m-0 align-items-center gap-1">
                            <ng-icon name="tablerCards" class="fs-xl me-md-1"/>
                            <span class="d-none d-md-inline-block">Posts</span>
                        </p>
                    </a>
                    <ng-template ngbNavContent>
                        <h4 class="mb-2">260<span class="text-muted ms-1 fs-sm">Posts</span></h4>
                        <p class="fs-xs mb-0">
                            You have published 260 posts this month, showing strong content activity across
                            all
                            categories.
                        </p>

                        <div class="card-body">
                            <apx-chart [series]="postsChartOptions.series!" [chart]="postsChartOptions.chart!"
                                       [xaxis]="postsChartOptions.xaxis!" [dataLabels]="postsChartOptions.dataLabels!"
                                       [stroke]="postsChartOptions.stroke!" [fill]="postsChartOptions.fill!"
                                       [yaxis]="postsChartOptions.yaxis!" [colors]="postsChartOptions.colors!"
                                       [tooltip]="postsChartOptions.tooltip!"/>
                        </div>
                    </ng-template>
                </li>
                <li [ngbNavItem]="2">
                    <a href="javascript:void(0);" ngbNavLink>
                        <p class="d-inline-flex m-0 align-items-center gap-1">
                            <ng-icon name="tablerTruckDelivery" class="fs-xl me-md-1"/>
                            <span class="d-none d-md-inline-block">Orders</span>
                        </p>
                    </a>
                    <ng-template ngbNavContent>
                        <h4 class="mb-2">421<span class="text-muted ms-1 fs-sm">Orders</span></h4>
                        <p class="fs-xs mb-0">
                            A total of 421 orders have been placed, reflecting consistent demand for your
                            products.
                        </p>
                        <div class="card-body">
                            <apx-chart [series]="ordersChartOptions.series!" [chart]="ordersChartOptions.chart!"
                                       [plotOptions]="ordersChartOptions.plotOptions!"
                                       [stroke]="ordersChartOptions.stroke!" [states]="ordersChartOptions.states!"
                                       [colors]="ordersChartOptions.colors!"
                                       [tooltip]="ordersChartOptions.tooltip!"/>
                        </div>
                    </ng-template>
                </li>
            </ul>
            <div class="p-3">
                <div class="tab-content" [ngbNavOutlet]="nav">

                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class PostAndOrdersComponent {
    active = 2;

    postsChartOptions: Partial<ApexOptions> = {
        chart: {
            type: 'area',
            height: 60,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth',
            width: 1.5
        },
        fill: {
            opacity: 1,
            gradient: {
                shade: '#1ab394',
                type: "horizontal",
                shadeIntensity: 0.5,
                inverseColors: true,
                opacityFrom: 0.1,
                opacityTo: 0.2,
                stops: [0, 80, 100],
                colorStops: []
            },
        },
        series: [{
            data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
        }],
        yaxis: {
            min: 0
        },
        colors: ['#1ab394'],
        tooltip: {
            enabled: false,
        }
    }

    ordersChartOptions: Partial<ApexOptions> = {
        series: [{
            type: 'column',
            data: [[0, 2], [1, 3], [2, 4], [3, 8], [4, 5], [5, 12], [6, 17], [7, 19], [8, 6], [9, 9], [10, 14], [11, 17], [12, 12], [13, 6], [14, 4]]
        }, {
            type: 'column',
            data: [[0, 9], [1, 7], [2, 4], [3, 8], [4, 4], [5, 12], [6, 4], [7, 6], [8, 5], [9, 10], [10, 4], [11, 5], [12, 10], [13, 2], [14, 6]]
        }],
        chart: {
            type: 'bar',
            height: 60,
            width: 205,
            parentHeightOffset: 0,
            stacked: true,
            sparkline: {
                enabled: true
            }
        },
        states: {
            hover: {
                filter: {
                    type: 'none'
                }
            },
            active: {
                filter: {
                    type: 'none'
                }
            }
        },
        colors: ['#1ab394', '#e5e9f2'],
        plotOptions: {
            bar: {
                columnWidth: '60%'
            },
        },
        stroke: {
            curve: 'straight',
            lineCap: 'square'
        },
        tooltip: {
            enabled: false,
            onDatasetHover: {
                highlightDataSeries: false,
            },
            x: {
                show: false,
            },
        }
    }
}
