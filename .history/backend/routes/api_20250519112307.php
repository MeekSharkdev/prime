use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;

Route::post('/contact-form', [FormController::class, 'submit']);