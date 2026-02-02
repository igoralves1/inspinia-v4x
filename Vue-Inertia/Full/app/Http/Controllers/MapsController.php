<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class MapsController extends Controller
{
    public function google() { return Inertia::render('maps/google/index'); }
    public function vector() { return Inertia::render('maps/vector/index'); }
    public function leaflet() { return Inertia::render('maps/leaflet/index'); }
}
