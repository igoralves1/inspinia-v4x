import {Routes} from '@angular/router';
import {TablerComponent} from '@/app/views/icons/tabler/tabler.component';
import {LucideComponent} from '@/app/views/icons/lucide/lucide.component';
import {FlagsComponent} from '@/app/views/icons/flags/flags.component';

export const ICONS_ROUTES: Routes = [
    {
        path: 'icons/tabler',
        component: TablerComponent,
        data: {title: "Tabler Icons"},
    },
    {
        path: 'icons/lucide',
        component: LucideComponent,
        data: {title: "Lucide Icons"},
    },
    {
        path: 'icons/flags',
        component: FlagsComponent,
        data: {title: "Flag Icons"},
    },
]
