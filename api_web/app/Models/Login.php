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
        'token',
        'valid_token',
        'password',
    ];
}
