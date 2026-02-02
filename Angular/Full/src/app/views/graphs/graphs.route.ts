import {Routes} from '@angular/router';
import {ApextreeComponent} from '@/app/views/graphs/apextree/apextree.component';
import {ApexsankeyComponent} from '@/app/views/graphs/apexsankey/apexsankey.component';

export const GRAPHS_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./echarts/echarts.route').then((mod) => mod.ECHARTS_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./apex/apex.route').then((mod) => mod.APEXCHARTS_ROUTES)
    },
    {
        path:'charts/apextree',
        component:ApextreeComponent
    },
    {
        path:'charts/apexsankey',
        component:ApexsankeyComponent
    },
]
