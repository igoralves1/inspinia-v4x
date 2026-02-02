<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LayoutsController extends Controller
{

    public function horizontal()
    {
        return Inertia::render('layouts/horizontal/index');
    }

    public function compact()
    {
        return Inertia::render('layouts/compact/index');
    }

    public function boxed()
    {
        return Inertia::render('layouts/boxed/index');
    }


    public function scrollable()
    {
        return Inertia::render('layouts/scrollable/index');
    }

    public function sidebarCompact()
    {
        return Inertia::render('layouts/sidebars/compact/index');
    }

    public function sidebarGradient()
    {
        return Inertia::render('layouts/sidebars/gradient/index');
    }

    public function sidebarGray()
    {
        return Inertia::render('layouts/sidebars/gray/index');
    }

    public function sidebarIconview()
    {
        return Inertia::render('layouts/sidebars/icon-view/index');
    }

    public function sidebarImage()
    {
        return Inertia::render('layouts/sidebars/image/index');
    }

    public function sidebarLight()
    {
        return Inertia::render('layouts/sidebars/light/index');
    }

    public function sidebarNoIconWithLine()
    {
        return Inertia::render('layouts/sidebars/no-icons-with-lines/index');
    }

    public function sidebarOffcanvas()
    {
        return Inertia::render('layouts/sidebars/offcanvas/index');
    }

    public function sidebarOnHover()
    {
        return Inertia::render('layouts/sidebars/on-hover/index');
    }

    public function sidebarOnHoverActive()
    {
        return Inertia::render('layouts/sidebars/on-hover-active/index');
    }

    public function sidebarWithLines()
    {
        return Inertia::render('layouts/sidebars/with-lines/index');
    }

    public function topbarDark()
    {
        return Inertia::render('layouts/topbars/dark/index');
    }

    public function topbarGradient()
    {
        return Inertia::render('layouts/topbars/gradient/index');
    }

    public function topbarGray()
    {
        return Inertia::render('layouts/topbars/gray/index');
    }

    public function topbarWithSubItems()
    {
        return Inertia::render('layouts/topbars/with-sub-items/index');
    }

    public function topbarWithTools()
    {
        return Inertia::render('layouts/topbars/with-tools/index');
    }

}
