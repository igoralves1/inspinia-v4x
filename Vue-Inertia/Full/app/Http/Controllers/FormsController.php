<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FormsController extends Controller
{
    public function basic() { return Inertia::render('forms/basic/index'); }
    public function pickers() { return Inertia::render('forms/pickers/index'); }
    public function select() { return Inertia::render('forms/select/index'); }
    public function validation() { return Inertia::render('forms/validation/index'); }
    public function wizard() { return Inertia::render('forms/wizard/index'); }
    public function fileUploads() { return Inertia::render('forms/file-uploads/index'); }
    public function editors() { return Inertia::render('forms/editors/index'); }
    public function slider() { return Inertia::render('forms/slider/index'); }
    public function layouts() { return Inertia::render('forms/layouts/index'); }
    public function otherPlugins() { return Inertia::render('forms/other-plugins/index'); }

}
