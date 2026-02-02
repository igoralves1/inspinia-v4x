import {Component} from '@angular/core';
import {StatisticWidgetType} from '@/app/types';
import {
    SellerStatisticWidgetComponent
} from '@/app/views/ecommerce/sellers/seller-details/components/seller-statistic-widget.component';
import {ApexOptions} from 'ng-apexcharts';
import {ApexchartComponent} from '@app/components/apexchart.component';

@Component({
    selector: 'app-seller-overview',
    imports: [
        SellerStatisticWidgetComponent,
        ApexchartComponent
    ],
    template: `
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Seller Overview</h4>
            </div>

            <div class="card-body">
                <div class="row row-cols-xxl-4 row-cols-md-2 row-cols-1 align-items-center">
                    @for (item of sellerStats; track $index) {
                        <div class="col">
                            <app-seller-statistic-widget [item]="item"/>
                        </div>
                    }
                </div>

                <app-apexchart
                    [getOptions]="apexChartOptions"
                />

            </div>
        </div>
    `,
    styles: ``
})
export class SellerOverviewComponent {
    sellerStats: StatisticWidgetType[] = [
        {
            title: 'Orders',
            subTitle: 'Total Orders',
            icon: 'tablerShoppingCart',
            variant: 'success',
            count: {value: 1250},
            totalCount: {value: 15320}
        },
        {
            title: 'Revenue',
            subTitle: 'Total Revenue',
            icon: 'tablerCurrencyDollar',
            variant: 'warning',
            count: {prefix: '$', value: 98.7, suffix: 'k'},
            totalCount: {prefix: '$', value: 1.2, suffix: 'M'}
        },
        {
            title: 'Ratings',
            subTitle: 'Average Rating',
            icon: 'tablerStar',
            variant: 'info',
            count: {value: 4.8},
            totalCount: {value: 5, suffix: 'k Reviews'}
        },
        {
            title: 'Products',
            subTitle: 'Total Products',
            icon: 'tablerBox',
            variant: 'secondary',
            count: {value: 350},
            totalCount: {value: 750, suffix: ' Variants'}
        }
    ];

    generateRandomData(count: number = 15, min: number = 5, max: number = 20): number[] {
        return Array.from({length: count}, () =>
            Math.floor(Math.random() * (max - min + 1)) + min
        );
    }

    chartOptions!: Partial<ApexOptions>;
    apexChartOptions:() => ApexOptions = () => ({
        series: [
            {
                name: "Orders",
                type: "area",
                data: this.generateRandomData(12, 40, 100),
            },
            {
                name: "Earnings",
                type: "bar",
                data: this.generateRandomData(12, 70, 150).map(x => parseFloat((x * 1.1).toFixed(2))),
            },
            {
                name: "Refunds",
                type: "line",
                data: this.generateRandomData(12, 3, 12),
            },
        ],
        chart: {
            height: 370,
            type: "line",
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: "straight",
            dashArray: [0, 0, 8],
            width: [2, 0, 2.2],
        },
        fill: {
            opacity: [0.1, 0.9, 1]
        },
        markers: {
            size: [0, 0, 0],
            strokeWidth: 2,
            hover: {
                size: 4,
            },
        },
        xaxis: {
            categories: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            ],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 10,
                left: 0,
            },
        },
        legend: {
            show: true,
            horizontalAlign: "center",
            offsetX: 0,
            offsetY: 5,
            itemMargin: {
                horizontal: 10,
                vertical: 0,
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "30%",
                barHeight: "70%",
                borderRadius: 5
            },
        },
        colors: ['#1ab394', "#308fcb", "#f9b367"],
        tooltip: {
            shared: true,
            y: [
                {
                    formatter: (y: number): string => `${y.toFixed(0)} Sales`
                },
                {
                    formatter: (y: number): string => `$${y.toFixed(2)}k`
                },
                {
                    formatter: (y: number): string => `${y.toFixed(0)} Sales`
                }
            ]
        },
    })
}
