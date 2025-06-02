<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Usuario extends Model
{
    /** @use HasFactory<\Database\Factories\UsuarioFactory> */
    use HasFactory;

    protected $table = "usuario";
    protected $fillable = [
       'name', 
       'date', 
       'adress', 
       'cep', 
       'state', 
       'city',
       'cpf', 
       'id_login'
    ];

    public function login():HasOne{
        return $this->hasOne(Login::class);
    }


    public function verifyExistCpf($cpf){
        return Usuario::select('cpf')
            ->where('cpf', '=', $cpf)
            ->first();
    }
}
