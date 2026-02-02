<template>
  <VueECharts :key="layoutKey" :option="options" v-bind="props" autoresize />
</template>

<script setup lang="ts">
import { use } from 'echarts/core'
import VueECharts from 'vue-echarts'
import type { EChartsOption } from 'echarts'
import { getDefaultFontFamily } from '@/helpers/chart'
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue'
import { useLayout } from '@/stores/layout.ts'

type PropsType = {
  getOptions: () => EChartsOption
  extensions: any[]
}

const props = defineProps<PropsType>()

let extensionsRegistered = false

onBeforeMount(() => {
  if (!extensionsRegistered) {
    use(props.extensions)
    extensionsRegistered = true
  }
})

const { layout } = useLayout()

const layoutKey = computed(() => `${layout.theme}-${layout.skin}`)

const options = ref<EChartsOption>()

onMounted(() => {
  watch(
    layoutKey,
    () => {
      window.requestAnimationFrame(() => {
        const baseOptions = props.getOptions()

        options.value = {
          ...baseOptions,
          textStyle: {
            ...(baseOptions.textStyle || {}),
            fontFamily: getDefaultFontFamily(),
          },
        } as EChartsOption
      })
    },
    { immediate: true },
  )
})
</script>
