import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {RouterLink} from '@angular/router';
import {LucideAngularModule, LucideDownload, LucidePlus, LucideSearch} from 'lucide-angular';
import {AsyncPipe} from '@angular/common';
import {NgIcon} from '@ng-icons/core';
import {Observable} from 'rxjs';
import {TableService} from '@core/services/table.service';
import {FormsModule} from '@angular/forms';
import {NgbDropdownModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {currency} from '@/app/constants';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';

type CustomerType = {
    id: number;
    name: string;
    email: string;
    avatar: string;
    phone: string;
    countryFlag: string;
    country: string;
    date: string;
    time: string;
    orders: number;
    totalSpends: number;
    selected?: boolean
}

@Component({
    selector: 'app-customers',
    imports: [
        PageTitleComponent,
        RouterLink,
        LucideAngularModule,
        NgIcon,
        FormsModule,
        NgbDropdownModule,
        NgbPaginationModule,
        NgbdSortableHeader,
        AsyncPipe,
    ],
    providers: [TableService],
    templateUrl: './customers.component.html',
    styles: ``
})
export class CustomersComponent implements OnInit {
    customers$: Observable<CustomerType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<CustomerType>) {
        this.customers$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }

    ngOnInit(): void {
        this.tableService.setItems(this.customers, 8)
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

    customers: CustomerType[] = [
        {
            id: 1,
            name: 'Carlos Méndez',
            email: 'carlos@techlaunch.mx',
            avatar: 'assets/images/users/user-7.jpg',
            phone: '+1 (415) 992-3412',
            countryFlag: 'assets/images/flags/us.svg',
            country: 'United States',
            date: '2 Feb, 2024',
            time: '08:34 AM',
            orders: 58,
            totalSpends: 198.25
        },
        {
            id: 2,
            name: 'Sophie Laurent',
            email: 'sophie.laurent@eurotech.fr',
            avatar: 'assets/images/users/user-2.jpg',
            phone: '+33 6 12 34 56 78',
            countryFlag: 'assets/images/flags/fr.svg',
            country: 'France',
            date: '15 Mar, 2024',
            time: '10:22 AM',
            orders: 42,
            totalSpends: 245.80
        },
        {
            id: 3,
            name: 'Akira Tanaka',
            email: 'akira.tanaka@techjapan.co.jp',
            avatar: 'assets/images/users/user-3.jpg',
            phone: '+81 90-1234-5678',
            countryFlag: 'assets/images/flags/jp.svg',
            country: 'Japan',
            date: '28 Jan, 2024',
            time: '03:15 PM',
            orders: 75,
            totalSpends: 320.50
        },
        {
            id: 4,
            name: 'Emma Watson',
            email: 'emma.watson@britinnovate.uk',
            avatar: 'assets/images/users/user-4.jpg',
            phone: '+44 7700 900123',
            countryFlag: 'assets/images/flags/gb.svg',
            country: 'United Kingdom',
            date: '10 Apr, 2024',
            time: '09:47 AM',
            orders: 29,
            totalSpends: 175.30
        },
        {
            id: 5,
            name: 'Lucas Schmidt',
            email: 'lucas.schmidt@techdeutsch.de',
            avatar: 'assets/images/users/user-5.jpg',
            phone: '+49 151 23456789',
            countryFlag: 'assets/images/flags/de.svg',
            country: 'Germany',
            date: '20 Feb, 2024',
            time: '02:10 PM',
            orders: 63,
            totalSpends: 280.75
        },
        {
            id: 6,
            name: 'Isabella Rossi',
            email: 'isabella.rossi@italiatech.it',
            avatar: 'assets/images/users/user-6.jpg',
            phone: '+39 333 4567890',
            countryFlag: 'assets/images/flags/it.svg',
            country: 'Italy',
            date: '5 Mar, 2024',
            time: '11:25 AM',
            orders: 51,
            totalSpends: 210.40
        },
        {
            id: 7,
            name: 'Mateo Vargas',
            email: 'mateo.vargas@latamtech.ar',
            avatar: 'assets/images/users/user-8.jpg',
            phone: '+54 9 11 2345 6789',
            countryFlag: 'assets/images/flags/ar.svg',
            country: 'Argentina',
            date: '18 Apr, 2024',
            time: '04:50 PM',
            orders: 37,
            totalSpends: 190.20
        },
        {
            id: 8,
            name: 'Priya Sharma',
            email: 'priya.sharma@indotech.in',
            avatar: 'assets/images/users/user-9.jpg',
            phone: '+91 98765 43210',
            countryFlag: 'assets/images/flags/in.svg',
            country: 'India',
            date: '10 Jan, 2024',
            time: '06:30 AM',
            orders: 82,
            totalSpends: 350.90
        },
        {
            id: 9,
            name: 'Liam O’Connor',
            email: 'liam.oconnor@ausinnovate.au',
            avatar: 'assets/images/users/user-10.jpg',
            phone: '+61 400 123 456',
            countryFlag: 'assets/images/flags/au.svg',
            country: 'Australia',
            date: '25 Mar, 2024',
            time: '01:15 PM',
            orders: 45,
            totalSpends: 230.65
        },
        {
            id: 10,
            name: 'Olga Petrova',
            email: 'olga.petrova@rus-tech.ru',
            avatar: 'assets/images/users/user-1.jpg',
            phone: '+7 912 345 67 89',
            countryFlag: 'assets/images/flags/ru.svg',
            country: 'Russia',
            date: '8 Feb, 2024',
            time: '07:40 AM',
            orders: 68,
            totalSpends: 295.15
        }
    ];

    protected readonly LucidePlus = LucidePlus;
    protected readonly LucideSearch = LucideSearch;
    protected readonly LucideDownload = LucideDownload;
    protected readonly currency = currency;
}
