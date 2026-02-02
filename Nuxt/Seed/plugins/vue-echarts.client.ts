import {defineNuxtPlugin} from '#app'
import VueECharts from 'vue-echarts'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('VChart', VueECharts)
})
