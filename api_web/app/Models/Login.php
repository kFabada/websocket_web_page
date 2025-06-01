<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    /** @use HasFactory<\Database\Factories\LoginFactory> */
    use HasFactory;

    protected $table = "login";
    protected $fillable = [
        'id',
        'username',
        'password',
        'email',
        'valid',
        'token',
        'valid_token'
    ];

    protected $hidden = [
        'password',
    ];

    public function verifyExistUsername($username){
        return Login::select('username')
        ->where('username', '=', $username)
        ->first();

       
    }

    public function verifyExistEmail($email){
         return Login::select('email')
        ->where('email', '=', $email)
        ->first();

       
    }
}
