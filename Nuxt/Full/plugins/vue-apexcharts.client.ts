import {defineNuxtPlugin} from '#app'
import VueApexCharts from 'vue3-apexcharts'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VApexChart', VueApexCharts)
})
    