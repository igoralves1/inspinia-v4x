import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('FlatPickr', flatPickr)
})
