import {Routes} from '@angular/router';
import {ProductsComponent} from '@/app/views/ecommerce/products/products/products.component';
import {GridComponent} from '@/app/views/ecommerce/products/grid/grid.component';
import {DetailsComponent} from '@/app/views/ecommerce/products/details/details.component';
import {AddComponent} from '@/app/views/ecommerce/products/add/add.component';
import {CategoriesComponent} from '@/app/views/ecommerce/categories/categories.component';
import {OrdersComponent} from '@/app/views/ecommerce/orders/orders.component';
import {OrderDetailsComponent} from '@/app/views/ecommerce/orders/order-details/order-details.component';
import {CustomersComponent} from '@/app/views/ecommerce/customers/customers.component';
import {SellersComponent} from '@/app/views/ecommerce/sellers/sellers.component';
import {SellerDetailsComponent} from '@/app/views/ecommerce/sellers/seller-details/seller-details.component';
import {ProductReviewsComponent} from '@/app/views/ecommerce/product-reviews/product-reviews.component';
import {ProductViewsComponent} from '@/app/views/ecommerce/reports/product-views/product-views.component';
import {SalesComponent} from '@/app/views/ecommerce/reports/sales/sales.component';


export const ECOMMERCE_ROUTES: Routes = [
    {
        path: 'ecommerce/products',
        component: ProductsComponent,
        data: {title: "Products"},
    },
    {
        path: 'ecommerce/products/grid',
        component: GridComponent,
        data: {title: "Products Grid"},
    },
    {
        path: 'ecommerce/products/add',
        component: AddComponent,
        data: {title: "Create New Products"},
    },
    {
        path: 'ecommerce/products/:id',
        component: DetailsComponent,
        data: {title: "Products Details"},
    },
    {
        path: 'ecommerce/categories',
        component: CategoriesComponent,
        data: {title: "Categories"},
    },
    {
        path: 'ecommerce/orders',
        component: OrdersComponent,
        data: {title: "Orders"},
    },
    {
        path: 'ecommerce/orders/:id',
        component: OrderDetailsComponent,
        data: {title: "Orders Details"},
    },
    {
        path: 'ecommerce/customers',
        component: CustomersComponent,
        data: {title: "Customers"},
    },
    {
        path: 'ecommerce/sellers',
        component: SellersComponent,
        data: {title: "Sellers"},
    },
    {
        path: 'ecommerce/sellers/:id',
        component: SellerDetailsComponent,
        data: {title: "Sellers Details"},
    },
    {
        path: 'ecommerce/reviews',
        component: ProductReviewsComponent,
        data: {title: "Reviews"},
    },
    {
        path: 'ecommerce/product-views',
        component: ProductViewsComponent,
        data: {title: "ProductReviews"},
    },
    {
        path: 'ecommerce/sales',
        component: SalesComponent,
        data: {title: "Sales Reports"},
    },
]
