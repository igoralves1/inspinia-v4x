import {Routes} from '@angular/router';
import {AnimationComponent} from './animation/animation.component';
import {ClipboardComponent} from './clipboard/clipboard.component';
import {GalleryComponent} from './gallery/gallery.component';
import {IdleTimerComponent} from './idle-timer/idle-timer.component';
import {LoadingButtonsComponent} from './loading-buttons/loading-buttons.component';
import {MasonryComponent} from './masonry/masonry.component';
import {PasswordMeterComponent} from './password-meter/password-meter.component';
import {PdfViewerComponent} from './pdf-viewer/pdf-viewer.component';
import {SweetAlertsComponent} from './sweet-alerts/sweet-alerts.component';
import {TextDiffComponent} from './text-diff/text-diff.component';
import {TourComponent} from './tour/tour.component';
import {LiveFaviconComponent} from './live-favicon/live-favicon.component';

export const MISCELLANEOUS_ROUTES: Routes = [
    {
        path: 'miscellaneous/text-diff',
        component: TextDiffComponent,
        data: { title: "Text Diff" },
    },
    {
        path: 'miscellaneous/pdf-viewer',
        component: PdfViewerComponent,
        data: { title: "Pdf Viewer" },
    },
    {
        path: 'miscellaneous/sweet-alerts',
        component: SweetAlertsComponent,
        data: { title: "Sweet Alerts" },
    },
    {
        path: 'miscellaneous/password-meter',
        component: PasswordMeterComponent,
        data: { title: "Password Meter" },
    },
    {
        path: 'miscellaneous/clipboard',
        component: ClipboardComponent,
        data: { title: "Clipboard" },
    },
    {
        path: 'miscellaneous/loading-buttons',
        component: LoadingButtonsComponent,
        data: { title: "Loading Buttons" },
    },
    {
        path: 'miscellaneous/gallery',
        component: GalleryComponent,
        data: { title: "Gallery" },
    },
    {
        path: 'miscellaneous/masonry',
        component: MasonryComponent,
        data: { title: "Masonry" },
    },
    {
        path: 'miscellaneous/tour',
        component: TourComponent,
        data: { title: "Tour" },
    },
    {
        path: 'miscellaneous/animation',
        component: AnimationComponent,
        data: { title: "Animation" },
    },
    {
        path: 'miscellaneous/idle-timer',
        component: IdleTimerComponent,
        data: { title: "Idle Timer" },
    },
    {
        path: 'miscellaneous/live-favicon',
        component: LiveFaviconComponent,
        data: { title: "Live Favicon" },
    },
];
