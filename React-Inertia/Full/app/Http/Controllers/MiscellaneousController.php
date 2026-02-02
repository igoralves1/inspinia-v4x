<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class MiscellaneousController extends Controller
{
    public function nestable()
    {
        return Inertia::render('miscellaneous/nestable-list/index');
    }

    public function textDifferent()
    {
        return Inertia::render('miscellaneous/text-different/index');
    }

    public function pdfViewer()
    {
        return Inertia::render('miscellaneous/pdf-viewer/index');
    }

    public function sweetAlert()
    {
        return Inertia::render('miscellaneous/sweet-alert/index');
    }

    public function idleTimer()
    {
        return Inertia::render('miscellaneous/idle-timer/index');
    }

    public function passwordMeter()
    {
        return Inertia::render('miscellaneous/password-meter/index');
    }

    public function clipboard()
    {
        return Inertia::render('miscellaneous/clipboard/index');
    }

    public function loadingButtons()
    {
        return Inertia::render('miscellaneous/loading-buttons/index');
    }

    public function gallery()
    {
        return Inertia::render('miscellaneous/gallery/index');
    }

    public function masonry()
    {
        return Inertia::render('miscellaneous/masonry/index');
    }

    public function tour()
    {
        return Inertia::render('miscellaneous/tour/index');
    }

    public function animation()
    {
        return Inertia::render('miscellaneous/animation/index');
    }
    public function treeview()
    {
        return Inertia::render('miscellaneous/tree-view/index');
    }
}
