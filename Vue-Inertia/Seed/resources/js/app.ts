import 'jsvectormap/dist/jsvectormap.min.css'
import 'simplebar-vue/dist/simplebar.min.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';        
import '@/scss/app.scss';

import { createInertiaApp } from '@inertiajs/vue3';
import { createBootstrap } from 'bootstrap-vue-next';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createPinia } from 'pinia';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { ZiggyVue } from 'ziggy-js';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

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
            .use(createBootstrap())
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});