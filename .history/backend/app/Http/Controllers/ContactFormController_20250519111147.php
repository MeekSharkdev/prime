<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact; // The model for your database table

class FormController extends Controller
{
    public function submit(Request $request)
    {
        // Validate form data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            // add your form fields here
        ]);

        // Save to database
        YourModel::create($validated);

        return response()->json(['message' => 'Form submitted successfully']);
    }
}
