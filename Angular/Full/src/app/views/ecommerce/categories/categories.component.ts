import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {LucideAngularModule, LucideCircle, LucidePlus, LucideSearch} from 'lucide-angular';
import {RouterLink} from '@angular/router';
import {currency} from '@/app/constants';
import {toTitleCase} from '@/app/utils/string-utils';
import {NgIcon} from '@ng-icons/core';
import {Observable} from 'rxjs';
import {TableService} from '@core/services/table.service';
import {FormsModule} from '@angular/forms';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';
import {NgbPagination, NgbPaginationNext, NgbPaginationPrevious} from '@ng-bootstrap/ng-bootstrap';
import {AsyncPipe} from '@angular/common';

type categoryType = {
    id: number,
    name: string,
    image: string,
    slug: string,
    products: number,
    orders: number,
    earnings: number,
    date: string,
    time: string,
    status: 'active' | 'inactive',
    selected?: boolean
}

@Component({
    selector: 'app-categories',
    imports: [
        PageTitleComponent,
        LucideAngularModule,
        RouterLink,
        NgIcon,
        FormsModule,
        NgbdSortableHeader,
        NgbPagination,
        NgbPaginationNext,
        NgbPaginationPrevious,
        AsyncPipe
    ],
    providers: [TableService],
    templateUrl: './categories.component.html',
    styles: ``
})
export class CategoriesComponent implements OnInit {
    filterStatus='All'
    selectAll = false;

    protected readonly LucideSearch = LucideSearch;
    protected readonly LucideCircle = LucideCircle;
    protected readonly LucidePlus = LucidePlus;

    categories$: Observable<categoryType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<categoryType>) {
        this.categories$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }

    ngOnInit(): void {
        this.tableService.setItems(this.productCategories, 8)
    }

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

    productCategories: categoryType[] = [
        {
            id: 1,
            name: 'Furnitures',
            image: 'assets/images/products/1.png',
            products: 5248,
            slug: 'furnitures',
            orders: 95.6,
            earnings: 40.5,
            date: '18 Apr, 2025',
            time: '12:24 PM',
            status: 'active'
        },
        {
            id: 2,
            name: 'Electronics',
            image: 'assets/images/products/2.png',
            slug: 'electronics',
            products: 9854,
            orders: 112.3,
            earnings: 30.4,
            date: '20 Apr, 2025',
            time: '09:10 AM',
            status: 'active'
        },
        {
            id: 3,
            name: 'Smartphones',
            slug: 'electronics-smartphones',
            image: 'assets/images/products/3.png',
            products: 1324,
            orders: 50.1,
            earnings: 22.3,
            date: '22 Apr, 2025',
            time: '11:45 AM',
            status: 'inactive'
        },
        {
            id: 4,
            name: 'Headphones',
            image: 'assets/images/products/4.png',
            slug: 'headphones',
            products: 5123,
            orders: 70.8,
            earnings: 5.7,
            date: '25 Apr, 2025',
            time: '08:20 AM',
            status: 'active',

        },
        {
            id: 5,
            name: 'Table Lamps',
            image: 'assets/images/products/5.png',
            slug: 'furniture-tables',
            products: 7589,
            orders: 88.7,
            earnings: 13.2,
            date: '27 Apr, 2025',
            time: '03:15 PM',
            status: 'inactive'
        },
        {
            id: 6,
            name: 'Kitchen Appliances',
            image: 'assets/images/products/6.png',
            slug: 'appliances',
            products: 3021,
            orders: 110.4,
            earnings: 12.1,
            date: '30 Apr, 2025',
            time: '06:00 PM',
            status: 'active'
        },
        {
            id: 7,
            name: 'Smart Watches',
            image: 'assets/images/products/7.png',
            slug: 'wearables',
            products: 6245,
            orders: 95.3,
            earnings: 8.9,
            date: '28 Apr, 2025',
            time: '10:45 AM',
            status: 'active'
        },
        {
            id: 8,
            name: 'Laptops',
            image: 'assets/images/products/8.png',
            slug: 'electronics',
            products: 4890,
            orders: 67.2,
            earnings: 15.4,
            date: '29 Apr, 2025',
            time: '02:30 PM',
            status: 'inactive'
        },
        {
            id: 9,
            name: 'Gaming Consoles',
            image: 'assets/images/products/9.png',
            slug: 'gaming',
            products: 3756,
            orders: 82.1,
            earnings: 10.7,
            date: '27 Apr, 2025',
            time: '09:10 AM',
            status: 'active'
        },
        {
            id: 10,
            name: 'Bluetooth Speakers',
            image: 'assets/images/products/10.png',
            products: 5432,
            slug: 'audio',
            orders: 78.9,
            earnings: 6.3,
            date: '26 Apr, 2025',
            time: '04:20 PM',
            status: 'active'
        }
    ];

    protected readonly currency = currency;
    protected readonly toTitleCase = toTitleCase;
}
