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
import '@/assets/scss/app.scss'

import 'jsvectormap'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createBootstrap } from 'bootstrap-vue-next'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'
import vue3Tour from 'vue3-tour';
import SimpleTypeahead from 'vue3-simple-typeahead';

const app = createApp(App)
const head = createHead()

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(createBootstrap())
app.use(head)
app.use(router)
app.use(vue3Tour)
app.use(SimpleTypeahead);
app.mount('#app')
