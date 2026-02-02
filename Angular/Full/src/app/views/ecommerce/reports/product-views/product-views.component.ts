import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {LucideAngularModule, LucideSearch, LucideTrendingUp} from 'lucide-angular';
import {ApexOptions} from 'ng-apexcharts';
import {RatingComponent} from '@app/components/rating.component';
import {currency} from '@/app/constants';
import {Observable} from 'rxjs';
import {TableService} from '@core/services/table.service';
import {FormsModule} from '@angular/forms';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';
import {NgIcon} from '@ng-icons/core';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {AsyncPipe} from '@angular/common';

type ProductViewsType = {
    name: string;
    image: string;
    views: number;
    sku: string;
    price: number;
    rating: number;
    reviews: number;
    orders: number;
    conversation: number;
    chartOptions: ()=>ApexOptions
    selected?: boolean
}

@Component({
    selector: 'app-product-views',
    imports: [
        PageTitleComponent,
        LucideAngularModule,
        RatingComponent,
        FormsModule,
        NgbdSortableHeader,
        NgIcon,
        NgbPaginationModule,
        ApexchartComponent,
        AsyncPipe
    ],
    providers: [TableService],
    templateUrl: './product-views.component.html',
    styles: ``
})
export class ProductViewsComponent implements OnInit {

    protected readonly LucideTrendingUp = LucideTrendingUp;
    protected readonly LucideSearch = LucideSearch;

    productViews$: Observable<ProductViewsType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<ProductViewsType>) {
        this.productViews$ = this.tableService.items$
        this.total$ = this.tableService.total$
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

    deleteSelected() {
        this.tableService.deleteSelectedItems();
        this.selectAll = false;
    }

    get hasSelection(): boolean {
        return this.tableService.hasSelectedItems();
    }


    ngOnInit(): void {
        this.productViews.forEach((item, index) => {
            const isBar = index % 2 === 0
            item.chartOptions= () => ({
                chart: {
                    type: isBar ? 'bar' : 'line',
                    height: 30,
                    width: 100,
                    sparkline: {enabled: true}
                },
                stroke: {
                    width: isBar ? 0 : 2,
                    curve: 'smooth'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '50%',
                        borderRadius: 2
                    }
                },
                series: [{
                    data: this.generateRandomData()
                }],
                colors: ['#3b82f6'],
                tooltip: {
                    enabled: false
                }
            });
        });
        this.tableService.setItems(this.productViews, 8)
    }

    generateRandomData(count: number = 15, min: number = 5, max: number = 20): number[] {
        return Array.from({length: count}, () =>
            Math.floor(Math.random() * (max - min + 1)) + min
        );
    }


    productViews: ProductViewsType[] = [
        {
            name: 'Smart Fitness Watch',
            image: 'assets/images/products/2.png',
            sku: 'FW-54201',
            price: 129.99,
            rating: 4,
            reviews: 54,
            views: 45.2,
            orders: 820,
            conversation: 7.3,
            chartOptions:()=> ({}),
        },
        {
            name: 'Portable Bluetooth Speaker',
            image: 'assets/images/products/3.png',
            sku: 'BS-20894',
            price: 79.50,
            rating: 3,
            reviews: 31,
            views: 28900,
            orders: 410,
            conversation: 5.8,
            chartOptions:()=> ({}),
        },
        {
            name: 'Gaming Mouse',
            image: 'assets/images/products/4.png',
            sku: 'GM-77215',
            price: 49.99,
            rating: 4,
            reviews: 67,
            views: 22400,
            orders: 340,
            conversation: 6.4,
            chartOptions:()=> ({}),
        },
        {
            name: 'Noise Cancelling Headphones',
            image: 'assets/images/products/5.png',
            sku: 'NC-88321',
            price: 199.00,
            rating: 5,
            reviews: 128,
            views: 60100,
            orders: 1500,
            conversation: 9.8,
            chartOptions:()=> ({}),
        },
        {
            name: '4K Action Camera',
            image: 'assets/images/products/6.png',
            sku: 'AC-90763',
            price: 249.99,
            rating: 4,
            reviews: 94,
            views: 18900,
            orders: 610,
            conversation: 6.0,
            chartOptions:()=> ({}),
        },
        {
            name: 'Wireless Charger Pad',
            image: 'assets/images/products/7.png',
            sku: 'WC-23815',
            price: 39.95,
            rating: 3,
            reviews: 41,
            views: 12300,
            orders: 220,
            conversation: 4.1,
            chartOptions:()=> ({}),
        },
        {
            name: 'Mechanical Keyboard',
            image: 'assets/images/products/8.png',
            sku: 'MK-48519',
            price: 89.00,
            rating: 4,
            reviews: 77,
            views: 30500,
            orders: 540,
            conversation: 7.2,
            chartOptions:()=> ({}),
        },
        {
            name: 'Drone with Camera',
            image: 'assets/images/products/9.png',
            sku: 'DR-61208',
            price: 399.00,
            rating: 5,
            reviews: 189,
            views: 75900,
            orders: 1900,
            conversation: 10.2,
            chartOptions:()=> ({}),
        },
        {
            name: 'Smart Home Hub',
            image: 'assets/images/products/10.png',
            sku: 'SH-30051',
            price: 149.99,
            rating: 3,
            reviews: 58,
            views: 21700,
            orders: 470,
            conversation: 5.5,
            chartOptions:()=> ({}),
        },
        {
            name: 'Mini Projector',
            image: 'assets/images/products/1.png',
            sku: 'MP-12081',
            price: 219.00,
            rating: 3,
            reviews: 35,
            views: 15900,
            orders: 310,
            conversation: 4.7,
            chartOptions:()=> ({}),
        }
    ]
    protected readonly currency = currency;
}
