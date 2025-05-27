<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactForm extends Model
{
    protected $table = 'ContactFormTBL';

    protected $fillable = [
        'name',
        'phone',
        'email',
        'message',
    ];
}
