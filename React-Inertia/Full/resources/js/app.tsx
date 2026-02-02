import AppProvidersWrapper from '@/components/AppWrapper';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

import 'flatpickr/dist/flatpickr.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond/dist/filepond.min.css'
import 'animate.css/animate.min.css'
import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'simplebar-react/dist/simplebar.min.css' 
import 'ladda/dist/ladda.min.css'
import 'leaflet/dist/leaflet.css'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import 'react-datepicker/dist/react-datepicker.min.css'
import 'react-day-picker/style.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-photo-album/rows.css'
import 'react-quill-new/dist/quill.bubble.css'
import 'react-quill-new/dist/quill.core.css'
import 'react-quill-new/dist/quill.snow.css'
import 'spinkit/spinkit.min.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'yet-another-react-lightbox/styles.css'

import '@/scss/app.scss';

const appName = import.meta.env.VITE_APP_NAME || 'Inspinia';

createInertiaApp({
    title: (title) => (title ? `${title} | ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <AppProvidersWrapper>
                <App {...props} />
            </AppProvidersWrapper>,
        );
    },
});

