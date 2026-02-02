<template>
  <client-only>
    <VChart
        :key="layoutKey"
        :option="options"
        v-bind="props"
        autoresize
    />
  </client-only>
</template>

<script setup lang="ts">
import {use} from 'echarts/core';
import type {EChartsOption} from 'echarts'
import {getDefaultFontFamily} from "~/helpers/chart";

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

const {layout} = useLayout();

const layoutKey = computed(() =>
    `${layout.theme}-${layout.skin}`
)

const options = ref<EChartsOption>()

onMounted(() => {
  watch(layoutKey, () => {
    if (typeof window === 'undefined') return
    window.requestAnimationFrame(() => {
        const baseOptions = props.getOptions()

        options.value = {
          ...baseOptions,
          textStyle: {
            ...(baseOptions.textStyle || {}),
            fontFamily: getDefaultFontFamily()
          }
        } as EChartsOption

    })
  }, {immediate: true})
})
</script>