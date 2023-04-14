<?php

use App\Http\Controllers\AzzanewsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DataMessageController;
use App\Http\Controllers\DataNewsController;
use App\Http\Controllers\DatasiswaController;
use App\Http\Controllers\HomepageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// homepage
Route::get('/', [HomepageController::class, 'index'])->name("home");
Route::get('/azzanews', [AzzanewsController::class, 'index'])->name("azzanews");
Route::get('/azzanews/{news}',[AzzanewsController::class, 'info'])->name("info.azza");
Route::get('/contact', [ContactController::class, 'index'])->name("contact");
Route::post('/contact', [ContactController::class, 'store']);

// dashboard
// data siswa
Route::get('/dashboard', [DatasiswaController::class, 'index'])->name('dashboard')->middleware('auth');
Route::get('/dashboard/create', [DatasiswaController::class, 'create'])->name("createpost")->middleware('auth');
Route::post('/dashboard/create', [DatasiswaController::class, 'store'])->name("createpost")->middleware('auth');
Route::get('/dashboard/siswa/info', [DatasiswaController::class, 'show'])->name("info.siswa")->middleware('auth');
Route::post('/dashboard/siswa/delete', [DatasiswaController::class, 'destroy'])->name("delete.siswa")->middleware('auth');
Route::get('/datasiswa/edit/id', [DatasiswaController::class, 'edit'])->name("edit.siswa")->middleware('auth');
Route::patch('/datasiswa/{datasiswa}', [DatasiswaController::class, 'update'])->name("update.siswa")->middleware('auth');
// data news
Route::get('/dashboard/create2', [DataNewsController::class, 'create'])->name("createnews")->middleware('auth');
Route::get('/dashboard/news', [DataNewsController::class, 'index'])->name("news")->middleware('auth');
Route::post('/dashboard/news', [DataNewsController::class, 'store'])->name("news")->middleware('auth');
Route::get('/dashboard/news/id', [DataNewsController::class, 'info'])->name("info.news")->middleware('auth');
Route::post('/dashboard/news/delete', [DataNewsController::class, 'destroy'])->name("delete.news")->middleware('auth');
Route::get('/news/edit/id', [DataNewsController::class, 'edit'])->name("edit.news")->middleware('auth');
Route::post('/news/edit/id', [DataNewsController::class, 'update'])->name("edit.news")->middleware('auth');
// data message
Route::get('/dashboard/message', [DataMessageController::class, 'index'])->name("message")->middleware('auth');
Route::post('/dashboard/message/delete', [DataMessageController::class, 'destroy'])->name("delete.message")->middleware('auth');
Route::get('/dashboard/message/id', [DataMessageController::class, 'info'])->name("info.message")->middleware('auth');
// Route::get('/dashboard/message', [DataMessageController::class, "show"]);
// close dashboard




require __DIR__.'/auth.php';
