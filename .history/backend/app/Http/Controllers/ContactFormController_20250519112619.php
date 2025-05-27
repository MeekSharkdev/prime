<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactFormController extends Controller
{
    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
            'email' => 'required|email|max:255',
            'message' => 'nullable|string|max:1000',
        ]);

        Contact::create($validated);

        return response()->json(['message' => 'Form submitted successfully']);
    }
}
