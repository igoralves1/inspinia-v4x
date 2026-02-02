import {Routes} from '@angular/router';
import {Dashboard1Component} from '@/app/views/dashboards/dashboard-1/dashboard-1.component';
import {Dashboard2Component} from '@/app/views/dashboards/dashboard-2/dashboard-2.component';
import {Dashboard3Component} from '@/app/views/dashboards/dashboard-3/dashboard-3.component';

export const DASHBOARDS_ROUTES: Routes = [
    {
        path: 'dashboards/dashboard-1',
        component: Dashboard1Component,
        data: {title: "Dashboard"},
    },
    {
        path: 'dashboards/dashboard-2',
        component: Dashboard2Component,
        data: {title: "Dashboard 2"},
    },
    {
        path: 'dashboards/dashboard-3',
        component: Dashboard3Component,
        data: {title: "Dashboard 3"},
    },
];
