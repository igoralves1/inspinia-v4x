<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ErrorController;
use App\Http\Controllers\LayoutsController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OtherPageController;


Route::middleware(['auth'])->group(function () {

    Route::get('/', [DashboardController::class, 'dashboard'])->name('dashboard');
     Route::get('/dashboard', [DashboardController::class, 'dashboard']);

   Route::get('/landing', [LandingController::class, 'landing']);
   Route::get('/maintenance', [OtherPageController::class, 'maintenance']);

   Route::get('/error/400', [ErrorController::class, 'error400']);
   Route::get('/error/401', [ErrorController::class, 'error401']);
   Route::get('/error/403', [ErrorController::class, 'error403']);
   Route::get('/error/404', [ErrorController::class, 'error404']);
   Route::get('/error/408', [ErrorController::class, 'error408']);
   Route::get('/error/500', [ErrorController::class, 'error500']);

   Route::get('/layouts/scrollable', [LayoutsController::class, 'scrollable']);
   Route::get('/layouts/compact', [LayoutsController::class, 'compact']);
   Route::get('/layouts/boxed', [LayoutsController::class, 'boxed']);
   Route::get('/layouts/horizontal', [LayoutsController::class, 'horizontal']);

   Route::get('/layouts/sidebars/compact', [LayoutsController::class, 'sidebarCompact']);
   Route::get('/layouts/sidebars/gradient', [LayoutsController::class, 'sidebarGradient']);
   Route::get('/layouts/sidebars/gray', [LayoutsController::class, 'sidebarGray']);
   Route::get('/layouts/sidebars/icon-view', [LayoutsController::class, 'sidebarIconview']);
   Route::get('/layouts/sidebars/image', [LayoutsController::class, 'sidebarImage']);
   Route::get('/layouts/sidebars/light', [LayoutsController::class, 'sidebarLight']);
   Route::get('/layouts/sidebars/no-icons-with-lines', [LayoutsController::class, 'sidebarNoIconWithLine']);
   Route::get('/layouts/sidebars/offcanvas', [LayoutsController::class, 'sidebarOffcanvas']);
   Route::get('/layouts/sidebars/on-hover', [LayoutsController::class, 'sidebarOnHover']);
   Route::get('/layouts/sidebars/on-hover-active', [LayoutsController::class, 'sidebarOnHoverActive']);
   Route::get('/layouts/sidebars/with-lines', [LayoutsController::class, 'sidebarWithLines']);

   Route::get('/layouts/topbars/dark', [LayoutsController::class, 'topbarDark']);
   Route::get('/layouts/topbars/gradient', [LayoutsController::class, 'topbarGradient']);
   Route::get('/layouts/topbars/gray', [LayoutsController::class, 'topbarGray']);
   Route::get('/layouts/topbars/with-sub-items', [LayoutsController::class, 'topbarWithSubItems']);
   Route::get('/layouts/topbars/with-tools', [LayoutsController::class, 'topbarWithTools']);

    Route::get('/auth-2/sign-in', [AuthController::class, 'signIn2']);
    Route::get('/auth-2/sign-up', [AuthController::class, 'signUp2']);
    Route::get('/auth-2/delete-account', [AuthController::class, 'deleteAccount2']);
    Route::get('/auth-2/lock-screen', [AuthController::class, 'lockScreen2']);
    Route::get('/auth-2/login-pin', [AuthController::class, 'loginPin2']);
    Route::get('/auth-2/new-password', [AuthController::class, 'newPassword2']);
    Route::get('/auth-2/reset-password', [AuthController::class, 'resetPassword2']);
    Route::get('/auth-2/success-mail', [AuthController::class, 'successMail2']);
    Route::get('/auth-2/two-factor', [AuthController::class, 'twoFactor2']);

    Route::get('/auth-3/sign-in', [AuthController::class, 'signIn3']);
    Route::get('/auth-3/sign-up', [AuthController::class, 'signUp3']);
    Route::get('/auth-3/delete-account', [AuthController::class, 'deleteAccount3']);
    Route::get('/auth-3/lock-screen', [AuthController::class, 'lockScreen3']);
    Route::get('/auth-3/login-pin', [AuthController::class, 'loginPin3']);
    Route::get('/auth-3/new-password', [AuthController::class, 'newPassword3']);
    Route::get('/auth-3/reset-password', [AuthController::class, 'resetPassword3']);
    Route::get('/auth-3/success-mail', [AuthController::class, 'successMail3']);
    Route::get('/auth-3/two-factor', [AuthController::class, 'twoFactor3']);

});

require __DIR__.'/auth.php';

Route::get('/auth-1/verify-email', function () {
    return Inertia::render('auth/auth-1/verify-email/index');
});             


Route::get('/auth-1/new-password', function () {
    return Inertia::render('auth/auth-1/new-password/index');
});

Route::get('/auth-1/confirm-password', function () {
    return Inertia::render('auth/auth-1/confirm-password/index');
});

    Route::get('/auth-1/sign-in', function () {
    return Inertia::render('auth/auth-1/sign-in/index');
});
    Route::get('/auth-1/sign-up', function () {
    return Inertia::render('auth/auth-1/sign-up/index');
});
    Route::get('/auth-1/delete-account',function () {
    return Inertia::render('auth/auth-1/delete-account/index');
});
    Route::get('/auth-1/lock-screen',function () {
    return Inertia::render('auth/auth-1/lock-screen/index');
});
    Route::get('/auth-1/login-pin', function () {
    return Inertia::render('auth/auth-1/login-pin/index');
});
    Route::get('/auth-1/reset-password',function () {
    return Inertia::render('auth/auth-1/reset-password/index');
});
    Route::get('/auth-1/success-mail',function () {
    return Inertia::render('auth/auth-1/success-mail/index');
});
    Route::get('/auth-1/two-factor', function () {
    return Inertia::render('auth/auth-1/two-factor/index');
});