<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Datasiswa;

class Kelamin extends Model
{
    use HasFactory;

    public function dataSiswa(){
        return $this->hasMany(Datasiswa::class);
    }
}
