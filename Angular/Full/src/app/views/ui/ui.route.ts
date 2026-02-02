import {Routes} from '@angular/router';
import {AccordionsComponent} from './accordions/accordions.component';
import {ImagesComponent} from './images/images.component';
import {AlertsComponent} from './alerts/alerts.component';
import {BadgesComponent} from './badges/badges.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {CardsComponent} from '@/app/views/ui/cards/cards.component';
import {CarouselComponent} from '@/app/views/ui/carousel/carousel.component';
import {CollapseComponent} from '@/app/views/ui/collapse/collapse.component';
import {ColorsComponent} from '@/app/views/ui/colors/colors.component';
import {DropdownsComponent} from '@/app/views/ui/dropdowns/dropdowns.component';
import {VideosComponent} from '@/app/views/ui/videos/videos.component';
import {GridOptionsComponent} from '@/app/views/ui/grid-options/grid-options.component';
import {LinksComponent} from '@/app/views/ui/links/links.component';
import {ListGroupsComponent} from '@/app/views/ui/list-groups/list-groups.component';
import {ModalsComponent} from '@/app/views/ui/modals/modals.component';
import {NotificationsComponent} from '@/app/views/ui/notifications/notifications.component';
import {OffcanvasComponent} from '@/app/views/ui/offcanvas/offcanvas.component';
import {PlaceholdersComponent} from '@/app/views/ui/placeholders/placeholders.component';
import {PaginationComponent} from '@/app/views/ui/pagination/pagination.component';
import {PopoversComponent} from '@/app/views/ui/popovers/popovers.component';
import {ProgressComponent} from '@/app/views/ui/progress/progress.component';
import {ScrollspyComponent} from '@/app/views/ui/scrollspy/scrollspy.component';
import {SpinnersComponent} from '@/app/views/ui/spinners/spinners.component';
import {TabsComponent} from '@/app/views/ui/tabs/tabs.component';
import {TooltipsComponent} from '@/app/views/ui/tooltips/tooltips.component';
import {TypographyComponent} from '@/app/views/ui/typography/typography.component';
import {UtilitiesComponent} from '@/app/views/ui/utilities/utilities.component';

export const UI_ROUTES: Routes = [
    {
        path: 'ui/accordions',
        component: AccordionsComponent,
        data: {title: "Accordions"},
    },
    {
        path: 'ui/alerts',
        component: AlertsComponent,
        data: {title: "Alerts"},
    },
    {
        path: 'ui/images',
        component: ImagesComponent,
        data: {title: "Images"}
    },
    {
        path: 'ui/badges',
        component: BadgesComponent,
        data: {title: "Badges"},
    },
    {
        path: 'ui/breadcrumb',
        component: BreadcrumbComponent,
        data: {title: "Breadcrumbs"},
    },
    {
        path: 'ui/buttons',
        component: ButtonsComponent,
        data: {title: "Buttons"},
    },
    {
        path: 'ui/cards',
        component: CardsComponent,
        data: {title: "Cards"},
    },
    {
        path: 'ui/carousel',
        component: CarouselComponent,
        data: {title: "Carousels"},
    },
    {
        path: 'ui/collapse',
        component: CollapseComponent,
        data: {title: "Collapse"},
    },
    {
        path: 'ui/colors',
        component: ColorsComponent,
        data: {title: "Colors"},
    },
    {
        path: 'ui/dropdowns',
        component: DropdownsComponent,
        data: {title: "Dropdowns"},
    },
    {
        path: 'ui/videos',
        component: VideosComponent,
        data: {title: "Videos"},
    },
    {
        path: 'ui/grid-options',
        component: GridOptionsComponent,
        data: {title: "Grid Options"},
    },
    {
        path: 'ui/links',
        component: LinksComponent,
        data: {title: "Links"},
    },
    {
        path: 'ui/list-groups',
        component: ListGroupsComponent,
        data: {title: "List Groups"},
    },
    {
        path: 'ui/modals',
        component: ModalsComponent,
        data: {title: "Modals"},
    },
    {
        path: 'ui/notifications',
        component: NotificationsComponent,
        data: {title: "Notifications"},
    },
    {
        path: 'ui/offcanvas',
        component: OffcanvasComponent,
        data: {title: "Offcanvas"},
    },
    {
        path: 'ui/placeholders',
        component: PlaceholdersComponent,
        data: {title: "Placeholders"},
    },
    {
        path: 'ui/pagination',
        component: PaginationComponent,
        data: {title: "Pagination"},
    },
    {
        path: 'ui/popovers',
        component: PopoversComponent,
        data: {title: "Popovers"},
    },
    {
        path: 'ui/progress',
        component: ProgressComponent,
        data: {title: "Progress"},
    },
    {
        path: 'ui/scrollspy',
        component: ScrollspyComponent,
        data: {title: "Scrollspy"},
    },
    {
        path: 'ui/spinners',
        component: SpinnersComponent,
        data: {title: "Spinners"},
    },
    {
        path: 'ui/tabs',
        component: TabsComponent,
        data: {title: "Tabs"},
    },
    {
        path: 'ui/tooltips',
        component: TooltipsComponent,
        data: {title: "Tooltips"},
    },
    {
        path: 'ui/typography',
        component: TypographyComponent,
        data: {title: "Typography"},
    },
    {
        path: 'ui/utilities',
        component: UtilitiesComponent,
        data: {title: "Utilities"},
    },
];
