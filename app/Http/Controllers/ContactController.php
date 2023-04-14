<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ContactController extends Controller
{
    public function index(){
        return Inertia::render('Contact', [
            "title" => "Az-zahra | Contact",
        ]);
    }

    public function store(Request $request)
    {
        
        $message = new Message();
        $message->nama = $request->nama;
        $message->email = $request->email;
        $message->nohp = $request->nohp;
        $message->message = $request->message;
        $message->excerpt = Str::limit($request->message, 10);
        $message->save();
        return redirect()->back()->with('message', 'pesan berhasil dibuat');
    }
}
