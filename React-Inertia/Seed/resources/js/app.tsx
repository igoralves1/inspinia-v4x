import AppProvidersWrapper from '@/components/AppWrapper';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

import 'flatpickr/dist/flatpickr.min.css'
import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'simplebar-react/dist/simplebar.min.css' 

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

