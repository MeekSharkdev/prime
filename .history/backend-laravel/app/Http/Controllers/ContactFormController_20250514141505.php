<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactForm;

class ContactFormController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:50',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        ContactForm::create($validated);

        return redirect()->back()->with('success', 'Message submitted successfully.');
    }
}
