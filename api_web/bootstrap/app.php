<?php

use App\Exceptions\CreateAccoutException;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        using: function (){
            Route::middleware('api')
                ->prefix('auth_csrf')
                ->group(base_path('routes/api.php'));

             Route::middleware('web')
                ->prefix('api')
                ->group(base_path('routes/web.php'));
        },
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->validateCsrfTokens(except: [
            "/login*",
            "/usuario*",
            "/api*"
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {

    })->create();
