<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactFormController;

Route::get('/', function () {
    return view('welcome');
});

// Contact form submission route
Route::post('/contact-form', [ContactFormController::class, 'submit'])->name('contact-form.submit');
