<?php

namespace Database\Seeders;

use App\Models\RoleSiswa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         RoleSiswa::create([
            "name" => "TK"
        ]);

        RoleSiswa::create([
            "name" => "SMP"
        ]);
    }
}
