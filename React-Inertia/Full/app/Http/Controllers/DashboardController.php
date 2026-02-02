<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
     public function dashboard()
    {
        return Inertia::render('dashboards/dashboard/index');
    }
    public function dashboard2()
    {
        return Inertia::render('dashboards/dashboard2/index');
    }

    public function dashboard3()
    {
        return Inertia::render('dashboards/dashboard3/index');
    }
}
