<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact; // ✅ Make sure this model exists and is named correctly

class FormController extends Controller
{
    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            // Add more fields if needed
        ]);

        // ✅ Use the correct model name with capital C
        Contact::create($validated);

        return response()->json(['message' => 'Form submitted successfully']);
    }
}
