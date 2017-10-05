<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Redirect to main page.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return redirect(Auth::user()->admin ? 'reviewer' : 'submitted');
    }

    public function reviewer()
    {
        if (! Auth::user()->admin) {
            abort(404);
        }

        return view('home');
    }

    public function submitted()
    {
        return view('home');
    }
}
