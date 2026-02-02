import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'sweetalert2/dist/sweetalert2.css'
import 'simplebar-vue/dist/simplebar.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css'
import 'vue3-tour/dist/vue3-tour.css'
import 'animate.css/animate.min.css'
import 'choices.js/src/styles/choices.scss'
import 'spinkit/spinkit.min.css'
import 'flatpickr/dist/flatpickr.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css'
import 'ladda/dist/ladda-themeless.min.css'
import 'vue-multiselect/dist/vue-multiselect.css'     
import '@/scss/app.scss';

import { createInertiaApp } from '@inertiajs/vue3';
import { createBootstrap } from 'bootstrap-vue-next';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createPinia } from 'pinia';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { ZiggyVue } from 'ziggy-js';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import vue3Tour from 'vue3-tour';
import SimpleTypeahead from 'vue3-simple-typeahead';
// Extend ImportMeta interface for Vite...
declare module 'vite/client' {
    interface ImportMetaEnv {
        readonly VITE_APP_NAME: string;
        [key: string]: string | boolean | undefined;
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv;
        readonly glob: <T>(pattern: string) => Record<string, () => Promise<T>>;
    }
}

const appName = import.meta.env.VITE_APP_NAME;

createInertiaApp({
    title: (title) => (title ? `${title} | ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(createPinia().use(piniaPluginPersistedstate))
            .use(ZiggyVue)
            .use(vue3Tour)
            .use(SimpleTypeahead)
            .use(createBootstrap())
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});