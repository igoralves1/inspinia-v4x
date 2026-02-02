export const allRoutes = [
    // Default route
    {
        path: '/',
        redirect: '/dashboard',
    },

    // Dashboard
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            title: 'Dashboard',
        },
        component: () => import('@/views/dashboards/dashboard/index.vue'),
    },
    {
        path: '/dashboard2',
        name: 'dashboard-2',
        meta: {
            title: 'Dashboard 2',
        },
        component: () => import('@/views/dashboards/dashboard2/index.vue'),
    },
    {
        path: '/dashboard3',
        name: 'dashboard-3',
        meta: {
            title: 'Dashboard 3',
        },
        component: () => import('@/views/dashboards/dashboard3/index.vue'),
    },

    //ecommerce Routes
    {
        path: '',
        children: [
            {
                path: '/products',
                name: 'products',
                component: () => import('@/views/apps/ecommerce/products/products/index.vue'),
                meta: { title: 'Products' },
            },
            {
                path: '/products/:id',
                name: 'products-details',
                component: () => import('@/views/apps/ecommerce/products/products/[id]/index.vue'),
                meta: { title: 'Products Details' },
            },
            {
                path: '/products-grid',
                name: 'products-grid',
                component: () => import('@/views/apps/ecommerce/products/products-grid/index.vue'),
                meta: { title: 'Products Grid' },
            },
            {
                path: '/add-product',
                name: 'add-product',
                component: () => import('@/views/apps/ecommerce/products/add-product/index.vue'),
                meta: { title: 'Add Product' },
            },
            {
                path: '/categories',
                name: 'categories',
                component: () => import('@/views/apps/ecommerce/categories/index.vue'),
                meta: { title: 'Categories' },
            },
            {
                path: '/orders',
                name: 'orders',
                component: () => import('@/views/apps/ecommerce/orders/index.vue'),
                meta: { title: 'Orders' },
            },
            {
                path: '/orders/:id',
                name: 'orders-details',
                component: () => import('@/views/apps/ecommerce/orders/[id]/index.vue'),
                meta: { title: 'Orders Details' },
            },
            {
                path: '/customers',
                name: 'customers',
                component: () => import('@/views/apps/ecommerce/customers/index.vue'),
                meta: { title: 'Customers' },
            },
            {
                path: '/sellers',
                name: 'sellers',
                component: () => import('@/views/apps/ecommerce/sellers/index.vue'),
                meta: { title: 'Sellers' },
            },
            {
                path: '/sellers/:id',
                name: 'sellers-details',
                component: () => import('@/views/apps/ecommerce/sellers/[id]/index.vue'),
                meta: { title: 'Sellers Details' },
            },
            {
                path: '/reviews',
                name: 'reviews',
                component: () => import('@/views/apps/ecommerce/reviews/index.vue'),
                meta: { title: 'Reviews' },
            },
            {
                path: '/reports/product-views',
                name: 'product-views',
                component: () => import('@/views/apps/ecommerce/reports/product-views/index.vue'),
                meta: { title: 'Product Views' },
            },
            {
                path: '/reports/sales',
                name: 'report-sales',
                component: () => import('@/views/apps/ecommerce/reports/sales/index.vue'),
                meta: { title: 'Sales' },
            },
        ]
    },

    //email pages
    {
        path: '/inbox',
        name: 'inbox',
        meta: {
            title: 'Inbox',
        },
        component: () => import('@/views/apps/email/inbox/index.vue'),
    },
    {
        path: '/inbox/:id',
        name: 'inbox-details',
        meta: {
            title: 'Inbox Details',
        },
        component: () => import('@/views/apps/email/inbox/[inboxId]/index.vue'),
    },
    {
        path: '/email-compose',
        name: 'email-compose',
        meta: { title: 'Email Compose', },
        component: () => import('@/views/apps/email/email-compose/index.vue'),
    },


    //    users
    {
        path: '/users',
        children: [
            {
                path: 'contacts',
                name: 'user-contacts',
                meta: {
                    title: 'Contacts',
                },
                component: () => import('@/views/apps/users/contacts/index.vue'),
            },
            {
                path: 'roles',
                name: 'user-roles',
                meta: {
                    title: 'Roles',
                },
                component: () => import('@/views/apps/users/roles/index.vue'),
            },
            {
                path: 'permissions',
                name: 'user-permissions',
                meta: {
                    title: 'Permissions',
                },
                component: () => import('@/views/apps/users/permissions/index.vue'),
            },
        ]
    },

    //projects 
    {
        path: '',
        children: [
            {
                path: 'projects',
                name: 'projects',
                meta: { title: 'Projects', },
                component: () => import('@/views/apps/projects/projects/index.vue'),
            },
            {
                path: 'projects/:id',
                name: 'projects-details',
                meta: { title: 'Projects Details', },
                component: () => import('@/views/apps/projects/projects/[id]/index.vue'),
            },
            {
                path: 'projects-list',
                name: 'projects-list',
                meta: { title: 'Project List', },
                component: () => import('@/views/apps/projects/projects-list/index.vue'),
            },
            {
                path: 'kanban-board',
                name: 'kanban-board',
                meta: { title: 'Kanban Board', },
                component: () => import('@/views/apps/projects/kanban-board/index.vue'),
            },
            {
                path: 'team-board',
                name: 'team-board',
                meta: { title: 'Team Board', },
                component: () => import('@/views/apps/projects/team-board/index.vue'),
            },
            {
                path: 'activity-stream',
                name: 'activity-stream',
                meta: { title: 'Activity Stream', },
                component: () => import('@/views/apps/projects/activity-stream/index.vue'),
            },
        ]
    },

    // apps
    {
        path: '/file-manager',
        name: 'file-manager',
        meta: { title: 'File Manager' },
        component: () => import('@/views/apps/file-manager/index.vue'),
    },
    {
        path: '/chat',
        name: 'chat',
        meta: { title: 'Chat' },
        component: () => import('@/views/apps/chat/index.vue'),
    },
    {
        path: '/calendar',
        name: 'calendar',
        meta: { title: 'Calendar' },
        component: () => import('@/views/apps/calendar/index.vue'),
    },

    // invoices
    {
        path: '/invoices',
        name: 'invoices',
        meta: { title: 'Invoices' },
        component: () => import('@/views/apps/invoice/invoices/index.vue'),
    },
    {
        path: '/invoices/:invoiceId',
        name: 'invoice-details',
        meta: { title: 'Invoice Details' },
        component: () => import('@/views/apps/invoice/invoices/[invoiceId]/index.vue'),
    },
    {
        path: '/add-invoice',
        name: 'add-invoice',
        meta: { title: 'Add Invoice' },
        component: () => import('@/views/apps/invoice/add-invoice/index.vue'),
    },

    // other apps
    {
        path: '/companies',
        name: 'companies',
        meta: { title: 'Companies' },
        component: () => import('@/views/other-apps/companies/index.vue'),
    },
    {
        path: '/clients',
        name: 'clients',
        meta: { title: 'Clients' },
        component: () => import('@/views/other-apps/clients/index.vue'),
    },
    {
        path: '/outlook-view',
        name: 'outlook-view',
        meta: { title: 'Outlook View' },
        component: () => import('@/views/other-apps/outlook-view/index.vue'),
    },
    {
        path: '/vote-list',
        name: 'vote-list',
        meta: { title: 'Vote List' },
        component: () => import('@/views/other-apps/vote-list/index.vue'),
    },
    {
        path: '/issue-tracker',
        name: 'issue-tracker',
        meta: { title: 'Issue Tracker' },
        component: () => import('@/views/other-apps/issue-tracker/index.vue'),
    },
    {
        path: '/api-keys',
        name: 'api-keys',
        meta: { title: 'API Keys' },
        component: () => import('@/views/other-apps/api-keys/index.vue'),
    },
    {
        path: '/blogs',
        name: 'blogs',
        meta: { title: 'Blogs' },
        component: () => import('@/views/other-apps/blogs/index.vue'),
    },
    {
        path: '/article',
        name: 'article',
        meta: { title: 'Article' },
        component: () => import('@/views/other-apps/article/index.vue'),
    },
    {
        path: '/pin-board',
        name: 'pin-board',
        meta: { title: 'Pin Board' },
        component: () => import('@/views/other-apps/pin-board/index.vue'),
    },
    {
        path: '/forum-view',
        name: 'forum-view',
        meta: { title: 'Forum View' },
        component: () => import('@/views/other-apps/forum-view/index.vue'),
    },
    {
        path: '/forum-post',
        name: 'forum-post',
        meta: { title: 'Forum Post' },
        component: () => import('@/views/other-apps/forum-post/index.vue'),
    },

    // pages
    {
        path: '/pages',
        children: [
            {
                path: 'profile',
                name: 'profile',
                meta: { title: 'Profile' },
                component: () => import('@/views/pages/profile/index.vue'),
            },
            {
                path: 'faq',
                name: 'faq',
                meta: { title: 'FAQ' },
                component: () => import('@/views/pages/faq/index.vue'),
            },
            {
                path: 'pricing',
                name: 'pricing',
                meta: { title: 'Pricing' },
                component: () => import('@/views/pages/pricing/index.vue'),
            },
            {
                path: 'empty-page',
                name: 'empty-page',
                meta: { title: 'Empty Page' },
                component: () => import('@/views/pages/empty-page/index.vue'),
            },
            {
                path: 'timeline',
                name: 'timeline',
                meta: { title: 'Timeline' },
                component: () => import('@/views/pages/timeline/index.vue'),
            },
            {
                path: 'search-results',
                name: 'search-results',
                meta: { title: 'Search Results' },
                component: () => import('@/views/pages/search-results/index.vue'),
            },
            {
                path: 'terms-conditions',
                name: 'terms-conditions',
                meta: { title: 'Terms & Conditions' },
                component: () => import('@/views/pages/terms-conditions/index.vue'),
            },
        ]
    },
    {
        path: '/coming-soon',
        name: 'coming-soon',
        meta: { title: 'Coming Soon' },
        component: () => import('@/views/other-pages/coming-soon/index.vue'),
    },
    {
        path: '/maintenance',
        name: 'Maintenance',
        meta: { title: 'Maintenance' },
        component: () => import('@/views/other-pages/maintenance/index.vue'),
    },


    // miscellaneous
    {
        path: '/miscellaneous/text-different',
        name: 'text-different',
        meta: { title: 'Text Different' },
        component: () => import('@/views/miscellaneous/text-different/index.vue'),
    },
    {
        path: '/miscellaneous/pdf-viewer',
        name: 'pdf-viewer',
        meta: { title: 'PDF Viewer' },
        component: () => import('@/views/miscellaneous/pdf-viewer/index.vue'),
    },
    {
        path: '/miscellaneous/sweet-alert',
        name: 'sweet-alert',
        meta: { title: 'Sweet Alert' },
        component: () => import('@/views/miscellaneous/sweet-alert/index.vue'),
    },
    {
        path: '/miscellaneous/idle-timer',
        name: 'idle-timer',
        meta: { title: 'Idle Timer' },
        component: () => import('@/views/miscellaneous/idle-timer/index.vue'),
    },
    {
        path: '/miscellaneous/password-meter',
        name: 'password-meter',
        meta: { title: 'Password Meter' },
        component: () => import('@/views/miscellaneous/password-meter/index.vue'),
    },
    {
        path: '/miscellaneous/clipboard',
        name: 'clipboard',
        meta: { title: 'Clipboard' },
        component: () => import('@/views/miscellaneous/clipboard/index.vue'),
    },
    {
        path: '/miscellaneous/loading-buttons',
        name: 'loading-buttons',
        meta: { title: 'Loading Buttons' },
        component: () => import('@/views/miscellaneous/loading-buttons/index.vue'),
    },
    {
        path: '/miscellaneous/gallery',
        name: 'gallery',
        meta: { title: 'Gallery' },
        component: () => import('@/views/miscellaneous/gallery/index.vue'),
    },
    {
        path: '/miscellaneous/masonry',
        name: 'masonry',
        meta: { title: 'Masonry' },
        component: () => import('@/views/miscellaneous/masonry/index.vue'),
    },
    {
        path: '/miscellaneous/tour',
        name: 'tour',
        meta: { title: 'Tour' },
        component: () => import('@/views/miscellaneous/tour/index.vue'),
    },
    {
        path: '/miscellaneous/animation',
        name: 'animation',
        meta: { title: 'Animation' },
        component: () => import('@/views/miscellaneous/animation/index.vue'),
    },

    // Auth Routes - Auth 1
    {
        path: '/auth-1',
        children: [
            {
                path: 'sign-in',
                name: 'auth-1-signin',
                component: () => import('@/views/auth/auth-1/sign-in/index.vue'),
                meta: { title: 'Sign In 1' },
            },
            {
                path: 'sign-up',
                name: 'auth-1-signup',
                component: () => import('@/views/auth/auth-1/sign-up/index.vue'),
                meta: { title: 'Sign Up 1' },
            },
            {
                path: 'reset-password',
                name: 'auth-1-reset-password',
                component: () => import('@/views/auth/auth-1/reset-password/index.vue'),
                meta: { title: 'Reset Password 1' },
            },
            {
                path: 'new-password',
                name: 'auth-1-new-password',
                component: () => import('@/views/auth/auth-1/new-password/index.vue'),
                meta: { title: 'New Password 1' },
            },
            {
                path: 'two-factor',
                name: 'auth-1-two-factor',
                component: () => import('@/views/auth/auth-1/two-factor/index.vue'),
                meta: { title: 'Two Factor 1' },
            },
            {
                path: 'lock-screen',
                name: 'auth-1-lock-screen',
                component: () => import('@/views/auth/auth-1/lock-screen/index.vue'),
                meta: { title: 'Lock Screen 1' },
            },
            {
                path: 'delete-account',
                name: 'auth-1-delete-account',
                component: () => import('@/views/auth/auth-1/delete-account/index.vue'),
                meta: { title: 'Delete Account 1' },
            },
            {
                path: 'login-pin',
                name: 'auth-1-login-pin',
                component: () => import('@/views/auth/auth-1/login-pin/index.vue'),
                meta: { title: 'Login with Pin 1' },
            },
            {
                path: 'success-mail',
                name: 'auth-1-success-mail',
                component: () => import('@/views/auth/auth-1/success-mail/index.vue'),
                meta: { title: 'Success Mail 1' },
            },
        ],
    },

    // Auth Routes - Auth 2
    {
        path: '/auth-2',
        children: [
            {
                path: 'sign-in',
                name: 'auth-2-signin',
                component: () => import('@/views/auth/auth-2/sign-in/index.vue'),
                meta: { title: 'Sign In 2' },
            },
            {
                path: 'sign-up',
                name: 'auth-2-signup',
                component: () => import('@/views/auth/auth-2/sign-up/index.vue'),
                meta: { title: 'Sign Up 2' },
            },
            {
                path: 'reset-password',
                name: 'auth-2-reset-password',
                component: () => import('@/views/auth/auth-2/reset-password/index.vue'),
                meta: { title: 'Reset Password 2' },
            },
            {
                path: 'new-password',
                name: 'auth-2-new-password',
                component: () => import('@/views/auth/auth-2/new-password/index.vue'),
                meta: { title: 'New Password 2' },
            },
            {
                path: 'two-factor',
                name: 'auth-2-two-factor',
                component: () => import('@/views/auth/auth-2/two-factor/index.vue'),
                meta: { title: 'Two Factor 2' },
            },
            {
                path: 'lock-screen',
                name: 'auth-2-lock-screen',
                component: () => import('@/views/auth/auth-2/lock-screen/index.vue'),
                meta: { title: 'Lock Screen 2' },
            },
            {
                path: 'delete-account',
                name: 'auth-2-delete-account',
                component: () => import('@/views/auth/auth-2/delete-account/index.vue'),
                meta: { title: 'Delete Account 2' },
            },
            {
                path: 'login-pin',
                name: 'auth-2-login-pin',
                component: () => import('@/views/auth/auth-2/login-pin/index.vue'),
                meta: { title: 'Login with Pin 2' },
            },
            {
                path: 'success-mail',
                name: 'auth-2-success-mail',
                component: () => import('@/views/auth/auth-2/success-mail/index.vue'),
                meta: { title: 'Success Mail 2' },
            },
        ],
    },

    // Auth Routes - Auth 3
    {
        path: '/auth-3',
        children: [
            {
                path: 'sign-in',
                name: 'auth-3-signin',
                component: () => import('@/views/auth/auth-3/sign-in/index.vue'),
                meta: { title: 'Sign In 3' },
            },
            {
                path: 'sign-up',
                name: 'auth-3-signup',
                component: () => import('@/views/auth/auth-3/sign-up/index.vue'),
                meta: { title: 'Sign Up 3' },
            },
            {
                path: 'reset-password',
                name: 'auth-3-reset-password',
                component: () => import('@/views/auth/auth-3/reset-password/index.vue'),
                meta: { title: 'Reset Password 3' },
            },
            {
                path: 'new-password',
                name: 'auth-3-new-password',
                component: () => import('@/views/auth/auth-3/new-password/index.vue'),
                meta: { title: 'New Password 3' },
            },
            {
                path: 'two-factor',
                name: 'auth-3-two-factor',
                component: () => import('@/views/auth/auth-3/two-factor/index.vue'),
                meta: { title: 'Two Factor 3' },
            },
            {
                path: 'lock-screen',
                name: 'auth-3-lock-screen',
                component: () => import('@/views/auth/auth-3/lock-screen/index.vue'),
                meta: { title: 'Lock Screen 3' },
            },
            {
                path: 'delete-account',
                name: 'auth-3-delete-account',
                component: () => import('@/views/auth/auth-3/delete-account/index.vue'),
                meta: { title: 'Delete Account 3' },
            },
            {
                path: 'login-pin',
                name: 'auth-3-login-pin',
                component: () => import('@/views/auth/auth-3/login-pin/index.vue'),
                meta: { title: 'Login with Pin 3' },
            },
            {
                path: 'success-mail',
                name: 'auth-3-success-mail',
                component: () => import('@/views/auth/auth-3/success-mail/index.vue'),
                meta: { title: 'Success Mail 3' },
            },
        ],
    },

    // Error Pages
    {
        path: '/error',
        children: [
            {
                path: '400',
                name: 'error-400',
                component: () => import('@/views/error/400/index.vue'),
                meta: { title: 'Error 400' },
            },
            {
                path: '401',
                name: 'error-401',
                component: () => import('@/views/error/401/index.vue'),
                meta: { title: 'Error 401' },
            },
            {
                path: '403',
                name: 'error-403',
                component: () => import('@/views/error/403/index.vue'),
                meta: { title: 'Error 403' },
            },
            {
                path: '404',
                name: 'error-404',
                component: () => import('@/views/error/404/index.vue'),
                meta: { title: 'Error 404' },
            },
            {
                path: '408',
                name: 'error-408',
                component: () => import('@/views/error/408/index.vue'),
                meta: { title: 'Error 408' },
            },
            {
                path: '500',
                name: 'error-500',
                component: () => import('@/views/error/500/index.vue'),
                meta: { title: 'Error 500' },
            },
        ],
    },

    // Layouts
    {
        path: '/layouts',
        children: [
            // Boxed Layout
            {
                path: 'boxed',
                name: 'layout-boxed',
                component: () => import('@/views/layouts/boxed/index.vue'),
                meta: { title: 'Boxed Layout' },
            },
            // Compact Layout
            {
                path: 'compact',
                name: 'layout-compact',
                component: () => import('@/views/layouts/compact/index.vue'),
                meta: { title: 'Compact Layout' },
            },
            // Horizontal Layout
            {
                path: 'horizontal',
                name: 'layout-horizontal',
                component: () => import('@/views/layouts/horizontal/index.vue'),
                meta: { title: 'Horizontal Layout' },
            },
            // Scrollable Layout
            {
                path: 'scrollable',
                name: 'layout-scrollable',
                component: () => import('@/views/layouts/scrollable/index.vue'),
                meta: { title: 'Scrollable Layout' },
            },
            // Sidebar Layouts
            {
                path: 'sidebars/compact',
                name: 'layout-sidebar-compact',
                component: () => import('@/views/layouts/sidebars/compact/index.vue'),
                meta: { title: 'Compact Sidebar' },
            },
            {
                path: 'sidebars/gradient',
                name: 'layout-sidebar-gradient',
                component: () => import('@/views/layouts/sidebars/gradient/index.vue'),
                meta: { title: 'Gradient Sidebar' },
            },
            {
                path: 'sidebars/gray',
                name: 'layout-sidebar-gray',
                component: () => import('@/views/layouts/sidebars/gray/index.vue'),
                meta: { title: 'Gray Sidebar' },
            },
            {
                path: 'sidebars/icon-view',
                name: 'layout-sidebar-icon-view',
                component: () => import('@/views/layouts/sidebars/icon-view/index.vue'),
                meta: { title: 'Icon View Sidebar' },
            },
            {
                path: 'sidebars/image',
                name: 'layout-sidebar-image',
                component: () => import('@/views/layouts/sidebars/image/index.vue'),
                meta: { title: 'Image Sidebar' },
            },
            {
                path: 'sidebars/light',
                name: 'layout-sidebar-light',
                component: () => import('@/views/layouts/sidebars/light/index.vue'),
                meta: { title: 'Light Sidebar' },
            },
            {
                path: 'sidebars/no-icons-with-lines',
                name: 'layout-sidebar-no-icons-with-lines',
                component: () => import('@/views/layouts/sidebars/no-icons-with-lines/index.vue'),
                meta: { title: 'No Icons With Lines Sidebar' },
            },
            {
                path: 'sidebars/offcanvas',
                name: 'layout-sidebar-offcanvas',
                component: () => import('@/views/layouts/sidebars/offcanvas/index.vue'),
                meta: { title: 'Offcanvas Sidebar' },
            },
            {
                path: 'sidebars/on-hover',
                name: 'layout-sidebar-on-hover',
                component: () => import('@/views/layouts/sidebars/on-hover/index.vue'),
                meta: { title: 'On Hover Sidebar' },
            },
            {
                path: 'sidebars/on-hover-active',
                name: 'layout-sidebar-on-hover-active',
                component: () => import('@/views/layouts/sidebars/on-hover-active/index.vue'),
                meta: { title: 'On Hover Active Sidebar' },
            },
            {
                path: 'sidebars/with-lines',
                name: 'layout-sidebar-with-lines',
                component: () => import('@/views/layouts/sidebars/with-lines/index.vue'),
                meta: { title: 'With Lines Sidebar' },
            },
            // Topbar Layouts
            {
                path: 'topbars/dark',
                name: 'layout-topbar-dark',
                component: () => import('@/views/layouts/topbars/dark/index.vue'),
                meta: { title: 'Dark Topbar' },
            },
            {
                path: 'topbars/gradient',
                name: 'layout-topbar-gradient',
                component: () => import('@/views/layouts/topbars/gradient/index.vue'),
                meta: { title: 'Gradient Topbar' },
            },
            {
                path: 'topbars/gray',
                name: 'layout-topbar-gray',
                component: () => import('@/views/layouts/topbars/gray/index.vue'),
                meta: { title: 'Gray Topbar' },
            },
            {
                path: 'topbars/with-sub-items',
                name: 'layout-topbar-with-sub-items',
                component: () => import('@/views/layouts/topbars/with-sub-items/index.vue'),
                meta: { title: 'Topbar with Sub Items' },
            },
            {
                path: 'topbars/with-tools',
                name: 'layout-topbar-with-tools',
                component: () => import('@/views/layouts/topbars/with-tools/index.vue'),
                meta: { title: 'Topbar with Tools' },
            },
        ],
    },

    // Landing Page
    {
        path: '/landing',
        name: 'landing',
        component: () => import('@/views/landing/index.vue'),
        meta: { title: 'Landing Page' },
    },

    // UI

    {
        path: '/ui',
        children: [
            {
                path: 'accordions',
                name: 'accordions',
                meta: { title: 'Accordions' },
                component: () => import('@/views/ui/accordions/index.vue'),
            },
            {
                path: 'alerts',
                name: 'alerts',
                meta: { title: 'Alerts' },
                component: () => import('@/views/ui/alerts/index.vue'),
            },
            {
                path: 'images',
                name: 'images',
                meta: { title: 'Images' },
                component: () => import('@/views/ui/images/index.vue'),
            },
            {
                path: 'badges',
                name: 'badges',
                meta: { title: 'Badges' },
                component: () => import('@/views/ui/badges/index.vue'),
            },
            {
                path: 'breadcrumb',
                name: 'breadcrumb',
                meta: { title: 'Breadcrumb' },
                component: () => import('@/views/ui/breadcrumb/index.vue'),
            },
            {
                path: 'buttons',
                name: 'buttons',
                meta: { title: 'Buttons' },
                component: () => import('@/views/ui/buttons/index.vue'),
            },
            {
                path: 'cards',
                name: 'cards',
                meta: { title: 'Cards' },
                component: () => import('@/views/ui/cards/index.vue'),
            },
            {
                path: 'carousel',
                name: 'carousel',
                meta: { title: 'Carousel' },
                component: () => import('@/views/ui/carousel/index.vue'),
            },
            {
                path: 'collapse',
                name: 'collapse',
                meta: { title: 'Collapse' },
                component: () => import('@/views/ui/collapse/index.vue'),
            },
            {
                path: 'colors',
                name: 'colors',
                meta: { title: 'Colors' },
                component: () => import('@/views/ui/colors/index.vue'),
            },
            {
                path: 'dropdowns',
                name: 'dropdowns',
                meta: { title: 'Dropdowns' },
                component: () => import('@/views/ui/dropdowns/index.vue'),
            },
            {
                path: 'videos',
                name: 'videos',
                meta: { title: 'Videos' },
                component: () => import('@/views/ui/videos/index.vue'),
            },
            {
                path: 'grid',
                name: 'grid',
                meta: { title: 'Grid' },
                component: () => import('@/views/ui/grid/index.vue'),
            },
            {
                path: 'links',
                name: 'links',
                meta: { title: 'Links' },
                component: () => import('@/views/ui/links/index.vue'),
            },
            {
                path: 'list-group',
                name: 'list-group',
                meta: { title: 'List Group' },
                component: () => import('@/views/ui/list-group/index.vue'),
            },
            {
                path: 'modals',
                name: 'modals',
                meta: { title: 'Modals' },
                component: () => import('@/views/ui/modals/index.vue'),
            },
            {
                path: 'notifications',
                name: 'notifications',
                meta: { title: 'Notifications' },
                component: () => import('@/views/ui/notifications/index.vue'),
            },
            {
                path: 'offcanvas',
                name: 'offcanvas',
                meta: { title: 'Offcanvas' },
                component: () => import('@/views/ui/offcanvas/index.vue'),
            },
            {
                path: 'placeholders',
                name: 'placeholders',
                meta: { title: 'Placeholders' },
                component: () => import('@/views/ui/placeholders/index.vue'),
            },
            {
                path: 'pagination',
                name: 'pagination',
                meta: { title: 'Pagination' },
                component: () => import('@/views/ui/pagination/index.vue'),
            },
            {
                path: 'popovers',
                name: 'popovers',
                meta: { title: 'Popovers' },
                component: () => import('@/views/ui/popovers/index.vue'),
            },
            {
                path: 'progress',
                name: 'progress',
                meta: { title: 'Progress' },
                component: () => import('@/views/ui/progress/index.vue'),
            },
            {
                path: 'spinners',
                name: 'spinners',
                meta: { title: 'Spinners' },
                component: () => import('@/views/ui/spinners/index.vue'),
            },
            {
                path: 'tabs',
                name: 'tabs',
                meta: { title: 'Tabs' },
                component: () => import('@/views/ui/tabs/index.vue'),
            },
            {
                path: 'tooltips',
                name: 'tooltips',
                meta: { title: 'Tooltips' },
                component: () => import('@/views/ui/tooltips/index.vue'),
            },
            {
                path: 'typography',
                name: 'typography',
                meta: { title: 'Typography' },
                component: () => import('@/views/ui/typography/index.vue'),
            },
            {
                path: 'utilities',
                name: 'utilities',
                meta: { title: 'Utilities' },
                component: () => import('@/views/ui/utilities/index.vue'),
            },
        ]
    },

    // Components
    {
        path: '/widgets',
        name: 'widgets',
        meta: { title: 'Widgets' },
        component: () => import('@/views/widgets/index.vue'),
    },
    {
        path: '/metrics',
        name: 'metrics',
        meta: { title: 'Metrics' },
        component: () => import('@/views/metrics/index.vue'),
    },

    // Graphs - Apex
    {
        path: '/graphs/apex',
        children: [

            {
                path: 'area',
                name: 'apex-area',
                meta: { title: 'Apex Area' },
                component: () => import('@/views/graphs/apex/area/index.vue'),
            },
            {
                path: 'bar',
                name: 'apex-bar',
                meta: { title: 'Apex Bar' },
                component: () => import('@/views/graphs/apex/bar/index.vue'),
            },
            {
                path: 'bubble',
                name: 'apex-bubble',
                meta: { title: 'Apex Bubble' },
                component: () => import('@/views/graphs/apex/bubble/index.vue'),
            },
            {
                path: 'candlestick',
                name: 'apex-candlestick',
                meta: { title: 'Apex Candlestick' },
                component: () => import('@/views/graphs/apex/candlestick/index.vue'),
            },
            {
                path: 'column',
                name: 'apex-column',
                meta: { title: 'Apex Column' },
                component: () => import('@/views/graphs/apex/column/index.vue'),
            },
            {
                path: 'heatmap',
                name: 'apex-heatmap',
                meta: { title: 'Apex Heatmap' },
                component: () => import('@/views/graphs/apex/heatmap/index.vue'),
            },
            {
                path: 'line',
                name: 'apex-line',
                meta: { title: 'Apex Line' },
                component: () => import('@/views/graphs/apex/line/index.vue'),
            },
            {
                path: 'mixed',
                name: 'apex-mixed',
                meta: { title: 'Apex Mixed' },
                component: () => import('@/views/graphs/apex/mixed/index.vue'),
            },
            {
                path: 'timeline',
                name: 'apex-timeline',
                meta: { title: 'Apex Timeline' },
                component: () => import('@/views/graphs/apex/timeline/index.vue'),
            },
            {
                path: 'boxplot',
                name: 'apex-boxplot',
                meta: { title: 'Apex Boxplot' },
                component: () => import('@/views/graphs/apex/boxplot/index.vue'),
            },
            {
                path: 'treemap',
                name: 'apex-treemap',
                meta: { title: 'Apex Treemap' },
                component: () => import('@/views/graphs/apex/treemap/index.vue'),
            },
            {
                path: 'pie',
                name: 'apex-pie',
                meta: { title: 'Apex Pie' },
                component: () => import('@/views/graphs/apex/pie/index.vue'),
            },
            {
                path: 'radar',
                name: 'apex-radar',
                meta: { title: 'Apex Radar' },
                component: () => import('@/views/graphs/apex/radar/index.vue'),
            },
            {
                path: 'radialbar',
                name: 'apex-radialbar',
                meta: { title: 'Apex Radial Bar' },
                component: () => import('@/views/graphs/apex/radialbar/index.vue'),
            },
            {
                path: 'scatter',
                name: 'apex-scatter',
                meta: { title: 'Apex Scatter' },
                component: () => import('@/views/graphs/apex/scatter/index.vue'),
            },
            {
                path: 'polar-area',
                name: 'apex-polar-area',
                meta: { title: 'Apex Polar Area' },
                component: () => import('@/views/graphs/apex/polar-area/index.vue'),
            },
            {
                path: 'sparklines',
                name: 'apex-sparklines',
                meta: { title: 'Apex Sparklines' },
                component: () => import('@/views/graphs/apex/sparklines/index.vue'),
            },
            {
                path: 'range',
                name: 'apex-range',
                meta: { title: 'Apex Range' },
                component: () => import('@/views/graphs/apex/range/index.vue'),
            },
            {
                path: 'funnel',
                name: 'apex-funnel',
                meta: { title: 'Apex Funnel' },
                component: () => import('@/views/graphs/apex/funnel/index.vue'),
            },
            {
                path: 'slope',
                name: 'apex-slope',
                meta: { title: 'Apex Slope' },
                component: () => import('@/views/graphs/apex/slope/index.vue'),
            },
        ]
    },

    // Graphs - ECharts
    {
        path: '/graphs/echart',
        children: [
            {
                path: 'line',
                name: 'echart-line',
                meta: { title: 'Echart Line' },
                component: () => import('@/views/graphs/echart/line/index.vue'),
            },
            {
                path: 'bar',
                name: 'echart-bar',
                meta: { title: 'Echart Bar' },
                component: () => import('@/views/graphs/echart/bar/index.vue'),
            },
            {
                path: 'pie',
                name: 'echart-pie',
                meta: { title: 'Echart Pie' },
                component: () => import('@/views/graphs/echart/pie/index.vue'),
            },
            {
                path: 'scatter',
                name: 'echart-scatter',
                meta: { title: 'Echart Scatter' },
                component: () => import('@/views/graphs/echart/scatter/index.vue'),
            },
            {
                path: 'geo-map',
                name: 'echart-geo-map',
                meta: { title: 'Echart Geo Map' },
                component: () => import('@/views/graphs/echart/geo-map/index.vue'),
            },
            {
                path: 'gauge',
                name: 'echart-gauge',
                meta: { title: 'Echart Gauge' },
                component: () => import('@/views/graphs/echart/gauge/index.vue'),
            },
            {
                path: 'candlestick',
                name: 'echart-candlestick',
                meta: { title: 'Echart Candlestick' },
                component: () => import('@/views/graphs/echart/candlestick/index.vue'),
            },
            {
                path: 'area',
                name: 'echart-area',
                meta: { title: 'Echart Area' },
                component: () => import('@/views/graphs/echart/area/index.vue'),
            },
            {
                path: 'radar',
                name: 'echart-radar',
                meta: { title: 'Echart Radar' },
                component: () => import('@/views/graphs/echart/radar/index.vue'),
            },
            {
                path: 'heatmap',
                name: 'echart-heatmap',
                meta: { title: 'Echart Heatmap' },
                component: () => import('@/views/graphs/echart/heatmap/index.vue'),
            },
            {
                path: 'other',
                name: 'echart-other',
                meta: { title: 'Echart Other' },
                component: () => import('@/views/graphs/echart/other/index.vue'),
            },
        ]
    },

    // Forms
    {
        path: '/forms',
        children: [
            {
                path: 'basic',
                name: 'basic-elements',
                meta: { title: 'Basic Elements' },
                component: () => import('@/views/forms/basic/index.vue'),
            },
            {
                path: 'pickers',
                name: 'pickers',
                meta: { title: 'Pickers' },
                component: () => import('@/views/forms/pickers/index.vue'),
            },
            {
                path: 'select',
                name: 'select',
                meta: { title: 'Select' },
                component: () => import('@/views/forms/select/index.vue'),
            },
            {
                path: 'validation',
                name: 'validation',
                meta: { title: 'Validation' },
                component: () => import('@/views/forms/validation/index.vue'),
            },
            {
                path: 'wizard',
                name: 'wizard',
                meta: { title: 'Wizard' },
                component: () => import('@/views/forms/wizard/index.vue'),
            },
            {
                path: 'file-uploads',
                name: 'file-uploads',
                meta: { title: 'File Uploads' },
                component: () => import('@/views/forms/file-uploads/index.vue'),
            },
            {
                path: 'editors',
                name: 'text-editors',
                meta: { title: 'Text Editors' },
                component: () => import('@/views/forms/editors/index.vue'),
            },
            {
                path: 'slider',
                name: 'slider',
                meta: { title: 'Slider' },
                component: () => import('@/views/forms/slider/index.vue'),
            },
            {
                path: 'layouts',
                name: 'layouts',
                meta: { title: 'Layouts' },
                component: () => import('@/views/forms/layouts/index.vue'),
            },
            {
                path: 'other-plugins',
                name: 'other-plugins',
                meta: { title: 'Other Plugins' },
                component: () => import('@/views/forms/other-plugins/index.vue'),
            },
        ],
    },

    // Tables
    {
        path: '/tables',
        children: [
            {
                path: 'static',
                name: 'static',
                meta: { title: 'Static' },
                component: () => import('@/views/tables/static/index.vue'),
            },
            {
                path: 'custom',
                name: 'custom',
                meta: { title: 'Custom' },
                component: () => import('@/views/tables/custom/index.vue'),
            },
            {
                path: 'tanstack',
                children: [
                    {
                        path: 'table-with-search',
                        name: 'table-with-serach',
                        meta: { title: 'Table With Search' },
                        component: () => import('@/views/tables/tanstack/table-with-search/index.vue'),
                    },
                    {
                        path: 'table-with-checkbox',
                        name: 'table-with-checkbox',
                        meta: { title: 'Table With Checkbox' },
                        component: () => import('@/views/tables/tanstack/table-with-checkbox/index.vue'),
                    },
                    {
                        path: 'table-with-delete-button',
                        name: 'table-with-delete-button',
                        meta: { title: 'Table With Delete Button' },
                        component: () => import('@/views/tables/tanstack/table-with-delete-button/index.vue'),
                    },
                    {
                        path: 'table-with-pagination',
                        name: 'table-with-pagination',
                        meta: { title: 'Table With Pagination' },
                        component: () => import('@/views/tables/tanstack/table-with-pagination/index.vue'),
                    },
                    {
                        path: 'table-with-sort',
                        name: 'table-with-sort',
                        meta: { title: 'Table With Sort' },
                        component: () => import('@/views/tables/tanstack/table-with-sort/index.vue'),
                    },
                    {
                        path: 'table-with-filters',
                        name: 'table-with-filters',
                        meta: { title: 'Table With Filters' },
                        component: () => import('@/views/tables/tanstack/table-with-filters/index.vue'),
                    },
                    
                ]
            },

        ]
    },

    // Icons
    {
        path: '/icons',
        children: [
            {
                path: 'flags',
                name: 'flags',
                meta: { title: 'Flags' },
                component: () => import('@/views/icons/flags/index.vue'),
            },
            {
                path: 'lucide',
                name: 'lucide-icons',
                meta: { title: 'Lucide Icons' },
                component: () => import('@/views/icons/lucide/index.vue'),
            },
            {
                path: 'tabler',
                name: 'tabler-icons',
                meta: { title: 'Tabler Icons' },
                component: () => import('@/views/icons/tabler/index.vue'),
            },
        ]
    },

    // Maps
    {
        path: '/maps',
        children: [
            {
                path: 'google',
                name: 'google-map',
                meta: { title: 'Google Map' },
                component: () => import('@/views/maps/google/index.vue'),
            },
            {
                path: 'vector',
                name: 'vector-map',
                meta: { title: 'Vector Map' },
                component: () => import('@/views/maps/vector/index.vue'),
            },
            {
                path: 'leaflet',
                name: 'leaflet-map',
                meta: { title: 'Leaflet Map' },
                component: () => import('@/views/maps/leaflet/index.vue'),
            },
        ]
    },


    // 404 catch-all route - must be last
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        redirect: '/error/404',
    },
]
