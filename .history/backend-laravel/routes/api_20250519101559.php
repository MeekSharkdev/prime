<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/contact-form', function (Request $request) {
    $validated = $request->validate([
        'name' => 'required|string',
        'phone' => 'required|string',
        'email' => 'required|email',
        'message' => 'required|string',
    ]);

    // You can log, store, or email the message
    logger()->info('Contact form submitted:', $validated);

    return response()->json(['message' => 'Form submitted successfully!']);
});
