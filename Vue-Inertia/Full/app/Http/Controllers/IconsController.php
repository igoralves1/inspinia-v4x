<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class IconsController extends Controller
{
    public function tabler() { return Inertia::render('icons/tabler/index'); }
    public function lucide() { return Inertia::render('icons/lucide/index'); }
    public function flags() { return Inertia::render('icons/flags/index'); }
}
