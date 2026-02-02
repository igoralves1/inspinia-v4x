<template>
  <Loader/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script lang="ts" setup>

import 'jsvectormap/dist/jsvectormap.min.css'
import 'simplebar-vue/dist/simplebar.min.css';
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