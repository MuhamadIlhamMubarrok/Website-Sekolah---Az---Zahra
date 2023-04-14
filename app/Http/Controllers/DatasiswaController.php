<?php

namespace App\Http\Controllers;

use App\Models\Datasiswa;
use App\Models\Kelamin;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\RoleSiswa;

class DatasiswaController extends Controller
{
    
    public function index()
    {
    //    dd(Datasiswa::with('kelamin','roleSiswa')->get()->toArray());
       return Inertia::render('Dashboard', [
            "title" => "Az-zahra | Dashboard",
            "data" => Datasiswa::with('kelamin','roleSiswa')->get(),
            
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(){
        return Inertia::render('CreateDash', [
            "title" => "Az-zahra | Dashboard",
            "role" => RoleSiswa::all(),
            "kelamin" => Kelamin::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $image = '';
        $image = $request->file('foto');
        $imageHash = $image->hashName();
        $image->storeAs('public/datasiswa', $imageHash);

        $news = new Datasiswa();
        $news->image = $imageHash;
        $news->nama = $request->nama;
        $news->ttl = $request->ttl;
        $news->kelamin_id = $request->kelamin;
        $news->rolesiswa_id = $request->jenjang;
        $news->alamat = $request->alamat;
        $news->save();
        return redirect()->route("dashboard")->with(['message' => 'pesan berhasil dibuat']);
    }  

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Datasiswa  $datasiswa
     * @return \Illuminate\Http\Response
     */
    public function show(Datasiswa $datasiswa, Request $request)
    {
         return Inertia::render('InfoSiswa',[
        "data" => Datasiswa::with('kelamin','roleSiswa')->where("id", $request->id)->first(),
       ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Datasiswa  $datasiswa
     * @return \Illuminate\Http\Response
     */
    public function edit(Datasiswa $datasiswa, Request $request)
    {
        return Inertia::render('EditSiswa', [
            "data" => Datasiswa::with('kelamin','roleSiswa')->where("id", $request->id)->first(),
            "role" => RoleSiswa::all(),
            "kelamin" => Kelamin::all()
         ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Datasiswa  $datasiswa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Datasiswa $datasiswa)
    {
        // dd($request->all());
       $request->validate([
            "nama" => 'required',
            "kelamin" => "required",
            "jenjang" => "required",
            "alamat" => "required"
        ]);
        
        if(!$request->foto){
            // dd('image req kgk ada');
            $datasiswa->update([
                "nama" => $request->nama,
                "kelamin_id" => $request->kelamin,
                "rolesiswa_id" => $request->jenjang,
                "alamat" => $request->alamat,
            ]);
            return redirect()->route('dashboard')->with(['message' => 'success']);
        }
        // dd('image req ada'); 
        $image = '';
        $image = $request->file('foto');
        $imageHash = $image->hashName();
        $image->storeAs('public/datasiswa', $imageHash);
        $datasiswa->update([
            "image" => $imageHash,
            "nama" => $request->nama,
            "kelamin_id" => $request->kelamin,
            "rolesiswa_id" => $request->jenjang,
            "alamat" => $request->alamat,

        ]);
        return redirect()->route('dashboard')->with(['message' => 'success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Datasiswa  $datasiswa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request) {
        $message = Datasiswa::find($request->id);
        $message->delete();
        return redirect()->back()->with(['message' => "pesan berhasil dihapus"]);
    }
}
