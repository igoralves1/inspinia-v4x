<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class ChartsController extends Controller
{
    public function area() { return Inertia::render('graphs/apex/area/index'); }
    public function bar() { return Inertia::render('graphs/apex/bar/index'); }
    public function bubble() { return Inertia::render('graphs/apex/bubble/index'); }
    public function candlestick() { return Inertia::render('graphs/apex/candlestick/index'); }
    public function column() { return Inertia::render('graphs/apex/column/index'); }
    public function heatmap() { return Inertia::render('graphs/apex/heatmap/index'); }
    public function line() { return Inertia::render('graphs/apex/line/index'); }
    public function mixed() { return Inertia::render('graphs/apex/mixed/index'); }
    public function timeline() { return Inertia::render('graphs/apex/timeline/index'); }
    public function boxplot() { return Inertia::render('graphs/apex/boxplot/index'); }
    public function treemap() { return Inertia::render('graphs/apex/treemap/index'); }
    public function pie() { return Inertia::render('graphs/apex/pie/index'); }
    public function radar() { return Inertia::render('graphs/apex/radar/index'); }
    public function radialbar() { return Inertia::render('graphs/apex/radialbar/index'); }
    public function scatter() { return Inertia::render('graphs/apex/scatter/index'); }
    public function polarArea() { return Inertia::render('graphs/apex/polar-area/index'); }
    public function sparklines() { return Inertia::render('graphs/apex/sparklines/index'); }
    public function range() { return Inertia::render('graphs/apex/range/index'); }
    public function funnel() { return Inertia::render('graphs/apex/funnel/index'); }
    public function slope() { return Inertia::render('graphs/apex/slope/index'); }

    public function echartLine() { return Inertia::render('graphs/echart/line/index'); }
    public function echartBar() { return Inertia::render('graphs/echart/bar/index'); }
    public function echartPie() { return Inertia::render('graphs/echart/pie/index'); }
    public function echartScatter() { return Inertia::render('graphs/echart/scatter/index'); }
    public function geoMap() { return Inertia::render('graphs/echart/geo-map/index'); }
    public function gauge() { return Inertia::render('graphs/echart/gauge/index'); }
    public function echartCandlestick() { return Inertia::render('graphs/echart/candlestick/index'); }
    public function echartArea() { return Inertia::render('graphs/echart/area/index'); }
    public function echartRadar() { return Inertia::render('graphs/echart/radar/index'); }
    public function echartHeatmap() { return Inertia::render('graphs/echart/heatmap/index'); }
    public function other() { return Inertia::render('graphs/echart/other/index'); }
}
