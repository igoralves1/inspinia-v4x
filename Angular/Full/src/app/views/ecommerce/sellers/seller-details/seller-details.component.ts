import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {
    SellerContactsComponent
} from '@/app/views/ecommerce/sellers/seller-details/components/seller-contacts.component';
import {ActivatedRoute, Router} from '@angular/router';
import {SellerType} from '@/app/views/ecommerce/sellers/types';
import {sellers} from '@/app/views/ecommerce/sellers/data';
import {
    SellerOverviewComponent
} from '@/app/views/ecommerce/sellers/seller-details/components/seller-overview.component';
import {
    SellerProductsComponent
} from '@/app/views/ecommerce/sellers/seller-details/components/seller-products.component';

@Component({
    selector: 'app-seller-details',
    imports: [
        PageTitleComponent,
        SellerContactsComponent,
        SellerOverviewComponent,
        SellerProductsComponent
    ],
    templateUrl: './seller-details.component.html',
    styles: ``
})
export class SellerDetailsComponent implements OnInit {
    sellerId!: SellerType['id'];
    seller!: SellerType

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (!id) {
            this.router.navigate(['/error/404']);
            return;
        }

        const matchedSeller = sellers.find(i => i.id.toString() === id);
        this.seller = matchedSeller as SellerType;
        if (matchedSeller) {
            this.sellerId = matchedSeller?.id;
        } else {
            this.router.navigate(['/error/404']);
        }
    }
}
