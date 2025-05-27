use App\Http\Controllers\ContactFormController;

Route::post('/contact-form', [ContactFormController::class, 'store']);