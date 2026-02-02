declare module 'jsvectormap'
declare module 'jsvectormap/dist/maps/world.js'
declare module 'ladda'


declare module '#app' {
  interface NuxtApp {
    $L: typeof L
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $L: typeof L
  }
}
