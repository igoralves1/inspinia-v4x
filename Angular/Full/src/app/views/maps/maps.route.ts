import { Routes } from '@angular/router';
import { GoogleComponent } from './google/google.component';
import { VectorComponent } from './vector/vector.component';
import { LeafletComponent } from './leaflet/leaflet.component';


export const MAPS_ROUTES: Routes = [
    {
        path: 'maps/google',
        component: GoogleComponent,
        data: { title: "Google Maps" },
    },
    {
        path: 'maps/vector',
        component: VectorComponent,
        data: { title: "Vector Maps" },
    },
    {
        path: 'maps/leaflet',
        component: LeafletComponent,
        data: { title: "Vector Maps" },
    },
];
