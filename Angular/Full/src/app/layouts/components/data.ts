import {MenuItemType} from '@/app/types/layout';

type UserDropdownItemType = {
    label?: string;
    icon?: string;
    url?: string;
    isDivider?: boolean;
    isHeader?: boolean;
    class?: string;
}

export const userDropdownItems: UserDropdownItemType[] = [
    {
        label: 'Welcome back!',
        isHeader: true
    },
    {
        label: 'Profile',
        icon: 'tablerUserCircle',
        url: '/pages/profile'
    },
    {
        label: 'Notifications',
        icon: 'tablerBellRinging',
        url: ''
    },
    {
        label: 'Balance: $985.25',
        icon: 'tablerCreditCard',
        url: '',
    },
    {
        label: 'Account Settings',
        icon: 'tablerSettings2',
        url: ''
    },
    {
        label: 'Support Center',
        icon: 'tablerHeadset',
        url: ''
    },
    {
        isDivider: true
    },
    {
        label: 'Lock Screen',
        icon: 'tablerLock',
        url: '/auth/lock-screen'
    },
    {
        label: 'Log Out',
        icon: 'tablerLogout2',
        url: '',
        class: 'text-danger fw-semibold'
    }
];

export const menuItems: MenuItemType[] = [
    {label: 'Menu', isTitle: true},
    {
        label: 'Dashboards',
        icon: 'tablerLayoutDashboard',
        isCollapsed: true,
        badge: {variant: 'success', text: '5'},
        children: [
            {label: 'Dashboard v.1', url: '/dashboards/dashboard-1'},
            {label: 'Dashboard v.2', url: '/dashboards/dashboard-2'},
            {label: 'Dashboard v.3', url: '/dashboards/dashboard-3'},
            {label: 'Dashboard v.4', url: '#!', isDisabled: true, badge: {variant: 'light', text: 'Soon'}},
            {label: 'Dashboard v.5', url: '#!', isDisabled: true, badge: {variant: 'light', text: 'Soon'}},
        ]
    },
    {
        label: 'Landing Page',
        icon: 'tablerStackFront',
        url: '/landing',
    },

    {label: 'Apps', isTitle: true},
    {
        label: 'Ecommerce',
        icon: 'tablerBasket',
        isCollapsed: true,
        children: [
            {
                label: 'Products',
                isCollapsed: true,
                children: [
                    {label: 'Products', url: '/ecommerce/products'},
                    {label: 'Products Grid', url: '/ecommerce/products/grid'},
                    {label: 'Product Details', url: '/ecommerce/products/WB-10245'},
                    {label: 'Add Product', url: '/ecommerce/products/add'},
                ]
            },
            {label: 'Categories', url: '/ecommerce/categories'},
            {
                label: 'Orders',
                isCollapsed: true,
                children: [
                    {label: 'Orders', url: '/ecommerce/orders'},
                    {label: 'Order Details', url: '/ecommerce/orders/WB20103'},
                ]
            },
            {label: 'Customers', url: '/ecommerce/customers'},
            {
                label: 'Sellers',
                isCollapsed: true,
                children: [
                    {label: 'Sellers', url: '/ecommerce/sellers'},
                    {label: 'Seller Details', url: '/ecommerce/sellers/2'},
                ]
            },
            {label: 'Reviews', url: '/ecommerce/reviews'},
            {
                label: 'Reports',
                isCollapsed: true,
                children: [
                    {label: 'Product Views', url: '/ecommerce/product-views'},
                    {label: 'sales', url: '/ecommerce/sales'},
                ]
            },

        ]
    },
    {
        label: 'Email',
        icon: 'tablerMail',
        badge: {
            text: 'New',
            variant: 'danger',
        },
        isCollapsed: true,
        children: [
            {label: 'Inbox', url: '/apps/email/inbox'},
            {label: 'Details', url: '/apps/email/detail'},
            {label: 'Compose', url: '/apps/email/compose'},
        ]
    },
    {
        label: 'Users',
        icon: 'tablerUsers',
        isCollapsed: true,
        children: [
            {label: 'Contacts', url: '/apps/users/contacts'},
            {label: 'Roles', url: '/apps/users/roles'},
            {label: 'Permissions', url: '/apps/users/permissions'},
        ]
    },
    {
        label: 'Projects',
        icon: 'tablerBriefcase',
        isCollapsed: true,
        children: [
            {label: 'My Projects', url: '/apps/projects'},
            {label: 'Projects List', url: '/apps/projects/list'},
            {label: 'View Project', url: '/apps/projects/view'},
            {label: 'Kanban Board', url: '/apps/projects/kanban-board'},
            {label: 'Team Board', url: '/apps/projects/team-board'},
            {label: 'Activity Stream', url: '/apps/projects/activity-stream'},
        ]
    },
    {
        label: 'File Manager',
        icon: 'tablerFolder',
        url: '/apps/file-manager',
    },
    {
        label: 'Chat',
        icon: 'tablerMessageDots',
        url: '/apps/chat',
    },
    {
        label: 'Calendar',
        icon: 'tablerCalendar',
        url: '/apps/calendar',
    },
    {
        label: 'Invoice',
        icon: 'tablerInvoice',
        isCollapsed: true,
        children: [
            {label: 'Invoices', url: '/invoices'},
            {label: 'New Invoice', url: '/invoices/new'},
            {label: 'Single Invoice', url: '/invoice/INS-0120010'},
        ]
    },
    {
        label: 'Other Apps',
        icon: 'tablerApps',
        isCollapsed: true,
        children: [
            {label: 'Companies', url: '/other-apps/companies'},
            {label: 'Clients', url: '/other-apps/clients'},
            {label: 'Outlook View', url: '/other-apps/outlook-view'},
            {label: 'Vote List', url: '/other-apps/vote-list'},
            {label: 'Issue Tracker', url: '/other-apps/issue-tracker'},
            {label: 'API Keys', url: '/other-apps/api-keys'},
            {label: 'Blog', url: '/other-apps/blog'},
            {label: 'Article', url: '/other-apps/article'},
            {label: 'Pin Board', url: '/other-apps/pin-board'},
            {label: 'Forum View', url: '/other-apps/forum-view'},
            {label: 'Forum Post', url: '/other-apps/forum-post'},
        ]
    },
    {label: 'Custom Pages', isTitle: true},
    {
        label: 'Pages',
        icon: 'tablerFiles',
        isCollapsed: true,
        children: [
            {label: 'Profile', url: '/pages/profile'},
            {label: 'FAQ', url: '/pages/faq'},
            {label: 'Pricing', url: '/pages/pricing'},
            {label: 'Empty Page', url: '/pages/empty-page'},
            {label: 'Timeline', url: '/pages/timeline'},
            {label: 'Search Results', url: '/pages/search-results'},
            {label: 'Coming Soon', url: '/coming-soon'},
            {label: 'Terms & Conditions', url: '/pages/terms-and-conditions'},
        ]
    },
    {
        label: 'Miscellaneous',
        icon: 'tablerPackage',
        isCollapsed: true,
        children: [
            {label: 'Text Diff', url: '/miscellaneous/text-diff'},
            {label: 'PDF Viewer', url: '/miscellaneous/pdf-viewer'},
            {label: 'Sweet Alerts', url: '/miscellaneous/sweet-alerts'},
            {label: 'Idle Timer', url: '/miscellaneous/idle-timer'},
            {label: 'Password Meter', url: '/miscellaneous/password-meter'},
            {label: 'Live Favicon', url: '/miscellaneous/live-favicon'},
            {label: 'Clipboard', url: '/miscellaneous/clipboard'},
            {label: 'Loading Buttons', url: '/miscellaneous/loading-buttons'},
            {label: 'Gallery', url: '/miscellaneous/gallery'},
            {label: 'Masonry', url: '/miscellaneous/masonry'},
            {label: 'Tour', url: '/miscellaneous/tour'},
            {label: 'Animation', url: '/miscellaneous/animation'},
        ]
    },
    {
        label: 'Authentication',
        icon: 'tablerLock',
        isCollapsed: true,
        children: [
            {
                label: 'Version 1',
                isCollapsed: true,
                children: [
                    {label: 'Sign In', url: '/auth/sign-in'},
                    {label: 'Sign Up', url: '/auth/sign-up'},
                    {label: 'Reset Password', url: '/auth/reset-pw'},
                    {label: 'New Password', url: '/auth/new-pw'},
                    {label: 'Two Factor', url: '/auth/two-factor'},
                    {label: 'Lock Screen', url: '/auth/lock-screen'},
                    {label: 'Success Mail', url: '/auth/success-mail'},
                    {label: 'Login with PIN', url: '/auth/login-pin'},
                    {label: 'Delete Account', url: '/auth/delete-account'},
                ]
            },
            {
                label: 'Version 2',
                isCollapsed: true,
                children: [
                    {label: 'Sign In', url: '/auth-2/sign-in'},
                    {label: 'Sign Up', url: '/auth-2/sign-up'},
                    {label: 'Reset Password', url: '/auth-2/reset-pw'},
                    {label: 'New Password', url: '/auth-2/new-pw'},
                    {label: 'Two Factor', url: '/auth-2/two-factor'},
                    {label: 'Lock Screen', url: '/auth-2/lock-screen'},
                    {label: 'Success Mail', url: '/auth-2/success-mail'},
                    {label: 'Login with PIN', url: '/auth-2/login-pin'},
                    {label: 'Delete Account', url: '/auth-2/delete-account'},
                ]
            },
            {
                label: 'Version 3',
                isCollapsed: true,
                children: [
                    {label: 'Sign In', url: '/auth-3/sign-in'},
                    {label: 'Sign Up', url: '/auth-3/sign-up'},
                    {label: 'Reset Password', url: '/auth-3/reset-pw'},
                    {label: 'New Password', url: '/auth-3/new-pw'},
                    {label: 'Two Factor', url: '/auth-3/two-factor'},
                    {label: 'Lock Screen', url: '/auth-3/lock-screen'},
                    {label: 'Success Mail', url: '/auth-3/success-mail'},
                    {label: 'Login with PIN', url: '/auth-3/login-pin'},
                    {label: 'Delete Account', url: '/auth-3/delete-account'},
                ]
            },
        ]
    },
    {
        label: 'Error Pages',
        icon: 'tablerAlertHexagon',
        isCollapsed: true,
        children: [
            {label: '400', url: '/error/400'},
            {label: '401', url: '/error/401'},
            {label: '403', url: '/error/403'},
            {label: '404', url: '/error/404'},
            {label: '408', url: '/error/408'},
            {label: '500', url: '/error/500'},
            {label: 'Maintenance', url: '/maintenance'},
        ]
    },
    {label: 'Layouts', isTitle: true},
    {
        label: 'Layout Options',
        icon: 'tablerLayout',
        isCollapsed: true,
        children: [
            {label: 'Scrollable', url: '/layouts/scrollable'},
            {label: 'Compact', url: '/layouts/compact'},
            {label: 'Boxed', url: '/layouts/boxed'},
            {label: 'Horizontal', url: '/layouts/horizontal'},
            {label: 'Preloader', url: '/layouts/preloader'},
        ]
    },
    {
        label: 'Sidebars',
        icon: 'tablerLayoutSidebar',
        isCollapsed: true,
        children: [
            {label: 'Light Menu', url: '/layouts/sidebars/light'},
            {label: 'Gradient Menu', url: '/layouts/sidebars/gradient'},
            {label: 'Gray Menu', url: '/layouts/sidebars/gray'},
            {label: 'Image Menu', url: '/layouts/sidebars/image'},
            {label: 'Compact Menu', url: '/layouts/sidebars/compact'},
            {label: 'Icon View Menu', url: '/layouts/sidebars/icon-view'},
            {label: 'On Hover Menu', url: '/layouts/sidebars/on-hover'},
            {label: 'On Hover Active', url: '/layouts/sidebars/on-hover-active'},
            {label: 'Offcanvas Menu', url: '/layouts/sidebars/offcanvas'},
            {label: 'No Icons with Lines', url: '/layouts/sidebars/no-icons-with-lines'},
            {label: 'Sidebar with Lines', url: '/layouts/sidebars/with-lines'},
        ]
    },
    {
        label: 'Topbars',
        icon: 'tablerLayoutNavbar',
        isCollapsed: true,
        children: [
            {label: 'Dark Topbar', url: '/layouts/topbars/dark'},
            {label: 'Gray Topbar', url: '/layouts/topbars/gray'},
            {label: 'Gradient Topbar', url: '/layouts/topbars/gradient'},
            {label: 'Topbar with Sub Items', url: '/layouts/topbars/with-sub-items'},
            {label: 'Topbar with Tools', url: '/layouts/topbars/with-tools'},
        ]
    },
    {label: 'Components', isTitle: true},
    {
        label: 'Base UI',
        icon: 'tablerPalette',
        isCollapsed: true,
        children: [
            {label: 'Accordions', url: '/ui/accordions'},
            {label: 'Alerts', url: '/ui/alerts'},
            {label: 'Images', url: '/ui/images'},
            {label: 'Badges', url: '/ui/badges'},
            {label: 'Breadcrumb', url: '/ui/breadcrumb'},
            {label: 'Buttons', url: '/ui/buttons'},
            {label: 'Cards', url: '/ui/cards'},
            {label: 'Carousel', url: '/ui/carousel'},
            {label: 'Collapse', url: '/ui/collapse'},
            {label: 'Colors', url: '/ui/colors'},
            {label: 'Dropdowns', url: '/ui/dropdowns'},
            {label: 'Videos', url: '/ui/videos'},
            {label: 'Grid Options', url: '/ui/grid-options'},
            {label: 'Links', url: '/ui/links'},
            {label: 'List Group', url: '/ui/list-groups'},
            {label: 'Modals', url: '/ui/modals'},
            {label: 'Notifications', url: '/ui/notifications'},
            {label: 'Offcanvas', url: '/ui/offcanvas'},
            {label: 'Placeholders', url: '/ui/placeholders'},
            {label: 'Pagination', url: '/ui/pagination'},
            {label: 'Popovers', url: '/ui/popovers'},
            {label: 'Progress', url: '/ui/progress'},
            {label: 'Srollspy', url: '/ui/scrollspy'},
            {label: 'Spinners', url: '/ui/spinners'},
            {label: 'Tabs', url: '/ui/tabs'},
            {label: 'Tooltips', url: '/ui/tooltips'},
            {label: 'Typography', url: '/ui/typography'},
            {label: 'Utilities', url: '/ui/utilities'},

        ]
    },
    {
        label: 'Widgets',
        icon: 'tablerCategory',
        url: '/widgets',
    },
    {
        label: 'Metrics',
        icon: 'tablerChartHistogram',
        url: '/metrics',
    },
    {
        label: 'Graphs',
        icon: 'tablerChartDonut',
        isCollapsed: true,
        children: [
            {
                label: 'Apex Charts',
                isCollapsed: true,
                children: [
                    {label: 'Area', url: '/graphs/apex/area'},
                    {label: 'Bar', url: '/graphs/apex/bar'},
                    {label: 'Bubble', url: '/graphs/apex/bubble'},
                    {label: 'Candlestick', url: '/graphs/apex/candlestick'},
                    {label: 'Column', url: '/graphs/apex/column'},
                    {label: 'Heatmap', url: '/graphs/apex/heatmap'},
                    {label: 'Line', url: '/graphs/apex/line'},
                    {label: 'Mixed', url: '/graphs/apex/mixed'},
                    {label: 'Timeline', url: '/graphs/apex/timeline'},
                    {label: 'Boxplot', url: '/graphs/apex/boxplot'},
                    {label: 'Treemap', url: '/graphs/apex/treemap'},
                    {label: 'Pie', url: '/graphs/apex/pie'},
                    {label: 'Radar', url: '/graphs/apex/radar'},
                    {label: 'RadialBar', url: '/graphs/apex/radialbar'},
                    {label: 'Scatter', url: '/graphs/apex/scatter'},
                    {label: 'Polar Area', url: '/graphs/apex/polar-area'},
                    {label: 'Sparklines', url: '/graphs/apex/sparklines'},
                    {label: 'Range', url: '/graphs/apex/range'},
                    {label: 'Funnel', url: '/graphs/apex/funnel'},
                    {label: 'Slope', url: '/graphs/apex/slope'},
                ]
            },
            {
                label: 'Echarts',
                isCollapsed: true,
                children: [
                    {label: 'Line', url: '/graphs/echarts/line'},
                    {label: 'Bar', url: '/graphs/echarts/bar'},
                    {label: 'Pie', url: '/graphs/echarts/pie'},
                    {label: 'Scatter', url: '/graphs/echarts/scatter'},
                    {label: 'GEO Map', url: '/graphs/echarts/geo-map'},
                    {label: 'Gauge', url: '/graphs/echarts/gauge'},
                    {label: 'Candlestick', url: '/graphs/echarts/candlestick'},
                    {label: 'Area', url: '/graphs/echarts/area'},
                    {label: 'Radar', url: '/graphs/echarts/radar'},
                    {label: 'Heatmap', url: '/graphs/echarts/heatmap'},
                    {label: 'Other', url: '/graphs/echarts/other'},
                ]
            },
            {label: 'Apex Tree', url: '/charts/apextree'},
            {label: 'Apex Sankey', url: '/charts/apexsankey'},
        ]
    },
    {
        label: 'Forms',
        icon: 'tablerCheckupList',
        isCollapsed: true,
        children: [
            {label: 'Basic Elements', url: '/forms/basic-elements'},
            {label: 'Pickers', url: '/forms/pickers'},
            {label: 'Select', url: '/forms/select'},
            {label: 'Validation', url: '/forms/validation'},
            {label: 'Wizard', url: '/forms/wizard'},
            {label: 'File uploads', url: '/forms/file-uploads'},
            {label: 'Text Editors', url: '/forms/text-editors'},
            {label: 'Range Slider', url: '/forms/range-slider'},
            {label: 'Layouts', url: '/forms/layouts'},
            {label: 'Other Plugins', url: '/forms/other-plugins'},
        ]
    },
    {
        label: 'Tables',
        icon: 'tablerTableColumn',
        isCollapsed: true,
        children: [
            {label: 'Static Tables', url: '/tables/static'},
            {label: 'Custom Tables', url: '/tables/custom'},
            {
                label: 'Tanstack',
                isCollapsed: true,
                children: [
                    {label: 'Table With Search', url: '/tanstack/table-with-search'},
                    {label: 'Table With Delete Button', url: '/tanstack/table-with-delete-button'},
                    {label: 'Table With Pagination', url: '/tanstack/table-with-pagination'},
                    {label: 'Table With Sort', url: '/tanstack/table-with-sort'},
                    {label: 'Table With Checkbox', url: '/tanstack/table-with-checkbox'},
                    {label: 'Table With Filters', url: '/tanstack/table-with-filters'},

                ]
            },

        ]
    },
    {
        label: 'Icons',
        icon: 'tablerIcons',
        isCollapsed: true,
        children: [
            {label: 'Tabler', url: '/icons/tabler'},
            {label: 'Lucide', url: '/icons/lucide'},
            {label: 'Flags', url: '/icons/flags'},
        ],
    },
    {
        label: 'Maps',
        icon: 'tablerMap',
        isCollapsed: true,
        children: [
            {label: 'Google Maps', url: '/maps/google'},
            {label: 'Vector Maps', url: '/maps/vector'},
            {label: 'Leaflet Maps', url: '/maps/leaflet'},
        ]
    },
    {label: 'Menu Items', isTitle: true},
    {
        label: 'Menu Levels',
        icon: 'tablerSitemap',
        isCollapsed: true,
        children: [
            {
                label: 'Second Level',
                isCollapsed: true,
                children: [
                    {label: 'Item 2.1', url: 'javascript: void(0);'},
                    {label: 'Item 2.2', url: 'javascript: void(0);'}
                ]
            },
            {
                label: 'Third Level',
                isCollapsed: true,
                children: [
                    {label: 'Item 1', url: 'javascript: void(0);'},
                    {
                        label: 'Item 2',
                        isCollapsed: true,
                        children: [
                            {label: 'Item 3.1', url: 'javascript: void(0);'},
                            {label: 'Item 3.2', url: 'javascript: void(0);'}
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: 'Disabled Menu',
        icon: 'tablerBan',
        url: '#!',
        isDisabled: true
    },
    {
        label: 'Special Menu',
        icon: 'tablerStar',
        url: '#!',
        isSpecial: true
    }
];

export const horizontalMenuItems: MenuItemType[] = [
    {
        label: 'Dashboards',
        icon: 'tablerLayoutDashboard',
        children: [
            {label: 'Dashboard v.1', url: '/dashboards/dashboard-1'},
            {label: 'Dashboard v.2', url: '/dashboards/dashboard-2'},
            {label: 'Dashboard v.3', url: '/dashboards/dashboard-3'},
            {label: 'Dashboard v.4', url: '#!', isDisabled: true, badge: {variant: 'light', text: 'Soon'}},
            {label: 'Dashboard v.5', url: '#!', isDisabled: true, badge: {variant: 'light', text: 'Soon'}},
        ]
    },
    {
        label: 'Apps',
        icon: 'tablerApps',
        children: [
            {
                label: 'Calendar',
                icon: 'tablerCalendar',
                url: '/apps/calendar',
            },
            {
                label: 'Chat',
                icon: 'tablerMessageDots',
                url: '/apps/chat',
            },
            {
                label: 'File Manager',
                icon: 'tablerFolder',
                url: '/apps/file-manager',
            },
            {
                label: 'Ecommerce',
                icon: 'tablerBasket',
                isCollapsed: true,
                children: [
                    {
                        label: 'Products',
                        isCollapsed: true,
                        children: [
                            {label: 'Products', url: '/ecommerce/products'},
                            {label: 'Products Grid', url: '/ecommerce/products/grid'},
                            {label: 'Product Details', url: '/ecommerce/products/WB-10245'},
                            {label: 'Add Product', url: '/ecommerce/products/add'},
                        ]
                    },
                    {label: 'Categories', url: '/ecommerce/categories'},
                    {
                        label: 'Orders',
                        isCollapsed: true,
                        children: [
                            {label: 'Orders', url: '/ecommerce/orders'},
                            {label: 'Order Details', url: '/ecommerce/orders/WB20103'},
                        ]
                    },
                    {label: 'Customers', url: '/ecommerce/customers'},
                    {
                        label: 'Sellers',
                        isCollapsed: true,
                        children: [
                            {label: 'Sellers', url: '/ecommerce/sellers'},
                            {label: 'Seller Details', url: '/ecommerce/sellers/2'},
                        ]
                    },
                    {label: 'Reviews', url: '/ecommerce/reviews'},
                    {
                        label: 'Reports',
                        isCollapsed: true,
                        children: [
                            {label: 'Product Views', url: '/ecommerce/product-views'},
                            {label: 'sales', url: '/ecommerce/sales'},
                        ]
                    },

                ]
            },
            {
                label: 'Email',
                icon: 'tablerMail',
                badge: {
                    text: 'New',
                    variant: 'danger',
                },
                isCollapsed: true,
                children: [
                    {label: 'Inbox', url: '/apps/email/inbox'},
                    {label: 'Details', url: '/apps/email/detail'},
                    {label: 'Compose', url: '/apps/email/compose'},
                ]
            },
            {
                label: 'Users',
                icon: 'tablerUsers',
                isCollapsed: true,
                children: [
                    {label: 'Contacts', url: '/apps/users/contacts'},
                    {label: 'Roles', url: '/apps/users/roles'},
                    {label: 'Permissions', url: '/apps/users/permissions'},
                ]
            },
            {
                label: 'Projects',
                icon: 'tablerBriefcase',
                isCollapsed: true,
                children: [
                    {label: 'My Projects', url: '/apps/projects'},
                    {label: 'Projects List', url: '/apps/projects/list'},
                    {label: 'View Project', url: '/apps/projects/view'},
                    {label: 'Kanban Board', url: '/apps/projects/kanban-board'},
                    {label: 'Team Board', url: '/apps/projects/team-board'},
                    {label: 'Activity Stream', url: '/apps/projects/activity-stream'},
                ]
            },
            {
                label: 'Invoice',
                icon: 'tablerInvoice',
                isCollapsed: true,
                children: [
                    {label: 'Invoices', url: '/invoices'},
                    {label: 'New Invoice', url: '/invoices/new'},
                    {label: 'Single Invoice', url: '/invoice/INS-0120010'},
                ]
            },
            {
                label: 'Other Apps',
                icon: 'tablerCircleDashedPlus',
                isCollapsed: true,
                children: [
                    {label: 'Companies', url: '/other-apps/companies'},
                    {label: 'Clients', url: '/other-apps/clients'},
                    {label: 'Outlook View', url: '/other-apps/outlook-view'},
                    {label: 'Vote List', url: '/other-apps/vote-list'},
                    {label: 'Issue Tracker', url: '/other-apps/issue-tracker'},
                    {label: 'API Keys', url: '/other-apps/api-keys'},
                    {label: 'Blog', url: '/other-apps/blog'},
                    {label: 'Article', url: '/other-apps/article'},
                    {label: 'Pin Board', url: '/other-apps/pin-board'},
                    {label: 'Forum View', url: '/other-apps/forum-view'},
                    {label: 'Forum Post', url: '/other-apps/forum-post'},
                ]
            },
        ]
    },
    {
        label: 'Pages',
        icon: 'tablerFiles',
        children: [
            {
                label: 'General Pages',
                icon: 'tablerFiles',
                isCollapsed: true,
                children: [
                    {label: 'Profile', url: '/pages/profile'},
                    {label: 'FAQ', url: '/pages/faq'},
                    {label: 'Pricing', url: '/pages/pricing'},
                    {label: 'Empty Page', url: '/pages/empty-page'},
                    {label: 'Timeline', url: '/pages/timeline'},
                    {label: 'Search Results', url: '/pages/search-results'},
                    {label: 'Coming Soon', url: '/coming-soon'},
                    {label: 'Terms & Conditions', url: '/pages/terms-and-conditions'},
                ]
            },
            {
                label: 'Miscellaneous',
                icon: 'tablerPackage',
                isCollapsed: true,
                children: [
                    {label: 'Text Diff', url: '/miscellaneous/text-diff'},
                    {label: 'PDF Viewer', url: '/miscellaneous/pdf-viewer'},
                    {label: 'Sweet Alerts', url: '/miscellaneous/sweet-alerts'},
                    {label: 'Idle Timer', url: '/miscellaneous/idle-timer'},
                    {label: 'Password Meter', url: '/miscellaneous/password-meter'},
                    {label: 'Live Favicon', url: '/miscellaneous/live-favicon'},
                    {label: 'Clipboard', url: '/miscellaneous/clipboard'},
                    {label: 'Loading Buttons', url: '/miscellaneous/loading-buttons'},
                    {label: 'Gallery', url: '/miscellaneous/gallery'},
                    {label: 'Masonry', url: '/miscellaneous/masonry'},
                    {label: 'Tour', url: '/miscellaneous/tour'},
                    {label: 'Animation', url: '/miscellaneous/animation'},
                ]
            },
            {
                label: 'Authentication 1',
                icon: 'tablerShieldLock',
                children: [
                    {label: 'Sign In', url: '/auth/sign-in'},
                    {label: 'Sign Up', url: '/auth/sign-up'},
                    {label: 'Reset Password', url: '/auth/reset-pw'},
                    {label: 'New Password', url: '/auth/new-pw'},
                    {label: 'Two Factor', url: '/auth/two-factor'},
                    {label: 'Lock Screen', url: '/auth/lock-screen'},
                    {label: 'Success Mail', url: '/auth/success-mail'},
                    {label: 'Login with PIN', url: '/auth/login-pin'},
                    {label: 'Delete Account', url: '/auth/delete-account'},
                ]
            },
            {
                label: 'Authentication 2',
                icon: 'tablerUserHexagon',
                children: [
                    {label: 'Sign In', url: '/auth-2/sign-in'},
                    {label: 'Sign Up', url: '/auth-2/sign-up'},
                    {label: 'Reset Password', url: '/auth-2/reset-pw'},
                    {label: 'New Password', url: '/auth-2/new-pw'},
                    {label: 'Two Factor', url: '/auth-2/two-factor'},
                    {label: 'Lock Screen', url: '/auth-2/lock-screen'},
                    {label: 'Success Mail', url: '/auth-2/success-mail'},
                    {label: 'Login with PIN', url: '/auth-2/login-pin'},
                    {label: 'Delete Account', url: '/auth-2/delete-account'},
                ]
            },
            {
                label: 'Authentication 3',
                icon: 'tablerLockAccess',
                children: [
                    {label: 'Sign In', url: '/auth-3/sign-in'},
                    {label: 'Sign Up', url: '/auth-3/sign-up'},
                    {label: 'Reset Password', url: '/auth-3/reset-pw'},
                    {label: 'New Password', url: '/auth-3/new-pw'},
                    {label: 'Two Factor', url: '/auth-3/two-factor'},
                    {label: 'Lock Screen', url: '/auth-3/lock-screen'},
                    {label: 'Success Mail', url: '/auth-3/success-mail'},
                    {label: 'Login with PIN', url: '/auth-3/login-pin'},
                    {label: 'Delete Account', url: '/auth-3/delete-account'},
                ]
            },
            {
                label: 'Error Pages',
                icon: 'tablerAlertHexagon',
                children: [
                    {label: '400', url: '/error/400'},
                    {label: '401', url: '/error/401'},
                    {label: '403', url: '/error/403'},
                    {label: '404', url: '/error/404'},
                    {label: '408', url: '/error/408'},
                    {label: '500', url: '/error/500'},
                    {label: 'Maintenance', url: '/maintenance'},
                ]
            }
        ]
    },
    {
        label: 'Components',
        icon: 'tablerComponents',
        children: [
            {
                label: 'Base UI One',
                icon: 'tablerPalette',
                isCollapsed: true,
                children: [
                    {label: 'Accordions', url: '/ui/accordions'},
                    {label: 'Alerts', url: '/ui/alerts'},
                    {label: 'Images', url: '/ui/images'},
                    {label: 'Badges', url: '/ui/badges'},
                    {label: 'Breadcrumb', url: '/ui/breadcrumb'},
                    {label: 'Buttons', url: '/ui/buttons'},
                    {label: 'Cards', url: '/ui/cards'},
                    {label: 'Carousel', url: '/ui/carousel'},
                    {label: 'Collapse', url: '/ui/collapse'},
                    {label: 'Colors', url: '/ui/colors'},
                    {label: 'Dropdowns', url: '/ui/dropdowns'},
                    {label: 'Videos', url: '/ui/videos'},
                    {label: 'Grid Options', url: '/ui/grid-options'},
                ]
            },
            {
                label: 'Base UI Two',
                icon: 'tablerPalette',
                isCollapsed: true,
                children: [
                    {label: 'Links', url: '/ui/links'},
                    {label: 'List Group', url: '/ui/list-groups'},
                    {label: 'Modals', url: '/ui/modals'},
                    {label: 'Notifications', url: '/ui/notifications'},
                    {label: 'Offcanvas', url: '/ui/offcanvas'},
                    {label: 'Placeholders', url: '/ui/placeholders'},
                    {label: 'Pagination', url: '/ui/pagination'},
                    {label: 'Popovers', url: '/ui/popovers'},
                    {label: 'Progress', url: '/ui/progress'},
                    {label: 'Srollspy', url: '/ui/scrollspy'},
                    {label: 'Spinners', url: '/ui/spinners'},
                    {label: 'Tabs', url: '/ui/tabs'},
                    {label: 'Tooltips', url: '/ui/tooltips'},
                    {label: 'Typography', url: '/ui/typography'},
                    {label: 'Utilities', url: '/ui/utilities'},
                ]
            },
            {
                label: 'Widgets',
                icon: 'tablerCategory',
                url: '/widgets',
            },
            {
                label: 'Metrics',
                icon: 'tablerChartHistogram',
                url: '/metrics',
            },
            {
                label: 'Apex Charts 1',
                icon: 'tablerChartBar',
                isCollapsed: true,
                children: [
                    {label: 'Area', url: '/graphs/apex/area'},
                    {label: 'Bar', url: '/graphs/apex/bar'},
                    {label: 'Bubble', url: '/graphs/apex/bubble'},
                    {label: 'Candlestick', url: '/graphs/apex/candlestick'},
                    {label: 'Column', url: '/graphs/apex/column'},
                    {label: 'Heatmap', url: '/graphs/apex/heatmap'},
                    {label: 'Line', url: '/graphs/apex/line'},
                    {label: 'Mixed', url: '/graphs/apex/mixed'},
                    {label: 'Timeline', url: '/graphs/apex/timeline'},
                    {label: 'Boxplot', url: '/graphs/apex/boxplot'},
                    {label: 'Treemap', url: '/graphs/apex/treemap'},
                ]
            },
            {
                label: 'Apex Charts 2',
                icon: 'tablerChartBar',
                isCollapsed: true,
                children: [
                    {label: 'Pie', url: '/graphs/apex/pie'},
                    {label: 'Radar', url: '/graphs/apex/radar'},
                    {label: 'RadialBar', url: '/graphs/apex/radialbar'},
                    {label: 'Scatter', url: '/graphs/apex/scatter'},
                    {label: 'Polar Area', url: '/graphs/apex/polar-area'},
                    {label: 'Sparklines', url: '/graphs/apex/sparklines'},
                    {label: 'Range', url: '/graphs/apex/range'},
                    {label: 'Funnel', url: '/graphs/apex/funnel'},
                    {label: 'Slope', url: '/graphs/apex/slope'},
                    {label: 'Apex Tree', url: '/charts/apextree'},
                    {label: 'Apex Sankey', url: '/charts/apexsankey'},
                ]
            },
            {
                label: 'Echarts',
                icon: 'tablerChartPie',
                isCollapsed: true,
                children: [
                    {label: 'Line', url: '/graphs/echarts/line'},
                    {label: 'Bar', url: '/graphs/echarts/bar'},
                    {label: 'Pie', url: '/graphs/echarts/pie'},
                    {label: 'Scatter', url: '/graphs/echarts/scatter'},
                    {label: 'GEO Map', url: '/graphs/echarts/geo-map'},
                    {label: 'Gauge', url: '/graphs/echarts/gauge'},
                    {label: 'Candlestick', url: '/graphs/echarts/candlestick'},
                    {label: 'Area', url: '/graphs/echarts/area'},
                    {label: 'Radar', url: '/graphs/echarts/radar'},
                    {label: 'Heatmap', url: '/graphs/echarts/heatmap'},
                    {label: 'Other', url: '/graphs/echarts/other'},
                ]
            },
            {
                label: 'Forms',
                icon: 'tablerCheckupList',
                isCollapsed: true,
                children: [
                    {label: 'Basic Elements', url: '/forms/basic-elements'},
                    {label: 'Pickers', url: '/forms/pickers'},
                    {label: 'Select', url: '/forms/select'},
                    {label: 'Validation', url: '/forms/validation'},
                    {label: 'Wizard', url: '/forms/wizard'},
                    {label: 'File uploads', url: '/forms/file-uploads'},
                    {label: 'Text Editors', url: '/forms/text-editors'},
                    {label: 'Range Slider', url: '/forms/range-slider'},
                    {label: 'Layouts', url: '/forms/layouts'},
                    {label: 'Other Plugins', url: '/forms/other-plugins'},
                ]
            },
            {
                label: 'Icons',
                icon: 'tablerIcons',
                isCollapsed: true,
                children: [
                    {label: 'Tabler', url: '/icons/tabler'},
                    {label: 'Lucide', url: '/icons/lucide'},
                    {label: 'Flags', url: '/icons/flags'},
                ],
            },
            {
                label: 'Maps',
                icon: 'tablerMap',
                isCollapsed: true,
                children: [
                    {label: 'Google Maps', url: '/maps/google'},
                    {label: 'Vector Maps', url: '/maps/vector'},
                    {label: 'Leaflet Maps', url: '/maps/leaflet'},
                ]
            },
        ]
    },
    {
        label: 'Tables',
        icon: 'tablerTableColumn',
        isCollapsed: true,
        children: [
            {icon: 'tablerBorderAll', label: 'Static Tables', url: '/tables/static'},
            {icon: 'tablerStackForward', label: 'Custom Tables', url: '/tables/custom'},
            {
                icon: 'tablerTable',
                label: 'Tanstack Tables',
                isCollapsed: true,
                children: [
                    {label: 'Table With Search', url: '/tanstack/table-with-search'},
                    {label: 'Table With Delete Button', url: '/tanstack/table-with-delete-button'},
                    {label: 'Table With Pagination', url: '/tanstack/table-with-pagination'},
                    {label: 'Table With Sort', url: '/tanstack/table-with-sort'},
                    {label: 'Table With Checkbox', url: '/tanstack/table-with-checkbox'},
                    {label: 'Table With Filters', url: '/tanstack/table-with-filters'},
                ]
            },
        ]
    },
    {
        label: 'Layouts',
        icon: 'tablerLayout',
        children: [
            {
                label: 'Layout Options',
                icon: 'tablerLayout',
                children: [
                    {label: 'Scrollable', url: '/layouts/scrollable'},
                    {label: 'Compact', url: '/layouts/compact'},
                    {label: 'Boxed', url: '/layouts/boxed'},
                    {label: 'Horizontal', url: '/layouts/horizontal'},
                    {label: 'Preloader', url: '/layouts/preloader'},
                ]
            },
            {
                label: 'Sidebars',
                icon: 'tablerLayoutSidebar',
                children: [
                    {label: 'Light Menu', url: '/layouts/sidebars/light'},
                    {label: 'Gradient Menu', url: '/layouts/sidebars/gradient'},
                    {label: 'Gray Menu', url: '/layouts/sidebars/gray'},
                    {label: 'Image Menu', url: '/layouts/sidebars/image'},
                    {label: 'Compact Menu', url: '/layouts/sidebars/compact'},
                    {label: 'Icon View Menu', url: '/layouts/sidebars/icon-view'},
                    {label: 'On Hover Menu', url: '/layouts/sidebars/on-hover'},
                    {label: 'On Hover Active', url: '/layouts/sidebars/on-hover-active'},
                    {label: 'Offcanvas Menu', url: '/layouts/sidebars/offcanvas'},
                    {label: 'No Icons with Lines', url: '/layouts/sidebars/no-icons-with-lines'},
                    {label: 'Sidebar with Lines', url: '/layouts/sidebars/with-lines'},
                ]
            },
            {
                label: 'Topbars',
                icon: 'tablerLayoutNavbar',
                children: [
                    {label: 'Dark Topbar', url: '/layouts/topbars/dark'},
                    {label: 'Gray Topbar', url: '/layouts/topbars/gray'},
                    {label: 'Gradient Topbar', url: '/layouts/topbars/gradient'},
                    {label: 'Topbar with Sub Items', url: '/layouts/topbars/with-sub-items'},
                    {label: 'Topbar with Tools', url: '/layouts/topbars/with-tools'},
                ]
            }
        ]
    },
    {
        label: 'Landing',
        icon: 'tablerRocket',
        url: '/landing'
    }
];
