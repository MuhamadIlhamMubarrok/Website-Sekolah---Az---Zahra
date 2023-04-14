<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use app\Models\Datasiswa;

class RoleSiswa extends Model
{
    protected $guarded = ['id'];
   public function dataSiswa(){
        return $this->hasMany(Datasiswa::class);
    }
}
