<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EcommerceController extends Controller
{
    public function productList()
    {
        return Inertia::render('ecommerce/products/index');
    }
    public function productGrid()
    {
         return Inertia::render('ecommerce/products-grid/index');
    }

    public function productDetails()
    {
         return Inertia::render('ecommerce/products/[productId]/index');
    }
    public function addProduct()
    {
        return Inertia::render('ecommerce/add-product/index');
    }

    public function categories()
    {
        return Inertia::render('ecommerce/categories/index');
    }
    public function orders()
    {
        return Inertia::render('ecommerce/orders/index');
    }
    public function orderDetails()
    {
        return Inertia::render('ecommerce/orders/[orderId]/index');
    }
    public function customers()
    {
        return Inertia::render('ecommerce/customers/index');
    }
    public function sellers()
    {
        return Inertia::render('ecommerce/sellers/index');
    }
    public function sellerDetails()
    {
        return Inertia::render('ecommerce/sellers/[sellerId]/index');
    }
    public function reviews()
    {
        return Inertia::render('ecommerce/reviews/index');
    }
    public function productViews()
    {
        return Inertia::render('ecommerce/reports/product-views/index');
    }
    public function sales()
    {
        return Inertia::render('ecommerce/reports/sales/index');
    }

}
