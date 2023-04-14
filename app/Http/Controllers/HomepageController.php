<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\NewsCollection;

class HomepageController extends Controller
{
    public function index(){
        return Inertia::render('Homepage', [
            "title" => "Az-zahra | Home"
        ]);
    }

    
}
