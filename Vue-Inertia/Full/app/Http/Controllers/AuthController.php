<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function signIn2()
    {
        return Inertia::render('auth/auth-2/sign-in/index');
    }

    public function signUp2()
    {
        return Inertia::render('auth/auth-2/sign-up/index');
    }

    public function deleteAccount2()
    {
        return Inertia::render('auth/auth-2/delete-account/index');
    }

    public function lockScreen2()
    {
        return Inertia::render('auth/auth-2/lock-screen/index');
    }

    public function loginPin2()
    {
        return Inertia::render('auth/auth-2/login-pin/index');
   }

    public function newPassword2()
    {
        return Inertia::render('auth/auth-2/new-password/index');
    }

    public function resetPassword2()
    {
        return Inertia::render('auth/auth-2/reset-password/index');
    }

    public function successMail2()
    {
        return Inertia::render('auth/auth-2/success-mail/index');
    }

    public function twoFactor2()
    {
        return Inertia::render('auth/auth-2/two-factor/index');
    }

    public function signIn3()
    {
        return Inertia::render('auth/auth-3/sign-in/index');
    }

    public function signUp3()
    {
        return Inertia::render('auth/auth-3/sign-up/index');
    }

    public function deleteAccount3()
    {
        return Inertia::render('auth/auth-3/delete-account/index');
    }

    public function lockScreen3()
    {
        return Inertia::render('auth/auth-3/lock-screen/index');
    }

    public function loginPin3()
    {
        return Inertia::render('auth/auth-3/login-pin/index');
   }

    public function newPassword3()
    {
        return Inertia::render('auth/auth-3/new-password/index');
    }

    public function resetPassword3()
    {
        return Inertia::render('auth/auth-3/reset-password/index');
    }

    public function successMail3()
    {
        return Inertia::render('auth/auth-3/success-mail/index');
    }

    public function twoFactor3()
    {
        return Inertia::render('auth/auth-3/two-factor/index');
    }

}
