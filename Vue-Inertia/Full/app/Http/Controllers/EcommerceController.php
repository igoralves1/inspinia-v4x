<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EcommerceController extends Controller
{
    public function productList()
    {
        return Inertia::render('apps/ecommerce/products/products/index');
    }
    public function productGrid()
    {
         return Inertia::render('apps/ecommerce/products/products-grid/index');
    }

    public function productDetails()
    {
         return Inertia::render('apps/ecommerce/products/products/[id]/index');
    }
    public function addProduct()
    {
        return Inertia::render('apps/ecommerce/products/add-product/index');
    }

    public function categories()
    {
        return Inertia::render('apps/ecommerce/categories/index');
    }
    public function orders()
    {
        return Inertia::render('apps/ecommerce/orders/index');
    }
    public function orderDetails()
    {
        return Inertia::render('apps/ecommerce/orders/[id]/index');
    }
    public function customers()
    {
        return Inertia::render('apps/ecommerce/customers/index');
    }
    public function sellers()
    {
        return Inertia::render('apps/ecommerce/sellers/index');
    }
    public function sellerDetails()
    {
        return Inertia::render('apps/ecommerce/sellers/[id]/index');
    }
    public function reviews()
    {
        return Inertia::render('apps/ecommerce/reviews/index');
    }
    public function productViews()
    {
        return Inertia::render('apps/ecommerce/reports/product-views/index');
    }
    public function sales()
    {
        return Inertia::render('apps/ecommerce/reports/sales/index');
    }

}
