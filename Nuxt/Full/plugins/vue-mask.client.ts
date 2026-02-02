import { defineNuxtPlugin } from '#app'
import { MaskInput } from 'vue-mask-next'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('MaskInput', MaskInput)
})

