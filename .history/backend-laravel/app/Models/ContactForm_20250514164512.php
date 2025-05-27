<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactForm extends Model
{
    protected $table = 'ContactFormTBL';

    // Define the fillable attributes to protect against mass-assignment vulnerability
    protected $fillable = [
        'name',
        'phone',
        'email',
        'message',
    ];

    // You can also specify any custom timestamps or other model configurations
    public $timestamps = true;

    // Optionally, you can add any validation or accessor methods if needed in the future
}
