// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    routeRules: {
        '/': {redirect: '/dashboard' }
    },
    modules: [
        '@nuxt/eslint',
        '@nuxt/image',
        '@bootstrap-vue-next/nuxt',
        '@pinia/nuxt',
        '@nuxt/icon',
        'pinia-plugin-persistedstate/nuxt'
    ],
    css: ['bootstrap/dist/css/bootstrap.min.css','ladda/dist/ladda-themeless.min.css','vue-multiselect/dist/vue-multiselect.css','leaflet/dist/leaflet.css'],
    ssr: true,  
    ignore: ['pages/**/**/**/components/*'],
    build: {
        transpile: ['vue-countup-v3'],
    },
    plugins:[ '~/plugins/quill-icons.client.ts']
})