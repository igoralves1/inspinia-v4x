<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TablesController extends Controller
{
   public function static() { return Inertia::render('tables/static/index'); }
    public function tanstack() { return Inertia::render('tables/tanstack/index'); }
}
