import { Component } from '@angular/core';
import { PageTitleComponent } from "@app/components/page-title.component";
import { UiCardComponent } from "@app/components/ui-card.component";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIcon } from '@ng-icons/core';

export type ProductType = {
    id: number,
    name: string;
    category: string;
    price: number;
    stock: number;
    rating: number;
    status: 'Active' | 'Out of Stock' | 'New';
    children?: {
        variant: string;
        color: string;
        sku: string;
        stock: number
    }[]
}

@Component({
    selector: 'app-static',
    imports: [PageTitleComponent, UiCardComponent, NgIcon, NgbDropdownModule],
    templateUrl: './static.component.html',
    styles: ``
})
export class StaticComponent {
    products: ProductType[] = [
        {
            id: 1,
            name: 'Wireless Headphones',
            category: 'Electronics',
            price: 99.0,
            stock: 120,
            rating: 4.5,
            status: 'Active',
            children: [
                { variant: 'Mini', color: 'Black', sku: 'SPK-M-BLK', stock: 80 },
                { variant: 'Standard', color: 'Blue', sku: 'SPK-S-BLU', stock: 120 },
            ]
        },
        {
            id: 2,
            name: 'Running Shoes',
            category: 'Footwear',
            price: 59.99,
            stock: 80,
            rating: 4.2,
            status: 'Active'
        },
        {
            id: 3,
            name: 'Smartwatch',
            category: 'Wearables',
            price: 129.0,
            stock: 0,
            rating: 4.0,
            status: 'Out of Stock'
        },
        {
            id: 4,
            name: 'Gaming Mouse',
            category: 'Accessories',
            price: 39.5,
            stock: 250,
            rating: 4.7,
            status: 'New'
        },
        {
            id: 5,
            name: 'Office Chair',
            category: 'Furniture',
            price: 149.0,
            stock: 35,
            rating: 4.3,
            status: 'Active'
        },
    ];
}
