<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class UiController extends Controller
{
    public function accordions()
    {
        return Inertia::render('ui/accordions/index');
    }

    public function alerts()
    {
        return Inertia::render('ui/alerts/index');
    }

    public function images()
    {
        return Inertia::render('ui/images/index');
    }

    public function badges()
    {
        return Inertia::render('ui/badges/index');
    }

    public function breadcrumb()
    {
        return Inertia::render('ui/breadcrumb/index');
    }

    public function buttons()
    {
        return Inertia::render('ui/buttons/index');
    }

    public function cards()
    {
        return Inertia::render('ui/cards/index');
    }

    public function carousel()
    {
        return Inertia::render('ui/carousel/index');
    }

    public function collapse()
    {
        return Inertia::render('ui/collapse/index');
    }

    public function colors()
    {
        return Inertia::render('ui/colors/index');
    }

    public function dropdowns()
    {
        return Inertia::render('ui/dropdowns/index');
    }

    public function videos()
    {
        return Inertia::render('ui/videos/index');
    }

    public function grid()
    {
        return Inertia::render('ui/grid/index');
    }

    public function links()
    {
        return Inertia::render('ui/links/index');
    }

    public function listGroup()
    {
        return Inertia::render('ui/list-group/index');
    }

    public function modals()
    {
        return Inertia::render('ui/modals/index');
    }

    public function notifications()
    {
        return Inertia::render('ui/notifications/index');
    }

    public function offcanvas()
    {
        return Inertia::render('ui/offcanvas/index');
    }

    public function placeholders()
    {
        return Inertia::render('ui/placeholders/index');
    }

    public function pagination()
    {
        return Inertia::render('ui/pagination/index');
    }

    public function popovers()
    {
        return Inertia::render('ui/popovers/index');
    }

    public function progress()
    {
        return Inertia::render('ui/progress/index');
    }

    public function spinners()
    {
        return Inertia::render('ui/spinners/index');
    }

    public function tabs()
    {
        return Inertia::render('ui/tabs/index');
    }

    public function tooltips()
    {
        return Inertia::render('ui/tooltips/index');
    }

    public function typography()
    {
        return Inertia::render('ui/typography/index');
    }

    public function utilities()
    {
        return Inertia::render('ui/utilities/index');
    }
}
