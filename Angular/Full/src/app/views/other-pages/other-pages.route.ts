import {Routes} from '@angular/router';
import {MaintenanceComponent} from '../other-pages/maintenance/maintenance.component';
import {ComingSoonComponent} from '@/app/views/other-pages/coming-soon/coming-soon.component';

export const OTHER_PAGES_ROUTES: Routes = [
    {
        path: 'maintenance',
        component: MaintenanceComponent,
        data: {title: "Maintenance"},
    },
    {
        path: 'coming-soon',
        component: ComingSoonComponent,
        data: {title: "Coming Soon"},
    },

];
