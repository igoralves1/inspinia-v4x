import Vidle from 'v-idle'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('VIdle', Vidle)
})