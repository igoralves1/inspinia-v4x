import {Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {FaqsComponent} from './faqs/faqs.component';
import {PricingComponent} from './pricing/pricing.component';
import {EmptyPageComponent} from './empty-page/empty-page.component';
import {TimelineComponent} from './timeline/timeline.component';
import {SearchResultsComponent} from '@/app/views/pages/search-results/search-results.component';
import {TermsAndConditionsComponent} from '@/app/views/pages/terms-and-conditions/terms-and-conditions.component';


export const PAGES_ROUTES: Routes = [
    {
        path: 'pages/profile',
        component: ProfileComponent,
        data: {title: "Profile"},
    },
    {
        path: 'pages/faq',
        component: FaqsComponent,
        data: {title: "FAQs"},
    },
    {
        path: 'pages/pricing',
        component: PricingComponent,
        data: {title: "pricing"},
    },
    {
        path: 'pages/empty-page',
        component: EmptyPageComponent,
        data: {title: "Empty Page"},
    },
    {
        path: 'pages/timeline',
        component: TimelineComponent,
        data: {title: "Timeline"},
    },
    {
        path: 'pages/search-results',
        component: SearchResultsComponent,
        data: {title: "Search Results"},
    },
    {
        path: 'pages/terms-and-conditions',
        component: TermsAndConditionsComponent,
        data: {title: "Terms & Conditions"},
    },

];
