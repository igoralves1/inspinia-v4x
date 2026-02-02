import { defineNuxtPlugin } from '#app'
import SimpleTypeahead from 'vue3-simple-typeahead'
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css' 

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(SimpleTypeahead)
})
