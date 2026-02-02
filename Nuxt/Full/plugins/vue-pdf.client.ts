import PDF from "pdf-vue3";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('PDF', PDF)
})