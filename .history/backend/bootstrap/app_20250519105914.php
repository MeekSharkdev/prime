<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // ✅ Global middleware (CORS handler, etc.)
        $middleware->use([
            \Illuminate\Http\Middleware\HandleCors::class,
        ]);

        // ✅ Route middleware (like 'auth' or custom middleware)
        $middleware->alias([
            'auth' => \App\Http\Middleware\Authenticate::class,
            // Add more if needed
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
