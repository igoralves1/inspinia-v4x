<template>
  <div :id="id" v-bind="$attrs" />
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

    new jsVectorMap({
      selector: `#${props.id}`,
      ...props.options,
    })
  })
})
</script>
