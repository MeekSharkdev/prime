<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactFormController extends Controller
{
    public function store(Request $request)
    {
        // Validate input
        $validated = $request->validate([
            'name' => 'required|string',
            'phone' => 'nullable|string',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        // Handle form (e.g., save to DB, send email, etc.)
        return response()->json(['message' => 'Form submitted successfully!'], 200);
    }
}
