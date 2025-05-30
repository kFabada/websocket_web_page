<?php

namespace Database\Seeders;

use App\Models\Login;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LoginSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Login::factory()->count(50)->create();
    }
}
