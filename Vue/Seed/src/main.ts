import 'jsvectormap/dist/jsvectormap.min.css'
import 'simplebar-vue/dist/simplebar.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import '@/assets/scss/app.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createBootstrap } from 'bootstrap-vue-next'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(createBootstrap())
app.use(head)
app.use(router)

app.mount('#app')
