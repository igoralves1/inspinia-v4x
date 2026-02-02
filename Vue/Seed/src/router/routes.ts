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
    component: () => import('@/views/dashboard/index.vue'),
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

  // 404 catch-all route - must be last
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/error/404',
  },
]
