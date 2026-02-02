<template>
  <Loader/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script lang="ts" setup>

import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'sweetalert2/dist/sweetalert2.css'
import 'simplebar-vue/dist/simplebar.min.css';
import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css'
import 'vue3-tour/dist/vue3-tour.css'
import 'animate.css/animate.min.css'
import 'choices.js/src/styles/choices.scss'
import 'spinkit/spinkit.min.css'
import '~/assets/scss/app.scss'

import {appDescription, appFavicon, appTitle, author} from "~/helpers";

const {init} = useLayout();

onMounted(() => {
  init()
})

useHead({
  title: appTitle,
  meta: [
    {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
    {name: 'author', content: author},
    {name: 'description', content: appDescription}
  ],
  link: [{rel: 'shortcut icon', href: appFavicon}]
})

useSeoMeta({
  title: appTitle,
  description: appDescription
})
</script>