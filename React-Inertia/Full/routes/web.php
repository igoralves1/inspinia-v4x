<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ErrorController;
use App\Http\Controllers\LayoutsController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OtherPageController;
use App\Http\Controllers\EcommerceController;
use App\Http\Controllers\AppsController;
use App\Http\Controllers\OtherAppsController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\MiscellaneousController;
use App\Http\Controllers\UiController;
use App\Http\Controllers\WidgetController;
use App\Http\Controllers\ChartsController;
use App\Http\Controllers\FormsController;
use App\Http\Controllers\TablesController;
use App\Http\Controllers\IconsController;
use App\Http\Controllers\MapsController;


require __DIR__.'/auth.php';

Route::middleware(['auth'])->group(function () {
   Route::get('/', [DashboardController::class, 'dashboard'])->name('dashboard');
     Route::get('/dashboard', [DashboardController::class, 'dashboard']);
     Route::get('/dashboard2', [DashboardController::class, 'dashboard2']);
     Route::get('/dashboard3', [DashboardController::class, 'dashboard3']);

 //ecommerce
     Route::get('/products', [EcommerceController::class, 'productList']);
     Route::get('/products-grid', [EcommerceController::class, 'productGrid']);
     Route::get('/products/{id}', [EcommerceController::class, 'productDetails']);
     Route::get('/add-product', [EcommerceController::class, 'addProduct']);
     Route::get('/categories', [EcommerceController::class, 'categories']);
     Route::get('/orders', [EcommerceController::class, 'orders']);
     Route::get('/orders/{id}', [EcommerceController::class, 'orderDetails']);
     Route::get('/customers', [EcommerceController::class, 'customers']);
     Route::get('/sellers', [EcommerceController::class, 'sellers']);
     Route::get('/sellers/{id}', [EcommerceController::class, 'sellerDetails']);
     Route::get('/reviews', [EcommerceController::class, 'reviews']);
     Route::prefix('reports')->group(function () {
        Route::get('/product-views', [EcommerceController::class, 'productViews']);
        Route::get('/sales', [EcommerceController::class, 'sales']);
    });

    // Email
   Route::get('/inbox', [AppsController::class, 'inbox']);
   Route::get('/inbox/{id}', [AppsController::class, 'inboxDetails']);
   Route::get('/email-compose', [AppsController::class, 'emailCompose']);

    // Users
   Route::get('/users/contacts', [AppsController::class, 'contacts']);
   Route::get('/users/roles', [AppsController::class, 'roles']);
   Route::get('/users/permissions', [AppsController::class, 'permissions']);

   // Projects
   Route::get('/projects', [AppsController::class, 'myProjects']);
   Route::get('/projects-list', [AppsController::class, 'projectsList']);
   Route::get('/projects/{id}', [AppsController::class, 'projectDetails']);
   Route::get('/kanban-board', [AppsController::class, 'kanbanBoard']);
   Route::get('/team-board', [AppsController::class, 'teamBoard']);
   Route::get('/activity-stream', [AppsController::class, 'activityStream']);

    // Single Apps
   Route::get('/file-manager', [AppsController::class, 'fileManager']);
   Route::get('/chat', [AppsController::class, 'chat']);
   Route::get('/calendar', [AppsController::class, 'calendar']);

    // Invoice
   Route::get('/invoices', [AppsController::class, 'invoices']);
   Route::get('/invoices/{id}', [AppsController::class, 'invoiceDetails']);
   Route::get('/add-invoice', [AppsController::class, 'addInvoice']);

    // Other Apps
   Route::get('/companies', [OtherAppsController::class, 'companies']);
   Route::get('/clients', [OtherAppsController::class, 'clients']);
   Route::get('/outlook-view', [OtherAppsController::class, 'outlookView']);
   Route::get('/vote-list', [OtherAppsController::class, 'voteList']);
   Route::get('/issue-tracker', [OtherAppsController::class, 'issueTracker']);
   Route::get('/api-keys', [OtherAppsController::class, 'apiKeys']);
   Route::get('/blogs', [OtherAppsController::class, 'blogs']);
   Route::get('/article', [OtherAppsController::class, 'article']);
   Route::get('/pin-board', [OtherAppsController::class, 'pinBoard']);
   Route::get('/forum-view', [OtherAppsController::class, 'forumView']);
   Route::get('/forum-post', [OtherAppsController::class, 'forumPost']);

   // pages 
   Route::prefix('pages')->group(function () {
       Route::get('/profile', [PagesController::class, 'profile']);
       Route::get('/faq', [PagesController::class, 'faq']);
       Route::get('/pricing', [PagesController::class, 'pricing']);
       Route::get('/empty-page', [PagesController::class, 'emptyPage']);
       Route::get('/timeline', [PagesController::class, 'timeline']);
       Route::get('/search-results', [PagesController::class, 'searchResults']);
       Route::get('/terms-conditions', [PagesController::class, 'termsConditions']);
   });


   Route::prefix('miscellaneous')->group(function () {
    Route::get('/nestable-list', [MiscellaneousController::class, 'nestable']);
    Route::get('/tree-view', [MiscellaneousController::class, 'treeview']);
    Route::get('/text-different', [MiscellaneousController::class, 'textDifferent']);
    Route::get('/pdf-viewer', [MiscellaneousController::class, 'pdfViewer']);
    Route::get('/sweet-alert', [MiscellaneousController::class, 'sweetAlert']);
    Route::get('/idle-timer', [MiscellaneousController::class, 'idleTimer']);
    Route::get('/password-meter', [MiscellaneousController::class, 'passwordMeter']);
    Route::get('/clipboard', [MiscellaneousController::class, 'clipboard']);
    Route::get('/loading-buttons', [MiscellaneousController::class, 'loadingButtons']);
    Route::get('/gallery', [MiscellaneousController::class, 'gallery']);
    Route::get('/masonry', [MiscellaneousController::class, 'masonry']);
    Route::get('/tour', [MiscellaneousController::class, 'tour']);
    Route::get('/animation', [MiscellaneousController::class, 'animation']);
  });


    Route::prefix('ui')->group(function () {
        Route::get('/accordions', [UiController::class, 'accordions']);
        Route::get('/alerts', [UiController::class, 'alerts']);
        Route::get('/images', [UiController::class, 'images']);
        Route::get('/badges', [UiController::class, 'badges']);
        Route::get('/breadcrumb', [UiController::class, 'breadcrumb']);
        Route::get('/buttons', [UiController::class, 'buttons']);
        Route::get('/cards', [UiController::class, 'cards']);
        Route::get('/carousel', [UiController::class, 'carousel']);
        Route::get('/collapse', [UiController::class, 'collapse']);
        Route::get('/colors', [UiController::class, 'colors']);
        Route::get('/dropdowns', [UiController::class, 'dropdowns']);
        Route::get('/videos', [UiController::class, 'videos']);
        Route::get('/grid', [UiController::class, 'grid']);
        Route::get('/links', [UiController::class, 'links']);
        Route::get('/list-group', [UiController::class, 'listGroup']);
        Route::get('/modals', [UiController::class, 'modals']);
        Route::get('/notifications', [UiController::class, 'notifications']);
        Route::get('/offcanvas', [UiController::class, 'offcanvas']);
        Route::get('/placeholders', [UiController::class, 'placeholders']);
        Route::get('/pagination', [UiController::class, 'pagination']);
        Route::get('/popovers', [UiController::class, 'popovers']);
        Route::get('/progress', [UiController::class, 'progress']);
        Route::get('/spinners', [UiController::class, 'spinners']);
        Route::get('/tabs', [UiController::class, 'tabs']);
        Route::get('/tooltips', [UiController::class, 'tooltips']);
        Route::get('/typography', [UiController::class, 'typography']);
        Route::get('/utilities', [UiController::class, 'utilities']);
    });

   Route::get('/widgets', [WidgetController::class, 'widget']);
   Route::get('/metrics', [WidgetController::class, 'metrics']);

   Route::prefix('graphs')->group(function () {

        // Apex Charts
        Route::prefix('apex')->group(function () {
            Route::get('/area', [ChartsController::class, 'area']);
            Route::get('/bar', [ChartsController::class, 'bar']);
            Route::get('/bubble', [ChartsController::class, 'bubble']);
            Route::get('/candlestick', [ChartsController::class, 'candlestick']);
            Route::get('/column', [ChartsController::class, 'column']);
            Route::get('/heatmap', [ChartsController::class, 'heatmap']);
            Route::get('/line', [ChartsController::class, 'line']);
            Route::get('/mixed', [ChartsController::class, 'mixed']);
            Route::get('/timeline', [ChartsController::class, 'timeline']);
            Route::get('/boxplot', [ChartsController::class, 'boxplot']);
            Route::get('/treemap', [ChartsController::class, 'treemap']);
            Route::get('/pie', [ChartsController::class, 'pie']);
            Route::get('/radar', [ChartsController::class, 'radar']);
            Route::get('/radialbar', [ChartsController::class, 'radialbar']);
            Route::get('/scatter', [ChartsController::class, 'scatter']);
            Route::get('/polar-area', [ChartsController::class, 'polarArea']);
            Route::get('/sparklines', [ChartsController::class, 'sparklines']);
            Route::get('/range', [ChartsController::class, 'range']);
            Route::get('/funnel', [ChartsController::class, 'funnel']);
            Route::get('/slope', [ChartsController::class, 'slope']);
        });

        // Echarts
        Route::prefix('echart')->group(function () {
            Route::get('/line', [ChartsController::class, 'echartLine']);
            Route::get('/bar', [ChartsController::class, 'echartBar']);
            Route::get('/pie', [ChartsController::class, 'echartPie']);
            Route::get('/scatter', [ChartsController::class, 'echartScatter']);
            Route::get('/geo-map', [ChartsController::class, 'geoMap']);
            Route::get('/gauge', [ChartsController::class, 'gauge']);
            Route::get('/candlestick', [ChartsController::class, 'echartCandlestick']);
            Route::get('/area', [ChartsController::class, 'echartArea']);
            Route::get('/radar', [ChartsController::class, 'echartRadar']);
            Route::get('/heatmap', [ChartsController::class, 'echartHeatmap']);
            Route::get('/other', [ChartsController::class, 'other']);
        });
    });

    //gorms
    Route::prefix('forms')->group(function () {
        Route::get('/basic', [FormsController::class, 'basic']);
        Route::get('/pickers', [FormsController::class, 'pickers']);
        Route::get('/select', [FormsController::class, 'select']);
        Route::get('/validation', [FormsController::class, 'validation']);
        Route::get('/wizard', [FormsController::class, 'wizard']);
        Route::get('/file-uploads', [FormsController::class, 'fileUploads']);
        Route::get('/editors', [FormsController::class, 'editors']);
        Route::get('/slider', [FormsController::class, 'slider']);
        Route::get('/layouts', [FormsController::class, 'layouts']);
        Route::get('/other-plugins', [FormsController::class, 'otherPlugins']);
    });

    // tables
    Route::prefix('tables')->group(function () {
        Route::get('/static', [TablesController::class, 'static']);
        Route::get('/tanstack', [TablesController::class, 'tanstack']);

    });

    // icons
    Route::prefix('icons')->group(function () {
        Route::get('/tabler', [IconsController::class, 'tabler']);
        Route::get('/lucide', [IconsController::class, 'lucide']);
        Route::get('/flags', [IconsController::class, 'flags']);
    });

   // maps
    Route::prefix('maps')->group(function () {
        Route::get('/google', [MapsController::class, 'google']);
        Route::get('/vector', [MapsController::class, 'vector']);
        Route::get('/leaflet', [MapsController::class, 'leaflet']);
    });

   Route::get('/landing', [LandingController::class, 'landing']);
   
   Route::get('/maintenance', [OtherPageController::class, 'maintenance']);
   Route::get('/coming-soon', [OtherPageController::class, 'comingsoon']);

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


// These routes are only for demo purpose, remove them in production. For authentication, use routes define in auth.php

    Route::get('/auth-1/delete-account',  function () {
    return Inertia::render('auth/auth-1/delete-account/index');
});
    Route::get('/auth-1/lock-screen',  function () {
    return Inertia::render('auth/auth-1/lock-screen/index');
});
    Route::get('/auth-1/login-pin',  function () {
    return Inertia::render('auth/auth-1/login-pin/index');
});
    Route::get('/auth-1/new-password',  function () {
    return Inertia::render('auth/auth-1/new-password/index');
});

    Route::get('/auth-1/success-mail',  function () {
    return Inertia::render('auth/auth-1/success-mail/index');
});
    Route::get('/auth-1/two-factor',  function () {
    return Inertia::render('auth/auth-1/two-factor/index');
});

    Route::get('/auth-1/verify-email',  function () {
    return Inertia::render('auth/auth-1/verify-email/index');
});

    Route::get('/auth-1/confirm-password',  function () {
    return Inertia::render('auth/auth-1/confirm-password/index');
});