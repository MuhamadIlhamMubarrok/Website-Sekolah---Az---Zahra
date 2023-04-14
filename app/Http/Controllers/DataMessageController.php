<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DataMessageController extends Controller
{
    public function index(Message $message) {
        $mymessage = new NewsCollection($message::OrderByDesc('id')->paginate(8));
        return Inertia::render('Message', [
            "mymessage" => $mymessage,
        ]);
    }

    public function destroy(Request $request) {
        $message = Message::find($request->id);
        $message->delete();
        return redirect()->back()->with('message', "pesan berhasil dihapus");
    }

    public function info(Message $message, Request $request){
       return Inertia::render('InfoMessage',[
        "message" => $message->find($request->id)
       ]);
    }

}
