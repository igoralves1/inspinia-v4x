<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OtherPageController extends Controller
{
    public function maintenance()
    {
        return Inertia::render('other-pages/maintenance/index');
    }

}
