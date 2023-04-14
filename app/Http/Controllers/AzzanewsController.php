<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\NewsCollection;


class AzzanewsController extends Controller
{
    public function index(News $azza, Request $request)
    {

        if ($request->search) {
            $search = $request->get('search');
            $news = new NewsCollection(News::where('title', 'like', '%' . $search . '%')->paginate(5));
        } else {
            $news = new NewsCollection(News::OrderByDesc('id')->paginate(5));
        }

        return Inertia::render('Azzanews', [
            "title" => "Az-zahra | Azza News",
            "news" => $news,        
        ]);
    }  
    public function info(Request $request, News $news)
    {
        return Inertia::render('InfoAzza', [
            "title" => "Az-zahra | Azza News",
            "news" => $news
        ]);
    }
}
