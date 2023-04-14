<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class DataNewsController extends Controller
{
    public function index(News $news){
        $News = new NewsCollection($news::OrderByDesc('id')->paginate(5));
        return Inertia::render('News', [

            "title" => "Az-zahra | Dashboard",
            "news" => $News
        ]);
    }

    public function create(){
       
        return Inertia::render('CreateNews', [
            "title" => "Az-zahra | Dashboard",

        ]);
    }

     public function store(Request $request)
    {   
        $request->validate([
            "title" => "required",
            "foto" => ['required'],
            "body" => "required"
        ]);

        $image = '';
        $image = $request->file('foto');
        $imageHash = $image->hashName();
        $image->storeAs('public/news', $imageHash);

        $news = new News();
        $news->body = $request->body;
        $news->title = $request->title;
        $news->foto = $imageHash;
        $news->excerpt = Str::limit($request->body, 10);
        $news->save();
        return redirect()->back()->with('message', 'pesan berhasil dibuat');
    }  
    
    public function info(News $news, Request $request){
       return Inertia::render('InfoNews',[
        "news" => $news->find($request->id)
       ]);
    }

    public function destroy(Request $request) {
        $message = News::find($request->id);
        $message->delete();
        return redirect()->back()->with('message', "pesan berhasil dihapus");
    }

    public function edit(News $news, Request $request) {
        return Inertia::render('EditNews', [
            "mynews" => $news->find($request->id)
         ]);
    }

     public function update(Request $request) {
          
        $request->validate([
            "title" => "required",
            "foto" => ['required'],
            "body" => "required"
        ]);
        
        $image = '';
        $image = $request->file('foto');
        $imageHash = $image->hashName();
        $image->storeAs('public/news', $imageHash);
        News::where('id', $request->id)->update([
            "foto" => $imageHash,
            "title" => $request->title,
            "body" => $request->body
        ]);
       return to_route('dashboard');
    }





        
    }

     

