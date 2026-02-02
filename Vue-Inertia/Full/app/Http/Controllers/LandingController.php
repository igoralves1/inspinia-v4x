<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function landing()
    {
        return Inertia::render('landing/index');
    }

}
