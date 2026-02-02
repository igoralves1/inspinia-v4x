<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TablesController extends Controller
{
   public function custom() { return Inertia::render('tables/custom/index'); }
   public function static() { return Inertia::render('tables/static/index'); }
    public function tanstackCheckbox() { return Inertia::render('tables/tanstack/table-with-checkbox/index'); }
    public function tanstackWithDeleteButton() { return Inertia::render('tables/tanstack/table-with-delete-button/index'); }
    public function tanstackWithFilters() { return Inertia::render('tables/tanstack/table-with-filters/index'); }
    public function tanstackWithPagination() { return Inertia::render('tables/tanstack/table-with-pagination/index'); }
    public function tanstackWithSearch() { return Inertia::render('tables/tanstack/table-with-search/index'); }
    public function tanstackWithSort() { return Inertia::render('tables/tanstack/table-with-sort/index'); }

}
