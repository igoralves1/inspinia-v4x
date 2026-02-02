<template>
  <div :id="id" v-bind="$attrs"/>
</template>

<script setup lang="ts">
import { nextTick, onMounted } from 'vue'
type PropsType = {
  id: string
  options: object
}

const props = defineProps<PropsType>()

onMounted(async () => {
  await nextTick()

  requestAnimationFrame(async () => {
    const jsVectorMap = (await import('jsvectormap')).default
    await import('jsvectormap/dist/maps/world.js')
    await import('jsvectormap/dist/maps/world-merc')
    await import('jsvectormap/dist/maps/us-aea-en')
    await import('jsvectormap/dist/maps/canada')
    await import('jsvectormap/dist/maps/russia')
    await import('jsvectormap/dist/maps/spain')
    await import('jsvectormap/dist/maps/iraq')

    new jsVectorMap({
      selector: `#${props.id}`,
      ...props.options
    })
  })
})
</script>