<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [LoginController::class, 'store']);
Route::post('/usuario', [UsuarioController::class, 'store']);
Route::get('/usuario', [UsuarioController::class, 'index']);
