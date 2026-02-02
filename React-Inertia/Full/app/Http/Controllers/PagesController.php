<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function profile()
    {
        return Inertia::render('pages/profile/index');
    }

     public function faq()
    {
        return Inertia::render('pages/faq/index');
    }

    public function pricing()
    {
        return Inertia::render('pages/pricing/index');
    }

    public function emptyPage()
    {
        return Inertia::render('pages/empty-page/index');
    }

    public function timeline()
    {
        return Inertia::render('pages/timeline/index');
    }

    public function searchResults()
    {
        return Inertia::render('pages/search-results/index');
    }

    public function termsConditions()
    {
        return Inertia::render('pages/terms-conditions/index');
    }

}
