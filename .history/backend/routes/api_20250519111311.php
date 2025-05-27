<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactFormController;

Route::post('/contact', [ContactFormController::class, 'store']);
