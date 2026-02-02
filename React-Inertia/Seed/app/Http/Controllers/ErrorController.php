<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ErrorController extends Controller
{
    public function error400()
    {
        return Inertia::render('error/400/index');
    }

    public function error401()
    {
        return Inertia::render('error/401/index');
    }

    public function error403()
    {
        return Inertia::render('error/403/index');
    }

    public function error404()
    {
        return Inertia::render('error/404/index');
    }

    public function error408()
    {
        return Inertia::render('error/408/index');
    }

    public function error500()
    {
        return Inertia::render('error/500/index');
    }
}
