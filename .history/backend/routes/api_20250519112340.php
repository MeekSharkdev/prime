<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactFormController;

Route::post('/contact-form', [FormController::class, 'submit']);
