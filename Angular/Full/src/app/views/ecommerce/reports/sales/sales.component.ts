import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {LucideAngularModule, LucideCalendar, LucideSearch} from 'lucide-angular';
import {NgIcon} from '@ng-icons/core';
import {ApexOptions, NgApexchartsModule} from 'ng-apexcharts';
import {getColor} from '@/app/utils/color-utils';
import {Observable} from 'rxjs';
import {TableService} from '@core/services/table.service';
import {currency} from '@/app/constants';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';
import {FlatpickrDirective, provideFlatpickrDefaults} from 'angularx-flatpickr';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {AsyncPipe} from '@angular/common';

type RevenueRecordType = {
    id: number;
    orders: number;
    refunds: number;
    date: string;
    averageRevenue: number;
    tax: number;
    revenue: number;
    balance: number;
    selected?: boolean
}

@Component({
    selector: 'app-sales',
    imports: [
        PageTitleComponent,
        LucideAngularModule,
        NgIcon,
        NgApexchartsModule,
        NgbPaginationModule,
        FormsModule,
        NgbdSortableHeader,
        FlatpickrDirective,
        ApexchartComponent,
        AsyncPipe
    ],
    templateUrl: './sales.component.html',
    providers: [provideFlatpickrDefaults(),TableService],
    styles: ``
})
export class SalesComponent implements OnInit {
    dateRange: Date[] = this.getCurrentMonthRange();
    protected readonly LucideSearch = LucideSearch;
    protected readonly LucideCalendar = LucideCalendar;

    revenueData$: Observable<RevenueRecordType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<RevenueRecordType>) {
        this.revenueData$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }

    ngOnInit(): void {
        this.tableService.setItems(this.revenueData, 8)
    }

    selectAll = false;

    toggleAllSelection() {
        this.tableService.setAllSelection(this.selectAll);
    }

    toggleSingleSelection() {
        this.tableService.items$.subscribe(items => {
            this.selectAll = items.every((item: any) => item.selected);
        }).unsubscribe();
    }

    revenueData: RevenueRecordType[] = [
        {
            id: 1,
            date: '10 July, 2025',
            orders: 68,
            refunds: 4,
            averageRevenue: 18.60,
            tax: 25.78,
            revenue: 612.70,
            balance: 6625.46
        },
        {
            id: 2,
            date: '09 July, 2025',
            orders: 85,
            refunds: 1,
            averageRevenue: 22.10,
            tax: 31.85,
            revenue: 786.35,
            balance: 6012.76
        },
        {
            id: 3,
            date: '08 July, 2025',
            orders: 61,
            refunds: 3,
            averageRevenue: 17.40,
            tax: 23.67,
            revenue: 531.10,
            balance: 5226.41
        },
        {
            id: 4,
            date: '07 July, 2025',
            orders: 79,
            refunds: 2,
            averageRevenue: 20.65,
            tax: 29.45,
            revenue: 726.80,
            balance: 4695.31
        },
        {
            id: 5,
            date: '06 July, 2025',
            orders: 53,
            refunds: 6,
            averageRevenue: 15.10,
            tax: 20.89,
            revenue: 400.55,
            balance: 3968.51
        },
        {
            id: 6,
            date: '05 July, 2025',
            orders: 91,
            refunds: 4,
            averageRevenue: 22.50,
            tax: 32.90,
            revenue: 851.30,
            balance: 3567.96
        },
        {
            id: 7,
            date: '04 July, 2025',
            orders: 47,
            refunds: 5,
            averageRevenue: 16.25,
            tax: 22.05,
            revenue: 382.47,
            balance: 2716.66
        },
        {
            id: 8,
            date: '03 July, 2025',
            orders: 82,
            refunds: 1,
            averageRevenue: 21.03,
            tax: 31.11,
            revenue: 792.65,
            balance: 2334.19
        },
        {
            id: 9,
            date: '02 July, 2025',
            orders: 65,
            refunds: 3,
            averageRevenue: 17.92,
            tax: 24.15,
            revenue: 583.42,
            balance: 1541.54
        },
        {
            id: 10,
            date: '01 July, 2025',
            orders: 73,
            refunds: 2,
            averageRevenue: 19.85,
            tax: 27.34,
            revenue: 660.12,
            balance: 958.12
        }
    ]

    salesChartOptions: () => ApexOptions = () => ({
        chart: {
            height: 400,
            type: 'line',
            stacked: false,
            toolbar: {show: false}
        },
        stroke: {
            width: [0, 0, 2, 2, 2],
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                columnWidth: '40%'
            }
        },
        colors: [getColor('primary'), getColor('danger'), getColor('secondary'), "#bbcae14d"],
        series: [
            {
                name: 'Orders',
                type: 'bar',
                data: [320, 402, 391, 334, 390, 330]
            },
            {
                name: 'Refunds',
                type: 'bar',
                data: [20, 30, 28, 22, 35, 25]
            },
            {
                name: 'Avg. Revenue/Order',
                type: 'line',
                data: [15.5, 16.2, 15.8, 16.0, 15.9, 16.3]
            },
            {
                name: 'Revenue',
                type: 'area',
                data: [4960, 6512, 6182, 5344, 6201, 5379]
            },
            {
                name: 'Tax',
                type: 'bar',
                data: [496, 651, 618, 534, 620, 537]
            }
        ],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        yaxis: [
            {
                title: {
                    text: 'Orders / Refunds / Avg Revenue',
                    style: {
                        fontSize: '11px',
                        fontWeight: 600,
                    }
                }
            },
            {
                opposite: true,
                title: {
                    text: 'Revenue / Tax',
                    style: {
                        fontSize: '11px',
                        fontWeight: 600,
                    }
                }
            }
        ],
        legend: {
            show: false
        }
    })
    protected readonly currency = currency;

    getCurrentMonthRange(): Date[] {
        const start = new Date();
        start.setDate(1);
        start.setHours(0, 0, 0, 0);

        const end = new Date();
        end.setMonth(end.getMonth() + 1);
        end.setDate(0);
        end.setHours(23, 59, 59, 999);

        return [start, end];
    }
}
