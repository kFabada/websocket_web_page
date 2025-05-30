<?php

namespace App\Providers;

use App\Interfaces\DefaultMethodsDataBase;
use App\Interfaces\Interfaces\DefaultMethodsService;
use App\Repository\LoginRepository;
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
        //
      
        // $this->app->bind(DefaultMethodsDataBase::class, UsuarioService::class);

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
