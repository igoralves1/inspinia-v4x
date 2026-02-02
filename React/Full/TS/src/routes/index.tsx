import { lazy } from 'react'
import { Navigate, type RouteObject } from 'react-router'
import MainLayout from '@/layouts/MainLayout.tsx'

// Dashboards
const Dashboard = lazy(() => import('@/views/dashboards/dashboard'))
const Dashboard2 = lazy(() => import('@/views/dashboards/dashboard2'))
const Dashboard3 = lazy(() => import('@/views/dashboards/dashboard3'))

// Landing
const Landing = lazy(() => import('@/views/landing'))

// Ecommerce
const ProductList = lazy(() => import('@/views/ecommerce/products'))
const ProductGrid = lazy(() => import('@/views/ecommerce/products-grid'))
const ProductDetails = lazy(() => import('@/views/ecommerce/products/[productId]'))
const AddProduct = lazy(() => import('@/views/ecommerce/add-product'))
const Categories = lazy(() => import('@/views/ecommerce/categories'))
const Orders = lazy(() => import('@/views/ecommerce/orders'))
const OrderDetails = lazy(() => import('@/views/ecommerce/orders/[orderId]'))
const Customers = lazy(() => import('@/views/ecommerce/customers'))
const Sellers = lazy(() => import('@/views/ecommerce/sellers'))
const SellerDetails = lazy(() => import('@/views/ecommerce/sellers/[sellerId]'))
const Reviews = lazy(() => import('@/views/ecommerce/reviews'))
const ProductViews = lazy(() => import('@/views/ecommerce/reports/product-views'))
const Sales = lazy(() => import('@/views/ecommerce/reports/sales'))

// Apps
const Inbox = lazy(() => import('@/views/apps/email/inbox'))
const InboxDetails = lazy(() => import('@/views/apps/email/inbox/[inboxId]'))
const EmailCompose = lazy(() => import('@/views/apps/email/email-compose'))

const Contacts = lazy(() => import('@/views/apps/users/contacts'))
const Roles = lazy(() => import('@/views/apps/users/roles'))
const Permissions = lazy(() => import('@/views/apps/users/permissions'))

const Projects = lazy(() => import('@/views/apps/projects/projects'))
const ProjectsList = lazy(() => import('@/views/apps/projects/projects-list'))
const ProjectDetails = lazy(() => import('@/views/apps/projects/projects/[projectId]'))
const KanbanBoard = lazy(() => import('@/views/apps/projects/kanban-board'))
const TeamBoard = lazy(() => import('@/views/apps/projects/team-board'))
const ActivityStream = lazy(() => import('@/views/apps/projects/activity-stream'))

const FileManager = lazy(() => import('@/views/apps/file-manager'))
const Chat = lazy(() => import('@/views/apps/chat'))
const Calendar = lazy(() => import('@/views/apps/calendar'))

const InvoiceList = lazy(() => import('@/views/apps/invoice/invoices'))
const InvoiceDetails = lazy(() => import('@/views/apps/invoice/invoices/[invoiceId]'))
const AddInvoice = lazy(() => import('@/views/apps/invoice/add-invoice'))

// Other Apps
const Companies = lazy(() => import('@/views/other-apps/companies'))
const Clients = lazy(() => import('@/views/other-apps/clients'))
const OutlookView = lazy(() => import('@/views/other-apps/outlook-view'))
const VoteList = lazy(() => import('@/views/other-apps/vote-list'))
const IssueTracker = lazy(() => import('@/views/other-apps/issue-tracker'))
const ApiKeys = lazy(() => import('@/views/other-apps/api-keys'))
const Blogs = lazy(() => import('@/views/other-apps/blogs'))
const Article = lazy(() => import('@/views/other-apps/article'))
const PinBoard = lazy(() => import('@/views/other-apps/pin-board'))
const ForumView = lazy(() => import('@/views/other-apps/forum-view'))
const ForumPost = lazy(() => import('@/views/other-apps/forum-post'))

// Pages
const Profile = lazy(() => import('@/views/pages/profile'))
const Faq = lazy(() => import('@/views/pages/faq'))
const Pricing = lazy(() => import('@/views/pages/pricing'))
const EmptyPage = lazy(() => import('@/views/pages/empty-page'))
const Timeline = lazy(() => import('@/views/pages/timeline'))
const SearchResults = lazy(() => import('@/views/pages/search-results'))
const ComingSoon = lazy(() => import('@/views/other-pages/coming-soon'))
const TermsConditions = lazy(() => import('@/views/pages/terms-conditions'))

// Miscellaneous
const NestableList = lazy(() => import('@/views/miscellaneous/nestable-list'))
const TextDifferent = lazy(() => import('@/views/miscellaneous/text-different'))
const PdfViewer = lazy(() => import('@/views/miscellaneous/pdf-viewer'))
const SweetAlert = lazy(() => import('@/views/miscellaneous/sweet-alert'))
const IdleTimer = lazy(() => import('@/views/miscellaneous/idle-timer'))
const PasswordMeter = lazy(() => import('@/views/miscellaneous/password-meter'))
const Clipboard = lazy(() => import('@/views/miscellaneous/clipboard'))
const TreeView = lazy(() => import('@/views/miscellaneous/tree-view'))
const LoadingButtons = lazy(() => import('@/views/miscellaneous/loading-buttons'))
const Gallery = lazy(() => import('@/views/miscellaneous/gallery'))
const Masonry = lazy(() => import('@/views/miscellaneous/masonry'))
const Tour = lazy(() => import('@/views/miscellaneous/tour'))
const Animation = lazy(() => import('@/views/miscellaneous/animation'))

// Auth
const Auth1SignIn = lazy(() => import('@/views/auth/auth-1/sign-in'))
const Auth1SignUp = lazy(() => import('@/views/auth/auth-1/sign-up'))
const Auth1ResetPassword = lazy(() => import('@/views/auth/auth-1/reset-password'))
const Auth1NewPassword = lazy(() => import('@/views/auth/auth-1/new-password'))
const Auth1TwoFactor = lazy(() => import('@/views/auth/auth-1/two-factor'))
const Auth1LockScreen = lazy(() => import('@/views/auth/auth-1/lock-screen'))
const Auth1SuccessMail = lazy(() => import('@/views/auth/auth-1/success-mail'))
const Auth1LoginPin = lazy(() => import('@/views/auth/auth-1/login-pin'))
const Auth1DeleteAccount = lazy(() => import('@/views/auth/auth-1/delete-account'))

const Auth2SignIn = lazy(() => import('@/views/auth/auth-2/sign-in'))
const Auth2SignUp = lazy(() => import('@/views/auth/auth-2/sign-up'))
const Auth2ResetPassword = lazy(() => import('@/views/auth/auth-2/reset-password'))
const Auth2NewPassword = lazy(() => import('@/views/auth/auth-2/new-password'))
const Auth2TwoFactor = lazy(() => import('@/views/auth/auth-2/two-factor'))
const Auth2LockScreen = lazy(() => import('@/views/auth/auth-2/lock-screen'))
const Auth2SuccessMail = lazy(() => import('@/views/auth/auth-2/success-mail'))
const Auth2LoginPin = lazy(() => import('@/views/auth/auth-2/login-pin'))
const Auth2DeleteAccount = lazy(() => import('@/views/auth/auth-2/delete-account'))

const Auth3SignIn = lazy(() => import('@/views/auth/auth-3/sign-in'))
const Auth3SignUp = lazy(() => import('@/views/auth/auth-3/sign-up'))
const Auth3ResetPassword = lazy(() => import('@/views/auth/auth-3/reset-password'))
const Auth3NewPassword = lazy(() => import('@/views/auth/auth-3/new-password'))
const Auth3TwoFactor = lazy(() => import('@/views/auth/auth-3/two-factor'))
const Auth3LockScreen = lazy(() => import('@/views/auth/auth-3/lock-screen'))
const Auth3SuccessMail = lazy(() => import('@/views/auth/auth-3/success-mail'))
const Auth3LoginPin = lazy(() => import('@/views/auth/auth-3/login-pin'))
const Auth3DeleteAccount = lazy(() => import('@/views/auth/auth-3/delete-account'))

// Error
const Error400 = lazy(() => import('@/views/error/400'))
const Error401 = lazy(() => import('@/views/error/401'))
const Error403 = lazy(() => import('@/views/error/403'))
const Error404 = lazy(() => import('@/views/error/404'))
const Error408 = lazy(() => import('@/views/error/408'))
const Error500 = lazy(() => import('@/views/error/500'))
const Maintenance = lazy(() => import('@/views/other-pages/maintenance'))

// Layouts
const ScrollableLayout = lazy(() => import('@/views/layouts/scrollable'))
const CompactLayout = lazy(() => import('@/views/layouts/compact'))
const BoxedLayout = lazy(() => import('@/views/layouts/boxed'))
const HorizontalLayout = lazy(() => import('@/views/layouts/horizontal'))

const SidebarCompact = lazy(() => import('@/views/layouts/sidebars/compact'))
const SidebarIconView = lazy(() => import('@/views/layouts/sidebars/icon-view'))
const SidebarOnHover = lazy(() => import('@/views/layouts/sidebars/on-hover'))
const SidebarOnHoverActive = lazy(() => import('@/views/layouts/sidebars/on-hover-active'))
const SidebarOffcanvas = lazy(() => import('@/views/layouts/sidebars/offcanvas'))
const SidebarNoIconsLines = lazy(() => import('@/views/layouts/sidebars/no-icons-with-lines'))
const SidebarWithLines = lazy(() => import('@/views/layouts/sidebars/with-lines'))
const SidebarLight = lazy(() => import('@/views/layouts/sidebars/light'))
const SidebarGradient = lazy(() => import('@/views/layouts/sidebars/gradient'))
const SidebarGray = lazy(() => import('@/views/layouts/sidebars/gray'))
const SidebarImage = lazy(() => import('@/views/layouts/sidebars/image'))

const TopbarDark = lazy(() => import('@/views/layouts/topbars/dark'))
const TopbarGray = lazy(() => import('@/views/layouts/topbars/gray'))
const TopbarGradient = lazy(() => import('@/views/layouts/topbars/gradient'))
const TopbarWithSubItems = lazy(() => import('@/views/layouts/topbars/with-sub-items'))
const TopbarWithTools = lazy(() => import('@/views/layouts/topbars/with-tools'))

// UI
const Accordions = lazy(() => import('@/views/ui/accordions'))
const Alerts = lazy(() => import('@/views/ui/alerts'))
const Images = lazy(() => import('@/views/ui/images'))
const Badges = lazy(() => import('@/views/ui/badges'))
const Breadcrumb = lazy(() => import('@/views/ui/breadcrumb'))
const Buttons = lazy(() => import('@/views/ui/buttons'))
const Cards = lazy(() => import('@/views/ui/cards'))
const Carousel = lazy(() => import('@/views/ui/carousel'))
const Collapse = lazy(() => import('@/views/ui/collapse'))
const Colors = lazy(() => import('@/views/ui/colors'))
const Dropdowns = lazy(() => import('@/views/ui/dropdowns'))
const Videos = lazy(() => import('@/views/ui/videos'))
const Grid = lazy(() => import('@/views/ui/grid'))
const Links = lazy(() => import('@/views/ui/links'))
const ListGroup = lazy(() => import('@/views/ui/list-group'))
const Modals = lazy(() => import('@/views/ui/modals'))
const Notifications = lazy(() => import('@/views/ui/notifications'))
const Offcanvas = lazy(() => import('@/views/ui/offcanvas'))
const Placeholders = lazy(() => import('@/views/ui/placeholders'))
const Pagination = lazy(() => import('@/views/ui/pagination'))
const Popovers = lazy(() => import('@/views/ui/popovers'))
const Progress = lazy(() => import('@/views/ui/progress'))
const Spinners = lazy(() => import('@/views/ui/spinners'))
const Tabs = lazy(() => import('@/views/ui/tabs'))
const Tooltips = lazy(() => import('@/views/ui/tooltips'))
const Typography = lazy(() => import('@/views/ui/typography'))
const Utilities = lazy(() => import('@/views/ui/utilities'))

// Components
const Widgets = lazy(() => import('@/views/widgets'))
const Metrics = lazy(() => import('@/views/metrics'))

// Graphs
const ApexArea = lazy(() => import('@/views/graphs/apex/area'))
const ApexBar = lazy(() => import('@/views/graphs/apex/bar'))
const ApexBubble = lazy(() => import('@/views/graphs/apex/bubble'))
const ApexCandlestick = lazy(() => import('@/views/graphs/apex/candlestick'))
const ApexColumn = lazy(() => import('@/views/graphs/apex/column'))
const ApexHeatmap = lazy(() => import('@/views/graphs/apex/heatmap'))
const ApexLine = lazy(() => import('@/views/graphs/apex/line'))
const ApexMixed = lazy(() => import('@/views/graphs/apex/mixed'))
const ApexTimeline = lazy(() => import('@/views/graphs/apex/timeline'))
const ApexBoxplot = lazy(() => import('@/views/graphs/apex/boxplot'))
const ApexTreemap = lazy(() => import('@/views/graphs/apex/treemap'))
const ApexPie = lazy(() => import('@/views/graphs/apex/pie'))
const ApexRadar = lazy(() => import('@/views/graphs/apex/radar'))
const ApexRadialbar = lazy(() => import('@/views/graphs/apex/radialbar'))
const ApexScatter = lazy(() => import('@/views/graphs/apex/scatter'))
const ApexPolarArea = lazy(() => import('@/views/graphs/apex/polar-area'))
const ApexSparklines = lazy(() => import('@/views/graphs/apex/sparklines'))
const ApexRange = lazy(() => import('@/views/graphs/apex/range'))
const ApexFunnel = lazy(() => import('@/views/graphs/apex/funnel'))
const ApexSlope = lazy(() => import('@/views/graphs/apex/slope'))

const EchartLine = lazy(() => import('@/views/graphs/echart/line'))
const EchartBar = lazy(() => import('@/views/graphs/echart/bar'))
const EchartPie = lazy(() => import('@/views/graphs/echart/pie'))
const EchartScatter = lazy(() => import('@/views/graphs/echart/scatter'))
const EchartGeoMap = lazy(() => import('@/views/graphs/echart/geo-map'))
const EchartGauge = lazy(() => import('@/views/graphs/echart/gauge'))
const EchartCandlestick = lazy(() => import('@/views/graphs/echart/candlestick'))
const EchartArea = lazy(() => import('@/views/graphs/echart/area'))
const EchartRadar = lazy(() => import('@/views/graphs/echart/radar'))
const EchartHeatmap = lazy(() => import('@/views/graphs/echart/heatmap'))
const EchartOther = lazy(() => import('@/views/graphs/echart/other'))

const ApexTree = lazy(() => import('@/views/graphs/apex-tree'))

// Forms
const BasicElements = lazy(() => import('@/views/forms/basic'))
const Pickers = lazy(() => import('@/views/forms/pickers'))
const Select = lazy(() => import('@/views/forms/select'))
const Validation = lazy(() => import('@/views/forms/validation'))
const Wizard = lazy(() => import('@/views/forms/wizard'))
const FileUploads = lazy(() => import('@/views/forms/file-uploads'))
const TextEditors = lazy(() => import('@/views/forms/editors'))
const Slider = lazy(() => import('@/views/forms/slider'))
const Layouts = lazy(() => import('@/views/forms/layouts'))
const OtherPlugins = lazy(() => import('@/views/forms/other-plugins'))

// Tables
const CustomTables = lazy(() => import('@/views/tables/tanstack'))
const StaticTables = lazy(() => import('@/views/tables/static'))

// Icons
const Flags = lazy(() => import('@/views/icons/flags'))
const LucideIcons = lazy(() => import('@/views/icons/lucide'))
const TablerIcons = lazy(() => import('@/views/icons/tabler'))

// Maps
const GoogleMap = lazy(() => import('@/views/maps/google'))
const VectorMap = lazy(() => import('@/views/maps/vector'))
const LeafletMap = lazy(() => import('@/views/maps/leaflet'))

const authRoutes: RouteObject[] = [
  { path: '/auth-1/sign-in', element: <Auth1SignIn /> },
  { path: '/auth-1/sign-up', element: <Auth1SignUp /> },
  { path: '/auth-1/reset-password', element: <Auth1ResetPassword /> },
  { path: '/auth-1/new-password', element: <Auth1NewPassword /> },
  { path: '/auth-1/two-factor', element: <Auth1TwoFactor /> },
  { path: '/auth-1/lock-screen', element: <Auth1LockScreen /> },
  { path: '/auth-1/success-mail', element: <Auth1SuccessMail /> },
  { path: '/auth-1/login-pin', element: <Auth1LoginPin /> },
  { path: '/auth-1/delete-account', element: <Auth1DeleteAccount /> },

  { path: '/auth-2/sign-in', element: <Auth2SignIn /> },
  { path: '/auth-2/sign-up', element: <Auth2SignUp /> },
  { path: '/auth-2/reset-password', element: <Auth2ResetPassword /> },
  { path: '/auth-2/new-password', element: <Auth2NewPassword /> },
  { path: '/auth-2/two-factor', element: <Auth2TwoFactor /> },
  { path: '/auth-2/lock-screen', element: <Auth2LockScreen /> },
  { path: '/auth-2/success-mail', element: <Auth2SuccessMail /> },
  { path: '/auth-2/login-pin', element: <Auth2LoginPin /> },
  { path: '/auth-2/delete-account', element: <Auth2DeleteAccount /> },

  { path: '/auth-3/sign-in', element: <Auth3SignIn /> },
  { path: '/auth-3/sign-up', element: <Auth3SignUp /> },
  { path: '/auth-3/reset-password', element: <Auth3ResetPassword /> },
  { path: '/auth-3/new-password', element: <Auth3NewPassword /> },
  { path: '/auth-3/two-factor', element: <Auth3TwoFactor /> },
  { path: '/auth-3/lock-screen', element: <Auth3LockScreen /> },
  { path: '/auth-3/success-mail', element: <Auth3SuccessMail /> },
  { path: '/auth-3/login-pin', element: <Auth3LoginPin /> },
  { path: '/auth-3/delete-account', element: <Auth3DeleteAccount /> },
]

const errorRoutes: RouteObject[] = [
  { path: '/error/400', element: <Error400 /> },
  { path: '/error/401', element: <Error401 /> },
  { path: '/error/403', element: <Error403 /> },
  { path: '/error/404', element: <Error404 /> },
  { path: '/error/408', element: <Error408 /> },
  { path: '/error/500', element: <Error500 /> },
]

const otherPagesRoutes: RouteObject[] = [
  { path: '/coming-soon', element: <ComingSoon /> },
  { path: '/maintenance', element: <Maintenance /> },
]

const dashboardRoutes: RouteObject[] = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/dashboard2', element: <Dashboard2 /> },
  { path: '/dashboard3', element: <Dashboard3 /> },
]

const landingRoute: RouteObject[] = [{ path: '/landing', element: <Landing /> }]

const ecommerceRoutes: RouteObject[] = [
  { path: '/products', element: <ProductList /> },
  { path: '/products-grid', element: <ProductGrid /> },
  { path: '/products/1', element: <ProductDetails /> },
  { path: '/add-product', element: <AddProduct /> },
  { path: '/categories', element: <Categories /> },
  { path: '/orders', element: <Orders /> },
  { path: '/orders/1', element: <OrderDetails /> },
  { path: '/customers', element: <Customers /> },
  { path: '/sellers', element: <Sellers /> },
  { path: '/sellers/1', element: <SellerDetails /> },
  { path: '/reviews', element: <Reviews /> },
  { path: '/reports/product-views', element: <ProductViews /> },
  { path: '/reports/sales', element: <Sales /> },
]

const appsRoutes: RouteObject[] = [
  { path: '/inbox', element: <Inbox /> },
  { path: '/inbox/1', element: <InboxDetails /> },
  { path: '/email-compose', element: <EmailCompose /> },

  { path: '/users/contacts', element: <Contacts /> },
  { path: '/users/roles', element: <Roles /> },
  { path: '/users/permissions', element: <Permissions /> },

  { path: '/projects', element: <Projects /> },
  { path: '/projects-list', element: <ProjectsList /> },
  { path: '/projects/1', element: <ProjectDetails /> },
  { path: '/kanban-board', element: <KanbanBoard /> },
  { path: '/team-board', element: <TeamBoard /> },
  { path: '/activity-stream', element: <ActivityStream /> },

  { path: '/file-manager', element: <FileManager /> },
  { path: '/chat', element: <Chat /> },
  { path: '/calendar', element: <Calendar /> },

  { path: '/invoices', element: <InvoiceList /> },
  { path: '/invoices/1', element: <InvoiceDetails /> },
  { path: '/add-invoice', element: <AddInvoice /> },
]

const otherAppsRoutes: RouteObject[] = [
  { path: '/companies', element: <Companies /> },
  { path: '/clients', element: <Clients /> },
  { path: '/outlook-view', element: <OutlookView /> },
  { path: '/vote-list', element: <VoteList /> },
  { path: '/issue-tracker', element: <IssueTracker /> },
  { path: '/api-keys', element: <ApiKeys /> },
  { path: '/blogs', element: <Blogs /> },
  { path: '/article', element: <Article /> },
  { path: '/pin-board', element: <PinBoard /> },
  { path: '/forum-view', element: <ForumView /> },
  { path: '/forum-post', element: <ForumPost /> },
]

const pagesRoutes: RouteObject[] = [
  { path: '/pages/profile', element: <Profile /> },
  { path: '/pages/faq', element: <Faq /> },
  { path: '/pages/pricing', element: <Pricing /> },
  { path: '/pages/empty-page', element: <EmptyPage /> },
  { path: '/pages/timeline', element: <Timeline /> },
  { path: '/pages/search-results', element: <SearchResults /> },
  { path: '/pages/terms-conditions', element: <TermsConditions /> },
]

const miscellaneousRoutes: RouteObject[] = [
  { path: '/miscellaneous/nestable-list', element: <NestableList /> },
  { path: '/miscellaneous/text-different', element: <TextDifferent /> },
  { path: '/miscellaneous/pdf-viewer', element: <PdfViewer /> },
  { path: '/miscellaneous/sweet-alert', element: <SweetAlert /> },
  { path: '/miscellaneous/idle-timer', element: <IdleTimer /> },
  { path: '/miscellaneous/password-meter', element: <PasswordMeter /> },
  { path: '/miscellaneous/clipboard', element: <Clipboard /> },
  { path: '/miscellaneous/tree-view', element: <TreeView /> },
  { path: '/miscellaneous/loading-buttons', element: <LoadingButtons /> },
  { path: '/miscellaneous/gallery', element: <Gallery /> },
  { path: '/miscellaneous/masonry', element: <Masonry /> },
  { path: '/miscellaneous/tour', element: <Tour /> },
  { path: '/miscellaneous/animation', element: <Animation /> },
]

const layoutRoutes: RouteObject[] = [
  { path: '/layouts/scrollable', element: <ScrollableLayout /> },
  { path: '/layouts/compact', element: <CompactLayout /> },
  { path: '/layouts/boxed', element: <BoxedLayout /> },
  { path: '/layouts/horizontal', element: <HorizontalLayout /> },

  { path: '/layouts/sidebars/compact', element: <SidebarCompact /> },
  { path: '/layouts/sidebars/icon-view', element: <SidebarIconView /> },
  { path: '/layouts/sidebars/on-hover', element: <SidebarOnHover /> },
  { path: '/layouts/sidebars/on-hover-active', element: <SidebarOnHoverActive /> },
  { path: '/layouts/sidebars/offcanvas', element: <SidebarOffcanvas /> },
  { path: '/layouts/sidebars/no-icons-with-lines', element: <SidebarNoIconsLines /> },
  { path: '/layouts/sidebars/with-lines', element: <SidebarWithLines /> },
  { path: '/layouts/sidebars/light', element: <SidebarLight /> },
  { path: '/layouts/sidebars/gradient', element: <SidebarGradient /> },
  { path: '/layouts/sidebars/gray', element: <SidebarGray /> },
  { path: '/layouts/sidebars/image', element: <SidebarImage /> },

  { path: '/layouts/topbars/dark', element: <TopbarDark /> },
  { path: '/layouts/topbars/gray', element: <TopbarGray /> },
  { path: '/layouts/topbars/gradient', element: <TopbarGradient /> },
  { path: '/layouts/topbars/with-sub-items', element: <TopbarWithSubItems /> },
  { path: '/layouts/topbars/with-tools', element: <TopbarWithTools /> },
]

const uiRoutes: RouteObject[] = [
  { path: '/ui/accordions', element: <Accordions /> },
  { path: '/ui/alerts', element: <Alerts /> },
  { path: '/ui/images', element: <Images /> },
  { path: '/ui/badges', element: <Badges /> },
  { path: '/ui/breadcrumb', element: <Breadcrumb /> },
  { path: '/ui/buttons', element: <Buttons /> },
  { path: '/ui/cards', element: <Cards /> },
  { path: '/ui/carousel', element: <Carousel /> },
  { path: '/ui/collapse', element: <Collapse /> },
  { path: '/ui/colors', element: <Colors /> },
  { path: '/ui/dropdowns', element: <Dropdowns /> },
  { path: '/ui/videos', element: <Videos /> },
  { path: '/ui/grid', element: <Grid /> },
  { path: '/ui/links', element: <Links /> },
  { path: '/ui/list-group', element: <ListGroup /> },
  { path: '/ui/modals', element: <Modals /> },
  { path: '/ui/notifications', element: <Notifications /> },
  { path: '/ui/offcanvas', element: <Offcanvas /> },
  { path: '/ui/placeholders', element: <Placeholders /> },
  { path: '/ui/pagination', element: <Pagination /> },
  { path: '/ui/popovers', element: <Popovers /> },
  { path: '/ui/progress', element: <Progress /> },
  { path: '/ui/spinners', element: <Spinners /> },
  { path: '/ui/tabs', element: <Tabs /> },
  { path: '/ui/tooltips', element: <Tooltips /> },
  { path: '/ui/typography', element: <Typography /> },
  { path: '/ui/utilities', element: <Utilities /> },
]

const componentRoutes: RouteObject[] = [
  { path: '/widgets', element: <Widgets /> },
  { path: '/metrics', element: <Metrics /> },
]

const graphRoutes: RouteObject[] = [
  { path: '/graphs/apex/area', element: <ApexArea /> },
  { path: '/graphs/apex/bar', element: <ApexBar /> },
  { path: '/graphs/apex/bubble', element: <ApexBubble /> },
  { path: '/graphs/apex/candlestick', element: <ApexCandlestick /> },
  { path: '/graphs/apex/column', element: <ApexColumn /> },
  { path: '/graphs/apex/heatmap', element: <ApexHeatmap /> },
  { path: '/graphs/apex/line', element: <ApexLine /> },
  { path: '/graphs/apex/mixed', element: <ApexMixed /> },
  { path: '/graphs/apex/timeline', element: <ApexTimeline /> },
  { path: '/graphs/apex/boxplot', element: <ApexBoxplot /> },
  { path: '/graphs/apex/treemap', element: <ApexTreemap /> },
  { path: '/graphs/apex/pie', element: <ApexPie /> },
  { path: '/graphs/apex/radar', element: <ApexRadar /> },
  { path: '/graphs/apex/radialbar', element: <ApexRadialbar /> },
  { path: '/graphs/apex/scatter', element: <ApexScatter /> },
  { path: '/graphs/apex/polar-area', element: <ApexPolarArea /> },
  { path: '/graphs/apex/sparklines', element: <ApexSparklines /> },
  { path: '/graphs/apex/range', element: <ApexRange /> },
  { path: '/graphs/apex/funnel', element: <ApexFunnel /> },
  { path: '/graphs/apex/slope', element: <ApexSlope /> },

  { path: '/graphs/echart/line', element: <EchartLine /> },
  { path: '/graphs/echart/bar', element: <EchartBar /> },
  { path: '/graphs/echart/pie', element: <EchartPie /> },
  { path: '/graphs/echart/scatter', element: <EchartScatter /> },
  { path: '/graphs/echart/geo-map', element: <EchartGeoMap /> },
  { path: '/graphs/echart/gauge', element: <EchartGauge /> },
  { path: '/graphs/echart/candlestick', element: <EchartCandlestick /> },
  { path: '/graphs/echart/area', element: <EchartArea /> },
  { path: '/graphs/echart/radar', element: <EchartRadar /> },
  { path: '/graphs/echart/heatmap', element: <EchartHeatmap /> },
  { path: '/graphs/echart/other', element: <EchartOther /> },

  { path: '/graphs/apex-tree', element: <ApexTree /> },
]

const formRoutes: RouteObject[] = [
  { path: '/forms/basic', element: <BasicElements /> },
  { path: '/forms/pickers', element: <Pickers /> },
  { path: '/forms/select', element: <Select /> },
  { path: '/forms/validation', element: <Validation /> },
  { path: '/forms/wizard', element: <Wizard /> },
  { path: '/forms/file-uploads', element: <FileUploads /> },
  { path: '/forms/editors', element: <TextEditors /> },
  { path: '/forms/slider', element: <Slider /> },
  { path: '/forms/layouts', element: <Layouts /> },
  { path: '/forms/other-plugins', element: <OtherPlugins /> },
]

const tableRoutes: RouteObject[] = [
  { path: '/tables/tanstack', element: <CustomTables /> },
  { path: '/tables/static', element: <StaticTables /> },
]

const iconRoutes: RouteObject[] = [
  { path: '/icons/flags', element: <Flags /> },
  { path: '/icons/lucide', element: <LucideIcons /> },
  { path: '/icons/tabler', element: <TablerIcons /> },
]

const mapRoutes: RouteObject[] = [
  { path: '/maps/google', element: <GoogleMap /> },
  { path: '/maps/vector', element: <VectorMap /> },
  { path: '/maps/leaflet', element: <LeafletMap /> },
]

const allRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
      },
      ...dashboardRoutes,
      ...ecommerceRoutes,
      ...appsRoutes,
      ...otherAppsRoutes,
      ...pagesRoutes,
      ...miscellaneousRoutes,
      ...layoutRoutes,
      ...uiRoutes,
      ...componentRoutes,
      ...graphRoutes,
      ...formRoutes,
      ...tableRoutes,
      ...iconRoutes,
      ...mapRoutes,
    ],
  },
]

const otherRoutes: RouteObject[] = [...authRoutes, ...errorRoutes, ...landingRoute, ...otherPagesRoutes]

export const routes: RouteObject[] = [...allRoutes, ...otherRoutes]
