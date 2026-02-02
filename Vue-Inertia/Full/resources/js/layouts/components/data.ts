import type { MenuItemType } from '@/types/layout'

type UserDropdownItemType = {
  label?: string
  icon?: string
  url?: string
  isDivider?: boolean
  isHeader?: boolean
  class?: string
}

export const userDropdownItems: UserDropdownItemType[] = [
  {
    label: 'Welcome back!',
    isHeader: true,
  },
  {
    label: 'Profile',
    icon: 'tabler:user-circle',
    url: '#',
  },
  {
    label: 'Notifications',
    icon: 'tabler:bell-ringing',
    url: '#',
  },
  {
    label: 'Balance: $985.25',
    icon: 'tabler:credit-card',
    url: '#',
  },
  {
    label: 'Account Settings',
    icon: 'tabler:settings-2',
    url: '#',
  },
  {
    label: 'Support Center',
    icon: 'tabler:headphones',
    url: '#',
  },
  {
    isDivider: true,
  },
  {
    label: 'Lock Screen',
    icon: 'tabler:lock',
    url: '/auth-1/lock-screen',
  },
  {
    label: 'Log Out',
    icon: 'tabler:logout-2',
    url: '#',
    class: 'text-danger fw-semibold',
  },
]

export const menuItems: MenuItemType[] = [
    { key: 'menu', label: 'Menu', isTitle: true },
    {
        key: 'dashboards',
        label: 'Dashboards',
        icon: 'tabler:layout-dashboard',
        badge: { variant: 'success', text: '5' },
        children: [
            { key: 'dashboard-v1', label: 'Dashboard v.1', url: '/dashboard' },
            { key: 'dashboard-v2', label: 'Dashboard v.2', url: '/dashboard2' },
            { key: 'dashboard-v3', label: 'Dashboard v.3', url: '/dashboard3' },
            {
                key: 'dashboard-v4',
                label: 'Dashboard v.4',
                url: '#',
                isDisabled: true,
                badge: { variant: 'light', text: 'soon' },
            },
            {
                key: 'dashboard-v5',
                label: 'Dashboard v.5',
                url: '#',
                isDisabled: true,
                badge: { variant: 'light', text: 'soon' },
            },
        ],
    },
    { key: 'landing', label: 'Landing Page', icon: 'tabler:stack-front', url: '/landing' },
    { key: 'apps', label: 'Apps', isTitle: true },
    {
        key: 'ecommerce',
        label: 'Ecommerce',
        icon: 'tabler:basket',
        children: [
            {
                key: 'products',
                label: 'Products',
                children: [
                    { key: 'product-list', label: 'Product', url: '/products' },
                    { key: 'product-grid', label: 'Product Grid', url: '/products-grid' },
                    { key: 'product-details', label: 'Product Details', url: '/products/1' },
                    { key: 'add-product', label: 'Add Product', url: '/add-product' },
                ],
            },
            { key: 'categories', label: 'Categories', url: '/categories' },
            {
                key: 'orders',
                label: 'Orders',
                children: [
                    { key: 'orders-list', label: 'Orders', url: '/orders' },
                    { key: 'order-details', label: 'Order Details', url: '/orders/1' },
                ],
            },
            { key: 'customers', label: 'Customers', url: '/customers' },
            {
                key: 'sellers',
                label: 'Sellers',
                children: [
                    { key: 'sellers-list', label: 'Sellers', url: '/sellers' },
                    { key: 'seller-details', label: 'Seller Details', url: '/sellers/1' },
                ],
            },
            { key: 'reviews', label: 'Reviews', url: '/reviews' },
            {
                key: 'reports',
                label: 'Reports',
                children: [
                    { key: 'product-views', label: 'Product Views', url: '/reports/product-views' },
                    { key: 'sales', label: 'Sales', url: '/reports/sales' },
                ],
            },
        ],
    },
    {
        key: 'email',
        label: 'Email',
        icon: 'tabler:mail',
        badge: { variant: 'danger', text: 'New' },
        children: [
            { key: 'inbox', label: 'Inbox', url: '/inbox' },
            { key: 'inbox-details', label: 'Details', url: '/inbox/1' },
            { key: 'email-compose', label: 'Compose', url: '/email-compose' },
        ],
    },
    {
        key: 'users',
        label: 'Users',
        icon: 'tabler:users',
        children: [
            { key: 'contacts', label: 'Contacts', url: '/users/contacts' },
            { key: 'roles', label: 'Roles', url: '/users/roles' },
            { key: 'permissions', label: 'Permissions', url: '/users/permissions' },
        ],
    },
    {
        key: 'projects',
        label: 'Projects',
        icon: 'tabler:briefcase',
        children: [
            { key: 'my-projects', label: 'My Projects', url: '/projects' },
            { key: 'projects-list', label: 'Projects List', url: '/projects-list' },
            { key: 'project-details', label: 'View Project', url: '/projects/1' },
            { key: 'kanban-board', label: 'Kanban Board', url: '/kanban-board' },
            { key: 'team-board', label: 'Team Board', url: '/team-board' },
            { key: 'activity-stream', label: 'Activity Stream', url: '/activity-stream' },
        ],
    },
    { key: 'file-manager', label: 'File Manager', icon: 'tabler:folder', url: '/file-manager' },
    { key: 'chat', label: 'Chat', icon: 'tabler:message-dots', url: '/chat' },
    { key: 'calendar', label: 'Calendar', icon: 'tabler:calendar', url: '/calendar' },
    {
        key: 'invoice',
        label: 'Invoice',
        icon: 'tabler:invoice',
        children: [
            { key: 'invoice-list', label: 'Invoice', url: '/invoices' },
            { key: 'invoice-details', label: 'Invoice Details', url: '/invoices/1' },
            { key: 'add-invoice', label: 'Add Invoice', url: '/add-invoice' },
        ],
    },
    {
        key: 'other-apps',
        label: 'Other Apps',
        icon: 'tabler:apps',
        children: [
            { key: 'companies', label: 'Companies', url: '/companies' },
            { key: 'clients', label: 'Clients', url: '/clients' },
            { key: 'outlook-view', label: 'Outlook View', url: '/outlook-view' },
            { key: 'vote-list', label: 'Vote List', url: '/vote-list' },
            { key: 'issue-tracker', label: 'Issue Tracker', url: '/issue-tracker' },
            { key: 'api-keys', label: 'Api Keys', url: '/api-keys' },
            { key: 'blogs', label: 'Blogs', url: '/blogs' },
            { key: 'article', label: 'Article', url: '/article' },
            { key: 'pin-board', label: 'Pin Board', url: '/pin-board' },
            { key: 'forum-view', label: 'Forum View', url: '/forum-view' },
            { key: 'forum-post', label: 'Forum Post', url: '/forum-post' },
        ],
    },
    { key: 'custom', label: 'Custom Pages', isTitle: true },
    {
        key: 'pages',
        label: 'Pages',
        icon: 'tabler:files',
        children: [
            { key: 'profile', label: 'Profile', url: '/pages/profile' },
            { key: 'faq', label: 'FAQ', url: '/pages/faq' },
            { key: 'pricing', label: 'Pricing', url: '/pages/pricing' },
            { key: 'empty-page', label: 'Empty Page', url: '/pages/empty-page' },
            { key: 'timeline', label: 'Timeline', url: '/pages/timeline' },
            { key: 'search-results', label: 'Search Results', url: '/pages/search-results' },
            { key: 'coming-soon', label: 'Coming Soon', url: '/coming-soon' },
            { key: 'terms-conditions', label: 'Terms & Conditions', url: '/pages/terms-conditions' },
        ],
    },
    {
        key: 'miscellaneous',
        label: 'Miscellaneous',
        icon: 'tabler:package',
        children: [
            { key: 'text-different', label: 'Text Different', url: '/miscellaneous/text-different' },
            { key: 'pdf-viewer', label: 'PDF Viewer', url: '/miscellaneous/pdf-viewer' },
            { key: 'sweet-alert', label: 'Sweet Alert', url: '/miscellaneous/sweet-alert' },
            { key: 'idle-timer', label: 'Idle Timer', url: '/miscellaneous/idle-timer' },
            { key: 'password-meter', label: 'Password Meter', url: '/miscellaneous/password-meter' },
            { key: 'clipboard', label: 'Clipboard', url: '/miscellaneous/clipboard' },
            { key: 'loading-buttons', label: 'Loading Buttons', url: '/miscellaneous/loading-buttons' },
            { key: 'gallery', label: 'Gallery', url: '/miscellaneous/gallery' },
            { key: 'masonry', label: 'Masonry', url: '/miscellaneous/masonry' },
            { key: 'tour', label: 'Tour', url: '/miscellaneous/tour' },
            { key: 'animation', label: 'Animation', url: '/miscellaneous/animation' },
        ],
    },
    {
        key: 'auth',
        label: 'Authentication',
        icon: 'tabler:lock',
        children: [
            {
                key: 'version-1',
                label: 'Version 1',
                parentKey: 'auth',
                children: [
                    { key: 'sign-in', label: 'Sign In', url: '/auth-1/sign-in' },
                    { key: 'sign-up', label: 'Sign Up', url: '/auth-1/sign-up' },
                    { key: 'reset-pass', label: 'Reset Password', url: '/auth-1/reset-password' },
                    { key: 'new-pass', label: 'New Password', url: '/auth-1/new-password' },
                    { key: 'two-factor', label: 'Two Factor', url: '/auth-1/two-factor' },
                    { key: 'lock-screen', label: 'Lock Screen', url: '/auth-1/lock-screen' },
                    { key: 'success-mail', label: 'Success Mail', url: '/auth-1/success-mail' },
                    { key: 'login-pin', label: 'Login with PIN', url: '/auth-1/login-pin' },
                    { key: 'delete-account', label: 'Delete Account', url: '/auth-1/delete-account' }
                ]
            },
            {
                key: 'version-2',
                label: 'Version 2',
                parentKey: 'auth',
                children: [
                    { key: 'sign-in-2', label: 'Sign In', url: '/auth-2/sign-in' },
                    { key: 'sign-up-2', label: 'Sign Up', url: '/auth-2/sign-up' },
                    { key: 'reset-pass-2', label: 'Reset Password', url: '/auth-2/reset-password' },
                    { key: 'new-pass-2', label: 'New Password', url: '/auth-2/new-password' },
                    { key: 'two-factor-2', label: 'Two Factor', url: '/auth-2/two-factor' },
                    { key: 'lock-screen-2', label: 'Lock Screen', url: '/auth-2/lock-screen' },
                    { key: 'success-mail-2', label: 'Success Mail', url: '/auth-2/success-mail' },
                    { key: 'login-pin-2', label: 'Login with PIN', url: '/auth-2/login-pin' },
                    { key: 'delete-account-2', label: 'Delete Account', url: '/auth-2/delete-account' }
                ]
            },
            {
                key: 'version-3',
                label: 'Version 3',
                parentKey: 'auth',
                children: [
                    { key: 'sign-in-3', label: 'Sign In', url: '/auth-3/sign-in' },
                    { key: 'sign-up-3', label: 'Sign Up', url: '/auth-3/sign-up' },
                    { key: 'reset-pass-3', label: 'Reset Password', url: '/auth-3/reset-password' },
                    { key: 'new-pass-3', label: 'New Password', url: '/auth-3/new-password' },
                    { key: 'two-factor-3', label: 'Two Factor', url: '/auth-3/two-factor' },
                    { key: 'lock-screen-3', label: 'Lock Screen', url: '/auth-3/lock-screen' },
                    { key: 'success-mail-3', label: 'Success Mail', url: '/auth-3/success-mail' },
                    { key: 'login-pin-3', label: 'Login with PIN', url: '/auth-3/login-pin' },
                    { key: 'delete-account-3', label: 'Delete Account', url: '/auth-3/delete-account' }
                ]
            }
        ]
    },
    {
        key: 'error',
        label: 'Error Pages',
        icon: 'tabler:alert-hexagon',
        children: [
            { key: 'error-400', label: '400', url: '/error/400' },
            { key: 'error-401', label: '401', url: '/error/401' },
            { key: 'error-403', label: '403', url: '/error/403' },
            { key: 'error-404', label: '404', url: '/error/404' },
            { key: 'error-408', label: '408', url: '/error/408' },
            { key: 'error-500', label: '500', url: '/error/500' },
            { key: 'maintenance', label: 'Maintenance', url: '/maintenance' }
        ]
    },
    { key: 'layouts', label: 'Layouts', isTitle: true },
    {
        key: 'layout-options',
        label: 'Layout Options',
        icon: 'tabler:layout',
        children: [
            { key: 'scrollable', label: 'Scrollable', url: '/layouts/scrollable' },
            { key: 'compact', label: 'Compact', url: '/layouts/compact' },
            { key: 'boxed', label: 'Boxed', url: '/layouts/boxed' },
            { key: 'horizontal', label: 'Horizontal', url: '/layouts/horizontal' }
        ]
    },
    {
        key: 'sidebars',
        label: 'Sidebars',
        icon: 'tabler:layout-sidebar',
        children: [
            { key: 'light-menu', label: 'Light Menu', url: '/layouts/sidebars/light' },
            { key: 'gradient-menu', label: 'Gradient Menu', url: '/layouts/sidebars/gradient' },
            { key: 'gray-menu', label: 'Gray Menu', url: '/layouts/sidebars/gray' },
            { key: 'image-menu', label: 'Image Menu', url: '/layouts/sidebars/image' },
            { key: 'compact-menu', label: 'Compact Menu', url: '/layouts/sidebars/compact' },
            { key: 'icon-view-menu', label: 'Icon View Menu', url: '/layouts/sidebars/icon-view' },
            { key: 'on-hover-menu', label: 'On Hover Menu', url: '/layouts/sidebars/on-hover' },
            { key: 'on-hover-active-menu', label: 'On Hover Active Menu', url: '/layouts/sidebars/on-hover-active' },
            { key: 'offcanvas-menu', label: 'Offcanvas Menu', url: '/layouts/sidebars/offcanvas' },
            {
                key: 'no-icons-with-lines-menu',
                label: 'No Icons With Lines',
                url: '/layouts/sidebars/no-icons-with-lines'
            },
            { key: 'with-lines-menu', label: 'Sidebar With Lines', url: '/layouts/sidebars/with-lines' },
        ]
    },
    {
        key: 'topbars',
        label: 'Topbars',
        icon: 'tabler:layout-navbar',
        children: [
            { key: 'dark-topbar', label: 'Dark Topbar', url: '/layouts/topbars/dark' },
            { key: 'gray-topbar', label: 'Gray Topbar', url: '/layouts/topbars/gray' },
            { key: 'gradient-topbar', label: 'Gradient Topbar', url: '/layouts/topbars/gradient' },
            { key: 'with-sub-items-topbar', label: 'Topbar with Sub Items', url: '/layouts/topbars/with-sub-items' },
            { key: 'with-tools-topbar', label: 'Topbar with Tools', url: '/layouts/topbars/with-tools' }
        ]
    },
    { key: 'components', label: 'Components', isTitle: true },
    {
        key: 'ui',
        label: 'Base UI',
        icon: 'tabler:palette',
        children: [
            {
                key: 'accordions',
                label: 'Accordions',
                url: '/ui/accordions',
            },
            {
                key: 'alerts',
                label: 'Alerts',
                url: '/ui/alerts',
            },
            {
                key: 'images',
                label: 'Images',
                url: '/ui/images',
            },
            {
                key: 'badges',
                label: 'Badges',
                url: '/ui/badges',
            },
            {
                key: 'breadcrumb',
                label: 'Breadcrumb',
                url: '/ui/breadcrumb',
            },
            {
                key: 'buttons',
                label: 'Buttons',
                url: '/ui/buttons',
            },
            {
                key: 'cards',
                label: 'Cards',
                url: '/ui/cards',
            },
            {
                key: 'carousel',
                label: 'Carousel',
                url: '/ui/carousel',
            },
            {
                key: 'collapse',
                label: 'Collapse',
                url: '/ui/collapse',
            },
            {
                key: 'colors',
                label: 'Colors',
                url: '/ui/colors',
            },
            {
                key: 'dropdowns',
                label: 'Dropdowns',
                url: '/ui/dropdowns',
            },
            {
                key: 'videos',
                label: 'Videos',
                url: '/ui/videos',
            },
            {
                key: 'grid',
                label: 'Grid Options',
                url: '/ui/grid',
            },
            {
                key: 'links',
                label: 'Links',
                url: '/ui/links',
            },
            {
                key: 'list-group',
                label: 'List Group',
                url: '/ui/list-group',
            },
            {
                key: 'modals',
                label: 'Modals',
                url: '/ui/modals',
            },
            {
                key: 'notifications',
                label: 'Notifications',
                url: '/ui/notifications',
            },
            {
                key: 'offcanvas',
                label: 'Offcanvas',
                url: '/ui/offcanvas',
            },
            {
                key: 'placeholders',
                label: 'Placeholders',
                url: '/ui/placeholders',
            },
            {
                key: 'pagination',
                label: 'Pagination',
                url: '/ui/pagination',
            },
            {
                key: 'popovers',
                label: 'Popovers',
                url: '/ui/popovers',
            },
            {
                key: 'progress',
                label: 'Progress',
                url: '/ui/progress',
            },
            {
                key: 'spinners',
                label: 'Spinners',
                url: '/ui/spinners',
            },
            {
                key: 'tabs',
                label: 'Tabs',
                url: '/ui/tabs',
            },
            {
                key: 'tooltips',
                label: 'Tooltips',
                url: '/ui/tooltips',
            },
            {
                key: 'typography',
                label: 'Typography',
                url: '/ui/typography',
            },
            {
                key: 'utilities',
                label: 'Utilities',
                url: '/ui/utilities',
            },
        ],
    },
    {
        key: 'widgets',
        label: 'Widgets',
        icon: 'tabler:category',
        url: '/widgets',
    },
    {
        key: 'metrics',
        label: 'Metrics',
        icon: 'tabler:chart-histogram',
        url: '/metrics',
    },
    {
        key: 'graphs',
        label: 'Graphs',
        icon: 'tabler:chart-donut',
        children: [
            {
                key: 'apexchart',
                label: 'Apex Charts',
                children: [
                    { key: 'apex-area-chart', label: 'Area', url: '/graphs/apex/area' },
                    { key: 'apex-bar-chart', label: 'Bar', url: '/graphs/apex/bar' },
                    { key: 'apex-bubble-chart', label: 'Bubble', url: '/graphs/apex/bubble' },
                    { key: 'apex-candlestick-chart', label: 'Candlestick', url: '/graphs/apex/candlestick' },
                    { key: 'apex-column-chart', label: 'Column', url: '/graphs/apex/column' },
                    { key: 'apex-heatmap-chart', label: 'Heatmap', url: '/graphs/apex/heatmap' },
                    { key: 'apex-line-chart', label: 'Line', url: '/graphs/apex/line' },
                    { key: 'apex-mixed-chart', label: 'Mixed', url: '/graphs/apex/mixed' },
                    { key: 'apex-timeline-chart', label: 'Timeline', url: '/graphs/apex/timeline' },
                    { key: 'apex-boxplot-chart', label: 'Boxplot', url: '/graphs/apex/boxplot' },
                    { key: 'apex-treemap-chart', label: 'Treemap', url: '/graphs/apex/treemap' },
                    { key: 'apex-pie-chart', label: 'Pie', url: '/graphs/apex/pie' },
                    { key: 'apex-radar-chart', label: 'Radar', url: '/graphs/apex/radar' },
                    { key: 'apex-radialbar-chart', label: 'Radialbar', url: '/graphs/apex/radialbar' },
                    { key: 'apex-scatter-chart', label: 'Scatter', url: '/graphs/apex/scatter' },
                    { key: 'apex-polar-area-chart', label: 'Polar Area', url: '/graphs/apex/polar-area' },
                    { key: 'apex-sparkline-chart', label: 'Sparklines', url: '/graphs/apex/sparklines' },
                    { key: 'apex-range-chart', label: 'Range', url: '/graphs/apex/range' },
                    { key: 'apex-funnel-chart', label: 'Funnel', url: '/graphs/apex/funnel' },
                    { key: 'apex-slope-chart', label: 'Slope', url: '/graphs/apex/slope' },
                ],
            },
            {
                key: 'echart',
                label: 'Echarts',
                children: [
                    { key: 'echart-line-chart', label: 'Line', url: '/graphs/echart/line' },
                    { key: 'echart-bar-chart', label: 'Bar', url: '/graphs/echart/bar' },
                    { key: 'echart-pie-chart', label: 'Pie', url: '/graphs/echart/pie' },
                    { key: 'echart-scatter-chart', label: 'Scatter ', url: '/graphs/echart/scatter' },
                    { key: 'echart-geo-map', label: 'GEO Map ', url: '/graphs/echart/geo-map' },
                    { key: 'echart-gauge-chart', label: 'Gauge ', url: '/graphs/echart/gauge' },
                    { key: 'echart-candlestick-chart', label: 'Candlestick ', url: '/graphs/echart/candlestick' },
                    { key: 'echart-area-chart', label: 'Area ', url: '/graphs/echart/area' },
                    { key: 'echart-radar-chart', label: 'Radar ', url: '/graphs/echart/radar' },
                    { key: 'echart-heatmap-chart', label: 'Heatmap ', url: '/graphs/echart/heatmap' },
                    { key: 'echart-other-chart', label: 'Other ', url: '/graphs/echart/other' },
                ],
            },
        ],
    },
    {
        key: 'forms',
        label: 'Forms',
        icon: 'tabler:checkup-list',
        children: [
            {
                key: 'form-basic-elements',
                label: 'Basic Elements',
                url: '/forms/basic',
            },
            {
                key: 'form-pickers',
                label: 'Pickers',
                url: '/forms/pickers',
            },
            {
                key: 'form-select',
                label: 'Select',
                url: '/forms/select',
            },
            {
                key: 'form-validation',
                label: 'Validation',
                url: '/forms/validation',
            },
            {
                key: 'form-wizard',
                label: 'Wizard',
                url: '/forms/wizard',
            },
            {
                key: 'form-file-uploads',
                label: 'File Uploads',
                url: '/forms/file-uploads',
            },
            {
                key: 'form-text-editors',
                label: 'Text Editors',
                url: '/forms/editors',
            },
            {
                key: 'form-slider',
                label: 'Slider',
                url: '/forms/slider',
            },
            {
                key: 'form-layouts',
                label: 'Layouts',
                url: '/forms/layouts',
            },
            {
                key: 'form-other-plugins',
                label: 'Other Plugins',
                url: '/forms/other-plugins',
            },
        ],
    },
    {
        key: 'tables',
        label: 'Tables',
        icon: 'tabler:table-column',
        children: [
            {
                key: 'static-tables',
                label: 'Static Tables',
                url: '/tables/static',
            },
            {
                key: 'custom-tables',
                label: 'Custom Tables',
                url: '/tables/custom',
            },
            {
                key: 'tanstack',
                label: 'Tanstack',
                children: [
                    { key: 'table-with-search', label: 'Table With Search', url: '/tables/tanstack/table-with-search' },
                    { key: 'table-with-delete-button', label: 'Table With Delete Button', url: '/tables/tanstack/table-with-delete-button' },
                    { key: 'table-with-pagination', label: 'Table With Pagination', url: '/tables/tanstack/table-with-pagination' },
                    { key: 'table-with-sort', label: 'Table With Sort', url: '/tables/tanstack/table-with-sort' },
                    { key: 'table-with-checkbox', label: 'Table With Checkbox', url: '/tables/tanstack/table-with-checkbox' },
                    { key: 'table-with-filters', label: 'Table With Filters', url: '/tables/tanstack/table-with-filters' },
                ]
            },
        ],
    },
    {
        key: 'icons',
        label: 'Icons',
        icon: 'tabler:icons',
        children: [
            {
                key: 'tabler-icons',
                label: 'Tabler',
                url: '/icons/tabler',
            },
            {
                key: 'lucide-icons',
                label: 'Lucide',
                url: '/icons/lucide',
            },
            {
                key: 'flags',
                label: 'Flags',
                url: '/icons/flags',
            },
        ],
    },
    {
        key: 'maps',
        label: 'Maps',
        icon: 'tabler:map',
        children: [
            {
                key: 'google-maps',
                label: 'Google Maps',
                url: '/maps/google',
            },
            {
                key: 'vector-maps',
                label: 'Vector Maps',
                url: '/maps/vector',
            },
            {
                key: 'leaflet-maps',
                label: 'Leaflet Maps',
                url: '/maps/leaflet',
            },
        ],
    },
    { key: 'items', label: 'Menu Items', isTitle: true },
    {
        key: 'menu-levels',
        label: 'Menu Levels',
        icon: 'tabler:sitemap',
        children: [
            {
                key: 'second-level',
                label: 'Second Level',
                children: [
                    { key: 'item-2-1', label: 'Item 2.1', url: '#' },
                    { key: 'item-2-2', label: 'Item 2.2', url: '#' }
                ]
            },
            {
                key: 'third-level',
                label: 'Third Level',
                children: [
                    { key: 'item-3-1', label: 'Item 1', url: '#' },
                    {
                        key: 'fourth-level',
                        label: 'Item 2',
                        children: [
                            { key: 'item-4-1', label: 'Item 3.1', url: '#' },
                            { key: 'item-4-2', label: 'Item 3.2', url: '#' }
                        ]
                    }
                ]
            }
        ]
    },
    { key: 'disabled-menu', label: 'Disabled Menu', icon: 'tabler:ban', url: '#!', isDisabled: true },
    { key: 'special-menu', label: 'Special Menu', icon: 'tabler:star', url: '#!', isSpecial: true }
]

export const horizontalMenuItems: MenuItemType[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: 'tabler:layout-dashboard',
    url: '/dashboard',
  },
  {
    key: 'pages',
    label: 'Pages',
    icon: 'tabler:files',
    children: [
      {
        key: 'version-1',
        label: 'Authentication 1',
        icon: 'tabler:shield-lock',
        children: [
          { key: 'sign-in', label: 'Sign In', url: '/auth-1/sign-in' },
          { key: 'sign-up', label: 'Sign Up', url: '/auth-1/sign-up' },
          { key: 'reset-pass', label: 'Reset Password', url: '/auth-1/reset-password' },
          { key: 'new-pass', label: 'New Password', url: '/auth-1/new-password' },
          { key: 'two-factor', label: 'Two Factor', url: '/auth-1/two-factor' },
          { key: 'lock-screen', label: 'Lock Screen', url: '/auth-1/lock-screen' },
          { key: 'success-mail', label: 'Success Mail', url: '/auth-1/success-mail' },
          { key: 'login-pin', label: 'Login with PIN', url: '/auth-1/login-pin' },
          { key: 'delete-account', label: 'Delete Account', url: '/auth-1/delete-account' },
        ],
      },
      {
        key: 'version-2',
        label: 'Authentication 2',
        icon: 'tabler:user-hexagon',
        children: [
          { key: 'sign-in-2', label: 'Sign In', url: '/auth-2/sign-in' },
          { key: 'sign-up-2', label: 'Sign Up', url: '/auth-2/sign-up' },
          { key: 'reset-pass-2', label: 'Reset Password', url: '/auth-2/reset-password' },
          { key: 'new-pass-2', label: 'New Password', url: '/auth-2/new-password' },
          { key: 'two-factor-2', label: 'Two Factor', url: '/auth-2/two-factor' },
          { key: 'lock-screen-2', label: 'Lock Screen', url: '/auth-2/lock-screen' },
          { key: 'success-mail-2', label: 'Success Mail', url: '/auth-2/success-mail' },
          { key: 'login-pin-2', label: 'Login with PIN', url: '/auth-2/login-pin' },
          { key: 'delete-account-2', label: 'Delete Account', url: '/auth-2/delete-account' },
        ],
      },
      {
        key: 'version-3',
        label: 'Authentication 3',
        icon: 'tabler:lock-access',
        children: [
          { key: 'sign-in-3', label: 'Sign In', url: '/auth-3/sign-in' },
          { key: 'sign-up-3', label: 'Sign Up', url: '/auth-3/sign-up' },
          { key: 'reset-pass-3', label: 'Reset Password', url: '/auth-3/reset-password' },
          { key: 'new-pass-3', label: 'New Password', url: '/auth-3/new-password' },
          { key: 'two-factor-3', label: 'Two Factor', url: '/auth-3/two-factor' },
          { key: 'lock-screen-3', label: 'Lock Screen', url: '/auth-3/lock-screen' },
          { key: 'success-mail-3', label: 'Success Mail', url: '/auth-3/success-mail' },
          { key: 'login-pin-3', label: 'Login with PIN', url: '/auth-3/login-pin' },
          { key: 'delete-account-3', label: 'Delete Account', url: '/auth-3/delete-account' },
        ],
      },
      {
        key: 'error',
        label: 'Error Pages',
        icon: 'tabler:alert-hexagon',
        children: [
          { key: 'error-400', label: '400', url: '/error/400' },
          { key: 'error-401', label: '401', url: '/error/401' },
          { key: 'error-403', label: '403', url: '/error/403' },
          { key: 'error-404', label: '404', url: '/error/404' },
          { key: 'error-408', label: '408', url: '/error/408' },
          { key: 'error-500', label: '500', url: '/error/500' },
          { key: 'maintenance', label: 'Maintenance', url: '/maintenance' },
        ],
      },
    ],
  },
  {
    key: 'layouts',
    label: 'Layouts',
    icon: 'tabler:layout',
    children: [
      {
        key: 'layout-options',
        label: 'Layout Options',
        icon: 'tabler:layout',
        children: [
          { key: 'scrollable', label: 'Scrollable', url: '/layouts/scrollable' },
          { key: 'compact', label: 'Compact', url: '/layouts/compact' },
          { key: 'boxed', label: 'Boxed', url: '/layouts/boxed' },
          { key: 'horizontal', label: 'Horizontal', url: '/layouts/horizontal' },
        ],
      },
      {
        key: 'sidebars',
        label: 'Sidebars',
        icon: 'tabler:layout-sidebar',
        children: [
          { key: 'compact-menu', label: 'Compact Menu', url: '/layouts/sidebars/compact' },
          { key: 'icon-view-menu', label: 'Icon View Menu', url: '/layouts/sidebars/icon-view' },
          { key: 'on-hover-menu', label: 'On Hover Menu', url: '/layouts/sidebars/on-hover' },
          {
            key: 'on-hover-active-menu',
            label: 'On Hover Active Menu',
            url: '/layouts/sidebars/on-hover-active',
          },
          { key: 'offcanvas-menu', label: 'Offcanvas Menu', url: '/layouts/sidebars/offcanvas' },
          {
            key: 'no-icons-with-lines-menu',
            label: 'No Icons With Lines',
            url: '/layouts/sidebars/no-icons-with-lines',
          },
          {
            key: 'with-lines-menu',
            label: 'Sidebar With Lines',
            url: '/layouts/sidebars/with-lines',
          },
          { key: 'light-menu', label: 'Light Menu', url: '/layouts/sidebars/light' },
          { key: 'gradient-menu', label: 'Gradient Menu', url: '/layouts/sidebars/gradient' },
          { key: 'gray-menu', label: 'Gray Menu', url: '/layouts/sidebars/gray' },
          { key: 'image-menu', label: 'Image Menu', url: '/layouts/sidebars/image' },
        ],
      },
      {
        key: 'topbars',
        label: 'Topbar',
        icon: 'tabler:box-align-top',
        children: [
          { key: 'dark-topbar', label: 'Dark Topbar', url: '/layouts/topbars/dark' },
          { key: 'gray-topbar', label: 'Gray Topbar', url: '/layouts/topbars/gray' },
          { key: 'gradient-topbar', label: 'Gradient Topbar', url: '/layouts/topbars/gradient' },
          {
            key: 'with-sub-items-topbar',
            label: 'Topbar with Sub Items',
            url: '/layouts/topbars/with-sub-items',
          },
          {
            key: 'with-tools-topbar',
            label: 'Topbar with Tools',
            url: '/layouts/topbars/with-tools',
          },
        ],
      },
    ],
  },
  {
    key: 'landing',
    label: 'Landing',
    icon: 'tabler:rocket',
    url: '/landing',
  },
]
