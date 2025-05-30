<?php

namespace App\Providers;

use App\Interfaces\DefaultMethodsDataBase;
use App\Interfaces\Interfaces\DefaultMethodsService;
use App\Protect\AcessTokenOauth;
use App\Repository\LoginRepository;
use App\Services\LoginService;
use App\Services\UsuarioService;
use Illuminate\Support\ServiceProvider;
use Laravel\Sanctum\Sanctum;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
      

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
        //  Sanctum::usePersonalAccessTokenModel(AcessTokenOauth::class);
    }
}
