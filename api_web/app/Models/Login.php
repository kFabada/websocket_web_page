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
        'username',
        'password',
        'email',
        'valid',
        'token',
        'valid_token'
    ];
}
