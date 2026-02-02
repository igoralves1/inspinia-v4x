<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WidgetController extends Controller
{
    public function widget()
    {
        return Inertia::render('widgets/index');
    }
    public function metrics()
    {
        return Inertia::render('metrics/index');
    }

}
