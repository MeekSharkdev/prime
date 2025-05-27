<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactForm; // Assuming you have a ContactForm model for the table

class ContactFormController extends Controller
{
    public function submit(Request $request)
    {
        // Validate the data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:1000',
        ]);

        // Create new contact form record
        $contactForm = new ContactForm();
        $contactForm->name = $validated['name'];
        $contactForm->phone = $validated['phone'];
        $contactForm->email = $validated['email'];
        $contactForm->message = $validated['message'];
        $contactForm->save();

        return response()->json(['message' => 'Form submitted successfully'], 200);
    }
}
