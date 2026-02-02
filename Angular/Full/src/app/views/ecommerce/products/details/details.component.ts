import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {ReviewsComponent} from '@/app/views/ecommerce/products/details/components/reviews.component';
import {ProductType} from '@/app/views/ecommerce/products/types';
import {products} from '@/app/views/ecommerce/products/data';
import {RatingComponent} from '@app/components/rating.component';
import {currency} from '@/app/constants';
import {toTitleCase} from '@/app/utils/string-utils';

@Component({
    selector: 'app-details',
    imports: [
        PageTitleComponent,
        NgbCarouselModule,
        RouterLink,
        NgIcon,
        ReviewsComponent,
        RatingComponent
    ],
    templateUrl: './details.component.html',
    styles: ``
})
export class DetailsComponent implements OnInit {
    productId!: ProductType['sku'];
    product!: ProductType

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (!id) {
            this.router.navigate(['/error/404']);
            return;
        }

        const matchedProduct = products.find(i => i.sku === id);
        if (matchedProduct) {
            this.product = matchedProduct as ProductType;
            this.productId = matchedProduct?.sku;
        } else {
            this.router.navigate(['/error/404']);
        }
    }


    getDiscountPercentage(price: number, sellPrice: number): number {
        if (!price || !sellPrice || price <= sellPrice) return 0;
        const discount = ((price - sellPrice) / price) * 100;
        return Math.round(discount);
    }

    images = [
        'assets/images/products/single-1.png',
        'assets/images/products/single-2.png',
        'assets/images/products/single-3.png',
        'assets/images/products/single-4.png'
    ];

    protected readonly currency = currency;
    protected readonly toTitleCase = toTitleCase;
}
