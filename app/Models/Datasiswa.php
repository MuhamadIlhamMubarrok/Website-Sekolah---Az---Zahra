<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Datasiswa extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    public function roleSiswa(){
        return $this->belongsTo(RoleSiswa::class, 'rolesiswa_id');
    }

    public function kelamin(){
        return $this->belongsTo(Kelamin::class);
    }
}
