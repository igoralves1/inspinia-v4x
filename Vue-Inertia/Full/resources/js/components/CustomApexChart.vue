<template>
    <div>
        <VueApexCharts v-if="options?.chart?.height" :height="height ?? options.chart.height" v-bind="$attrs"
            :options="options" :series="series" :class="className" :width="width" />
    </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from "vue";
import type { ApexOptions } from "apexcharts";
import { getDefaultFontFamily } from "@/helpers/chart";
import { useLayout } from "@/stores/layout";
import VueApexCharts from 'vue3-apexcharts'
// Props
const props = defineProps<{
    type?: string;
    height?: number | string;
    width?: number | string;
    getOptions: () => ApexOptions;
    series?: ApexOptions['series'];
    className?: string;
}>();

const { layout } = useLayout();

const layoutKey = computed(() =>
    `${layout.theme}-${layout.skin}`
)

const options = ref<ApexOptions>()

onMounted(() => {
    watch(layoutKey, () => {
        if (typeof window === 'undefined') return
        window.requestAnimationFrame(() => {
            const baseOptions = props.getOptions()

            options.value = {
                ...baseOptions,
                colors: [
                    ...(baseOptions.colors || []),
                    getDefaultFontFamily()
                ]
            } as ApexOptions

        })
    }, { immediate: true })
})
</script>
