<?php

namespace Database\Factories;

use App\Models\Login;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Login>
 */
class LoginFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
        protected $model = Login::class; 

    public function definition(): array
    {
        return [
            'username' => fake()->unique->name(20),
            'password' => Hash::make('senha'),
            'email' => fake()->unique()->safeEmail().'123@gmail.com',
            'valid' => true,
            'token' => null,
            'valid_token' => null
        ];
    }
}
