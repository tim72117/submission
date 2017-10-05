<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('reviewer', 'HomeController@reviewer');
Route::get('submitted', 'HomeController@submitted');

Route::any('api/submissions', function () {
    return  Auth::user()->submissions;
});

Route::any('api/createSubmission', function (Illuminate\Http\Request $request) {
    return ['submitted' => Auth::user()->submissions()->create($request->input('submission'))];
});

Route::any('api/updateSubmission', function (Illuminate\Http\Request $request) {
    return ['updated' => App\Submission::find($request->input('submission.id'))->update($request->input('submission'))];
});

Route::any('api/upload', function (Illuminate\Http\Request $request) {
    $file = $request->file('file');
    $path = Storage::putFile('file', $request->file('file'));
    return ['file' => ['name' => $file->getClientOriginalName(), 'path' => $path]];
});

Route::any('api/download/submission/{submission_id}', function ($submission_id) {
    $submission = App\Submission::find($submission_id);
    $path = Storage::path($submission->path);
    return response()->download($path, $submission->name);
});
