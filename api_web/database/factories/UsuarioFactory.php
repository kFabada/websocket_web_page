<?php

namespace Database\Factories;

use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Usuario>
 */
class UsuarioFactory extends Factory
{
    private static $cep = "07413908506";
    private static $state = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF'];
    private static $cpf = "81246919591";

    static $id_login = 1;

    private static function randomNumber(){
      return random_int(0, 6);
    }
    
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Usuario::class; 
    public function definition(): array
    {
        return [
            //
            'name' => fake()->name(25),
            'date' => fake()->date('d-m-Y'),
            'adress' => fake()->address(),
            'cep' => UsuarioFactory::$cep,
            'state' => UsuarioFactory::$state[UsuarioFactory::randomNumber()],
            'cpf' => UsuarioFactory::$cpf,
            'id_login' => UsuarioFactory::$id_login
        ];
    }
}
