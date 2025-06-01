<?php

namespace App\Providers;

use App\Http\Controllers\LoginController;
use App\Http\Controllers\UsuarioController;
use App\Interfaces\DefaultMethodsDataBase;
use App\Interfaces\DefaultMethodsService;
use App\Repository\LoginRepository;
use App\Repository\UsuarioRepository;
use App\Services\LoginService;
use App\Services\UsuarioService;
use Illuminate\Support\ServiceProvider;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->when(LoginService::class)
            ->needs(DefaultMethodsDataBase::class)
            ->give(function (){
                return $this->app->make(LoginRepository::class);
            });

         $this->app->when(LoginController::class)
            ->needs(DefaultMethodsService::class)
            ->give(function (){
                return $this->app->make(LoginService::class);
            });    


             $this->app->when(UsuarioService::class)
            ->needs(DefaultMethodsDataBase::class)
            ->give(function (){
                return $this->app->make(UsuarioRepository::class);
            });

         $this->app->when(UsuarioController::class)
            ->needs(DefaultMethodsService::class)
            ->give(function (){
                return $this->app->make(UsuarioService::class);
            });   
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
