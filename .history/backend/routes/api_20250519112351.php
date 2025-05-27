<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactFormController;

Route::post('/contact-form', [ContactFormControllerFormController::class, 'submit']);
