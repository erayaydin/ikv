<?php

namespace App\Http\Controllers;

use App\Map;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
        $maps = Map::orderBy('order', 'ASC')->where('status', true)->get();

        return view('home.index', [
            'maps' => $maps
        ]);
    }
}
